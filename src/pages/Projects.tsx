import { motion } from "framer-motion";
import Project from "../components/project/Project";
import { projects } from "../helpers/projectsList";

const containerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.2, // затримка між появами
		},
	},
};

const itemVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>

				<motion.ul
					className="projects"
					variants={containerVariants}
					initial="initial"
					animate="animate"
				>
					{projects.map((project, index) => (
						<motion.li key={index} variants={itemVariants}>
							<Project
								title={project.title}
								img={project.img}
								index={index}
							/>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</main>
	);
};

export default Projects;
