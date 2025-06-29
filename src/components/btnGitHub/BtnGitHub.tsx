import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnGitHub = ({ link, text }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			{text}
		</a>
	);
};

export default BtnGitHub;