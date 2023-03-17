import React from "react";
import IconButton from "./icon-button";
import { IconNames } from "union-types/icon-name";
import COLOR from "union-types/color";
import { IconColors } from "union-types/icon-color";
const StateButton = () => {
  return (
    <div className="flex flex-wrap items-center">
      <IconButton
        iconName={IconNames.precision_manufacturing}
        iconColor={IconColors.neutral}
      ></IconButton>
      <p className="text-xl font-semibold  align-middle">State</p>
    </div>
  );
};

export default StateButton;
