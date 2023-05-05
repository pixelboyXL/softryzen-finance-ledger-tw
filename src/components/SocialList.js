import { socialIconsArray } from "utils/socialIcons";

const targetBlank = "_blank";
const refTripleN = "noopener noreferrer nofollow";

export const SocialList = ({ classForIcons }) => {
    return (
        <ul className="social_list">
            {socialIconsArray.map(({ image, href }) => {
                return (
                    <li className="social_list_item" key={href}>
                        <a href={href} className={classForIcons} target={targetBlank} rel={refTripleN}>
                            {image}
                        </a>
                    </li>
                )
            })}
        </ul>
    );
};