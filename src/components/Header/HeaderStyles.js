import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  align-items: center;
  padding: 1rem;
  padding-top: 2rem;
  top: 0;
  z-index: 999;
  background-color: ${({ sticky }) => sticky || ""};
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  margin-top: 7px;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const DivMobile = styled.div`
  // grid-area: 1 / 2 / 2 / 4;
  display: none;
  transition: 0.25s;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 2 / 1 / 5 / 6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 15rem;
    align-items: center;
    background: black;
  }
  &:li {
    transition-timing-function: ease-in;
  }
`;

export const Span = styled.span`
  margin-left: 5px;
  font-size: 2rem;
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: #bac964;
  transition: 0.4s ease;
  padding: 0.3rem;
  font-weight: 300;
  letter-spacing: 2px;
  border-radius: 1rem;
  &:hover {
    transform: scale(1.2);
    color: #fff;
    opacity: 1;
    background-color: #bac964;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  font-size: 2rem;
  transition: 0.3s ease;
  color: white;
  border-radius: 1rem;
  padding: 0.3rem;
  &:hover {
    background-color: #bac964;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
