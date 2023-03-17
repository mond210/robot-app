import IconButton from "components/buttons/icon-button";
import StateButton from "components/buttons/state-button";
import React from "react";
import { buttonSize } from "union-types/button-size";
import { IconColors } from "union-types/icon-color";
import { IconNames } from "union-types/icon-name";

const OuterAppBar = () => {
  return (
    <div className="flex h-full w-full items-center px-4">
      <div className="flex-grow">
        <StateButton></StateButton>
      </div>
      <div className="flex">
        <IconButton
          iconName={IconNames.flash_off}
          iconColor={IconColors.important}
          size={buttonSize.normal}
        />
        <IconButton
          iconName={IconNames.stop_circle}
          iconColor={IconColors.important}
          size={buttonSize.normal}
        />
      </div>
    </div>
  );
};

export default OuterAppBar;
