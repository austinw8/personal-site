---
title: "Mapping Middle-Earth"
date: "2024-08-13"
description: "Mapping Tolkien's Middle-Earth using R-based GIS tools."
slug: "mapping-middle-earth"
tags: [R, RShiny]
---

Explore and create Tolkien’s Middle Earth with R-based GIS tools, including `{ggplot2}` and `{sf}`

I recently came across a blog post by Andrew Heiss about [making Middle Earth maps with R](https://www.andrewheiss.com/blog/2023/04/26/middle-earth-mapping-sf-r-gis/index.html). It was amazing to see what he could do with data sets including all the geo-spatial data you would need for Tolkien’s world: coastlines, beacons, rivers, mountains, cities, towers, you name it!

A line in Andrew’s post stood out to me: “There isn’t a pre-built R package for the data…“. Well Andrew, it’s time to remedy that!!

Introducing the R package, MiddleEarth. 🧙‍♂️

## The MiddleEarth R Package

The goal of MiddleEarth is to provide all the data needed in order to create high-resolution digital elevation models of Tolkein’s Middle Earth.

### Package Content

This package contains multiple geographical data sets, including:

- Beacons
- Cities/Citadels/Hamlets/Towns
- Coastline
- Contours (for aesthetic mapping)
- Forests
- Hills
- Lakes/Rivers
- Mountains
- Place names/Regions
- Roads
- Ruins/Stone fields
- Towers/Keeps
- Volcano’s
- Wetlands

This package also contains functions to convert `miles_to_meters()` and `meters_to_miles()`, as the Middle Earth data is stored in meters.

### Installation

If you want to install and start using the MiddleEarth package, you can install the development version of MiddleEarth from [GitHub](https://github.com/austinw8/MiddleEarth) with:

```r
# install.packages("devtools")
devtools::install_github("austinw8/MiddleEarth")
```

### Usage Examples

MiddleEarth allows you to quickly access and use geospatial data in order to create digital renderings of Tolkein’s Middle Earth. These can be used with ggplot2 to create visual representations of the continent.

```r
# Load the MiddleEarth package

library(MiddleEarth)
library(sf)
library(tidyverse)

# Load the necessary data

coastline <- MiddleEarth::coastline 
rivers <- MiddleEarth::rivers 
lakes <- MiddleEarth::lakes 
forests <- MiddleEarth::forests 
mountains <- MiddleEarth::mountains 
placenames <- MiddleEarth::placenames

# Filter places

places <- placenames |> 
  dplyr::filter(NAME %in% c("Hobbiton", "Rivendell", "Edoras", "Minas Tirith")) |> 
  st_as_sf(places) # Ensure places is an sf object

# Plot the map

ggplot() + 
geom_sf(data = coastline, linewidth = 0.25, color = "grey50") + 
geom_sf(data = rivers, linewidth = 0.2, color = "skyblue", alpha = 0.5) + 
geom_sf(data = lakes, linewidth = 0.2, color = "skyblue", fill = "skyblue") + 
geom_sf(data = forests, linewidth = 0, fill = "darkgreen", alpha = 0.5) + 
geom_sf(data = mountains, linewidth = 0.25, linetype = "dashed") + 
geom_sf(data = places) + 
geom_sf_label(data = places, aes(label = NAME), nudge_y = miles_to_meters(40)) + 
coord_sf(xlim = c(300000, 1800000), ylim = c(300000, 1800000)) + 
theme_void() + 
theme(plot.background = element_rect(fill = "white"))
```

![Image 1](/article_images/mapping_middle_earth/mapping_middle_earth_1.png)

Given the quality of the geographic data, we can zoom in and get much more detail for specific regions. For instance, we can zoom in on just the Shire.

```r
shire_towns <- placenames |>  
  filter(LAYER == "TownNames")

hobbiton <- places |> 
  filter(NAME == "Hobbiton") |> 
  mutate(geometry_x = map_dbl(geometry, ~as.numeric(.)[1]), geometry_y = map_dbl(geometry, ~as.numeric(.)[2]))

ggplot() +
  geom_sf(data = rivers, linewidth = 0.45, color = "lightblue", alpha = 0.5) +
  geom_sf(data = roads) +
  geom_sf(data = shire_towns, size = 2) +
  geom_sf_label(data = shire_towns, aes(label = NAME), nudge_y = miles_to_meters(3),
                family = "Overpass ExtraBold", fontface = "plain") +
  coord_sf(xlim = c(hobbiton$geometry_x - miles_to_meters(30), 
                    hobbiton$geometry_x + miles_to_meters(60)),
           ylim = c(hobbiton$geometry_y - miles_to_meters(35), 
                    hobbiton$geometry_y + miles_to_meters(20)))
```

![Image 2](/article_images/mapping_middle_earth/mapping_middle_earth_2.png)

## Acknowledgements

This package includes geospatial data provided by the [ME_DEM project](https://github.com/jvangeld/ME-GIS). Special thanks to the ME_DEM team for making their data available for use in this package. Their work has been invaluable in bringing Middle-earth to life in a geospatial context.

A huge thank you as well goes to [Andrew Heiss](https://www.andrewheiss.com/) for his inspiring post, as well as for providing the coding/mapping examples used above.