"use client";
import { useEffect, useState } from "react";
import { MenuItems } from "../types/types";

const API_KEY = "yum-vKkkQHqQboi7c6JF";
const BASE_URL =
  "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=wonton";

export const useWontonData = () => {
  const [wontons, setWontons] = useState<MenuItems[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWontonData = async () => {
      try {
        const response = await fetch(BASE_URL, {
          headers: {
            accept: "application/json",
            "x-zocom": API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch wonton data: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("fetched wonton:", data);
        setWontons(data.items);
      } catch (error) {
        console.error("Error fetching wonton data:", error);
        setError("Failed to fetch wonton data");
      }
    };

    fetchWontonData();
  }, []);

  return { wontons, error };
};
