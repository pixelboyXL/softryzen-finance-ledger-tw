import { CasesList } from "components/Cases/CasesList";

const preTitleText = "This is what we do";
const minorTitleText = "Business Cases";
const afterTitleText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!";

export const Cases = () => {
    return (
        <section>
            <div className="container cases_container">
                <p className="pre_title cases_pre_title">{preTitleText}</p>
                <h2 className="minor_title cases_minor_title">{minorTitleText}</h2>
                <p className="pre_title cases_after_title">{afterTitleText}</p>
                <CasesList />
            </div>
        </section>
    );
};