import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";

import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Label";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form">
            <Label htmlFor="firstName">Name</Label>
            <div className="grid gap-6 grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Matheus" />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl defaultValue="Zago" />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <Label htmlFor="email">Email address</Label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                type="email"
                defaultValue="zago@gmail.com"
              />
            </Input.InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <Label htmlFor="photo">
              Your photo
              <span className="text-sm font-normal text-zinc-500 block">
                This will be displayed on your profile.
              </span>
            </Label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <Label htmlFor="email">Role</Label>
            <Input.InputRoot>
              <Input.InputControl id="role" defaultValue="CTO" />
            </Input.InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <Label htmlFor="country">Country</Label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <Label htmlFor="timezone">Timezone</Label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <Label htmlFor="photo">
              Bio
              <span className="text-sm font-normal text-zinc-500 block">
                Write a short introduction.
              </span>
            </Label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <ListOrdered
                      className="w-4 h-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi aliquid, sit accusantium neque distinctio laudantium suscipit possimus deleniti, aperiam quod, eaque facere officia similique incidunt voluptatibus a repellendus facilis."
              />
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <Label htmlFor="photo">
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block">
                Share a few snippets of your work.
              </span>
            </Label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
