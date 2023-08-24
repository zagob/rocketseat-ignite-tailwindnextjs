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
      <SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 dark:data-[placeholder]:text-zinc-400 data-[placeholder]:text-zinc-600">
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
          className="z-10 shadow-sm rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-700"
        >
          <SelectRadix.Viewport className="outline-none">
            {children}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
