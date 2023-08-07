import React from 'react';
import { ThemeUIStyleObject } from 'theme-ui';

interface IProps {
  variant?: 'primary' | 'default' | 'secondary';
  children: React.ReactNode;
  sx?: ThemeUIStyleObject;
}

export const Button = ({ variant = 'default', sx = {}, ...props }: IProps) => {
  return (
    <button
      {...props}
      sx={{
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'bold',
        m: 0,
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        cursor: 'pointer',
        ...sx,
        // pass variant prop to sx
        variant: `buttons.${variant}`,
      }}
    />
  );
};
