import styled from "styled-components";
import {TextField} from "@material-ui/core";
import media from "styled-media-query";

export const Container = styled.div`
  text-align: center;
  margin: 5vh 5vw;
  min-height: 80vh;
  padding: 5vh 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #d9dcff;
  border-radius: 10px;
  ${media.lessThan("small")`
    margin: 2vh 5vw;
    min-height: 86vh;
  `}
`
export const MainImgWrapper = styled.div`
  width:100%;
  max-width: 120px;
  height: auto;
  margin: 0 0 30px 0;
`
export const Title = styled.h2`
  margin: 0;
`
export const FormContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin-top: 16px;
`

