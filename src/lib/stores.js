import { writable } from "svelte/store";
import { browser } from "$app/env";

const storedDarkMode = browser && localStorage.getItem("hagura-darkmode");
const isDarkMode = true ? storedDarkMode == "true" : false;
export const darkMode = writable(isDarkMode || false);

darkMode.subscribe(
  (val) => browser && localStorage.setItem("hagura-darkmode", val)
);
