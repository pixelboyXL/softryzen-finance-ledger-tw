import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import contactImage from "../images/home/contact.jpg";
import { ReactComponent as Warning } from "../images/form/worning.svg";

const contactImageAlt = "Contact";
const minorTitleText = "Request Callback";
const buttonText = "Send";
const errorText = "This is a required field.";

const initialValues = {
    name: '',
    email: '',
};

const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().required(),
});

const ErrorCustom = () => {
    return (
        <div className="contact_error">
            <Warning />
            {errorText}
        </div>
    );
};

export const Contact = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
    };

    return (
        <section className="contact_section">
            <img src={contactImage} alt={contactImageAlt} className="contact_image"/>
                <div className="contact_div">
                    <h2 className="contact_title">{minorTitleText}</h2>
                <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    <Form className="contact_form">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="contact_wrap">
                            <Field id="name" className="contact_input" type="text" name="name" placeholder=" " />
                            <label htmlFor="name" className="contact_placeholder">Enter your name</label>
                        </div>
                        <div className="contact_wrap">
                            <Field id="email" className="contact_input" type="email" name="email" placeholder=" "></Field>
                            <label htmlFor="email" className="contact_placeholder">Enter email*</label>
                            <ErrorMessage name="email" component={ErrorCustom}/>
                        </div>
                        <button type="submit" className="contact_button">{buttonText}</button>
                    </Form>
                </Formik>
            </div>
        </section>
    );
};