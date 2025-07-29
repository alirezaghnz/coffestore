import { createClient } from "@supabase/supabase-js";
import type { MenuItemTypes } from "../types/menu";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function getMenu(): Promise<MenuItemTypes[]> {
  const { data, error } = await supabase.from("menu").select("*");
  if (error) {
    console.error(error);
    throw new Error("menu not loaded");
  }
  return data as MenuItemTypes[];
}
