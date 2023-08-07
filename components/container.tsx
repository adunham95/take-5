import React from 'react';
import { Box, ThemeUIStyleObject } from 'theme-ui';

interface IContainerProps {
  children: React.ReactNode;
  tx?: ThemeUIStyleObject;
  className?: string;
}

const Container = (props: IContainerProps) => {
  console.log(props);
  const { children } = props;
  return (
    <Box
      sx={{
        mx: 'auto',
        width: '100%',
        maxWidth: [640, 768, 1024, 1280, 1536],
        ...props.tx,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
