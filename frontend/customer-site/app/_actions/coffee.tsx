"use server";

import prisma from "../lib/prisma";

export async function getAllCoffees() {
  try {
    const coffees = await prisma.coffee.findMany({
      where: {
        isAvalable: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return coffees;
  } catch (err) {
    console.error("Error with fetching Coffee", err);
    return [];
  }
}
