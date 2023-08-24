import { ComponentProps } from "react";

export interface LabelProps extends ComponentProps<"label"> {}

export function Label(props: LabelProps) {
  return (
    <label
      className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
      {...props}
    >
      {props.children}
    </label>
  );
}
