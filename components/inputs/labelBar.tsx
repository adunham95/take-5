import React from 'react';
import { ThemeUIStyleObject } from 'theme-ui';

export interface ILabelBarProps {
  label?: string;
  htmlFor?: string;
  LabelProps?: {
    sx?: ThemeUIStyleObject;
    hintSlot?: React.ReactNode;
    containerSX?: ThemeUIStyleObject;
  };
}

const LabelBar = (props: ILabelBarProps) => {
  const { htmlFor, label, LabelProps } = props;
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...(LabelProps?.containerSX || {}),
      }}
    >
      {label ? (
        <label
          htmlFor={htmlFor}
          sx={{
            display: 'block',
            text: 'text',
            ...(LabelProps?.sx || {}),
          }}
        >
          {label}
        </label>
      ) : (
        <span></span>
      )}
      {LabelProps?.hintSlot || <></>}
    </div>
  );
};

export default LabelBar;
