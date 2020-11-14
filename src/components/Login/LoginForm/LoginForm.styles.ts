import styled from "styled-components";
import {TextField, TextFieldProps} from "@material-ui/core";

export const FormInput = styled(TextField)<TextFieldProps>`
  && {
    min-height: 52px;
    &:last-of-type {
      margin-bottom: 16px;
      margin-top: 8px;  
    }
  }
`