import React, { useCallback, useState } from "react";
import { Field, reduxForm } from "redux-form";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Form from "../../form/Form";
import FormInput from "../../form-input/FormInput";
import FormTextarea from "../../form-textarea/FormTextarea";
import Btn from "../../Btn/Btn";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { validate, renderField } from "../../utilities/redux-form";

import "./ContactForm.scss";

const ContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    // setTimeout(() => {
    //   setIsFormSubmitted(false);
    // }, 3000);
  }, []);

  return (
    <section
      className="py-5 position-relative text-section__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)"
      }}
    >
      <SectionContainer>
        <SectionTitle title="Message Us" />
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          reiciendis illum quo veniam quaerat velit, asperiores pariatur esse.
          Doloremque voluptatem eligendi beatae nisi. Reprehenderit incidunt
          repellat minus, provident quam cumque sit iusto itaque perspiciatis
          hic inventore facilis vel deleniti voluptatum architecto reiciendis.
          Tenetur, sequi. Ad totam necessitatibus consequatur officia
          doloremque!
        </p>
        <p className="mb-5 pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis
          iusto, earum corrupti, voluptate tempora voluptas molestiae illum
          dolore placeat nemo, ratione sit nihil vel at qui! Dolorem, fuga
          ipsam!
        </p>
        {isFormSubmitted ? (
          <div className="mb-5 mx-5 px-5 pb-5">
            <h4 className="text-center">
              Thank you for contacting us. We will reply at our earliest
              convenience. Have a great day.
            </h4>
          </div>
        ) : (
          <Form title="Contact Us" handleSubmit={handleFormSubmit}>
            <Field
              type="text"
              id="username"
              name="username"
              required
              placeholder="Name"
              hide={true}
              invert={true}
              fullwidth={true}
              component={renderField}
              torender={FormInput}
            />
            <Field
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              hide={true}
              invert={true}
              fullwidth={true}
              component={renderField}
              torender={FormInput}
            />
            <Field
              id="message"
              name="message"
              required
              placeholder="Message"
              hide={true}
              invert={true}
              fullwidth={true}
              component={renderField}
              torender={FormTextarea}
            />
            <Btn type="submit" fullwidth invert>
              Send Message
            </Btn>
          </Form>
        )}
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default reduxForm({
  form: "contact-form",
  validate
})(ContactForm);
