import styled from "styled-components";
import {IconProps} from "./Icon";



export const Icon = styled.img<IconProps>`
  && {
    ${(props):string=> props.size ? `width: ${props.size}px;` : `width: 100%;` }
    height: auto;
  }
`