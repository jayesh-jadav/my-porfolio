import { createTheme } from "@mui/material";

export const colors = {
  primary: "#0F0F0F", // Jet black for the main background and primary sections
  secondary: "#00FF9F", // Neon green for secondary buttons and highlights
  accent: "#1E90FF", // Bright blue for action buttons and interactive elements
  background: "#141414", // Dark gray for general background
  surface: "#232323", // Slightly lighter gray for surfaces like cards
  text: "#E0E0E0", // Off-white for readable text
  textSecondary: "#9E9E9E", // Light gray for secondary text
  error: "#FF4C4C", // Vivid red for error messages
  white: "#FFFFFF", // Pure white for contrast
  gradient: "linear-gradient(45deg, #00FF9F, #1E90FF)", // Neon green to blue gradient
  transparent: "#ffffff00",
};
let theme = createTheme();
theme = createTheme(theme, {
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
