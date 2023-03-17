import TopAppBar from "components/app-bars/top-app-bar";
import IconButton from "components/buttons/icon-button";
import TabContainer from "components/tabs/tab-container";
import TabElement from "components/tabs/tab-element";
import ValueBar from "components/value-displays/value-bar";
import { IconColors } from "union-types/icon-color";
import { IconNames } from "union-types/icon-name";

const ControlMonitorValue = () => {
  return (
    <div className="p-4 grid grid-cols-2 grid-rows-3 gap-3">
      <div className="flex flex-col gap-3">
        Joint
        <ValueBar label="J1"></ValueBar>
        <ValueBar label="J2"></ValueBar>
        <ValueBar label="J3"></ValueBar>
        <ValueBar label="J4"></ValueBar>
        <ValueBar label="J5"></ValueBar>
        <ValueBar label="J6"></ValueBar>
      </div>
      <div className="flex flex-col gap-3">
        Pose
        <ValueBar label="X"></ValueBar>
        <ValueBar label="Y"></ValueBar>
        <ValueBar label="Z"></ValueBar>
        <ValueBar label="RX"></ValueBar>
        <ValueBar label="RY"></ValueBar>
        <ValueBar label="RZ"></ValueBar>
      </div>
      <div className="col-span-2 flex">Etc Value</div>
      <div className="flex flex-col gap-3">
        Torque
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
      </div>
      <div className="flex flex-col gap-3">
        Velocity
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
        <ValueBar></ValueBar>
      </div>
    </div>
  );
};
export default ControlMonitorValue;
