export const buttonSize = {
  tiny: "tiny",
  small: "small",
  normal: "normal",
  large: "large",
} as const;
export type buttonSizeType = typeof buttonSize[keyof typeof buttonSize];
