import { motion } from "framer-motion";

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
	animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Contacts = () => {
	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<motion.ul
					className="content-list"
					variants={containerVariants}
					initial="initial"
					animate="animate"
				>
					<motion.li className="content-list__item" variants={itemVariants}>
						<h2 className="title-2">Location</h2>
						<p>Chernivtsi, Ukraine</p>
					</motion.li>

					<motion.li className="content-list__item" variants={itemVariants}>
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+380996373164">+380(99) 63-73-164</a>
						</p>
					</motion.li>

					<motion.li className="content-list__item" variants={itemVariants}>
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:artemriabyi8@gmail.com">
								artemriabyi8@gmail.com
							</a>
						</p>
					</motion.li>
				</motion.ul>
			</div>
		</main>
	);
};

export default Contacts;
