import React from "react";
import { DiCssTricks } from "react-icons/di";

type props = {
  dict: any;
};

const AboutMe = ({ dict }: props) => {
  return (
    <section className="flex justify-center items-center">
      <div>
        <p> {dict.aboutme.description}</p>
      </div>
    </section>
  );
};

export default AboutMe;
