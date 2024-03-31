import React from "react";
import { pushyourlimits1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-5 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 w-auto`}
    >
      <img
        src={pushyourlimits1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        {/* <div className="flex items-center justify-between"></div> */}
        <div className="body-2 text-n-13">Transform Now</div>
      </div>
    </div>
  );
};

export default Notification;
