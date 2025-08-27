import type {Theme} from '../types/theme';
import {VolstoraColors, TeslaColors, SystemColors} from './colors';
import {FontFamily, FontSize, LineHeight} from './typography';
import {Spacing, BorderRadius} from './spacing';
import {Shadows} from './shadows';

// Default Theme - Темная тема на основе Volstora
export const defaultTheme: Theme = {
  name: 'defaultTheme',
  colors: {
    primary: VolstoraColors.volstoraBlue,
    secondary: VolstoraColors.lightBlue,
    accent: VolstoraColors.veryLightBlue,
    background: VolstoraColors.black,
    surface: VolstoraColors.aluminiumGrey,
    text: {
      primary: VolstoraColors.almostWhite,
      secondary: VolstoraColors.veryLightBlue,
      accent: VolstoraColors.volstoraBlue,
    },
    border: VolstoraColors.darkNavy,
    error: SystemColors.error,
    success: SystemColors.success,
    warning: SystemColors.warning,
    info: VolstoraColors.volstoraBlue,
  },
  typography: {
    fontFamily: FontFamily,
    fontSize: FontSize,
    lineHeight: LineHeight,
  },
  spacing: Spacing,
  borderRadius: BorderRadius,
  shadows: Shadows,
};

// Primary Theme - Светлая тема на основе Tesla
export const primaryTheme: Theme = {
  name: 'primaryTheme',
  colors: {
    primary: TeslaColors.black,
    secondary: TeslaColors.darkGrey,
    accent: TeslaColors.red,
    background: TeslaColors.white,
    surface: TeslaColors.lightGrey,
    text: {
      primary: TeslaColors.black,
      secondary: TeslaColors.mediumGrey,
      accent: TeslaColors.red,
    },
    border: TeslaColors.veryLightGrey,
    error: SystemColors.error,
    success: SystemColors.success,
    warning: SystemColors.warning,
    info: TeslaColors.blue,
  },
  typography: {
    fontFamily: FontFamily,
    fontSize: FontSize,
    lineHeight: LineHeight,
  },
  spacing: Spacing,
  borderRadius: BorderRadius,
  shadows: Shadows,
};

export const themes = {
  defaultTheme,
  primaryTheme,
};