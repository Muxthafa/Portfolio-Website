import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 90vh;
  background: red;
`;

export const Div1 = styled.div`
  flex: 1;
`;

export const Div2 = styled.div`
  flex: 1;
`;

export const DivWrap = styled.div`
  padding: 50px;
`;
