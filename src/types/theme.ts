export interface Theme {
<<<<<<< HEAD
    name: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        surface: string;
        text: {
            primary: string;
            secondary: string;
            accent: string;
        };
        border: string;
        error: string;
        success: string;
        warning: string;
        info: string;
    };
    typography: {
        fontFamily: {
            regular: string;
            medium: string;
            bold: string;
        };
        fontSize: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
        lineHeight: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
    };
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    borderRadius: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        full: number;
    };
    shadows: {
        sm: object;
        md: object;
        lg: object;
    };
=======
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
    border: string;
    error: string;
    success: string;
    warning: string;
    info: string;
  };
  typography: {
    fontFamily: {
      regular: string;
      medium: string;
      bold: string;
    };
    fontSize: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    lineHeight: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  shadows: {
    sm: object;
    md: object;
    lg: object;
  };
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
}

export type ThemeType = 'defaultTheme' | 'primaryTheme';