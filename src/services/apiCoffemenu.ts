import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
}

export async function getMenu(): Promise<MenuItem[]> {
  const { data, error } = await supabase.from("menu").select("*");
  if (error) {
    console.error(error);
    throw new Error("menu not loaded");
  }
  return data as MenuItem[];
}
