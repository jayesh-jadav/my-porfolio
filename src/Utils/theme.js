import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const color = [
  {
    name: "Indian Flag Theme", // Adding a name for easy reference
    colors: {
      primary: "#FF9933", // Saffron (top part of the Indian flag)
      secondary: "#FFFFFF", // White (middle part of the Indian flag)
      accent: "#138808", // Green (bottom part of the Indian flag)
      background: "#F4F4F4", // Light grey for background
      text: "#000080", // Navy blue for text (Ashoka Chakra)
      gradient: "linear-gradient(90deg, #FF9933, #FFFFFF, #138808)",
    },
  },
  {
    name: "Sleek Theme",
    colors: {
      primary: "#2C3E50", //ex: header
      secondary: "#1ABC9C", // ex: secondary button
      accent: "#3498DB", // ex: primary button
      background: "#ECF0F1", // ex: background
      text: "#34495E", // ex: text
    },
  },
  {
    name: "Clean Theme",
    colors: {
      primary: "#F4EDE4", //ex: header
      secondary: "#A3B59C", // ex: secondary button
      accent: "#D35D6E", // ex: primary button
      background: "#F9F9F9", // ex: background
      text: "#706F6F", // ex: text
    },
  },
  {
    name: "Vibrant Theme",
    colors: {
      primary: "#9B59B6", //ex: header
      secondary: "#F1C40F", // ex: secondary button
      accent: "#E91E63", // ex: primary button
      background: "#ECF0F1", // ex: background
      text: "#2E4053", // ex: text
    },
  },
];

const Theme = () => {
  const { newTheme } = useSelector((state) => state.auth);
  console.log("newTheme =======>>>", newTheme);

  return useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: newTheme.colors.primary,
          },
          secondary: {
            main: newTheme.colors.secondary,
          },
          accent: {
            main: newTheme.colors.accent,
          },
          background: {
            default: newTheme.colors.background,
          },
          text: {
            primary: newTheme.colors.text,
          },
        },
        components: {
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: color.primary,
                fontFamily: `EuropaRegular !important`,
                transition: "500ms",
                "&:hover": {
                  backgroundColor: color.primary,
                  color: color.white,
                },
                "@media (hover: none)": {
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: `${color.primary} !important`,
                  },
                },
              },
            },
          },
        },
      }),
    [newTheme] // Recompute theme when state changes
  );
};

export default Theme;
