import blogImage from "../images/home/blog.jpg";

const blogImageAlt = "Blog";
const preTitleText = "April 16 2020";
const minorTitleText = "Blog Post One";
const afterTitleText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?";
const buttonText = "Read Our Blog";

export const Blog = () => {
    return (
        <section className="blog_section">
            <img src={blogImage} alt={blogImageAlt} className="blog_image"/>
            <div className="blog_div">
                <p className="pre_title">{preTitleText}</p>
                <h2 className="minor_title blog_minor_title">{minorTitleText}</h2>
                <p className="pre_title after_title">{afterTitleText}</p>
                <button type="button" className="minor_button blog_button">{buttonText}</button>
            </div>
        </section>
    );
};