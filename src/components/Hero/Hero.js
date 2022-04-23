import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Container, Div2, Div1 } from "./HeroStyles";
import styles from "./hero.module.css";

const Hero = (props) => (
  <div className={styles.i}>
    <div className={styles.ileft}>
      <div className={styles.ileftwrapper}>
        <h2 className={styles.iintro}>Hello, My name is</h2>
        <h1 className={styles.iname}>Mohammad Musthafa</h1>
        <div className={styles.ititle}>
          <div className={styles.ititlewrapper}>
            <div className={styles.ititleitem}>Frontend developer</div>
            <div className={styles.ititleitem}>Figma tool experience</div>
            <div className={styles.ititleitem}>Backend Api</div>
            <div className={styles.ititleitem}>Software plugin development</div>
            <div className={styles.ititleitem}>Java programmer</div>
          </div>
        </div>
        <p className={styles.idesc}>
          I am a software engineer working in YML, I specialize in creating
          interactive experiences and functional interfaces using React Js. I
          also created multiple web apps with backend requirements using MERN as
          a tech stack.
        </p>
      </div>
    </div>
    <div className={styles.iright}>
      <div className={styles.ibg}></div>
      <img src="/images/profile.png" className={styles.iimg} />
    </div>
  </div>
);

export default Hero;
