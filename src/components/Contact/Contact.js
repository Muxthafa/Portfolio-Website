import React from "react";

import styles from "./contact.module.css";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Contact = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      <SectionTitle main>Contact</SectionTitle>
      <div className={styles.cbg}></div>
      <div className={styles.cwrapper}>
        <div className={styles.cleft}>
          <h1 className={styles.ctitle}>My Contact Details</h1>
          <div className={styles.cinfo}>
            <div className={styles.cinfoitem}>
              <FiPhone size="3rem" />
              <p className={styles.para}>7760219131</p>
            </div>
            <div className={styles.cinfoitem}>
              <AiOutlineMail size="3rem" />
              <p className={styles.para}>musthafamohd0@gmail.com</p>
            </div>
            <div className={styles.cinfoitem}>
              <GoLocation size="3rem" />
              <p className={styles.para}>
                Udupi District in Karnataka state, India-574105
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cright}>
          {/* <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form> */}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
