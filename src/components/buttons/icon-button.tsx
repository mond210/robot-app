import React, { ReactNode } from "react";
import { IconNames, IconNamesType } from "union-types/icon-name";
import SVG from "react-inlinesvg";
import { IconColors } from "union-types/icon-color";
import { buttonSize, buttonSizeType } from "union-types/button-size";

interface props {
  size?: buttonSizeType;
  iconColor?: typeof IconColors[keyof typeof IconColors];
  iconName?: IconNamesType;
  bgActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({
  size = buttonSize.small,
  iconColor = IconColors["primary"],
  iconName: name = IconNames.info,
  bgActive = true,
  onClick: hadlerClick = () => {},
}: props) => {
  const btnTWClass: string[] = [
    "rounded-full",
    "focus:bg-transparent",
    "focus:outline-none",
    "p-2",
    "transition",
    "ease-in-out",
    "duration-75",
    "active:scale-95",
  ];
  const svgTWClass: string[] = [];
  if (bgActive)
    btnTWClass.push(
      "active:backdrop-brightness-75 dark:active:backdrop-brightness-125"
    );
  svgTWClass.push(iconColor.fillColor);

  var iconSize = 36;
  switch (size) {
    case buttonSize.tiny:
      btnTWClass.push("btn-xs");
      iconSize = 24;
      break;
    case buttonSize.small:
      btnTWClass.push("btn-sm");
      iconSize = 30;
      break;
    case buttonSize.normal:
      btnTWClass.push("btn-md");
      iconSize = 36;
      break;
    case buttonSize.large:
      btnTWClass.push("btn-lg");
      iconSize = 48;
      break;
    default:
      break;
  }

  return (
    <button className={btnTWClass.join(" ")} onClick={hadlerClick}>
      <SVG
        className={svgTWClass.join(" ")}
        src={require(`assets/images/${name}_FILL0_wght400_GRAD0_opsz48.svg`)}
        viewBox="0 0 48 48"
        width={iconSize}
        height={iconSize}
      ></SVG>
    </button>
  );
};

export default IconButton;
