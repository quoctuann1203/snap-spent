import type { SvgProps } from 'react-native-svg';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function Scan({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5Zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6Zm7.5-6.5v3h-3v-3h3M19 5h-6v6h6V5Zm-6 8h1.5v1.5H13V13Zm1.5 1.5H16V16h-1.5v-1.5ZM13 16h1.5v1.5H13V16Zm3 0h1.5v1.5H16V16Zm1.5-1.5H19V16h-1.5v-1.5ZM16 13h1.5v1.5H16V13Zm1.5 4.5H19V19h-1.5v-1.5Zm-4.5 0h1.5V19H13v-1.5Z"
        fill={color}
      />
    </Svg>
  );
}
