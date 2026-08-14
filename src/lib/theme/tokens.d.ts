export type Colors = {
  bg: string;
  surface: string;
  text: string;
  accent: string;
  accent2: string;
  divider: string;
  dividerRgba: string;
  danger: string;
  success: string;
  neutral: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  accentRamp: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  accent2Ramp: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
};

export declare const colors: Colors;
export declare const radius: { sm: number; md: number; lg: number };
export declare const spacing: Record<number, number>;
export declare const fonts: { heading: string; headingWeight: string; body: string; mono: string };
export declare const shadow: { sm: object; md: object; lg: object };
