var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => About
});
var import_index_7cb4dd95 = __toModule(require("../../chunks/index-7cb4dd95.js"));
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".github-button.svelte-9kx54c svg.svelte-9kx54c{height:var(--font-size-default);vertical-align:middle}",
  map: null
};
const About = (0, import_index_7cb4dd95.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"headline"}">About</h1>

<p>Hagura is a port of <a href="${"https://github.com/sharu725/hagura"}">Hagura Jekyll Theme</a>. For more themes please visit
  <a href="${"https://sveltethemes.dev"}">Svelte Themes </a></p>

<p>Does the theme deserve a star?</p>

<a class="${"github-button svelte-9kx54c"}" href="${"https://github.com/sharu725/hagura-sveltekit"}" data-icon="${"octicon-star"}" aria-label="${"Star sharu725/hagura-sveltekit on GitHub"}">Star <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${" svelte-9kx54c"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></a>`;
});
