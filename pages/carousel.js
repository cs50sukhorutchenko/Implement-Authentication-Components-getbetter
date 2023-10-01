// components/Carousel.js
import { useState } from 'react';

function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);

	const images = [
		"/logo_1.png",
		"/logo_2.png",
		"/logo.png"
	];

	const items = images.map((image, index) => (
		<img key={index} src={image} className="w-full h-[80vh] object-cover" alt={`Carousel ${index + 1}`} />
	))
	const item = items[activeIndex];

	return (
		<div className="relative w-full max-w-screen-md mx-auto overflow-hidden">
			<div>
				{item}
			</div>
			<div className="w-full bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-4 h-4 border rounded-full ${activeIndex === index ? 'bg-blue-500' : 'bg-white'}`}
					></button>
				))}
			</div>
		</div>
	);
}

export default Carousel;
