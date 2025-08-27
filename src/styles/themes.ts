<<<<<<< HEAD
import type { Theme } from '../types/theme';
import { VolstoraColors, TeslaColors, SystemColors } from './colors';
import { FontFamily, FontSize, LineHeight } from './typography';
import { Spacing, BorderRadius } from './spacing';
import { Shadows } from './shadows';

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
=======
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
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
};

// Primary Theme - Светлая тема на основе Tesla
export const primaryTheme: Theme = {
<<<<<<< HEAD
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
=======
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
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
};