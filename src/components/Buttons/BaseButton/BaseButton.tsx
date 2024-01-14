import { forwardRef } from "react";

import styles from "./BaseButton.module.scss";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  iconPostion?: "left" | "right";
};

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ icon, iconPostion, children, ...props }, ref) => {
    const showIconLeft = icon && iconPostion === "left";
    const showIconRight = icon && iconPostion === "right";

    return (
      <button className={styles.BaseButton} {...props} ref={ref}>
        {showIconLeft && icon}
        {children}
        {showIconRight && icon}
      </button>
    );
  }
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
