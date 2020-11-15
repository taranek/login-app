import styled from 'styled-components';
import media from "styled-media-query";

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: #282c34;
  min-height: 100vh;
  h1 {
    font-size: 40px;
    margin-bottom: 25px
  }
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 25px;
    margin-bottom: 16px
  }
  
`;

export const LayoutInner = styled.div`
  ${media.lessThan("large")`
    width: 100%;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5vh 5vw;
  min-height: 80vh;
  padding: 5vh 5vw;
  flex-direction: column;
  background: #d9dcff;
  border-radius: 10px;
`;