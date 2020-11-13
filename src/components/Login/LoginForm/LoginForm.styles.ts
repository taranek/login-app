import styled from "styled-components";
import {TextField, TextFieldProps} from "@material-ui/core";

export const FormInput = styled(TextField)<TextFieldProps>`
  &&:last-of-type {
    margin-bottom: 16px;
    margin-top: 8px;
  }
`