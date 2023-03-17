import TopAppBar from "components/app-bars/top-app-bar";
import IconButton from "components/buttons/icon-button";
import React from "react";
import { buttonSize } from "union-types/button-size";
import { IconColors } from "union-types/icon-color";
import { IconNames } from "union-types/icon-name";

const DashboardLayout = () => {
  return (
    <div className="">
      <TopAppBar>
        <div className="flex-grow text-lg font-medium">RobotName</div>
        <IconButton
          iconColor={IconColors.black}
          iconName={IconNames.add}
          size={buttonSize.tiny}
        />
        <IconButton
          iconColor={IconColors.black}
          size={buttonSize.tiny}
          iconName={IconNames.more_vert}
        />
      </TopAppBar>
    </div>
  );
};

export default DashboardLayout;
