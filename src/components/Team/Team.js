import { TeamList } from "./TeamList";

const preTitleText = "Who we are";
const minorTitleText = "Our Professional Team";
const afterTitleText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!";

export const Team = () => {
    return (
        <section>
            <div className="team_container">
                <p className="pre_title team_pre_title">{preTitleText}</p>
                <h2 className="minor_title team_minor_title">{minorTitleText}</h2>
                <p className="pre_title team_after_title">{afterTitleText}</p>
                <TeamList />
            </div>
        </section>
    );
};