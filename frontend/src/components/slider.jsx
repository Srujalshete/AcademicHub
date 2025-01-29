import React from "react";
import classNames from "classnames";

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  const containerClasses = classNames(
    "group flex overflow-hidden p-2",
    vertical ? "flex-col" : "flex-row",
    className
  );

  const animationClasses = classNames(
    "flex shrink-0 justify-around",
    vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
    {
      "group-hover:paused": pauseOnHover,
      "reverse": reverse,
    }
  );

  return (
    <div {...props} className={containerClasses}>
      {Array.from({ length: repeat }).map((_, i) => (
        <div key={i} className={animationClasses}>
          {children}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
