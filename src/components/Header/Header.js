import logo from "../images/logo.svg";
import arrow from "../images/arrow.png";

const titleText = "The Sky Is The Limit";
const afterTitleText = "We provide world class financial assistance";
const buttonText = "Read More";

export const Header = () => {
    return (
        <header className="header">
            <div className="container header_container">
                <div className="header_navigation_bar">
                    <div className="header_logo_wrap">
                        <img src={logo} alt="Logo" className="header_logo_image"/>
                        <div className="header_logo_first_word">Finance<p className="header_logo_second_word">Ledger</p></div>
                    </div>
                    <ul className="header_navigation_list">
                        <li className="header_navigation_item">Home</li>
                        <li className="header_navigation_item">About</li>
                        <li className="header_navigation_item">Cases</li>
                        <li className="header_navigation_item">Blog</li>
                        <li className="header_navigation_item">Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className="header_title">{titleText}</h1>
                    <p className="header_text">{afterTitleText}</p>
                    <button type="button"><img src={arrow} alt="Arrow" className="main_button_arrow"/>{buttonText}</button>
                </div>
            </div>
        </header>
    );
};