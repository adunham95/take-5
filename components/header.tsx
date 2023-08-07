import React from 'react';
import Logo from './logo';
import { Button } from './button';
import Container from './container';
import { Box } from 'theme-ui';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const {} = props;
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: [2, 4],
          py: 2,
        }}
      >
        <Box
          sx={{
            width: '200px',
          }}
        >
          <Logo />
        </Box>
        <Box>
          <Button>New</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
