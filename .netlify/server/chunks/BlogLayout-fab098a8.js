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
  B: () => BlogLayout
});
var import_index_7cb4dd95 = __toModule(require("./index-7cb4dd95.js"));
const BlogLayout = (0, import_index_7cb4dd95.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { date } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  return `${title ? `<h1 class="${"headline"}">${(0, import_index_7cb4dd95.e)(title)}</h1>` : ``}
${date ? `<p class="${"date"}">${(0, import_index_7cb4dd95.e)(date)}</p>` : ``}
<div class="${"post"}">${slots.default ? slots.default({}) : ``}</div>

${$$result.head += `${$$result.title = `<title>${(0, import_index_7cb4dd95.e)(title)}</title>`, ""}<meta name="${"description"}"${(0, import_index_7cb4dd95.g)("content", description, 0)} data-svelte="svelte-1law5hj">`, ""}`;
});
