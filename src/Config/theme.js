import { createTheme } from "@mui/material";

export const colors = {
  primary: "#005653", // Jet black for the main background and primary sections
  black: "#0a0a0a",
  hoverColor: "#007b7b",
  secondary: "#00FF9F", // Neon green for secondary buttons and highlights
  accent: "#1E90FF", // Bright blue for action buttons and interactive elements
  background: "white", // Dark gray for general background
  surface: "#232323", // Slightly lighter gray for surfaces like cards
  text: "#E0E0E0", // Off-white for readable text
  textSecondary: "#9E9E9E", // Light gray for secondary text
  error: "#FF4C4C", // Vivid red for error messages
  white: "white", // Pure white for contrast
  gradient: "linear-gradient(45deg, #00FF9F, #1E90FF)", // Neon green to blue gradient
  transparent: "#ffffff00",
  inGradient:
    "linear-gradient(45deg, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4",
  chipShadow: "0px 0px 5px 0px rgba(199,199,199,0.79)",
  shadow: "-2px 13px 23px -7px rgba(69,59,59,0.84)",
};

export const FontFamily = {
  Regular: "EuropaRegular !important",
  Bold: "EuropaBold !important",
};
const EuropaRegular = {
  fontFamily: FontFamily.Regular,
  fontStyle: "normal",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Europa-Regular.ttf') format('ttf')",
};
let theme = createTheme();
theme = createTheme(theme, {
  MuiCssBaseline: {
    "@global": {
      "@font-face": [EuropaRegular],
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    accent: {
      main: colors.accent,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.text,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: "0.5s",
          fontFamily: `EuropaRegular !important`,
          letterSpacing: "0.6px",
          color: colors.textColor,
          overflow: "hidden",
          whiteSpace: "wrap",
          fontSize: 12,
          "@media (max-width: 768px)": {
            fontSize: 12,
          },
        },
        h1: {
          fontSize: 50,
          fontWeight: 700,
          fontFamily: "EuropaBold !important",
          "@media (max-width: 768px)": {
            fontSize: "36px !important",
          },
        },
        h3: {
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "EuropaBold !important",
          "@media (max-width: 768px)": {
            fontSize: "26px !important",
          },
        },
        title: {
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "EuropaBold !important",
          "@media (max-width: 768px)": {
            fontSize: "18px !important",
          },
        },
        tableTitle: {
          fontWeight: "700 !important",
          fontFamily: "EuropaBold !important",
          fontSize: 16,
          "@media (max-width: 768px)": {
            fontSize: "14px !important",
          },
        },
        subTitle: {
          fontWeight: "700 !important",
          fontFamily: "EuropaBold !important",
          fontSize: 14,
          // "@media (max-width: 768px)": {
          //   fontSize: "12px !important",
          // },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.primary,
          transition: "500ms",
          "&:hover": {
            backgroundColor: colors.primary,
            color: colors.white,
          },
          "@media (hover: none)": {
            "&:hover": {
              backgroundColor: "transparent",
              color: `${colors.primary} !important`,
            },
          },
        },
      },
    },
  },
});

export default theme;
