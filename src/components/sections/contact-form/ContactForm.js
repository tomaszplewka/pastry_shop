import React from "react";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Form from "../../form/Form";
import FormInput from "../../form-input/FormInput";
import FormTextarea from "../../form-textarea/FormTextarea";
import Btn from "../../Btn/Btn";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <section
      className="py-5 position-relative text-section__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
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
        <Form
          title="Contact Us"
          // handleSubmit={handleSubmit}
        >
          <FormInput
            type="text"
            id="username"
            name="username"
            // value={username}
            required
            // onChange={handleChange}
            placeholder="Name"
            hide
            invert
            inline
            fullwidth
          />
          <FormInput
            type="email"
            id="email"
            name="email"
            // value={email}
            required
            // onChange={handleChange}
            placeholder="Email"
            hide
            invert
            inline
            fullwidth
          />
          <FormTextarea
            id="message"
            name="message"
            // value={email}
            required
            // onChange={handleChange}
            placeholder="Message"
            hide
            invert
            fullwidth
          />
          <Btn type="submit" fullwidth invert>
            Send Message
          </Btn>
        </Form>
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default ContactForm;
