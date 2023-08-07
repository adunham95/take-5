import React from 'react';
import LabelBar, { ILabelBarProps } from './labelBar';
import { ThemeUIStyleObject } from 'theme-ui';

export interface IDefaultInputWrapperProps extends ILabelBarProps {
  id: string;
  name?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
  sx?: ThemeUIStyleObject;
  inputWrapperSX?: ThemeUIStyleObject;
}

interface IInputWrapperProps extends IDefaultInputWrapperProps {
  children: React.ReactNode;
}

const InputWrapper = (props: IInputWrapperProps) => {
  const {
    id,
    name,
    helperText,
    errorText,
    hasError = false,
    sx = {},
    inputWrapperSX = {},
    children,
    htmlFor,
  } = props;
  return (
    <div sx={sx}>
      <LabelBar htmlFor={htmlFor || id || name} {...props} />
      <div
        sx={{
          mt: 2,
          ...inputWrapperSX,
        }}
      >
        {children}
      </div>
      {helperText && !hasError && (
        <p
          sx={{
            mt: 2,
          }}
          id={`${name || id}-description`}
        >
          {helperText}
        </p>
      )}
      {hasError && (
        <p sx={{ mt: 2, color: 'error' }} id={`${name || id}-error`}>
          {errorText || 'Error'}
        </p>
      )}
    </div>
  );
};

export default InputWrapper;
