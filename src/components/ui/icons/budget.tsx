import type { SvgProps } from 'react-native-svg';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function Budget({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21 7.28V5c0-1.1-.9-2-2-2H5C3.89 3 3 3.9 3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.99 1-1.72V9c0-.73-.41-1.37-1-1.72ZM20 9v6h-4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4ZM5 19V5h14v2h-3c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3h3v2H5Zm12.5-6.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
        fill={color}
      />
    </Svg>
  );
}
