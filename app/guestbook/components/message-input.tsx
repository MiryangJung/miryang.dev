import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { GuestbookFormValues } from "./form";

export default function MessageInput() {
  const { register, watch } = useFormContext<GuestbookFormValues>();

  const { color } = watch();

  return <Input {...register("message")} style={{ backgroundColor: color }} />;
}
