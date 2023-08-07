import React from 'react';
import Logo from './logo';
import { Button } from './button';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const {} = props;
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: [2, 4],
        py: 2,
      }}
    >
      <div
        sx={{
          width: '200px',
        }}
      >
        <Logo />
      </div>
      <div>
        <Button>New</Button>
      </div>
    </div>
  );
};

export default Header;
