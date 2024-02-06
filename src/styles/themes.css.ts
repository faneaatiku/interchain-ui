import {
  createThemeContract,
  createTheme,
  globalFontFace,
} from "@vanilla-extract/css";
import {
  colors,
  SYSTEM_FONT_STACK,
  letterSpacing,
  lineHeight,
  fontSize,
  fontWeight,
  radii,
  borderStyle,
  borderWidth,
  space,
  zIndex,
} from "./tokens";

const fontInterName = "Inter";

globalFontFace(fontInterName, {
  src: `url(https://fonts.googleapis.com/css?family=Inter)`,
  fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontStyle: `normal`,
  fontDisplay: `swap`,
});

export const boxShadow = {
  xs: `0 0 0 1px rgba(0, 0, 0, 0.05)`,
  sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
  base: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  "2xl": `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
  inset: `inset 0 2px 4px 0 rgba(0,0,0,0.06)`,
  primaryOutline: `0 0 0 2px ${colors.primary200}`,
  none: `none`,
  "dark-lg": `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px`,
};

export const themeContractTemplate = {
  colors: {
    accent: ``,
    accentText: ``,
    primary: ``,
    body: ``,
    background: ``,
    link: ``,
    linkHover: ``,
    text: ``,
    textSecondary: ``,
    textDanger: ``,
    textWarning: ``,
    textPlaceholder: ``,
    textSuccess: ``,
    rewardBg: ``,
    rewardContent: ``,
    cardBg: ``,
    inputBorder: ``,
    inputBorderFocus: ``,
    inputBg: ``,
    inputDangerBorder: "",
    inputDangerBg: "",
    inputDisabledBg: "",
    inputDisabledText: "",
    progressBg: ``,
    progressValue: ``,
    progressCursor: ``,
    trackBg: ``,
    divider: ``,
    menuItemBg: ``,
    menuItemBgSelected: ``,
    menuItemBgHovered: ``,
    menuItemBgActive: ``,
    skeletonBg: ``,
    ...colors,
  },
  font: {
    body: ``,
  },
  space: {
    "0": ``,
    "1": ``,
    "2": ``,
    "3": ``,
    "4": ``,
    "5": ``,
    "6": ``,
    "7": ``,
    "8": ``,
    "9": ``,
    "10": ``,
    "11": ``,
    "12": ``,
    "13": ``,
    "14": ``,
    "15": ``,
    "16": ``,
    "17": ``,
    "18": ``,
    "19": ``,
    "20": ``,
    "21": ``,
    "22": ``,
    "23": ``,
    "24": ``,
    "25": ``,
    "26": ``,
    "27": ``,
    "28": ``,
    "29": ``,
    "30": ``,
    auto: ``,
    full: ``,
    fit: ``,
    max: ``,
    min: ``,
    viewHeight: ``,
    viewWidth: ``,
    containerSm: ``,
    containerMd: ``,
    containerLg: ``,
    containerXl: ``,
    prose: ``,
    none: ``,
  },
  borderWidth: {
    none: ``,
    sm: ``,
    base: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  borderStyle: {
    none: ``,
    solid: ``,
    dotted: ``,
    dashed: ``,
    groove: ``,
    ridge: ``,
    hidden: ``,
    double: ``,
    inset: ``,
    outset: ``,
    unset: ``,
  },
  boxShadow: {
    xs: ``,
    sm: ``,
    base: ``,
    md: ``,
    lg: ``,
    xl: ``,
    "2xl": ``,
    inset: ``,
    primaryOutline: ``,
    none: ``,
    "dark-lg": ``,
  },
  radii: {
    none: ``,
    sm: ``,
    base: ``,
    md: ``,
    lg: ``,
    xl: ``,
    "2xl": ``,
    "3xl": ``,
    "4xl": ``,
    full: ``,
  },
  letterSpacing: {
    tighter: ``,
    tight: ``,
    normal: ``,
    wide: ``,
    wider: ``,
    widest: ``,
  },
  lineHeight: {
    normal: ``,
    none: ``,
    shorter: ``,
    short: ``,
    base: ``,
    tall: ``,
    taller: ``,
  },
  fontWeight: {
    hairline: ``,
    thin: ``,
    light: ``,
    normal: ``,
    medium: ``,
    semibold: ``,
    bold: ``,
    extrabold: ``,
    black: ``,
  },
  fontSize: {
    "3xs": ``,
    "2xs": ``,
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
    "2xl": ``,
    "3xl": ``,
    "4xl": ``,
    "5xl": ``,
    "6xl": ``,
    "7xl": ``,
    "8xl": ``,
    "9xl": ``,
    "10xl": ``,
    "11xl": ``,
    "12xl": ``,
    "13xl": ``,
    "14xl": ``,
    "15xl": ``,
  },
  zIndex: {
    "-1": ``,
    "0": ``,
    "10": ``,
    "20": ``,
    "30": ``,
    "40": ``,
    "50": ``,
    "100": ``,
    auto: ``,
  },
} as const;

export type ThemeContractValues = typeof themeContractTemplate;

// Enforce a theme contract so that light/dark/xxx themes will have the same properties
export const themeVars = createThemeContract(themeContractTemplate);

export const commonVars = {
  font: {
    body: [fontInterName, SYSTEM_FONT_STACK].join(`, `),
  },
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  boxShadow,
  radii,
  borderWidth,
  borderStyle,
  zIndex,
};

export const lightThemeClass = createTheme(themeVars, {
  ...commonVars,
  colors: {
    accent: colors.primary500,
    accentText: "#2C3137",
    primary: colors.primary500,
    body: colors.gray800,
    background: colors.gray100,
    link: colors.blue800,
    linkHover: colors.blue600,
    text: "#2C3137",
    textSecondary: "#697584",
    textDanger: colors.red500,
    textWarning: colors.orange300,
    textSuccess: colors.green400,
    textPlaceholder: `#A2AEBB`,
    rewardBg: "#E5FFE4",
    rewardContent: "#36BB35",
    cardBg: "#F5F7FB",
    inputBorder: "#D1D6DD",
    inputBorderFocus: "#D1D6DD",
    inputBg: "#ffffff",
    inputDangerBorder: "#FF8080",
    inputDangerBg: "#FFDBDB",
    inputDisabledBg: "#CBD3DD",
    inputDisabledText: "#8895A3",
    progressBg: `#EEF2F8`,
    progressValue: `#697584`,
    progressCursor: `#2C3137`,
    divider: `#D9D9D9`,
    menuItemBg: `#ffffff`,
    menuItemBgSelected: `#dce4f0`,
    menuItemBgHovered: `#EEF2F8`,
    menuItemBgActive: `#DDE4ED`,
    skeletonBg: `#DDE4ED`,
    trackBg: `#EBEFF5`,
    ...colors,
  },
});

