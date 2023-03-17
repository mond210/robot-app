import React from "react";
interface props {
  label?: string;
  value?: number;
}
const ValueBar = ({ label = "Label", value = 5.75 }: props) => {
  return (
    <div className="w-full h-6 rounded-full border-black dark:border-white border flex flex-row items-center justify-between px-4 flex-wrap bg-white dark:bg-black relative overflow-hidden">
      <div className="z-10 text-sm">{label}</div>
      <div className="z-10 text-sm">{value > 0 ? `+${value}` : value}</div>
      <div className="absolute left-0 w-2/3 h-full bg-primary-container dark:bg-primary-dark-container"></div>
    </div>
  );
};
export default ValueBar;
