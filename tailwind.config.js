/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      neutral: colors.neutral,
      red: colors.red,
      primary: {
        original: "#6750A4",
        on: "#FFF",
        container: "#EADDFF",
        "on-container": "#21005D",
      },
      secondary: {
        original: "#625B71",
        on: "#FFF",
        container: "#E8DEF8",
        "on-container": "#1D192B",
      },
      tertiary: {
        original: "#7D5260",
        on: "#FFF",
        container: "#FFD8E4",
        "on-container": "#31111D",
      },
      background: {
        original: "#FFFBFE",
        on: "#1C1B1F",
      },
      outback: {
        original: "#F6EDFF",
      },
      surface: {
        original: "#FFFBFE",
        on: "#1C1B1F",
        variant: "#E7E0EC",
        "on-variant": "#49454F",
      },
      outline: {
        original: "#79747E",
        variant: "#CAC4D0",
      },
      error: {
        original: "#B3261E",
        on: "#FFF",
        container: "#F9DEDC",
        "on-container": "#410E0B",
      },
      warning: {
        original: "#d97706",
        on: "#FFF",
        container: "#fef3c7",
        "on-container": "#78350f",
      },
      success: {
        original: "#65a30d",
        on: "#FFF",
        container: "#ecfccb",
        "on-container": "#365314",
      },
      info: {
        original: "#3b82f6",
        on: "#FFF",
        container: "#bfdbfe",
        "on-container": "#1e3a8a",
      },
      important: {
        original: "#dc2626",
        on: "#FFF",
        container: "#fee2e2",
        "on-container": "#7f1d1d",
      },
      "important-dark": {
        original: "#ef4444",
        on: "#000",
        container: "#7f1d1d",
        "on-container": "#fee2e2",
      },
      "primary-dark": {
        original: "#D0BCFF",
        on: "#3B1E72",
        container: "#4F378B",
        "on-container": "#EADDFF",
      },
      "secondary-dark": {
        original: "#CCC2DC",
        on: "#332D41",
        container: "#4A4458",
        "on-container": "#E8DEF8",
      },
      "tertiary-dark": {
        original: "#EFB8C8",
        on: "#492532",
        container: "#633B48",
        "on-container": "#FFD8E4",
      },
      "background-dark": {
        original: "#1C1B1F",
        on: "#E6E1E5",
      },
      "error-dark": {
        original: "#F2CACA",
        on: "#991b1b",
        container: "#b91c1c",
        "on-container": "#fee2e2",
      },
      "outback-dark": {
        original: "#21005D",
      },
      "surface-dark": {
        original: "#1C1B1F",
        on: "#E6E1E5",
        variant: "#49454F",
        "on-variant": "#CAC4D0",
      },
      "outline-dark": {
        original: "#938F99",
        variant: "#49454F",
      },
      "warning-dark": {
        original: "#fde68a",
        on: "#92400e",
        container: "#b45309",
        "on-container": "#fef3c7",
      },
      "success-dark": {
        original: "#d9f99d",
        on: "#3f6212",
        container: "#4d7c0f",
        "on-container": "#ecfccb",
      },
      "info-dark": {
        original: "#bfdbfe",
        on: "#1e40af",
        container: "#1d4ed8",
        "on-container": "#dbeafe",
      },
    },
  },
};
