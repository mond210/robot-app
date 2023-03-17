export const ButtonColors = {
  primary: {
    bgColor: "bg-primary-original dark:bg-primary-dark-original",
    fillColor: "fill-primary-on dark:fill-primary-dark-on",
  },
  "primary-inverse": {
    bgColor: "bg-primary-dark-original dark:bg-primary-original",
    fillColor: "fill-primary-dark-on dark:fill-primary-on",
  },
  secondary: {
    bgColor: "bg-secondary-original dark:bg-secondary-dark-original",
    fillColor: "fill-secondary-dark-on dark:fill-secondary-on",
  },
  "secondary-inverse": {
    bgColor: "bg-secondary-dark-original dark:bg-secondary-original",
    fillColor: "fill-secondary-dark-on dark:fill-secondary-on",
  },
  tertiary: {
    bgColor: "bg-tertiary-original dark:bg-tertiary-dark-original",
    fillColor: "fill-tertiary-dark-on dark:fill-tertiary-on",
  },
  "tertiary-inverse": {
    bgColor: "bg-tertiary-dark-original dark:bg-tertiary-original",
    fillColor: "fill-tertiary-dark-on dark:fill-tertiary-on",
  },
  error: {
    bgColor: "bg-error-original dark:bg-error-dark-original",
    fillColor: "fill-error-on dark:fill-error-dark-on",
  },
  "error-inverse": {
    bgColor: "bg-error-dark-original dark:bg-error-original",
    fillColor: "fill-error-dark-on dark:fill-error-on",
  },
  warning: {
    bgColor: "bg-warning-original dark:bg-warning-dark-original",
    fillColor: "fill-warning-on dark:fill-warning-dark-on",
  },
  "warning-inverse": {
    bgColor: "bg-warning-dark-original dark:bg-warning-original",
    fillColor: "fill-warning-dark-on dark:fill-warning-on",
  },
  info: {
    bgColor: "bg-info-original dark:bg-info-dark-original",
    fillColor: "fill-info-on dark:fill-info-dark-on",
  },
  "info-inverse": {
    bgColor: "bg-info-dark-original dark:bg-info-original",
    fillColor: "fill-info-dark-on dark:fill-info-on",
  },
  success: {
    bgColor: "bg-success-original dark:bg-success-dark-original",
    fillColor: "fill-success-on dark:fill-success-dark-on",
  },
  "success-inverse": {
    bgColor: "bg-success-dark-original dark:bg-success-original",
    fillColor: "fill-success-dark-on dark:fill-success-on",
  },
  neutral: {
    bgColor: "bg-neutral-600 dark:bg-neutral-200",
    fillColor: "fill-white dark:fill-neutral-800",
  },
  "neutral-inverse": {
    bgColor: "bg-neutral-200 dark:bg-neutral-600",
    fillColor: "fill-neutral-800 dark:fill-white",
  },
  black: {
    bgColor: "bg-black dark:bg-white",
    fillColor: "fill-white dark:fill-black",
  },
  white: {
    bgColor: "bg-white dark:bg-black",
    fillColor: "fill-black dark:fill-white",
  },
};
export type ButtonColorsType = typeof ButtonColors[keyof typeof ButtonColors];
