import styled from 'styled-components';
import media from "styled-media-query";

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: #282c34;
  
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
  min-height: 100vh;
  ${media.lessThan("large")`
    width: 100%;
  `}
`;