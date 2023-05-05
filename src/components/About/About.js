import solutionsImage from "../images/home/people.jpg";

const solutionsImageAlt = "People";
const preTitleText = "What you are looking for";
const minorTitleText = "We provide bespoke solutions";
const afterTitleText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?";
const buttonText = "Read More";

export const About = () => {
    return (
        <section className="about_section">
            <img src={solutionsImage} alt={solutionsImageAlt} className="about_image"/>
            <div className="about_div">
                <p className="pre_title">{preTitleText}</p>
                <h2 className="minor_title">{minorTitleText}</h2>
                <p className="pre_title after_title">{afterTitleText}</p>
                <button type="button" className="minor_button about_button">{buttonText}</button>
            </div>
        </section>
    );
};