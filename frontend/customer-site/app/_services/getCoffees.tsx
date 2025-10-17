import api from "../_lib/api";

export async function getCoffees() {
  try {
    const res = await api.get("/coffees/");
    return {
      data: res.data,
    };
  } catch (err) {
    console.error("Error fetching", err);
    return [];
  }
}
