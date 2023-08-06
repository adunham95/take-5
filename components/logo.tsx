import React from 'react';

interface ILogoProps {
  color?: string;
}

const Logo = (props: ILogoProps) => {
  const { color = '#1f2260' } = props;
  return (
    <svg viewBox="0 0 70 25">
      <path
        fill={color}
        d="M6.98 10.94 c1.5 0.76 1.28 3.64 1.26 4.46 c-0.02 0.98 -0.02 2.14 -0.58 3 c-1.02 1.7 -3.86 2.14 -5.36 0.86 c-0.8 -0.66 -0.9 -1.64 -0.9 -2.64 c0 -0.6 2.18 -0.4 2.18 0.6 c0 0 0 0.08 0.04 0.14 c0.56 1 2.2 0.44 2.44 -0.46 c0.16 -0.66 0.2 -2.22 0.16 -2.98 c0 -0.86 -0.2 -1.14 -0.98 -1.14 c-0.36 0 -1.1 -0.04 -1.36 0.6 c-0.26 1.04 -1.88 1.06 -2.2 0.06 c-0.04 -0.26 -0.04 -0.56 -0.04 -0.78 l0 -5.48 c0 -1.18 0 -1.18 1.12 -1.18 l4.8 0 c0.6 0 0.6 2.28 0 2.28 l-3.64 0 l0 2.48 c0.38 -0.2 1.88 -0.42 3.06 0.18 z M24.4 6.42 l0 12.74 c0 1 -1.92 1.02 -2.12 0.52 l-3 -7.36 l0 7.24 c0 0.6 -2.22 0.6 -2.22 0 l0 -12.5 c0 -1.56 1.94 -1.1 2.2 -0.54 l2.94 7.08 l0 -7.18 c0 -0.6 2.2 -0.6 2.2 0 z M29.02 6.199999999999999 c0.4 0.32 0.34 1.24 -0.48 2.64 c-0.36 0.6 -1.32 0 -1.04 -0.6 c0.04 -0.1 0.1 -0.2 0.14 -0.3 c-0.1 -0.02 -0.16 -0.06 -0.22 -0.1 c-0.28 -0.28 -0.3 -1.34 -0.02 -1.62 c0.28 -0.3 1.34 -0.3 1.62 -0.02 z M39.26 6 l2.7 0 c3.34 0 3.44 14 0.2 14 l-2.84 0 c-1.26 0 -1.26 0 -1.26 -1.1 l0 -11.8 c0 -1.08 0 -1.08 1.2 -1.1 z M41.14 8.26 l-0.02 0 c-0.8 0 -0.8 0 -0.8 0.76 l0 7.96 c0 0.74 0 0.74 0.84 0.74 l0.12 0 c1.3 0 1.24 -9.46 -0.14 -9.46 z M49.599999999999994 6.42 l0 13.14 c0 0.6 -2.28 0.6 -2.28 0 l0 -13.14 c0 -0.6 2.28 -0.6 2.28 0 z M59.739999999999995 6.42 l0 12.74 c0 1 -1.92 1.02 -2.12 0.52 l-3 -7.36 l0 7.24 c0 0.6 -2.22 0.6 -2.22 0 l0 -12.5 c0 -1.56 1.94 -1.1 2.2 -0.54 l2.94 7.08 l0 -7.18 c0 -0.6 2.2 -0.6 2.2 0 z M64.82 17.72 l2.86 0 c0.6 0 0.6 2.28 0 2.28 l-3.86 0 c-1.28 0 -1.28 0 -1.28 -1.08 l0 -11.84 c0 -1.08 0 -1.08 1.22 -1.1 l3.9 0.02 c0.6 0 0.6 2.28 0 2.28 l-2.84 0 l0 3.64 l2 0 c0.6 0 0.6 2.3 0 2.3 l-2 0 l0 3.5 z"
      ></path>
    </svg>
  );
};

export default Logo;