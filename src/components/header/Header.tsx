import "./style.css";
import { motion } from "framer-motion";

const containerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.2, // затримка між елементами
		},
	},
};

const itemVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const letterVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Ім’я, яке анімуємо по літерах
const name = "Artem";

const Header = () => {
	return (
		<motion.header
			className="header"
			variants={containerVariants}
			initial="initial"
			animate="animate"
		>
			<motion.div className="header__wrapper" variants={containerVariants}>
				<h1 className="header__title" variants={itemVariants}>
					<strong>
						Hi, my name is{" "}
						<motion.em
							style={{ display: "inline-flex", gap: "0.05em" }}
							variants={containerVariants}
						>
							{[...name].map((letter, i) => (
								<motion.span
									key={i}
									variants={letterVariants}
									style={{ display: "inline-block" }}
								>
									{letter}
								</motion.span>
							))}
						</motion.em>
					</strong>
					<br />a frontend developer
				</h1>

				<div className="header__text" variants={itemVariants}>
					<p>with passion for learning and creating.</p>
				</div>

				{/* <motion.a href="#!" className="btn" variants={itemVariants}>
					Download CV
				</motion.a> */}
			</motion.div>
		</motion.header>
	);
};

export default Header;
