import React from 'react';
import { ThemeUIStyleObject, Button as UIButton } from 'theme-ui';

interface IProps {
  variant?: 'primary' | 'default' | 'secondary';
  children: React.ReactNode;
  tx?: ThemeUIStyleObject;
}

export const Button = ({ variant = 'default', tx = {}, ...props }: IProps) => {
  return (
    <UIButton
      {...props}
      sx={{
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'inherit',
        ...tx,
        // pass variant prop to sx
        variant: `buttons.${variant}`,
      }}
    />
  );
};
