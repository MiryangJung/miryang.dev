"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

const colors = [
  "#a5c1ca",
  "#7c889f",
  "#6C92BE",
  "#8DB596",
  "#c4a583",
  "#BB8395",
  "#FFBE98",
  "#E2C9C9",
  "#ffd9b8",
];

export default function ColorPicker() {
  const { setValue } = useFormContext();

  const onClick = (color: string) => () => {
    setValue("color", color);
  };

  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {colors.map((color) => (
        <Button
          type="button"
          key={color}
          className="rounded-full w-7 h-5 p-0"
          style={{ backgroundColor: color }}
          onClick={onClick(color)}
        />
      ))}
    </div>
  );
}
