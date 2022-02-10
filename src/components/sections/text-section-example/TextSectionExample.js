import React from "react";
import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import "./TextSectionExample.scss";

const TextSectionExample = () => {
  return (
    <section
      className="py-5 position-relative text-section__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
        zIndex: "-1",
      }}
    >
      <SectionContainer>
        <SectionTitle title="find out who we are" />
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum
          delectus repellat tempore saepe officiis ex itaque sed similique
          blanditiis. Provident veritatis dignissimos qui enim facere distinctio
          natus quia veniam odio architecto dolorum animi quos quod unde nobis
          expedita, dolor nisi eos reprehenderit alias deleniti voluptates
          impedit quae? Non qui quis eligendi. Ea explicabo nemo omnis. Ea iste,
          ratione hic temporibus minus quibusdam maiores autem illo alias ad
          mollitia aspernatur dolorum, consequatur expedita fugit ducimus.
          Maiores placeat modi quae culpa fugit? Quod nihil voluptatum unde enim
          inventore odio, optio ut consequatur mollitia vero sapiente
          dignissimos consectetur ipsum facere magni minus.
        </p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          veritatis at sint quo eius minus, sequi, numquam tempore porro debitis
          soluta sit ad. Officia repudiandae nisi totam temporibus esse? Illo
          reprehenderit facere dolores porro repudiandae magni corrupti harum
          ratione maiores totam provident aliquam asperiores pariatur, id
          distinctio laboriosam, doloremque explicabo alias ut iste. Iure
          ducimus non illum minus, temporibus quas natus hic, recusandae nisi
          quaerat alias eaque quibusdam, adipisci mollitia cum. Libero sunt eos
          fuga.
        </p>
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          impedit placeat quidem optio totam possimus amet at animi, dignissimos
          aliquid ipsam fuga adipisci aperiam tempore vero, quaerat cum
          necessitatibus eligendi voluptate laboriosam. Quibusdam reprehenderit
          reiciendis eaque perferendis in provident, nemo, enim suscipit
          excepturi beatae quisquam animi quaerat molestias laborum quo?
        </p>
      </SectionContainer>
      <ShapeDividerBottom color="#fffeff" />
    </section>
  );
};

export default TextSectionExample;
