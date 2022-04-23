import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => (
  <Section id="tech" style={{ marginTop: "50px" }}>
    <SectionDivider />
    <SectionTitle main>About Me</SectionTitle>
    <SectionText>
      “Firstly talking about my education I'm a graduate in engineering focused
      on the field of information science with CGPA of 9. Right now I'm a
      frontend developer in YML which is a technology agency bringing Silicon
      Valley to the world by creating award-winning digital products and I
      specialize in efficient React apps and CSS & HTML that just work across
      all platforms and browsers. I care deeply about building interfaces that
      are usable and pleasant for the most number of people possible.I have just
      over a 8 months of experience as an associate software engineer. In my
      short time there, I've already contributed to over a dozen projects and
      assisted with managing one project for one of the firm's long-time
      clients. I’m excited about the still very complicated WebAssembly, and
      working towards becoming a React professional. In the following years, I
      also plan to explore the “server-side” more and become a better-rounded
      full-stack dev".
    </SectionText>
  </Section>
);
export default About;
