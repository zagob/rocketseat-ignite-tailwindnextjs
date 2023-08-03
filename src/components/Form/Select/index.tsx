"use client";

import * as SelectRadix from "@radix-ui/react-select";

import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface SelectProps extends SelectRadix.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectRadix.Value placeholder={placeholder} className="text-black" />
        <SelectRadix.Icon>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 shadow-sm rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden"
        >
          <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
