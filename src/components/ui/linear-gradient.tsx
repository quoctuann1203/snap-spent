import type { ViewProps } from 'react-native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, Rect, Stop, LinearGradient as SvgGradient } from 'react-native-svg';

type Props = ViewProps & {
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children?: React.ReactNode;
  className?: string;
};

export function LinearGradient({
  colors,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  children,
  style,
  className,
  ...props
}: Props) {
  return (
    <View style={[styles.container, style]} className={className} {...props}>
      <Svg style={StyleSheet.absoluteFillObject} width="100%" height="100%">
        <Defs>
          <SvgGradient
            id="snapspent-linear-grad"
            x1={`${start.x * 100}%`}
            y1={`${start.y * 100}%`}
            x2={`${end.x * 100}%`}
            y2={`${end.y * 100}%`}
          >
            {colors.map((color, index) => (
              <Stop
                key={color}
                offset={`${(index / (colors.length - 1 || 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </SvgGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#snapspent-linear-grad)" />
      </Svg>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
});
