"use client";
import { useEffect, useState } from "react";
import { Dip } from "../types/types";

const API_KEY = "yum-vKkkQHqQboi7c6JF";
const BASE_URL =
  "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=dip";

export const useDipData = () => {
  const [dips, setDips] = useState<Dip[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDipData = async () => {
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
        console.log("fetched dip:", data);
        setDips(data.items);
      } catch (error) {
        console.error("Error fetching dip data:", error);
        setError("Failed to fetch dip data");
      }
    };

    fetchDipData();
  }, []);

  return { dips, error };
};
