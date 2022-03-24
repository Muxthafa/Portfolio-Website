import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Container,
  DivMobile,
} from "./HeaderStyles";
import { Link as Li } from "react-scroll";
import menuItems from "./header.data";
import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const addBackground = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addBackground);
  }, []);

  return (
    <Container sticky={nav && "white"}>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            <FaAward size="3rem" className={styles.menu} />
            <GiHamburgerMenu
              size="3rem"
              className={styles.hamMenu}
              onClick={() => (
                setMenuOpen((prev) => !prev), console.log(menuOpen)
              )}
            />
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      {menuOpen && (
        <DivMobile>
          {menuItems.map((item, i) => (
            <li>
              <Li
                to={item.path}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                key={i}
              >
                <NavLink>{item.label}</NavLink>
              </Li>
            </li>
          ))}
        </DivMobile>
      )}
      <Div2>
        {menuItems.map((item, i) => (
          <li>
            <Li
              to={item.path}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              key={i}
            >
              <NavLink>{item.label}</NavLink>
            </Li>
          </li>
        ))}
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};
export default Header;
