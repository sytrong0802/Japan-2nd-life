import { redirect } from "next/navigation";
import { defaultLocale } from "@/src/config/site";

export default function HomeRedirect() {
  redirect(`/${defaultLocale}`);
}
