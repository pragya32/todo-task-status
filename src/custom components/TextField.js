import { get } from "lodash";
import styled from "styled-components";
import { TextField as MuiTextField } from "@mui/material";

const TextFieldWithCSS = styled(MuiTextField)`
  .MuiTextField-root {
    padding: 8px;
  }

  & label.Mui-focused {
    color: #8f1c82;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #8f1c82;
    }
  }

  .MuiInputLabel-root {
    color: #333;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #;
    border-radius: 5px;
  }

  .MuiOutlinedInput-root {
    font-size: 16px;
    border-color: #8f1c82;
    border-radius: 5px;
  }

  .Mui-disabled {
    color: rgba(0, 0, 0, 0.38);
    font-size: 16px;
    border-radius: 5px;
  }

  .MuiInputLabel-outlined {
    font-size: 16px;
  }

  .Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: #f5f5f5;
  }

  .MuiInputLabel-asterisk {
    color: ${(props) => (Boolean(props.required && !props.value) ? "red" : "")};
  }
`;

export default function TextField({ formikProps, ...props }) {
  if (!!formikProps) {
    function handleTouch() {
      if (Object.keys(formikProps?.touched).length > 0) {
        for (let field in formikProps.touched) {
          if (field !== props.name) {
            formikProps.setTouched({
              ...formikProps.touched,
              [props.name]: true,
            });
          } else {
            formikProps.setTouched({ [props.name]: true });
          }
        }
      } else {
        formikProps.setTouched({ [props.name]: true });
      }
    }

    return (
      <TextFieldWithCSS
        size="small"
        onClick={handleTouch}
        onChange={formikProps.handleChange}
        error={
          get(formikProps.touched, props.name) && props.select
            ? Boolean(
                !get(formikProps.values, props.name) &&
                  get(formikProps.errors, props.name)
              )
            : !!get(formikProps.touched, props.name) &&
              get(formikProps.errors, props.name)
        }
        helperText={
          get(formikProps.touched, props.name) && props.select
            ? !get(formikProps.values, props.name) &&
              get(formikProps.errors, props.name)
            : !!get(formikProps.touched, props.name) &&
              get(formikProps.errors, props.name)
        }
        onBlur={formikProps.handleBlur}
        value={get(formikProps.values, props.name, "")}
        fullWidth
        variant="outlined"
        {...props}
      />
    );
  }

  return <TextFieldWithCSS variant="outlined" fullWidth {...props} />;
}
