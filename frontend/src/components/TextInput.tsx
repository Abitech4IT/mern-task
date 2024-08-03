/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormHelperText,
  TextField,
  SxProps,
  Typography,
} from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";

export interface TextInputPros {
  title?: string | React.ReactNode;
  name: string;
  value?: any;
  placeholder?: string;
  size?: "small" | "medium";
  select?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  childlabel?: string[];
  onChange?: (event: any) => void;
  sx?: SxProps;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

const TextInput = (props: TextInputPros) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <Typography fontSize={16} fontWeight={600} mb={0.7}>
        {props.title}
      </Typography>
      <TextField
        InputProps={{
          "aria-label": "weight",
          startAdornment: props.icon && (
            <InputAdornment position={props?.iconPosition || "start"}>
              {props.icon}
            </InputAdornment>
          ),
        }}
        value={props.value}
        placeholder={props?.placeholder}
        name={props.name}
        size={props.size}
        disabled={props.disabled}
        multiline={props.multiline}
        rows={props.rows}
        select={props.select}
        onChange={props?.onChange}
        sx={{
          p: 0.5,
          borderRadius: 1,
          outline: "none",
          border: "1px solid",
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": {
            borderStyle: "none",
          },
          ...props.sx,
        }}
      />
      <FormHelperText sx={{ color: "red" }}>{props?.error}</FormHelperText>
    </FormControl>
  );
};

export default TextInput;
