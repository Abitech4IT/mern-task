/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Typography,
} from "@mui/material";

export interface SelectInputprops {
  title?: string | React.ReactNode;
  name: string;
  placeholder?: string;
  value: any;
  size?: "small" | "medium";
  onChange?: (event: SelectChangeEvent) => void;
  menuItems?: SelectItem[];
  sx?: SxProps;
  multiple?: boolean;
  required?: boolean;
  error?: string;
}

type SelectItem = {
  title: string | React.ReactNode;
  value: string;
};

const SelectInput = (props: SelectInputprops) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <Typography fontSize={14} fontWeight={500} mb={0.7}>
        {props.title}
      </Typography>
      {}
      <Select
        required={props.required}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        size={props.size}
        onChange={props.onChange}
        sx={{
          p: 0.5,
          borderRadius: 2,
          outline: "none",
          border: 1,
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": {
            borderStyle: "none",
          },
          ...props.sx,
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              border: "none",
              boxShadow: "none",
            },
          },
        }}
      >
        {props?.menuItems?.map((item) => (
          <MenuItem value={item.value}>{item.title}</MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ color: "red" }}>{props?.error}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
