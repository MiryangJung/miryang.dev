import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/utils";
import { useFormContext } from "react-hook-form";

export default function MessageInput() {
  const { control, watch } = useFormContext();

  const color = watch("color");

  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormControl>
            <Input {...field} style={{ backgroundColor: color }} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
