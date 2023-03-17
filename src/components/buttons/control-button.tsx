import React from "react";
import { IconNames, IconNamesType } from "union-types/icon-name";
import SVG from "react-inlinesvg";
import { ButtonColors, ButtonColorsType } from "union-types/button-color";

interface props {
  buttonColor?: ButtonColorsType;
  iconName?: IconNamesType;
  visible?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ControlButton = ({
  buttonColor = ButtonColors.primary,
  iconName: name = IconNames.control_camera,
  visible = true,
  onClick = () => {},
}: props) => {
  const btnTWClass: string[] = [
    "active:bg-opacity-25",
    "focus:outline-none",
    "rounded-2xl",
    "p-4",
    "transition",
    "ease-in-out",
    "duration-75",
    "active:scale-95",
    `${visible ? "visible" : "hidden"}`,
  ];
  btnTWClass.push(buttonColor.bgColor);
  btnTWClass.push(buttonColor.fillColor);
  return (
    <button className={btnTWClass.join(" ")} onClick={onClick}>
      <SVG
        src={require(`assets/images/${name}_FILL0_wght400_GRAD0_opsz48.svg`)}
        viewBox="0 0 48 48"
        width={24}
        height={24}
      ></SVG>
    </button>
  );
};

export default ControlButton;
