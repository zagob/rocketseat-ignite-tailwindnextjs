/* eslint-disable @next/next/no-img-element */
import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/zagob.png"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Matheus Zago
        </span>
        <span className="text-sm text-zinc-500 truncate dark:text-zinc-400">
          matheusbestana@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-6 text-zinc-500" />
      </Button>
    </div>
  );
}
