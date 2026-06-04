import React from "react";

const ResumeModal = ({ onClose }) => {
	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 z-[2000] flex items-center justify-center p-4"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between p-4 border-b">
					<h2 className="text-xl font-bold text-secondary">Resume</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
					>
						×
					</button>
				</div>
				<div className="flex-1 overflow-hidden">
					<iframe
						src="/documents/Resume-06-04-2026.pdf#navpanes=0"
						className="w-full h-full border-0"
						title="Resume"
					/>
				</div>
			</div>
		</div>
	);
};

export default ResumeModal;
