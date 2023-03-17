import TopAppBar from "components/app-bars/top-app-bar";
import IconButton from "components/buttons/icon-button";
import TabContainer from "components/tabs/tab-container";
import TabElement from "components/tabs/tab-element";
import { buttonSize } from "union-types/button-size";
import { IconColors } from "union-types/icon-color";
import { IconNames } from "union-types/icon-name";
import ControlMonitorValue from "./control-monitor-value";

const ControlJog = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-background-original dark:bg-background-dark-original rounded-lg h-full py-2">
      <div className="flex gap-4 items-center justify-center">
        <IconButton iconName={IconNames.chevron_left} size={buttonSize.large} />
        <div className="text-lg font-semibold">J1</div>
        <IconButton
          iconName={IconNames.chevron_right}
          size={buttonSize.large}
        />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <IconButton iconName={IconNames.chevron_left} size={buttonSize.large} />
        <div className="text-lg font-semibold">J2</div>
        <IconButton
          iconName={IconNames.chevron_right}
          size={buttonSize.large}
        />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <IconButton iconName={IconNames.chevron_left} size={buttonSize.large} />
        <div className="text-lg font-semibold">J3</div>
        <IconButton
          iconName={IconNames.chevron_right}
          size={buttonSize.large}
        />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <IconButton iconName={IconNames.chevron_left} size={buttonSize.large} />
        <div className="text-lg font-semibold">J4</div>
        <IconButton
          iconName={IconNames.chevron_right}
          size={buttonSize.large}
        />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <IconButton iconName={IconNames.chevron_left} size={buttonSize.large} />
        <div className="text-lg font-semibold">J5</div>
        <IconButton
          iconName={IconNames.chevron_right}
          size={buttonSize.large}
        />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <IconButton iconName={IconNames.chevron_left} size={buttonSize.large} />
        <div className="text-lg font-semibold">J6</div>
        <IconButton
          iconName={IconNames.chevron_right}
          size={buttonSize.large}
        />
      </div>
    </div>
  );
};
export default ControlJog;
