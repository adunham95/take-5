import React from 'react';
import { Box, Label, ThemeUIStyleObject } from 'theme-ui';

export interface ILabelBarProps {
  label?: string;
  htmlFor?: string;
  LabelProps?: {
    tx?: ThemeUIStyleObject;
    hintSlot?: React.ReactNode;
    containerTX?: ThemeUIStyleObject;
  };
}

const LabelBar = (props: ILabelBarProps) => {
  const { htmlFor, label, LabelProps } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        variant: 'textSize.sm',
        ...(LabelProps?.containerTX || {}),
      }}
    >
      {label ? (
        <Label
          htmlFor={htmlFor}
          sx={{
            display: 'block',
            text: 'text',
            ...(LabelProps?.tx || {}),
          }}
        >
          {label}
        </Label>
      ) : (
        <span></span>
      )}
      {LabelProps?.hintSlot || <></>}
    </Box>
  );
};

export default LabelBar;
