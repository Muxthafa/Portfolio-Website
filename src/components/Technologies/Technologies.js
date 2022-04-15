import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech" style={{ marginTop: "50px" }}>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've passionate for learning new things alongside developing small
      projects. I've worked on some of emerging technologies of both backend and
      frontend.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React Js</ListParagraph>
          <ListParagraph>Redux</ListParagraph>
          <ListParagraph>Next Js</ListParagraph>
          <ListParagraph>Vue Js</ListParagraph>
          <ListParagraph>HTML</ListParagraph>
          <ListParagraph>CSS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Node.js</ListParagraph>
          <ListParagraph>Express</ListParagraph>
          <ListParagraph>MongoDb</ListParagraph>
          <ListParagraph>SQL</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
