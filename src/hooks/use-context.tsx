import React from "react";
import { CommonContext } from "contexts/common";

export const useEnableSwitch = () => {
  const context = React.useContext(CommonContext);
  if (!context) throw new Error("CommonProvider not found");
  return [context.enableSwitch, context.setEnableSwitch] as const;
};

export const useControlPanel = () => {
  const context = React.useContext(CommonContext);
  if (!context) throw new Error("CommonProvider not found");
  return [context.controlPanel, context.setControlPanel] as const;
};

export const useControlPanelIndex = () => {
  const context = React.useContext(CommonContext);
  if (!context) throw new Error("CommonProvider not found");
  return [context.controlPanelIndex, context.setControlPanelIndex] as const;
};

export const useMainMenuIndex = () => {
  const context = React.useContext(CommonContext);
  if (!context) throw new Error("CommonProvider not found");
  return [context.mainMenuIndex, context.setMainMenuIndex] as const;
};
