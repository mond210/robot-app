import React from "react";
import SVG from "react-inlinesvg";
import { IconNames, IconNamesType } from "union-types/icon-name";

export interface tabProps {
  label?: string;
  selected?: boolean;
  fixed?: boolean;
  primary?: boolean;
  icon?: boolean;
  iconName?: IconNamesType;
  content?: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

const TabElement = ({
  label = "Tab",
  selected = false,
  fixed = true,
  primary = true,
  icon = true,
  iconName = IconNames.info,
  onClick: handlerClick = () => {},
}: tabProps) => {
  const baseTabTWClass =
    "flex items-center justify-center transition ease-out duration-75 active:backdrop-brightness-75 dark:active:backdrop-brightness-125";
  const baseTabContentTWClass = `flex justify-center h-full items-center relative text-sm ${
    selected ? "text-primary-original dark:text-primary-dark-original" : ""
  }`;
  const primaryHeight = primary ? "h-16" : "h-12";
  const secondaryIndicator =
    selected && !primary
      ? "border-b-2 border-primary-original dark:border-primary-dark-original"
      : "";

  const primaryIndicator = primary ? (
    <div
      className={`w-full absolute bottom-0 border-t-4 rounded-t border-primary-original dark:border-primary-dark-original ${
        selected ? "visible" : "hidden"
      }`}
    ></div>
  ) : (
    <></>
  );
  const iconElement = icon ? (
    <SVG
      className={`${
        selected
          ? "fill-primary-original dark:fill-primary-dark-original"
          : "fill-black dark:fill-white"
      }`}
      src={require(`assets/images/${iconName}_FILL0_wght400_GRAD0_opsz48.svg`)}
      viewBox="0 0 48 48"
      width={18}
      height={18}
    ></SVG>
  ) : (
    <></>
  );
  return (
    <li
      className={`${baseTabTWClass} ${primaryHeight} ${secondaryIndicator} ${
        fixed ? "flex-grow" : "w-36"
      }
      `}
      onClick={handlerClick}
    >
      <div
        className={`${baseTabContentTWClass} ${
          primary ? "flex-col gap-1" : "flox-row gap-2"
        }`}
      >
        {iconElement}
        <p>{label}</p>
        {primaryIndicator}
      </div>
    </li>
  );
};
export type TabElementType = typeof TabElement[keyof typeof TabElement];
export default TabElement;
