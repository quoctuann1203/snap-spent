import type { SvgProps } from 'react-native-svg';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function Food({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.48L23 5.05h-5v17.94ZM1 21.99V2.21C1 1.55 1.55 1 2.21 1c.66 0 1.21.55 1.21 1.21V10h2.42V2.21C5.84 1.55 6.39 1 7.05 1c.66 0 1.21.55 1.21 1.21V10h2.42V2.21c0-.66.55-1.21 1.21-1.21.66 0 1.21.55 1.21 1.21v19.78c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1Z"
        fill={color}
      />
    </Svg>
  );
}
