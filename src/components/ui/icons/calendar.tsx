import type { SvgProps } from 'react-native-svg';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function Calendar({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16H5V10h14v10ZM5 8V6h14v2H5Zm2 4h3v3H7v-3Zm5 0h3v3h-3v-3Zm-5 5h3v3H7v-3Zm5 0h3v3h-3v-3Z"
        fill={color}
      />
    </Svg>
  );
}
