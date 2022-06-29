import { AllowedBreakpoints } from '@tilt-school/styles';
import { themeColors } from './colors';
import { variables } from './variables';

type TFontSizes = {
  [key in AllowedBreakpoints]: string;
};

type TSpace = {
  [key in AllowedBreakpoints]: string;
};

interface ITheme {
  fonts: Record<string, string>;
  fontSizes: TFontSizes;
  space: TSpace;
  colors: Record<string, string>;
}

// TODO: Replace it with real values
export const theme = {
  colors: themeColors.light,
  variables,
} as unknown as ITheme;