export const darkThemeClass = createTheme(themeVars, {
  ...commonVars,
  colors: {
    accent: colors.primary400,
    accentText: "#EEF2F8",
    primary: colors.primary400,
    body: colors.gray300,
    background: colors.gray800,
    link: colors.blue300,
    linkHover: colors.blue400,
    text: "#EEF2F8",
    textSecondary: "#A7B4C2",
    textDanger: colors.red400,
    textWarning: colors.orange200,
    textSuccess: "#AEFFAB",
    textPlaceholder: `#8895A3`,
    rewardBg: "#2F4139",
    rewardContent: "#AEFFAB",
    cardBg: "#1D2024",
    inputBorder: "#434B55",
    inputBorderFocus: "#697584",
    inputBg: "#1D2024",
    inputDangerBorder: "#FFD0D0",
    inputDangerBg: "#E17171",
    inputDisabledBg: "#A7B4C2",
    inputDisabledText: "#697584",
    progressBg: `#1D2024`,
    progressValue: `#A7B4C2`,
    progressCursor: `#EEF2F8`,
    divider: colors.gray500,
    menuItemBg: `#1D2024`,
    menuItemBgSelected: `#2e3339`,
    menuItemBgHovered: `#25292E`,
    menuItemBgActive: `#2C3137`,
    skeletonBg: `#3B434D`,
    trackBg: `#49525E`,
    ...colors,
  },
});

export const meshThemeClass = createTheme(themeVars, {
  ...commonVars,
  colors: {
    ...colors,
    accent: colors.primary400,
    accentText: "#0E0E0F",
    primary: colors.primary400,
    black: "#131313",
    body: "#1E1E1F",
    background: colors.gray800,
    link: colors.blue300,
    linkHover: colors.blue400,
    text: "#DAD5E3",
    textSecondary: "#85858E",
    textDanger: colors.red700,
    textWarning: colors.orange200,
    textPlaceholder: `#E2E2E2`,
    textSuccess: "#C0EEA4",
    rewardBg: "#2F4139",
    rewardContent: "#AEFFAB",
    cardBg: "#111113",
    inputBorder: "#3D3D42",
    inputBorderFocus: "#D1D6DD",
    inputBg: "#1D2024",
    inputDangerBorder: "#FFD0D0",
    inputDangerBg: "#E35B5B",
    inputDisabledBg: "#A7B4C2",
    inputDisabledText: "#697584",
    progressBg: `#C0EEA4`,
    progressValue: `#A7B4C2`,
    progressCursor: `#EEF2F8`,
    divider: "#201E25",
    menuItemBg: `#1D2024`,
    menuItemBgSelected: `#2e3339`,
    menuItemBgHovered: `#25292E`,
    menuItemBgActive: `#2C3137`,
    skeletonBg: `#3B434D`,
    trackBg: `#49525E`,
    // Override colors
    gray50: "#F7FAFC",
    gray100: "#E1DBEB",
    gray200: "#858591",
    gray300: "#3F3F48",
    gray400: "#2E2E34",
    gray500: "#27272B",
    gray600: "#202023",
    gray700: "#1A1A1D",
    gray800: "#101012",
    gray900: "#0C0C0D",
  },
});
