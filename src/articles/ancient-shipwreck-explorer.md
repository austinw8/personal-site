---
title: "Ancient Shipwreck Explorer"
date: "2024-08-06"
description: "An interactive visualization of ancient shipwrecks around the Mediterranean Sea using data from GeoDatabase."
slug: "shipwreck-explorer"
---

Explore ancient European shipwrecks with this [Shipwreck Explorer](https://austinw8.shinyapps.io/ancient_shipwrecks_app/) Shiny web app.

This map contains shipwrecks as far back as 1,800 B.C., with ships from multiple eras, ranging all the way from the western coast of Africa to the Arabian Sea, and from the Red Sea to northern Norway.

Filter by:

Era (Hellenistic, Punic, Byzantine, Roman, etc.)

Cargo Type (amphora, stone, metal artifacts, money, etc.)

Sea Area (Baltic Sea, Mediterranean, Adriatic Sea, English Channel, etc.)

This shipwreck mapping has the potential to aid archaeologists and historians in identifying ancient trade routes, planning future site excavations, and studying/understanding ancient maritime technology.

## [View the Shipwreck Explorer App Here](https://austinw8.shinyapps.io/ancient_shipwrecks_app/)

Interested in the coding used to create this interactive map? Explore that here below.

<details>
<summary>Data import and tidying</summary>

```r
library(tidyverse)
library(stringr)
library(shiny)
library(shinythemes)
library(leaflet)
library(dplyr)
library(rsconnect)
library(bslib)
library(here)

shipwrecks <- read_csv("geodatabase_shipwrecks.csv")
colnames(shipwrecks) <- tolower(colnames(shipwrecks))

format_time_period <- function(start, end) {
  
  format_date <- function(date) {
    if (is.na(date)) {
      return("Unknown")
    } else if (date < 0) {
      return(paste0(abs(date), " B.C."))
    } else {
      return(paste0("A.D. ", date))
    }
  }
  
  start_str <- format_date(start)
  end_str <- format_date(end)
  
  return(paste(start_str, "-", end_str))
}

shipwrecks$longitude <- as.numeric(shipwrecks$longitude)
shipwrecks$depth <- as.numeric(shipwrecks$depth)
shipwrecks$year_found <- as.numeric(shipwrecks$year_found)


shipwrecks_tidy <- shipwrecks |> 
  mutate(depth_m = ifelse(is.na(depth), 
                          ifelse(!is.na(oxrep_min_depth) & !is.na(oxrep_max_depth), (oxrep_min_depth + oxrep_max_depth) / 2,
                                 ifelse(!is.na(oxrep_min_depth), oxrep_min_depth, oxrep_max_depth)), 
                          depth),
         start_date = ifelse(is.na(start_date), oxrep_earliest_date, start_date),
         end_date = ifelse(is.na(end_date), oxrep_latest_date, end_date)) |> 
  rename(est_disp = "estimated displacement",
         sea_area = "oxrep_sea_area",
         country = "oxrep_country",
         region = "oxrep_region",
         era = "oxrep_period",
         est_tons = "oxrep_estimated_tonnage") |> 
  filter(!is.na(start_date) & !is.na(end_date)) |> 
  mutate(time_period = mapply(format_time_period, start_date, end_date)) |> 
  mutate(era = case_when(
    is.na(era) ~ "Unknown",
    era %in% c("0", "?", "Ancient", "Ancient?", "Ancient (?)", "Not known") ~ "Unknown",
    era %in% c("Classical", "Classical Greek", "Classical / Hellenistic", "Classical/Hellenistic", "Hellenistic", "Hellenistic/ Roman", "Hellenistic/Roman", "Greek") ~ "Hellenistic",
    era %in% c("Late Imperial", "Roman Imperial", "early Roman Imperial") ~ "Roman Imperial",
    era %in% c("Roman Republic", "Roman Republican", "Late Republic", "Late Republican") ~ "Roman Republican",
    era %in% c("Roman", "Roman?", "Late Roman?", "Late Roman", "Late Rep/Imperial", "Late Rep/early Imp", "Late Rep/early Imperial", "Late Republic-early Imperial", "Late Republican/early Imperial", "Rom Rep/Imperial", "Roman Rep/Imp", "Roman Rep/Imperial", "Roman Republic/Imperial", "late Rep/early Imp") ~ "Roman",
    era %in% c("Arab", "Early Arab", "Islamic") ~ "Islamic",
    era %in% c("Byzantine", "Late Byzantine", "Middle Byzantine", "Early Byzantine", "early Byzantine", "Late Antique", "Late Antiquity", "Medieval", "Paleochristian") ~ "Byzantine",
    era %in% c("Norman", "Norman/Arab") ~ "Norman",
    TRUE ~ era
  )) |> 
  mutate(sea_area = case_when(
    is.na(sea_area) ~ "Unknown",
    sea_area %in% c("Non-Mediterranean") ~ "Unknown",
    sea_area %in% c("Adriatic") ~ "Adriatic Sea",
    sea_area %in% c("Ionian") ~ "Ionian Sea",
    sea_area %in% c("Southern Aegean", "Northern Aegean", "Aegean") ~ "Aegean Sea",
    sea_area %in% c("Central Mediterranean") ~ "Mediterranean (central)",
    sea_area %in% c("Eastern Mediterranean") ~ "Mediterranean (eastern)",
    sea_area %in% c("West Mediterranean", "Western Mediterranean") ~ "Mediterranean (western)",
    TRUE ~ sea_area
  )) |> 
  mutate(
    sea_area = case_when(
      sea_area != "Unknown" ~ sea_area,
      between(latitude, 42, 46) & between(longitude, 27.65, 41) ~ "Black Sea", 
      between(latitude, 35.1, 40.77) & between(longitude, 22.8, 27.9) ~ "Aegean Sea",
      between(latitude, 43, 45.9) & between(longitude, 12.1, 16.8) ~ "Adriatic Sea", 
      between(latitude, 39.5, 43) & between(longitude, 15.4, 19.9) ~ "Adriatic Sea",
      between(latitude, 31, 37) & between(longitude, 24, 36) ~ "Mediterannean (eastern)",
      between(latitude, 36, 44.4) & between(longitude, 0, 10) ~ "Mediterannean (western)",
      between(latitude, 35, 39) & between(longitude, -5.5, 2.5) ~ "Mediterannean (western)",
      between(latitude, 32, 39.5) & between(longitude, 10.78, 22.5) ~ "Mediterannean (central)",
      between(latitude, 40, 36) & between(longitude, 17, 22.5) ~ "Ionian Sea",
      between(latitude, 38, 43.75) & between(longitude, 9, 16.1) ~ "Tyrrhenian Sea",
      between(latitude, 50, 52.1) & between(longitude, 0, 3) ~ "English Channel",
      between(latitude, 53.5, 60.5) & between(longitude, 9.5, 27.6) ~ "Baltic Sea",
      between(latitude, 53.9, 56) & between(longitude, 9.7, 13.5) ~ "Baltic Sea",
      between(latitude, 57, 60) & between(longitude, 6.8, 12.5) ~ "Skagerrak",
      between(latitude, 14, 31) & between(longitude, 34, 41) ~ "Red Sea",
      between(latitude, 21, 23) & between(longitude, 68, 70) ~ "Arabian Sea",
      between(latitude, 53, 62) & between(longitude, 0, 9.5) ~ "North Sea",
      between(latitude, 62, 68) & between(longitude, 2, 16) ~ "Norwegian Sea",
      TRUE ~ "Unknown"
    )) |> 
  mutate(cargo_1 = str_trim(cargo_1),
         cargo_2 = str_trim(cargo_2),
         cargo_3 = str_trim(cargo_3)) |> 
  mutate(
    cargo_type = case_when(
      is.na(cargo_1) ~ "None",
      cargo_1 %in% c("n", "no cargo found", "nothing reported") ~ "None",
      cargo_1 %in% c("Amphoras", "amphoras", "dolia") ~ "Amphoras",
      cargo_1 %in% c("Ceramic", "ceramic", "ceramic tiles", "ceramics", "caramics", "roof tiles", "roof and other tiles", "tiles", "Tiles") ~ "Ceramics/Tiles",
      cargo_1 %in% c("human remains", "human remains (2 women of upper class status)", "skeletons from crew") ~ "Human Remains",
      cargo_1 %in% c("Food", "Foodstuffs") ~ "Food",
      cargo_1 %in% c("ammunition", "weapons", "cannon") ~ "Weaponry",
      cargo_1 %in% c("Metal", "bronze church bell", "chain mail", "church bell", "metal") ~ "Metal Artifacts",
      cargo_1 %in% c("stone artefact", "stone", "masonry", "marble", "granite", "Stone", "bricks", "lime mortar", "sculpture") ~ "Stone/Masonry",
      cargo_1 %in% c("Barrels", "Found a piatto(?) perhaps used for the navigation of the inner gulf of Olbia", "Other", "other", "column", "fabric", "handmills, possible wreck", "lamps", "oak boards", "animal bone") ~ "Misc.",
      cargo_1 %in% c("Coins", "coins") ~ "Money",
      cargo_1 %in% c("glass") ~ "Glass",
      TRUE ~ cargo_1
    )) |> 
  mutate(
    cargo_2 = case_when(
      is.na(cargo_2) ~ "None",
      cargo_2 %in% c("n", "no cargo found", "nothing reported") ~ "None",
      cargo_2 %in% c("Amphoras", "amphoras", "dolia", "Amphora", "amphorettas") ~ "Amphoras",
      cargo_2 %in% c("Ceramic", "ceramic", "ceramic tiles", "ceramics", "caramics", "roof tiles", "roof and other tiles", "tiles", "Tiles", "Pottery", "other ceramics", "tiles / tegulae") ~ "Ceramics/Tiles",
      cargo_2 %in% c("human remains", "human remains (2 women of upper class status)", "skeletons from crew") ~ "Human Remains",
      cargo_2 %in% c("Food", "Foodstuffs", "honey") ~ "Food",
      cargo_2 %in% c("ammunition", "weapons", "cannon", "Weapons", "artillery", "artillery") ~ "Weaponry",
      cargo_2 %in% c("Metal", "bronze church bell", "chain mail", "church bell", "metal", "church bells", "lead sculptures", "Cookware") ~ "Metal Artifacts",
      cargo_2 %in% c("stone artefact", "stone", "masonry", "marble", "granite", "Stone", "bricks", "lime mortar", "sculpture", "millstones", "whetstones") ~ "Stone/Masonry",
      cargo_2 %in% c("Afr", "Barrels", "Cylindrical African type, close to Dramont F", "Other", "other", "column", "fabric", "handmills, possible wreck", "artistic pieces", "barrels", "barrels of tar and wax", "musical instruments", "lamps", "oak boards", "animal bone", "sheep wool", "sleighs", "tent", "lids", "Planks", "dog harness") ~ "Misc.",
      cargo_2 %in% c("Coins", "coins") ~ "Money",
      cargo_2 %in% c("glass") ~ "Glass",
      TRUE ~ cargo_2
    )) |> 
  mutate(
    cargo_3 = case_when(
      is.na(cargo_3) ~ "None",
      cargo_3 %in% c("n", "no cargo found", "nothing reported") ~ "None",
      cargo_3 %in% c("Amphoras", "amphoras", "dolia", "Amphora", "amphorettas") ~ "Amphoras",
      cargo_3 %in% c("Ceramic", "ceramic", "ceramic tiles", "ceramics", "caramics", "roof tiles", "roof and other tiles", "tiles", "Tiles", "Pottery", "other ceramics", "tiles / tegulae", "other pottery") ~ "Ceramics/Tiles",
      cargo_3 %in% c("human remains", "human remains (2 women of upper class status)", "skeletons from crew") ~ "Human Remains",
      cargo_3 %in% c("Food", "Foodstuffs", "honey") ~ "Food",
      cargo_3 %in% c("ammunition", "weapons", "cannon", "Weapons", "artillery", "artillery", "gun powder") ~ "Weaponry",
      cargo_3 %in% c("Metal", "bronze church bell", "chain mail", "church bell", "metal", "church bells", "lead sculptures", "Cookware", "brass Buddha", "copper bars", "iron bars", "iron ore and copper") ~ "Metal Artifacts",
      cargo_3 %in% c("stone artefact", "stone", "masonry", "marble", "granite", "Stone", "bricks", "lime mortar", "sculpture", "millstones", "whetstones", "unused stoneware") ~ "Stone/Masonry",
      cargo_3 %in% c("bowls and cups, flasks and goblets", "textiles", "sledge", "tools for navigation", "whalebone artifacts", "construction/building materials", "bowls and cups, flasks and goblets ", "animal remains","antler pieces", "barrels and glass", "glass", "Afr", "Barrels", "Cylindrical African type, close to Dramont F", "Other", "other", "column", "fabric", "handmills, possible wreck", "artistic pieces", "barrels", "barrels of tar and wax", "musical instruments", "lamps", "oak boards", "animal bone", "sheep wool", "sleighs", "tent", "lids", "Planks", "dog harness") ~ "Misc.",
      cargo_3 %in% c("Coins", "coins", "gold coins") ~ "Money",
      TRUE ~ cargo_3
    )) |> 
  select(name, latitude, longitude, sea_area, country, start_date, end_date, time_period, era, depth_m, year_found, cargo_type, cargo_1, length, width)
```
</details>

<details>
<summary>Shiny App</summary>

```r
# Define UI for application that draws a histogram
ui <- page_sidebar(
  title = "Shipwreck Explorer",
  sidebar = sidebar(
    list(
      sliderInput("dateRange", "Select Date Range:",
                  min = min(shipwrecks_tidy$start_date, na.rm = TRUE),
                  max = max(shipwrecks_tidy$end_date, na.rm = TRUE),
                  value = c(min(shipwrecks_tidy$start_date, na.rm = TRUE), max(shipwrecks_tidy$end_date, na.rm = TRUE)),
                  timeFormat = "%Y"),
      selectInput("era", "Select Era:",
                  choices = c("All", unique(shipwrecks_tidy$era)),
                  selected = "All",
                  multiple = TRUE),
      selectInput("cargo", "Select Cargo Type:",
                  choices = c("All", unique(shipwrecks_tidy$cargo_type)),
                  selected = "All",
                  multiple = TRUE),
      selectInput("sea_area", "Select Sea Area:",
                  choices = c("All", unique(shipwrecks_tidy$sea_area)),
                  selected = "All",
                  multiple = TRUE)
    )),
  layout_columns(
    
    card(card_header("Shipwreck Map"),
         leafletOutput("map")),
    
    card(card_header("Shipwreck Information"),
         tableOutput("shipwreckTable")),
    col_widths = c(8, 4)
  )
)


# Define server logic required to draw a histogram
server <- function(input, output, session) {
  
  filtered_shipwrecks <- reactive({
    data <- shipwrecks_tidy |> 
      filter(
        start_date <= input$dateRange[2],
        end_date >= input$dateRange[1]
      )
    
    if (!("All" %in% input$era)) {
      data <- data |>  filter(era %in% input$era)
    }
    
    if (!("All" %in% input$cargo)) {
      data <- data |>  filter(cargo_type %in% input$cargo)
    }
    
    if (!("All" %in% input$sea_area)) {
      data <- data |>   filter(sea_area %in% input$sea_area)
    }
    
    data
  })
  
  # Render Leaflet map
  output$map <- renderLeaflet({
    wreck_data <- filtered_shipwrecks()
    
    if (nrow(wreck_data) == 0) {
      return(leaflet() |>  addTiles())
    }
    
    leaflet(data = wreck_data) |> 
      addProviderTiles(provider = "Esri.WorldTopoMap") |> 
      setView(lng = 16, lat = 47, zoom = 4) |> 
      addCircleMarkers(
        lng = ~longitude, 
        lat = ~latitude,
        radius = 5,
        color = "blue",
        stroke = FALSE,
        fillOpacity = 0.6, 
        popup = paste("<b>Name:</b>", wreck_data$name, "<br>",
                      "<b>Time Period:</b>", wreck_data$time_period, "<br>",
                      "<b>Era:</b>", wreck_data$era, "<br>",
                      "<b>Year Found:</b>", wreck_data$year_found, "<br>",
                      "<b>Found on Ship:</b>", wreck_data$cargo_1, "<br>")
      )
  })
  
  # Render filtered table
  output$shipwreckTable <- renderTable({
    filtered_shipwrecks() |> 
      select(`Shipwreck Name` = name, 
             `Time Period` = time_period,
             `Era` = era, 
             `Sea Area` = sea_area, 
             `Cargo Type` = cargo_type,
             `Found on Ship` = cargo_1)
  })
}


# Run the application 
shinyApp(ui = ui, server = server)
```
</details>
