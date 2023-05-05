import { SocialList } from "components/SocialList";
import globalCSS from "../globalClass.module.css";

const footerText = "Copyright © 2021 - FinanceLedger";

export const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="footer_div">
                <SocialList classForIcons={globalCSS.social}/>
                <p className="pre_title footer_title">{footerText}</p>
            </div>
        </footer>
    );
};