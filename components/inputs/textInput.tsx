import React from 'react';
import InputWrapper, { IDefaultInputWrapperProps } from './inputWrapper';
import { Input, ThemeUIStyleObject } from 'theme-ui';

interface IProps extends IDefaultInputWrapperProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (text: string, name: string, e: React.ChangeEvent) => void;
  inputTX?: ThemeUIStyleObject;
  ariaDescription?: string;
  autoComplete?: string;
}

export const TextInput = (props: IProps) => {
  const {
    onChange,
    id,
    name,
    type = 'text',
    placeholder = '',
    hasError = false,
    inputTX = {},
    ariaDescription,
    value,
    autoComplete,
  } = props;
  return (
    <InputWrapper {...props}>
      <Input
        type={type}
        name={id || name}
        id={id}
        value={value}
        autoComplete={autoComplete}
        sx={{
          display: 'block',
          width: '100%',
          borderRadius: 5,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: hasError ? 'error' : 'primary',
          py: 1,
          px: 2,
          ...inputTX,
        }}
        placeholder={placeholder}
        aria-describedby={ariaDescription || name || id}
        onChange={(e) => onChange(e.target.value, name || id, e)}
      />
    </InputWrapper>
  );
};
