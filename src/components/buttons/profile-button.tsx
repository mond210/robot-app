import React from "react";
interface props {
  badge?: boolean;
  badgeCount?: number;
}
const ProfileButton = ({ badge = false, badgeCount = 123 }: props) => {
  const btnTWClass: string[] = [
    "active:bg-opacity-25",
    "focus:outline-none",
    "rounded-2xl",
    "p-4",
    "transition",
    "ease-in-out",
    "active:scale-95",
  ];
  return (
    <button className={btnTWClass.join(" ")}>
      {badge ? (
        <div className="bg-red-600 dark:bg-red-400 text-white dark:text-black rounded-full text-xs px-1 absolute top-0 right-1.5">
          {badgeCount > 999 ? "999+" : badgeCount}
        </div>
      ) : (
        <></>
      )}
      <div className="w-12 h-12 overflow-hidden">
        <img
          className="border-primary-original bg-primary-on dark:border-primary-dark-original dark:bg-primary-dark-on border-2 rounded-full w-full h-full object-cover"
          src={require("assets/images/profile.jpg")}
          alt="profile"
        ></img>
      </div>
    </button>
  );
};

export default ProfileButton;
