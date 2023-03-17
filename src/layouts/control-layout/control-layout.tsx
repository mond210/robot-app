import ControlJog from "./control-jog";
import ControlMonitor from "./control-monitor";
import ControlSetting from "./control-setting";

interface props {
  show: boolean;
}
const ControlLayout = ({ show }: props) => {
  return (
    <div
      className={`bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-20 backdrop-blur-sm absolute h-full w-full rounded-tl-lg p-4 top-0 left-0 z-10 transition duration-300 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="grid auto-rows-fr grid-cols-[1fr_0fr] h-full gap-4">
        <div className="col-span-2 overflow-hidden">
          <ControlMonitor />
        </div>
        <div className="">
          <ControlSetting />
        </div>
        <div className="">
          <ControlJog />
        </div>
      </div>
    </div>
  );
};
export default ControlLayout;
