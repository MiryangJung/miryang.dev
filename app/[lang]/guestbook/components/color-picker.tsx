"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

export const colors = [
	"#FFCAFD",
	"#FFE614",
	"#8FA1FF",
	"#8FFFF9",
	"#FFBE98",
	"#8DB596",
	"#E2C9C9",
	"#ffd9b8",
];

export default function ColorPicker() {
	const { setValue } = useFormContext();

	const onClick = (color: string) => () => {
		setValue("color", color);
	};

	return (
		<div className="flex flex-row flex-wrap items-center gap-2.5">
			{colors.map((color) => (
				<Button
					type="button"
					key={color}
					className="rounded-full w-5 h-5 p-0"
					style={{ backgroundColor: color }}
					onClick={onClick(color)}
				/>
			))}
		</div>
	);
}
