import React, { useRef, useState } from "react";

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
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value !== "" && emailRef.current.value !== "") {
      emailjs
        .sendForm(
          "service_fpo9ggt",
          "template_pj01acn",
          formRef.current,
          "3JpXAYU1-2Riu3HUe"
        )
        .then(
          (result) => {
            console.log(result.text);
            nameRef.current.value = "";
            emailRef.current.value = "";
            phoneRef.current.value = "";
            messageRef.current.value = "";
            setDone(true);
            setTimeout(() => {
              setDone(false);
            }, 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      return;
    }
  };

  return (
    <Section style={{ marginTop: "26px" }}>
      <SectionDivider />
      <SectionTitle main id="contact">
        Contact
      </SectionTitle>
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
          <form
            ref={formRef}
            className={styles.siteform}
            onSubmit={handleSubmit}
          >
            <h3 className={`${styles.ctitle} ${styles.mb5}`}>Get In Touch</h3>
            <div className={styles.formgroup}>
              <input
                type="text"
                className={`${styles.formcontrol} ${styles.px3} ${styles.py4}`}
                placeholder="Your Name"
                name="user_name"
                ref={nameRef}
              />
            </div>
            <div className={styles.formgroup}>
              <input
                type="email"
                className={`${styles.formcontrol} ${styles.px3} ${styles.py4}`}
                placeholder="Your Email"
                name="user_email"
                ref={emailRef}
              />
            </div>
            <div className={styles.formgroup}>
              <input
                type="phone"
                className={`${styles.formcontrol} ${styles.px3} ${styles.py4}`}
                placeholder="Your Phone"
                name="user_phone"
                ref={phoneRef}
              />
            </div>
            <div className={`${styles.formgroup} ${styles.mb5}`}>
              <textarea
                className={`${styles.formcontrol} ${styles.px3} ${styles.py4} ${styles.mb5}`}
                cols="30"
                rows="10"
                placeholder="Write a Message"
                name="message"
                ref={messageRef}
              ></textarea>
            </div>
            <div className={styles.formgroup}>
              <input
                type="submit"
                className={`${styles.btn} ${styles.btnprimary}  ${styles.px3}`}
                value="Send Message"
              />
              <span>{done && "Thank you for connecting!!!"}</span>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
