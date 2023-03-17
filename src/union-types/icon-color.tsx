export const IconColors = {
  primary: {
    fillColor: "fill-primary-original dark:fill-primary-dark-original",
  },
  "primary-inverse": {
    fillColor: "fill-primary-dark-original dark:fill-primary-original",
  },
  secondary: {
    fillColor: "fill-secondary-original dark:fill-secondary-dark-original",
  },
  "secondary-inverse": {
    fillColor: "fill-secondary-dark-original dark:fill-secondary-original",
  },
  tertiary: {
    fillColor: "fill-tertiary-original dark:fill-tertiary-dark-original",
  },
  "tertiary-inverse": {
    fillColor: "fill-tertiary-dark-original dark:fill-tertiary-original",
  },
  error: {
    fillColor: "fill-error-original dark:fill-error-dark-original",
  },
  "error-inverse": {
    fillColor: "fill-error-dark-original dark:fill-error-original",
  },
  warning: {
    fillColor: "fill-warning-original dark:fill-warning-dark-original",
  },
  "warning-inverse": {
    fillColor: "fill-warning-dark-original dark:fill-warning-original",
  },
  info: {
    fillColor: "fill-info-original dark:fill-info-dark-original",
  },
  "info-inverse": {
    fillColor: "fill-info-dark-original dark:fill-info-original",
  },
  success: {
    fillColor: "fill-success-original dark:fill-success-dark-original",
  },
  "success-inverse": {
    fillColor: "fill-success-dark-original dark:fill-success-original",
  },
  neutral: {
    fillColor: "fill-neutral-900 dark:fill-neutral-100",
  },
  "neutral-inverse": {
    fillColor: "fill-neutral-100 dark:fill-neutral-900",
  },
  important: {
    fillColor: "fill-important-original dark:fill-important-dark-original",
  },
  black: {
    fillColor: "fill-black dark:fill-white",
  },
  white: {
    fillColor: "fill-white dark:fill-black",
  },
};
export type IconColorsType = typeof IconColors[keyof typeof IconColors];
