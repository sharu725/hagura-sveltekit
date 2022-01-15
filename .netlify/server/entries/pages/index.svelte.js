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
  default: () => Routes,
  load: () => load
});
var import_index_7cb4dd95 = __toModule(require("../../chunks/index-7cb4dd95.js"));
function paginate({ items, pageSize: pageSize2, currentPage }) {
  return items.slice((currentPage - 1) * pageSize2, (currentPage - 1) * pageSize2 + pageSize2);
}
const PREVIOUS_PAGE = "PREVIOUS_PAGE";
const NEXT_PAGE = "NEXT_PAGE";
const ELLIPSIS = "ELLIPSIS";
function generateNavigationOptions({ totalItems, pageSize: pageSize2, currentPage, limit = null, showStepOptions = false }) {
  const totalPages = Math.ceil(totalItems / pageSize2);
  const limitThreshold = getLimitThreshold({ limit });
  const limited = limit && totalPages > limitThreshold;
  let options = limited ? generateLimitedOptions({ totalPages, limit, currentPage }) : generateUnlimitedOptions({ totalPages });
  return showStepOptions ? addStepOptions({ options, currentPage, totalPages }) : options;
}
function generateUnlimitedOptions({ totalPages }) {
  return new Array(totalPages).fill(null).map((value, index) => ({
    type: "number",
    value: index + 1
  }));
}
function generateLimitedOptions({ totalPages, limit, currentPage }) {
  const boundarySize = limit * 2 + 2;
  const firstBoundary = 1 + boundarySize;
  const lastBoundary = totalPages - boundarySize;
  const totalShownPages = firstBoundary + 2;
  if (currentPage <= firstBoundary - limit) {
    return Array(totalShownPages).fill(null).map((value, index) => {
      if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: firstBoundary + 1
        };
      }
      return {
        type: "number",
        value: index + 1
      };
    });
  } else if (currentPage >= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((value, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: lastBoundary - 1
        };
      }
      return {
        type: "number",
        value: lastBoundary + index - 2
      };
    });
  } else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((value, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: currentPage - limit + (index - 2)
        };
      } else if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: currentPage + limit + 1
        };
      }
      return {
        type: "number",
        value: currentPage - limit + (index - 2)
      };
    });
  }
}
function addStepOptions({ options, currentPage, totalPages }) {
  return [
    {
      type: "symbol",
      symbol: PREVIOUS_PAGE,
      value: currentPage <= 1 ? 1 : currentPage - 1
    },
    ...options,
    {
      type: "symbol",
      symbol: NEXT_PAGE,
      value: currentPage >= totalPages ? totalPages : currentPage + 1
    }
  ];
}
function getLimitThreshold({ limit }) {
  const maximumUnlimitedPages = 3;
  const numberOfBoundaryPages = 2;
  return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
const PaginationNav = (0, import_index_7cb4dd95.c)(($$result, $$props, $$bindings, slots) => {
  let options;
  let totalPages;
  (0, import_index_7cb4dd95.d)();
  let { totalItems = 0 } = $$props;
  let { pageSize: pageSize2 = 1 } = $$props;
  let { currentPage = 1 } = $$props;
  let { limit = null } = $$props;
  let { showStepOptions = false } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize2 !== void 0)
    $$bindings.pageSize(pageSize2);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.showStepOptions === void 0 && $$bindings.showStepOptions && showStepOptions !== void 0)
    $$bindings.showStepOptions(showStepOptions);
  options = generateNavigationOptions({
    totalItems,
    pageSize: pageSize2,
    currentPage,
    limit,
    showStepOptions
  });
  totalPages = Math.ceil(totalItems / pageSize2);
  return `<div class="${"pagination-nav"}">${(0, import_index_7cb4dd95.f)(options, (option) => {
    return `<span class="${[
      "option",
      (option.type === "number" ? "number" : "") + " " + (option.type === "symbol" && option.symbol === PREVIOUS_PAGE ? "prev" : "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE ? "next" : "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE && currentPage >= totalPages || option.type === "symbol" && option.symbol === PREVIOUS_PAGE && currentPage <= 1 ? "disabled" : "") + " " + (option.type === "symbol" && option.symbol === ELLIPSIS ? "ellipsis" : "") + " " + (option.type === "number" && option.value === currentPage ? "active" : "")
    ].join(" ").trim()}">${option.type === "number" ? `${slots.number ? slots.number({ value: option.value }) : `
          <span>${(0, import_index_7cb4dd95.e)(option.value)}</span>
        `}` : `${option.type === "symbol" && option.symbol === ELLIPSIS ? `${slots.ellipsis ? slots.ellipsis({}) : `
          <span>...</span>
        `}` : `${option.type === "symbol" && option.symbol === PREVIOUS_PAGE ? `${slots.prev ? slots.prev({}) : `
          <svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}"></path></svg>
        `}` : `${option.type === "symbol" && option.symbol === NEXT_PAGE ? `${slots.next ? slots.next({}) : `
          <svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}"></path></svg>
        `}` : ``}`}`}`}
    </span>`;
  })}</div>`;
});
var LightPaginationNav_svelte_svelte_type_style_lang = "";
var DarkPaginationNav_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--font-size-3:1.25rem}@media screen and (max-width: 600px){h2.svelte-1ktuamh{font-size:var(--font-size-3)}}",
  map: null
};
async function load({ fetch }) {
  const res = await fetch(`/posts.json`);
  const posts = await res.json();
  return { props: { posts } };
}
let pageSize = 2;
const Routes = (0, import_index_7cb4dd95.c)(($$result, $$props, $$bindings, slots) => {
  let paginatedItems;
  let { posts } = $$props;
  let items = posts;
  let currentPage = 1;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  paginatedItems = paginate({ items, pageSize, currentPage });
  return `<main><article><h1 class="${"headline"}">Hagura - Light!</h1>
    <div class="${"article-list py-10"}">${(0, import_index_7cb4dd95.f)(paginatedItems, ({ metadata: { title, description, tags, outline, slug }, path }) => {
    return `<div class="${"mb-4"}"><a sveltekit:prefetch${(0, import_index_7cb4dd95.g)("href", path.replace(/\.[^/.]+$/, ""), 0)}><h2 class="${"svelte-1ktuamh"}">${(0, import_index_7cb4dd95.e)(title)}</h2></a>
          <p>${(0, import_index_7cb4dd95.e)(description)}</p>
        </div>`;
  })}</div>

    ${(0, import_index_7cb4dd95.v)(PaginationNav, "PaginationNav").$$render($$result, {
    totalItems: items.length,
    pageSize,
    currentPage,
    limit: 1,
    showStepOptions: true
  }, {}, {})}</article>
</main>`;
});
