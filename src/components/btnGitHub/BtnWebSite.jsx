import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnWebSite = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			Link to website
		</a>
	);
};

export default BtnWebSite;