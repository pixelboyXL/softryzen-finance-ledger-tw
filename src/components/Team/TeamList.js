import person1 from "../images/team/person1.jpg";
import person2 from "../images/team/person2.jpg";
import person3 from "../images/team/person3.jpg";
import { SocialList } from "../SocialList";
import teamCSS from "../Team/Team.module.css";

export const TeamList = () => {
    return (
        <ul className="team_list">
            <li>
                <div className="team_image_div">
                    <img src={person1} alt="Person1" className="team_image"/>
                    <div className="team_social_list">
                        <SocialList classForIcons={teamCSS.team_social} />
                    </div>
                </div>
                <p className="team_name">John Doe</p>
                <p className="team_position">President</p>
            </li>
            <li>
                <div className="team_image_div">
                    <img src={person2} alt="Person2" className="team_image"/>
                    <div className="team_social_list">
                        <SocialList classForIcons={teamCSS.team_social}/>
                    </div>
                </div>
                <p className="team_name">Jane Doe</p>
                <p className="team_position">Vice President</p>
            </li>
            <li>
                <div className="team_image_div">
                    <img src={person3} alt="Person3" className="team_image"/>
                    <div className="team_social_list">
                        <SocialList classForIcons={teamCSS.team_social}/>
                    </div>
                </div>
                <p className="team_name">Steve Smith</p>
                <p className="team_position">Marketing Head</p>
            </li>
        </ul>
    );
};