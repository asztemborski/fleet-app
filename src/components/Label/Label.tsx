"use client";

import { forwardRef } from "react";

import type { MouseEvent } from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ onMouseDown, ...props }, ref) => {
    const handleMouseDown = (event: MouseEvent<HTMLLabelElement>) => {
      onMouseDown?.(event);

      if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
    };

    return <label {...props} ref={ref} onMouseDown={handleMouseDown} />;
  }
);

Label.displayName = "Label";

export default Label;
