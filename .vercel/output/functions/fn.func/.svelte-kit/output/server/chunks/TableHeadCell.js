import { T as rest_props, V as fallback, $ as getContext, _ as spread_attributes, Z as slot, X as bind_props, S as pop, Y as sanitize_props, Q as push, a2 as store_get, a3 as unsubscribe_stores } from "./index.js";
import { twMerge } from "tailwind-merge";
import { a as attr } from "./attributes.js";
function TableHead($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["theadClass", "defaultRow"]);
  push();
  let theadClassfinal;
  let theadClass = fallback($$props["theadClass"], "text-xs uppercase");
  let defaultRow = fallback($$props["defaultRow"], true);
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$sanitized_props.class);
  $$payload.out += `<thead${spread_attributes({ ...$$restProps, class: theadClassfinal })}>`;
  if (defaultRow) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<tr><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></tr>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></thead>`;
  bind_props($$props, { theadClass, defaultRow });
  pop();
}
function TableHeadCell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "padding",
    "sort",
    "defaultDirection",
    "defaultSort",
    "direction"
  ]);
  push();
  var $$store_subs;
  let padding = fallback($$props["padding"], "px-6 py-3");
  let sort = fallback($$props["sort"], null);
  let defaultDirection = fallback($$props["defaultDirection"], "asc");
  let defaultSort = fallback($$props["defaultSort"], false);
  let direction = fallback($$props["direction"], defaultSort ? defaultDirection : null);
  let sorter = getContext("sorter");
  let sortId = Math.random().toString(36).substring(2);
  if (defaultSort) {
    sortItems();
  }
  function sortItems() {
    if (!sort || !sorter) return;
    sorter.update((sorter2) => {
      return {
        id: sortId,
        sort,
        sortDirection: sorter2?.id === sortId ? -sorter2.sortDirection : defaultDirection === "asc" ? 1 : -1
      };
    });
  }
  direction = store_get($$store_subs ??= {}, "$sorter", sorter)?.id === sortId ? store_get($$store_subs ??= {}, "$sorter", sorter).sortDirection === 1 ? "asc" : "desc" : null;
  if (sort && sorter) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<th${spread_attributes({
      ...$$restProps,
      class: $$sanitized_props.class,
      "aria-sort": direction ? `${direction}ending` : void 0
    })}><button${attr("class", twMerge("w-full text-left", "after:absolute after:pl-3", direction === "asc" && 'after:content-["▲"]', direction === "desc" && 'after:content-["▼"]', padding))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></button></th>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<th${spread_attributes({
      ...$$restProps,
      class: twMerge(padding, $$sanitized_props.class)
    })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></th>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    padding,
    sort,
    defaultDirection,
    defaultSort,
    direction
  });
  pop();
}
export {
  TableHead as T,
  TableHeadCell as a
};
