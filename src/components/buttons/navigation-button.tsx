import React from "react";
import SVG from "react-inlinesvg";
import { IconColors, IconColorsType } from "union-types/icon-color";
import { IconNames, IconNamesType } from "union-types/icon-name";

export interface navigationButtonProps {
  iconColor?: IconColorsType;
  iconName?: IconNamesType;
  label?: string;
  selected?: boolean;
  badge?: boolean;
  badgeCount?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationButton = ({
  iconColor = IconColors.black,
  iconName = IconNames.precision_manufacturing,
  label: menuName = "Menu",
  selected = false,
  badge = false,
  badgeCount = 123,
  onClick: hadlerClick = () => {},
}: navigationButtonProps) => {
  const btnTWClass: string[] = [
    "relative",
    "my-2",
    "transition",
    "ease-in-out",
    "active:scale-95",
    "active:bg-opacity-25",
    "focus:outline-none",
    "flex",
    "flex-col",
    "items-center",
    "text-sm",
  ];
  const svgTWClass: string[] = [];

  return (
    <button className={btnTWClass.join(" ")} onClick={hadlerClick}>
      {badge ? (
        <div className="bg-red-600 dark:bg-red-400 text-white dark:text-black rounded-full text-xs px-1 absolute top-0 right-1.5">
          {badgeCount > 999 ? "999+" : badgeCount}
        </div>
      ) : (
        <></>
      )}
      <div
        className={`px-4 py-1 rounded-full ${
          selected
            ? "bg-primary-original dark:bg-primary-dark-original fill-primary-on dark:fill-primary-dark-on"
            : iconColor.fillColor
        }`}
      >
        <SVG
          className={svgTWClass.join(" ")}
          src={require(`assets/images/${iconName}_FILL0_wght400_GRAD0_opsz48.svg`)}
          viewBox="0 0 48 48"
          width={24}
          height={24}
        ></SVG>
      </div>

      <p>{menuName}</p>
    </button>
  );
};

export default NavigationButton;
