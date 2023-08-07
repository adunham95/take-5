import React from 'react';
import LabelBar, { ILabelBarProps } from './labelBar';
import { Box, Text, ThemeUIStyleObject } from 'theme-ui';

export interface IDefaultInputWrapperProps extends ILabelBarProps {
  id: string;
  name?: string;
  helperText?: string;
  errorText?: string;
  hasError?: boolean;
  tx?: ThemeUIStyleObject;
  inputWrapperTX?: ThemeUIStyleObject;
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
    tx = {},
    inputWrapperTX = {},
    children,
    htmlFor,
  } = props;
  return (
    <Box sx={tx}>
      <LabelBar htmlFor={htmlFor || id || name} {...props} />
      <Box
        sx={{
          mt: 1,
          ...inputWrapperTX,
        }}
      >
        {children}
      </Box>
      {helperText && !hasError && (
        <Text
          sx={{
            mt: 1,
            variant: `textSize.xs`,
          }}
          id={`${name || id}-description`}
        >
          {helperText}
        </Text>
      )}
      {hasError && (
        <Text sx={{ mt: 2, color: 'error' }} id={`${name || id}-error`}>
          {errorText || 'Error'}
        </Text>
      )}
    </Box>
  );
};

export default InputWrapper;
