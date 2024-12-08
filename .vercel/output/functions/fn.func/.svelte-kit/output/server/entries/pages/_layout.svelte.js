import { T as rest_props, Q as push, R as setContext, V as fallback, W as element, X as bind_props, S as pop, Y as sanitize_props, Z as slot, _ as spread_attributes, $ as getContext, a0 as spread_props, a1 as invalid_default_snippet, a2 as store_get, a3 as unsubscribe_stores, a4 as sanitize_slots, a5 as copy_payload, a6 as assign_payload } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { twMerge } from "tailwind-merge";
import { e as escape_html, a as attr } from "../../chunks/attributes.js";
import { w as writable } from "../../chunks/index2.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const bgColors = {
  gray: "bg-gray-50 dark:bg-gray-800",
  red: "bg-red-50 dark:bg-gray-800",
  yellow: "bg-yellow-50 dark:bg-gray-800 ",
  green: "bg-green-50 dark:bg-gray-800 ",
  indigo: "bg-indigo-50 dark:bg-gray-800 ",
  purple: "bg-purple-50 dark:bg-gray-800 ",
  pink: "bg-pink-50 dark:bg-gray-800 ",
  blue: "bg-blue-50 dark:bg-gray-800 ",
  light: "bg-gray-50 dark:bg-gray-700",
  dark: "bg-gray-50 dark:bg-gray-800",
  default: "bg-white dark:bg-gray-800",
  dropdown: "bg-white dark:bg-gray-700",
  navbar: "bg-white dark:bg-gray-900",
  navbarUl: "bg-gray-50 dark:bg-gray-800",
  form: "bg-gray-50 dark:bg-gray-700",
  primary: "bg-primary-50 dark:bg-gray-800 ",
  orange: "bg-orange-50 dark:bg-orange-800",
  none: ""
};
function Frame($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "node",
    "use",
    "options",
    "role",
    "transition",
    "params",
    "open"
  ]);
  push();
  const noop = () => {
  };
  setContext("background", true);
  let tag = fallback($$props["tag"], () => $$restProps.href ? "a" : "div", true);
  let color = fallback($$props["color"], "default");
  let rounded = fallback($$props["rounded"], false);
  let border = fallback($$props["border"], false);
  let shadow = fallback($$props["shadow"], false);
  let node = fallback($$props["node"], () => void 0, true);
  let use = fallback($$props["use"], noop);
  let options = fallback($$props["options"], () => ({}), true);
  let role = fallback($$props["role"], () => void 0, true);
  let transition = fallback($$props["transition"], () => void 0, true);
  let params = fallback($$props["params"], () => ({}), true);
  let open = fallback($$props["open"], true);
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  color = color ?? "default";
  setContext("color", color);
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$sanitized_props.class);
  if (transition && open) {
    $$payload.out += "<!--[-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes({ role, ...$$restProps, class: divClass })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    if (open) {
      $$payload.out += "<!--[-->";
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes({ role, ...$$restProps, class: divClass })}`;
        },
        () => {
          $$payload.out += `<!---->`;
          slot($$payload, $$props, "default", {}, null);
          $$payload.out += `<!---->`;
        }
      );
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    tag,
    color,
    rounded,
    border,
    shadow,
    node,
    use,
    options,
    role,
    transition,
    params,
    open
  });
  pop();
}
function ToolbarButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "name",
    "ariaLabel",
    "size",
    "href"
  ]);
  push();
  let color = fallback($$props["color"], "default");
  let name = fallback($$props["name"], () => void 0, true);
  let ariaLabel = fallback($$props["ariaLabel"], () => void 0, true);
  let size = fallback($$props["size"], "md");
  let href = fallback($$props["href"], () => void 0, true);
  const background = getContext("background");
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400 hover:bg-gray-100"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  buttonClass = twMerge("focus:outline-none whitespace-normal", sizing[size], colors[color], color === "default" && (background ? "dark:hover:bg-gray-600" : "dark:hover:bg-gray-700"), $$sanitized_props.class);
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...$$restProps,
      class: buttonClass,
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      type: "button",
      ...$$restProps,
      class: buttonClass,
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { color, name, ariaLabel, size, href });
  pop();
}
function CloseButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["name"]);
  push();
  let name = fallback($$props["name"], "Close");
  ToolbarButton($$payload, spread_props([
    { name },
    $$restProps,
    {
      class: twMerge("ms-auto", $$sanitized_props.class),
      children: invalid_default_snippet,
      $$slots: {
        default: ($$payload2, { svgSize }) => {
          $$payload2.out += `<svg${attr("class", svgSize)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
        }
      }
    }
  ]));
  bind_props($$props, { name });
  pop();
}
function Drawer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  push();
  let activateClickOutside = fallback($$props["activateClickOutside"], true);
  let hidden = fallback($$props["hidden"], true);
  let position = fallback($$props["position"], "fixed");
  let leftOffset = fallback($$props["leftOffset"], "inset-y-0 start-0");
  let rightOffset = fallback($$props["rightOffset"], "inset-y-0 end-0");
  let topOffset = fallback($$props["topOffset"], "inset-x-0 top-0");
  let bottomOffset = fallback($$props["bottomOffset"], "inset-x-0 bottom-0");
  let width = fallback($$props["width"], "w-80");
  let backdrop = fallback($$props["backdrop"], true);
  let bgColor = fallback($$props["bgColor"], "bg-gray-900");
  let bgOpacity = fallback($$props["bgOpacity"], "bg-opacity-75");
  let placement = fallback($$props["placement"], "left");
  let id = fallback($$props["id"], "drawer-example");
  let divClass = fallback($$props["divClass"], "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800");
  let transitionParams = fallback($$props["transitionParams"], () => ({}), true);
  let transitionType = fallback($$props["transitionType"], "fly");
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 start-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity);
  if (!hidden) {
    $$payload.out += "<!--[-->";
    if (backdrop && activateClickOutside) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div role="presentation"${attr("class", backdropDivClass)}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (backdrop && !activateClickOutside) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div role="presentation"${attr("class", backdropDivClass)}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      id,
      ...$$restProps,
      class: twMerge(divClass, width, position, placements[placement], $$sanitized_props.class),
      tabindex: "-1",
      "aria-controls": id,
      "aria-labelledby": id
    })}><!---->`;
    slot($$payload, $$props, "default", { hidden }, null);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    activateClickOutside,
    hidden,
    position,
    leftOffset,
    rightOffset,
    topOffset,
    bottomOffset,
    width,
    backdrop,
    bgColor,
    bgOpacity,
    placement,
    id,
    divClass,
    transitionParams,
    transitionType
  });
  pop();
}
function NavContainer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid"]);
  push();
  let fluid = fallback($$props["fluid"], false);
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    class: twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { fluid });
  pop();
}
function Navbar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid", "navContainerClass"]);
  push();
  var $$store_subs;
  let fluid = fallback($$props["fluid"], false);
  let navContainerClass = fallback($$props["navContainerClass"], "");
  let hidden = writable(true);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  {
    $$restProps.color = $$restProps.color ?? "navbar";
  }
  Frame($$payload, spread_props([
    { tag: "nav" },
    $$restProps,
    {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$sanitized_props.class),
      children: ($$payload2) => {
        NavContainer($$payload2, {
          fluid,
          class: navContainerClass,
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            slot(
              $$payload3,
              $$props,
              "default",
              {
                hidden: store_get($$store_subs ??= {}, "$hidden", hidden),
                toggle,
                NavContainer
              },
              null
            );
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    }
  ]));
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { fluid, navContainerClass });
  pop();
}
function NavBrand($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href"]);
  push();
  let href = fallback($$props["href"], "");
  $$payload.out += `<a${spread_attributes({
    href,
    ...$$restProps,
    class: twMerge("flex items-center", $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></a>`;
  bind_props($$props, { href });
  pop();
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "color", "variation", "ariaLabel"]);
  push();
  let size = fallback($$props["size"], "24");
  let color = fallback($$props["color"], "currentColor");
  let variation = fallback($$props["variation"], "outline");
  let ariaLabel = fallback($$props["ariaLabel"], "bars 3");
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  switch (variation) {
    case "outline":
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
      break;
    case "solid":
      svgpath = svgsolid;
      viewBox = "0 0 24 24";
      break;
    default:
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
  }
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "button",
      tabindex: "0",
      width: size,
      height: size,
      class: $$sanitized_props.class,
      ...$$restProps,
      "aria-label": ariaLabel,
      fill: "none",
      viewBox,
      "stroke-width": "2"
    },
    void 0,
    void 0,
    3
  )}>${html(svgpath)}</svg>`;
  bind_props($$props, { size, color, variation, ariaLabel });
  pop();
}
function NavHamburger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["menuClass", "onClick", "classMenu"]);
  push();
  let menuClass = fallback($$props["menuClass"], "h-6 w-6 shrink-0");
  let onClick = fallback($$props["onClick"], () => void 0, true);
  let classMenu = fallback($$props["classMenu"], "");
  let btnClass = "ms-3 md:hidden";
  getContext("navHidden") ?? writable(true);
  ToolbarButton($$payload, spread_props([
    { name: "Open main menu" },
    $$restProps,
    {
      class: twMerge(btnClass, $$sanitized_props.class),
      children: ($$payload2) => {
        Menu($$payload2, { class: twMerge(menuClass, classMenu) });
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { menuClass, onClick, classMenu });
  pop();
}
function NavLi($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "activeClass", "nonActiveClass"]);
  push();
  let active, liClass;
  let href = fallback($$props["href"], "");
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let nonActiveClass = fallback($$props["nonActiveClass"], () => void 0, true);
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  active = navUrl ? href === navUrl : false;
  liClass = twMerge("block py-2 pe-4 ps-3 md:p-0 rounded md:border-0", active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$sanitized_props.class);
  $$payload.out += `<li>`;
  element(
    $$payload,
    href ? "a" : "div",
    () => {
      $$payload.out += `${spread_attributes({
        role: href ? void 0 : "link",
        href,
        ...$$restProps,
        class: liClass
      })}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!---->`;
    }
  );
  $$payload.out += `</li>`;
  bind_props($$props, { href, activeClass, nonActiveClass });
  pop();
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;
  else return 1 - v;
}
function NavUl($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass",
    "classUl"
  ]);
  push();
  var $$store_subs;
  let activeUrl = fallback($$props["activeUrl"], "");
  let divClass = fallback($$props["divClass"], "w-full md:block md:w-auto");
  let ulClass = fallback($$props["ulClass"], "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium");
  let hidden = fallback($$props["hidden"], () => void 0, true);
  let slideParams = fallback($$props["slideParams"], () => ({ delay: 250, duration: 500, easing: sineIn }), true);
  let activeClass = fallback($$props["activeClass"], "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent");
  let nonActiveClass = fallback($$props["nonActiveClass"], "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent");
  let classUl = fallback($$props["classUl"], "");
  const activeUrlStore = writable("");
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  let _hidden;
  let _divClass;
  let _ulClass;
  {
    activeUrlStore.set(activeUrl);
  }
  _hidden = hidden ?? store_get($$store_subs ??= {}, "$hiddenStore", hiddenStore) ?? true;
  _divClass = twMerge(divClass, $$sanitized_props.class);
  _ulClass = twMerge(ulClass, classUl);
  if (!_hidden) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...$$restProps,
      class: _divClass,
      role: "button",
      tabindex: "0"
    })}>`;
    Frame($$payload, {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({
      ...$$restProps,
      class: _divClass,
      hidden: _hidden
    })}><ul${attr("class", _ulClass)}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></ul></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    activeUrl,
    divClass,
    ulClass,
    hidden,
    slideParams,
    activeClass,
    nonActiveClass,
    classUl
  });
  pop();
}
function Sidebar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "asideClass",
    "nonActiveClass",
    "activeClass",
    "ariaLabel"
  ]);
  push();
  let activeUrl = fallback($$props["activeUrl"], "");
  let asideClass = fallback($$props["asideClass"], "w-64");
  let nonActiveClass = fallback($$props["nonActiveClass"], "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700");
  let activeClass = fallback($$props["activeClass"], "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700");
  let ariaLabel = fallback($$props["ariaLabel"], "Sidebar");
  const activeUrlStore = writable("");
  setContext("sidebarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  {
    activeUrlStore.set(activeUrl);
  }
  $$payload.out += `<aside${spread_attributes({
    ...$$restProps,
    class: twMerge(asideClass, $$sanitized_props.class),
    "aria-label": ariaLabel
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></aside>`;
  bind_props($$props, {
    activeUrl,
    asideClass,
    nonActiveClass,
    activeClass,
    ariaLabel
  });
  pop();
}
function SidebarItem($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "action",
    "params",
    "href",
    "label",
    "spanClass",
    "activeClass",
    "nonActiveClass"
  ]);
  push();
  let active, aClass;
  let action = fallback($$props["action"], () => {
  });
  let params = fallback($$props["params"], () => ({}), true);
  let href = fallback($$props["href"], "");
  let label = fallback($$props["label"], "");
  let spanClass = fallback($$props["spanClass"], "ms-3");
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let nonActiveClass = fallback($$props["nonActiveClass"], () => void 0, true);
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  active = sidebarUrl ? href === sidebarUrl : false;
  aClass = twMerge(active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$sanitized_props.class);
  $$payload.out += `<li><a${spread_attributes({ ...$$restProps, href, class: aClass })}><!---->`;
  slot($$payload, $$props, "icon", {}, null);
  $$payload.out += `<!----> <span${attr("class", spanClass)}>${escape_html(label)}</span> `;
  if ($$slots.subtext) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "subtext", {}, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></a></li>`;
  bind_props($$props, {
    action,
    params,
    href,
    label,
    spanClass,
    activeClass,
    nonActiveClass
  });
  pop();
}
function SidebarGroup($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["ulClass", "borderClass", "border"]);
  push();
  let ulClass = fallback($$props["ulClass"], "space-y-2");
  let borderClass = fallback($$props["borderClass"], "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700");
  let border = fallback($$props["border"], false);
  if (border) {
    ulClass += " " + borderClass;
  }
  $$payload.out += `<ul${spread_attributes({
    ...$$restProps,
    class: twMerge(ulClass, $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { ulClass, borderClass, border });
  pop();
}
function SidebarWrapper($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["divClass"]);
  push();
  let divClass = fallback($$props["divClass"], "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800");
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    class: twMerge(divClass, $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { divClass });
  pop();
}
function Cog($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size,
    role = ctx.role || "img",
    color = ctx.color || "currentColor",
    variation = ctx.variation || "outline",
    strokeWidth = ctx.strokeWidth || "1.5",
    title,
    desc,
    ariaLabel = "cog",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  let viewBox = (() => {
    if (variation === "mini") return "0 0 20 20";
    if (variation === "micro") return "0 0 16 16";
    return "0 0 24 24";
  })();
  let variationSize = (() => {
    if (variation === "mini") return "20";
    if (variation === "micro") return "16";
    return "24";
  })();
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      ...restProps,
      role,
      width: size || variationSize,
      height: size || variationSize,
      fill: "none",
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox,
      "stroke-width": strokeWidth
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (variation === "outline") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<path d="M4.50073 11.9993C4.50073 16.1414 7.8586 19.4993 12.0007 19.4993C16.1429 19.4993 19.5007 16.1414 19.5007 11.9993M4.50073 11.9993C4.50073 7.85712 7.8586 4.49925 12.0007 4.49925C16.1429 4.49926 19.5007 7.85712 19.5007 11.9993M4.50073 11.9993L3.00073 11.9993M19.5007 11.9993L21.0007 11.9993M19.5007 11.9993L12.0007 11.9993M3.54329 15.0774L4.95283 14.5644M19.0482 9.43411L20.4578 8.92108M5.1062 17.785L6.25527 16.8208M17.7459 7.17897L18.895 6.21479M7.50064 19.7943L8.25064 18.4952M15.7506 5.50484L16.5006 4.2058M10.4378 20.8633L10.6983 19.386M13.303 4.61393L13.5635 3.13672M13.5635 20.8633L13.303 19.3861M10.6983 4.61397L10.4378 3.13676M16.5007 19.7941L15.7507 18.4951M7.50068 4.20565L12.0007 11.9993M18.8952 17.7843L17.7461 16.8202M6.25542 7.17835L5.10635 6.21417M20.458 15.0776L19.0485 14.5646M4.95308 9.43426L3.54354 8.92123M12.0007 11.9993L8.25073 18.4944"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"></path>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (variation === "mini") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<path d="M13.0242 9.24999C13.4944 9.24999 13.8513 8.81719 13.6614 8.38695C13.0412 6.9812 11.6352 6 10 6C9.85376 6 9.70936 6.00785 9.56719 6.02314C9.09929 6.07349 8.90249 6.59904 9.13779 7.00659L10.2165 8.87499C10.3505 9.10704 10.5981 9.24999 10.866 9.24999L13.0242 9.24999Z"${attr("fill", color)}></path><path d="M7.83948 7.75785C7.60411 7.35018 7.05027 7.25778 6.77194 7.63742C6.28661 8.29942 6 9.11624 6 10C6 10.8838 6.28662 11.7006 6.77198 12.3626C7.05031 12.7423 7.60415 12.6499 7.83952 12.2422L8.91751 10.3751C9.05149 10.143 9.05149 9.85711 8.91751 9.62506L7.83948 7.75785Z"${attr("fill", color)}></path><path d="M9.13785 12.9934C8.90255 13.401 9.09936 13.9265 9.56726 13.9769C9.70941 13.9922 9.85379 14 10 14C11.6352 14 13.0412 13.0188 13.6614 11.613C13.8513 11.1828 13.4944 10.75 13.0242 10.75H10.8661C10.5982 10.75 10.3506 10.8929 10.2166 11.125L9.13785 12.9934Z"${attr("fill", color)}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1295 4.34724L14.7744 3.23028C14.9815 2.87156 14.8586 2.41286 14.4999 2.20576C14.1412 1.99865 13.6825 2.12156 13.4754 2.48028L12.8311 3.59615C12.1832 3.30927 11.4835 3.11784 10.75 3.03971V1.75C10.75 1.33579 10.4142 1 10 1C9.58579 1 9.25 1.33579 9.25 1.75V3.03971C8.51649 3.11784 7.81683 3.30927 7.16886 3.59616L6.52462 2.4803C6.31752 2.12158 5.85882 1.99867 5.5001 2.20578C5.14139 2.41289 5.01848 2.87158 5.22559 3.2303L5.87046 4.34725C5.28784 4.7736 4.77359 5.28784 4.34725 5.87046L3.23009 5.22547C2.87137 5.01836 2.41267 5.14127 2.20557 5.49999C1.99846 5.85871 2.12137 6.3174 2.48009 6.52451L3.59615 7.16887C3.30927 7.81683 3.11784 8.51649 3.03971 9.25H1.75C1.33579 9.25 1 9.58579 1 10C1 10.4142 1.33579 10.75 1.75 10.75H3.03971C3.11784 11.4835 3.30926 12.1832 3.59614 12.8311L2.48009 13.4755C2.12137 13.6826 1.99846 14.1413 2.20557 14.5C2.41267 14.8587 2.87137 14.9816 3.23009 14.7745L4.34723 14.1295C4.77355 14.7121 5.28775 15.2263 5.87031 15.6526L5.22538 16.7697C5.01827 17.1284 5.14118 17.5871 5.4999 17.7942C5.85861 18.0013 6.31731 17.8784 6.52441 17.5197L7.1687 16.4038C7.81671 16.6907 8.51643 16.8822 9.25 16.9603V18.25C9.25 18.6642 9.58579 19 10 19C10.4142 19 10.75 18.6642 10.75 18.25V16.9603C11.4836 16.8822 12.1833 16.6907 12.8313 16.4038L13.4756 17.5197C13.6827 17.8784 14.1414 18.0013 14.5001 17.7942C14.8588 17.5871 14.9817 17.1284 14.7746 16.7697L14.1297 15.6526C14.7122 15.2263 15.2264 14.7121 15.6527 14.1296L16.7698 14.7745C17.1285 14.9816 17.5872 14.8587 17.7943 14.5C18.0014 14.1413 17.8785 13.6826 17.5198 13.4755L16.4038 12.8312C16.6907 12.1832 16.8822 11.4835 16.9603 10.75H18.25C18.6642 10.75 19 10.4142 19 10C19 9.58579 18.6642 9.25 18.25 9.25H16.9603C16.8822 8.51646 16.6907 7.81678 16.4038 7.16879L17.5198 6.52451C17.8785 6.3174 18.0014 5.85871 17.7943 5.49999C17.5872 5.14127 17.1285 5.01836 16.7698 5.22547L15.6527 5.8704C15.2264 5.2878 14.7121 4.77358 14.1295 4.34724ZM10 4.5C9.0112 4.5 8.08334 4.76094 7.28153 5.2177C7.27126 5.22431 7.26079 5.2307 7.2501 5.23687C7.23978 5.24283 7.22937 5.24852 7.21889 5.25393C6.40668 5.7309 5.72776 6.4104 5.25148 7.22307C5.24674 7.2321 5.2418 7.24107 5.23666 7.24999C5.2313 7.25926 5.22578 7.26837 5.2201 7.27733C4.76185 8.0801 4.5 9.00947 4.5 10C4.5 10.9904 4.76179 11.9197 5.21995 12.7224C5.22569 12.7314 5.23126 12.7406 5.23666 12.75C5.24185 12.759 5.24683 12.768 5.25161 12.7772C5.72819 13.5903 6.40765 14.27 7.2205 14.747C7.23036 14.7521 7.24017 14.7575 7.2499 14.7631C7.26 14.769 7.26992 14.775 7.27965 14.7812C8.08189 15.2387 9.01042 15.5 10 15.5C10.9897 15.5 11.9184 15.2386 12.7207 14.781C12.7303 14.7749 12.7401 14.7689 12.7501 14.7632C12.7597 14.7576 12.7694 14.7523 12.7792 14.7472C13.5913 14.2707 14.2704 13.5918 14.7469 12.7797C14.7521 12.7697 14.7575 12.7598 14.7632 12.75C14.7691 12.7398 14.7751 12.7298 14.7814 12.72C15.2387 11.9179 15.5 10.9894 15.5 10C15.5 9.01046 15.2387 8.08196 14.7813 7.27974C14.7751 7.27001 14.769 7.26009 14.7632 7.24999C14.7576 7.24025 14.7522 7.23044 14.7471 7.22057C14.2708 6.40891 13.5923 5.73024 12.7808 5.25375C12.7704 5.24838 12.7601 5.24275 12.7499 5.23685C12.7393 5.23074 12.7289 5.22441 12.7188 5.21788C11.9169 4.761 10.9889 4.5 10 4.5Z"${attr("fill", color)}></path>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (variation === "micro") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 1.93782C4.85872 1.73072 5.31741 1.85362 5.52452 2.21234L6.17746 3.34326C6.52824 3.20547 6.88793 3.11004 7.25 3.05521V1.75C7.25 1.33579 7.58579 1 8 1C8.41421 1 8.75 1.33579 8.75 1.75V3.05638C9.11684 3.11228 9.47665 3.20868 9.82229 3.3437L10.4755 2.21234C10.6826 1.85362 11.1413 1.73072 11.5 1.93782C11.8587 2.14493 11.9816 2.60362 11.7745 2.96234L11.1219 4.09269C11.4081 4.3212 11.6718 4.58369 11.9067 4.87842L13.0377 4.22548C13.3964 4.01837 13.8551 4.14128 14.0622 4.5C14.2693 4.85872 14.1464 5.31741 13.7877 5.52452L12.6567 6.17746C12.7945 6.52824 12.89 6.88793 12.9448 7.25H14.25C14.6642 7.25 15 7.58579 15 8C15 8.41421 14.6642 8.75 14.25 8.75H12.9436C12.8877 9.11684 12.7913 9.47665 12.6563 9.82229L13.7877 10.4755C14.1464 10.6826 14.2693 11.1413 14.0622 11.5C13.8551 11.8587 13.3964 11.9816 13.0377 11.7745L11.9073 11.1219C11.6788 11.4081 11.4163 11.6718 11.1216 11.9067L11.7745 13.0377C11.9816 13.3964 11.8587 13.8551 11.5 14.0622C11.1413 14.2693 10.6826 14.1464 10.4755 13.7877L9.82254 12.6567C9.47176 12.7945 9.11207 12.89 8.75 12.9448L8.75 14.25C8.75 14.6642 8.41421 15 8 15C7.58579 15 7.25 14.6642 7.25 14.25V12.9436C6.88316 12.8877 6.52335 12.7913 6.17771 12.6563L5.52452 13.7877C5.31741 14.1464 4.85872 14.2693 4.5 14.0622C4.14128 13.8551 4.01837 13.3964 4.22548 13.0377L4.87809 11.9073C4.59194 11.6788 4.32816 11.4163 4.09326 11.1216L2.96234 11.7745C2.60362 11.9816 2.14493 11.8587 1.93782 11.5C1.73072 11.1413 1.85362 10.6826 2.21234 10.4755L3.34326 9.82254C3.20547 9.47176 3.11004 9.11207 3.05521 8.75H1.75C1.33579 8.75 1 8.41421 1 8C1 7.58579 1.33579 7.25 1.75 7.25H3.05638C3.11228 6.88316 3.20868 6.52335 3.3437 6.17771L2.21234 5.52452C1.85362 5.31741 1.73072 4.85872 1.93782 4.5C2.14493 4.14128 2.60362 4.01837 2.96234 4.22548L4.09269 4.87809C4.3212 4.59194 4.58369 4.32816 4.87842 4.09326L4.22548 2.96234C4.01837 2.60362 4.14128 2.14493 4.5 1.93782ZM5.64075 5.41366C4.45052 6.4973 4.13113 8.29892 4.96891 9.75C5.15372 10.0701 5.38146 10.35 5.64065 10.5865L7.13397 8L5.64075 5.41366ZM8.43301 8.75L6.94016 11.3357C7.84505 11.6229 8.86302 11.5432 9.75 11.0311C10.637 10.519 11.215 9.67728 11.4187 8.75H8.43301ZM11.4197 7.25H8.43301L6.93979 4.66366C8.47336 4.17471 10.1933 4.79892 11.0311 6.25C11.2159 6.5701 11.3444 6.90726 11.4197 7.25Z"${attr("fill", color)}></path>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<path d="M17.0039 10.4067C17.1423 10.8417 16.7882 11.2491 16.3317 11.2491H12.8667C12.5988 11.2491 12.3512 11.1062 12.2172 10.8742L10.4845 7.87324C10.2561 7.47765 10.4321 6.9671 10.8784 6.86997C11.2398 6.79133 11.6151 6.7499 12 6.7499C14.344 6.7499 16.3293 8.2861 17.0039 10.4067Z"${attr("fill", color)}></path><path d="M8.11938 8.46385C8.42728 8.12615 8.95767 8.22878 9.18619 8.62454L10.9182 11.6241C11.0522 11.8562 11.0522 12.1421 10.9182 12.3742L9.18577 15.3748C8.95726 15.7706 8.42679 15.8732 8.11891 15.5354C7.26853 14.6025 6.75 13.3617 6.75 11.9999C6.75 10.6378 7.26872 9.39687 8.11938 8.46385Z"${attr("fill", color)}></path><path d="M10.8778 17.1297C10.4315 17.0325 10.2555 16.522 10.4839 16.1264L12.2172 13.1241C12.3512 12.8921 12.5988 12.7491 12.8668 12.7491H16.3322C16.7886 12.7491 17.1426 13.1564 17.0044 13.5914C16.3304 15.7129 14.3447 17.2499 12 17.2499C11.6148 17.2499 11.2393 17.2084 10.8778 17.1297Z"${attr("fill", color)}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0007 12.7491C21.4149 12.7491 21.7507 12.4134 21.7507 11.9991C21.7507 11.5849 21.4149 11.2491 21.0007 11.2491H20.2171C20.1753 10.785 20.095 10.3319 19.9795 9.89316L20.7143 9.62573C21.1035 9.48406 21.3042 9.05368 21.1625 8.66444C21.0209 8.27521 20.5905 8.07452 20.2012 8.21619L19.4664 8.48365C19.2695 8.06623 19.0386 7.66798 18.7773 7.29248L19.3771 6.7892C19.6944 6.52295 19.7358 6.04988 19.4695 5.73258C19.2033 5.41527 18.7302 5.37388 18.4129 5.64014L17.8126 6.14384C17.4869 5.82057 17.1344 5.52427 16.7588 5.2586L17.1502 4.58068C17.3573 4.22196 17.2344 3.76327 16.8756 3.55616C16.5169 3.34906 16.0582 3.47196 15.8511 3.83068L15.4604 4.50741C15.0465 4.31594 14.614 4.15776 14.1664 4.03632L14.3021 3.26684C14.374 2.85892 14.1016 2.46992 13.6937 2.39799C13.2858 2.32607 12.8968 2.59844 12.8249 3.00636L12.6889 3.77743C12.462 3.75869 12.2325 3.74914 12.0007 3.74914C11.769 3.74914 11.5394 3.75871 11.3124 3.77748L11.1764 3.00641C11.1045 2.59848 10.7155 2.32611 10.3076 2.39804C9.89966 2.46996 9.62728 2.85896 9.69921 3.26688L9.83492 4.03655C9.38749 4.15799 8.95506 4.31614 8.54113 4.50758L8.15018 3.8305C7.94306 3.47179 7.48436 3.3489 7.12565 3.55602C6.76694 3.76314 6.64405 4.22184 6.85117 4.58055L7.24273 5.25869C6.86722 5.52423 6.51483 5.82042 6.18921 6.14362L5.58845 5.63952C5.27114 5.37326 4.79807 5.41465 4.53182 5.73196C4.26557 6.04926 4.30696 6.52233 4.62426 6.78858L5.22448 7.29223C4.96309 7.66784 4.73209 8.06625 4.53509 8.48387L3.80006 8.21634C3.41082 8.07467 2.98044 8.27536 2.83877 8.6646C2.6971 9.05383 2.89779 9.48421 3.28703 9.62588L4.02196 9.89337C3.90647 10.3321 3.8262 10.785 3.78437 11.2491H3.00073C2.58652 11.2491 2.25073 11.5849 2.25073 11.9991C2.25073 12.4134 2.58652 12.7491 3.00073 12.7491H3.78437C3.82619 13.2132 3.90644 13.6663 4.02192 14.105L3.28678 14.3725C2.89755 14.5142 2.69685 14.9446 2.83852 15.3338C2.98019 15.7231 3.41058 15.9238 3.79981 15.7821L4.53502 15.5145C4.73205 15.9322 4.9631 16.3307 5.22461 16.7064L4.62411 17.2103C4.30681 17.4766 4.26542 17.9496 4.53167 18.2669C4.79792 18.5842 5.27099 18.6256 5.58829 18.3594L6.1894 17.855C6.51507 18.1782 6.86754 18.4744 7.2432 18.74L6.85112 19.4191C6.64401 19.7779 6.76692 20.2366 7.12564 20.4437C7.48436 20.6508 7.94305 20.5279 8.15016 20.1691L8.54161 19.4911C8.9554 19.6825 9.38772 19.8406 9.83514 19.962L9.6992 20.7329C9.62727 21.1408 9.89965 21.5298 10.3076 21.6017C10.7155 21.6737 11.1045 21.4013 11.1764 20.9934L11.3126 20.2208C11.5395 20.2396 11.769 20.2491 12.0007 20.2491C12.2324 20.2491 12.4618 20.2396 12.6887 20.2209L12.8249 20.9934C12.8968 21.4013 13.2858 21.6737 13.6937 21.6018C14.1016 21.5299 14.374 21.1409 14.3021 20.7329L14.1662 19.962C14.6136 19.8406 15.046 19.6825 15.4598 19.4911L15.8512 20.169C16.0583 20.5277 16.517 20.6506 16.8757 20.4435C17.2344 20.2364 17.3573 19.7777 17.1502 19.419L16.7582 18.7401C17.134 18.4744 17.4866 18.178 17.8123 17.8547L18.4131 18.3588C18.7304 18.625 19.2034 18.5836 19.4697 18.2663C19.7359 17.949 19.6946 17.4759 19.3772 17.2097L18.7771 16.7061C19.0385 16.3305 19.2694 15.9322 19.4664 15.5147L20.2015 15.7822C20.5907 15.9239 21.0211 15.7232 21.1628 15.334C21.3044 14.9448 21.1038 14.5144 20.7145 14.3727L19.9795 14.1052C20.095 13.6664 20.1753 13.2133 20.2171 12.7491H21.0007ZM18.3435 9.6905C18.3374 9.67387 18.332 9.65717 18.3272 9.64042C18.0593 8.92237 17.6728 8.26219 17.1913 7.68375C17.1846 7.67631 17.1779 7.66871 17.1714 7.66094C17.165 7.65333 17.1588 7.64564 17.1528 7.63786C16.6625 7.0593 16.0766 6.5644 15.4194 6.17763C15.4046 6.17036 15.3901 6.16257 15.3756 6.15424C15.3608 6.14569 15.3464 6.1367 15.3324 6.12731C14.6882 5.761 13.9778 5.49764 13.2236 5.35962C13.2067 5.35781 13.1897 5.35541 13.1728 5.35242C13.1563 5.34952 13.1401 5.3461 13.1241 5.34219C12.7588 5.28099 12.3835 5.24914 12.0007 5.24914C11.6183 5.24914 11.2435 5.28087 10.8788 5.34184C10.8623 5.34592 10.8455 5.34946 10.8285 5.35246C10.8109 5.35556 10.7934 5.35802 10.7759 5.35985C10.005 5.50106 9.28044 5.77317 8.62548 6.15217C7.94757 6.54444 7.34445 7.05092 6.84231 7.6452C6.83827 7.65028 6.83415 7.65532 6.82995 7.66032C6.82783 7.66286 6.82568 7.66538 6.82353 7.66788C6.82127 7.6705 6.819 7.6731 6.81671 7.67568C6.33198 8.25625 5.94308 8.91936 5.67409 9.64078C5.66929 9.65746 5.66388 9.6741 5.65785 9.69066C5.65182 9.70722 5.64527 9.72345 5.63822 9.73932C5.38727 10.4459 5.25073 11.2066 5.25073 11.9991C5.25073 12.7935 5.38795 13.5558 5.63997 14.2637C5.64626 14.2781 5.65215 14.2928 5.6576 14.3078C5.66305 14.3227 5.66799 14.3378 5.67243 14.3528C6.21997 15.8244 7.26613 17.0534 8.60555 17.8344C8.60934 17.8364 8.61311 17.8385 8.61688 17.8406C8.6198 17.8422 8.62272 17.8439 8.62564 17.8456C8.63265 17.8496 8.63958 17.8538 8.64641 17.858C9.3043 18.2355 10.0318 18.5053 10.8049 18.6435C10.8128 18.6447 10.8207 18.6459 10.8285 18.6473C10.8358 18.6486 10.8431 18.65 10.8504 18.6515C11.2242 18.7157 11.6086 18.7491 12.0007 18.7491C12.3929 18.7491 12.7773 18.7157 13.1512 18.6515C13.1584 18.65 13.1655 18.6486 13.1728 18.6474C13.1805 18.646 13.1883 18.6448 13.1961 18.6436C13.9675 18.5058 14.6935 18.2369 15.3503 17.8608C15.3586 17.8555 15.3671 17.8504 15.3757 17.8454C15.3839 17.8407 15.3922 17.8361 15.4006 17.8317C16.07 17.4406 16.666 16.9376 17.163 16.3484L17.1716 16.338L17.1808 16.3272C17.6679 15.7448 18.0587 15.079 18.3285 14.3543C18.333 14.3388 18.3381 14.3233 18.3437 14.3079C18.3493 14.2925 18.3554 14.2773 18.3619 14.2625C18.6137 13.555 18.7507 12.7931 18.7507 11.9991C18.7507 11.2066 18.6141 10.4459 18.3632 9.73945C18.3561 9.72349 18.3495 9.70717 18.3435 9.6905Z"${attr("fill", color)}></path>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></svg>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let backdrop = false;
  let activateClickOutside = true;
  let drawerHidden = false;
  let spanClass = "pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white";
  let divClass = "w-full md:block md:w-auto pr-8";
  let ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium";
  {
    drawerHidden = true;
    activateClickOutside = true;
  }
  activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Navbar($$payload2, {
      children: invalid_default_snippet,
      $$slots: {
        default: ($$payload3, { hidden, toggle }) => {
          NavHamburger($$payload3, { btnClass: "ml-3 lg:hidden" });
          $$payload3.out += `<!----> `;
          NavBrand($$payload3, {
            href: "/",
            class: "lg:ml-64",
            children: ($$payload4) => {
              Cog($$payload4, {});
              $$payload4.out += `<!----> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">Investe Obra</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          NavHamburger($$payload3, {});
          $$payload3.out += `<!----> `;
          NavUl($$payload3, {
            hidden,
            divClass,
            ulClass,
            children: ($$payload4) => {
              NavLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Início`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              NavLi($$payload4, {
                href: "/pages/about",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Sobre`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        }
      }
    });
    $$payload2.out += `<!----> `;
    Drawer($$payload2, {
      transitionType: "fly",
      backdrop,
      transitionParams,
      width: "w-64",
      class: "overflow-scroll pb-32",
      id: "sidebar",
      get hidden() {
        return drawerHidden;
      },
      set hidden($$value) {
        drawerHidden = $$value;
        $$settled = false;
      },
      get activateClickOutside() {
        return activateClickOutside;
      },
      set activateClickOutside($$value) {
        activateClickOutside = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<div class="flex items-center">`;
        CloseButton($$payload3, { class: "mb-4 dark:text-white lg:hidden" });
        $$payload3.out += `<!----></div> `;
        Sidebar($$payload3, {
          asideClass: "w-54",
          children: ($$payload4) => {
            SidebarWrapper($$payload4, {
              divClass: "overflow-y-auto py-4 px-3 rounded dark:bg-gray-800",
              children: ($$payload5) => {
                SidebarGroup($$payload5, {
                  children: ($$payload6) => {
                    SidebarItem($$payload6, {
                      label: "Início",
                      href: "/",
                      active: activeUrl === `/`
                    });
                    $$payload6.out += `<!----> `;
                    SidebarItem($$payload6, {
                      label: "Sobre",
                      href: "/pages/about",
                      spanClass,
                      active: activeUrl === "/#"
                    });
                    $$payload6.out += `<!----> `;
                    SidebarItem($$payload6, {
                      label: "Menu 1",
                      href: `/pages/menu1`,
                      spanClass,
                      active: activeUrl === "/#"
                    });
                    $$payload6.out += `<!----> `;
                    SidebarItem($$payload6, {
                      label: "Menu 2",
                      href: "/pages/menu2",
                      spanClass,
                      active: activeUrl === "/#"
                    });
                    $$payload6.out += `<!----> `;
                    SidebarItem($$payload6, {
                      label: "Menu 3",
                      href: "/pages/menu3",
                      spanClass,
                      active: activeUrl === "/#"
                    });
                    $$payload6.out += `<!----> `;
                    SidebarItem($$payload6, {
                      label: "Orçamento Obra Analítico",
                      href: "/pages/menu4",
                      spanClass,
                      active: activeUrl === "/#"
                    });
                    $$payload6.out += `<!----> `;
                    SidebarItem($$payload6, {
                      label: "Resultado",
                      href: "/pages/menu5",
                      spanClass,
                      active: activeUrl === "/#"
                    });
                    $$payload6.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="flex px-4 mx-auto w-full"><main class="lg:ml-72 w-full mx-auto"><!---->`;
    slot($$payload2, $$props, "default", {}, null);
    $$payload2.out += `<!----></main></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
