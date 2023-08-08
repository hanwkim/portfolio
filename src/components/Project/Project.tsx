import "./Project.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

interface ProjectProps {
	name: string;
	images: string[];
	description: string;
	alt: string;
	tech: string[];
	link1?: string;
	link2?: string;
	link3?: string;
}

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 500 : -500,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 500 : -500,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

export default function Project({
	name,
	images,
	description,
	alt,
	tech,
	link1,
	link2,
	link3,
}: ProjectProps) {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<section className="project">
			<div className="project__container">
				<h3 className="project__title">{name}</h3>
				<div className="project__image-container">
					<AnimatePresence initial={false} custom={direction}>
						<motion.img
							key={page}
							src={images[imageIndex]}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: {
									type: "spring",
									stiffness: 300,
									damping: 30,
								},
								opacity: { duration: 0.2 },
							}}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
							onDragEnd={(e, { offset, velocity }) => {
								const swipe = swipePower(offset.x, velocity.x);

								if (swipe < -swipeConfidenceThreshold) {
									paginate(1);
								} else if (swipe > swipeConfidenceThreshold) {
									paginate(-1);
								}
							}}
							alt={alt}
							className="project__image"
						/>
					</AnimatePresence>
				</div>
				<p className="project__description">{description}</p>
				<div className="project__links">
					{link1 && <a href={link1}>Github</a>}
					{link2 && <a href={link2}>Github</a>}
					{link3 && <a href={link3}>Demo</a>}
				</div>
				<div className="project__techstacks">
					{tech.map((stack) => (
						<span className="project__techstack">{stack}</span>
					))}
				</div>
			</div>
		</section>
	);
}
