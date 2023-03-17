import React from "react";

type CommonParams = {
  enableSwitch: boolean;
  setEnableSwitch: React.Dispatch<boolean>;
  controlPanel: boolean;
  setControlPanel: React.Dispatch<boolean>;
  controlPanelIndex: number;
  setControlPanelIndex: React.Dispatch<number>;
  mainMenuIndex: number;
  setMainMenuIndex: React.Dispatch<number>;
};

export const CommonContext = React.createContext<CommonParams | undefined>(
  undefined
);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [enableSwitch, setEnableSwitch] = React.useState(false);
  const [controlPanel, setControlPanel] = React.useState(false);
  const [controlPanelIndex, setControlPanelIndex] = React.useState(0);
  const [mainMenuIndex, setMainMenuIndex] = React.useState(0);

  const CommonInfo = {
    enableSwitch,
    setEnableSwitch,
    controlPanel,
    setControlPanel,
    controlPanelIndex,
    setControlPanelIndex,
    mainMenuIndex,
    setMainMenuIndex,
  };

  return (
    <CommonContext.Provider value={CommonInfo}>
      {children}
    </CommonContext.Provider>
  );
};
