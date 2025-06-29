import "./style.css";
import { motion } from "framer-motion";

import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const containerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<motion.div
					className="footer__wrapper"
					variants={containerVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, amount: 0.3 }} // відсоток появи блоку у вʼюпорті
				>
					<motion.ul className="social" variants={containerVariants}>
						<motion.li className="social__item" variants={itemVariants}>
							<a
								href="https://github.com/artemriabyi6"
								target="_blank"
								rel="noreferrer"
							>
								<img src={gitHub} alt="GitHub" />
							</a>
						</motion.li>
						<motion.li className="social__item" variants={itemVariants}>
							<a
								href="https://www.linkedin.com/in/artem-riabyi-43a210372/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={linkedIn} alt="LinkedIn" />
							</a>
						</motion.li>
					</motion.ul>

					<motion.div className="copyright" variants={itemVariants}>
						<p>© 2025 frontend-dev.com</p>
					</motion.div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
