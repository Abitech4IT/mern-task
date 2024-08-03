import { Button as MUIButton, ButtonProps } from "@mui/material";

const Button = (props: ButtonProps) => {
  return <MUIButton {...props}> {props.children} </MUIButton>;
};

export default Button;
