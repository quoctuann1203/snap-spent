import type { SvgProps } from 'react-native-svg';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function PieChart({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10Zm2 0v8.5L19.5 6A10.016 10.016 0 0 0 13 2Zm0 11.5V22c4.72-.47 8.5-4.25 8.97-8.97L13 13.5Z"
        fill={color}
      />
    </Svg>
  );
}
