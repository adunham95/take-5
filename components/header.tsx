import React from 'react';
import Logo from './logo';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const {} = props;
  return (
    <div>
      <div
        sx={{
          width: '200px',
        }}
      >
        <Logo />
      </div>
    </div>
  );
};

export default Header;
