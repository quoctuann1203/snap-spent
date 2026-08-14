import { View } from 'react-native';

import { colors } from '@/lib/theme/tokens';

export type MascotMood = 'happy' | 'neutral' | 'worried';

type Props = {
  mood: MascotMood;
  size?: 'sm' | 'lg';
};

export function MascotFace({ mood, size = 'sm' }: Props) {
  const dimension = size === 'sm' ? 40 : 88;
  const mouthCurve = mood === 'happy' ? 12 : mood === 'worried' ? -6 : 0;

  return (
    <View
      style={{
        width: dimension,
        height: dimension,
        borderRadius: dimension / 2,
        backgroundColor: colors.accentRamp[300],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: dimension * 0.5,
          height: dimension * 0.5 * 0.4,
          borderBottomLeftRadius: mouthCurve > 0 ? 999 : 0,
          borderBottomRightRadius: mouthCurve > 0 ? 999 : 0,
          borderTopLeftRadius: mouthCurve < 0 ? 999 : 0,
          borderTopRightRadius: mouthCurve < 0 ? 999 : 0,
          backgroundColor: colors.bg,
        }}
      />
    </View>
  );
}
