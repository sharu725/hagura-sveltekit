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
  default: () => _layout
});
var import_index_7cb4dd95 = __toModule(require("../../chunks/index-7cb4dd95.js"));
var style = "";
const subscriber_queue = [];
function writable(value, start = import_index_7cb4dd95.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_7cb4dd95.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_7cb4dd95.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_7cb4dd95.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const browser = false;
const darkMode = writable(false);
darkMode.subscribe((val) => browser);
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `:root{--size-8:3rem;--size-2:.5rem}footer.svelte-4l7npo.svelte-4l7npo{margin:var(--size-8) 0}.links.svelte-4l7npo a.svelte-4l7npo{margin-right:var(--size-2)}.mode.svelte-4l7npo.svelte-4l7npo{cursor:pointer;background-size:contain;background-repeat:no-repeat;height:var(--font-size-default);width:var(--font-size-default);background-position:center;display:inline-block;vertical-align:middle;transition-duration:300ms}.dark-mode.svelte-4l7npo.svelte-4l7npo{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='%23999'%3E%3Cpath d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /%3E%3C/svg%3E")}.light-mode.svelte-4l7npo.svelte-4l7npo{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='orange'%3E%3Cpath fill-rule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clip-rule='evenodd' /%3E%3C/svg%3E")}`,
  map: null
};
const Footer = (0, import_index_7cb4dd95.c)(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = (0, import_index_7cb4dd95.b)(darkMode, (value) => $darkMode = value);
  let thisYear = new Date().getFullYear();
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  return `<footer class="${"svelte-4l7npo"}"><div class="${"links svelte-4l7npo"}"><a href="${"/about/"}" class="${"svelte-4l7npo"}">About</a>
    <a href="${"/contact/"}" class="${"svelte-4l7npo"}">Contact</a>
    <a href="${"https://github.com/sharu725/hagura-sveltekit"}" class="${"svelte-4l7npo"}">Download</a>

    <span aria-label="${"Switch Dark or Light Mode"}" title="${"Switch Dark or Light Mode"}" class="${[
    "mode svelte-4l7npo",
    ($darkMode ? "light-mode" : "") + " " + (!$darkMode ? "dark-mode" : "")
  ].join(" ").trim()}"></span></div>
  <p class="${"copyrights"}"><small>Copyrights \xA9 ${(0, import_index_7cb4dd95.e)(thisYear)} | Developed by
      <a href="${"http://webjeda.com"}">webjeda</a></small></p>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--size-6:1.75rem;--size-2:.5rem;--font-size-2:1.1rem;--size-3:1rem;--size-4:1.25rem}.body.svelte-3tmu33{color:var(--text-color);background-color:var(--bg-color);transition:all ease 300ms}.wrapper.svelte-3tmu33{min-height:100vh;max-width:800px;margin:0 auto;padding:var(--size-6) var(--size-2)}@media screen and (max-width: 600px){.body.svelte-3tmu33{font-size:var(--font-size-2)}.wrapper.svelte-3tmu33{padding:var(--size-3) var(--size-4)}}",
  map: null
};
const _layout = (0, import_index_7cb4dd95.c)(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = (0, import_index_7cb4dd95.b)(darkMode, (value) => $darkMode = value);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  return `<div class="${["body svelte-3tmu33", $darkMode ? "dark" : ""].join(" ").trim()}"><div class="${"wrapper svelte-3tmu33"}"><header><a href="${"/"}"><div class="${"home"}"></div></a></header>
    <article>${slots.default ? slots.default({}) : ``}</article>
    ${(0, import_index_7cb4dd95.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</div>
</div>`;
});
