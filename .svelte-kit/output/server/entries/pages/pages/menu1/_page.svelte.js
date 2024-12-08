import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../../../chunks/TableBodyRow.js";
import { Q as push, $ as getContext, a7 as stringify, S as pop, W as element, a8 as ensure_array_like, a9 as add_styles, a0 as spread_props, R as setContext, X as bind_props, a5 as copy_payload, a6 as assign_payload } from "../../../../chunks/index.js";
import { a as attr, e as escape_html } from "../../../../chunks/attributes.js";
import "@slidy/core";
function Chart($$payload) {
  Table($$payload, {
    color: "default",
    noborder: false,
    children: ($$payload2) => {
      TableBody($$payload2, {
        children: ($$payload3) => {
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Unidades Vendidas`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->16`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Unidades em Estoque`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->12`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <tfoot><tr class="font-semibold text-gray-900 dark:text-white"><th scope="row" class="py-3 px-6 text-base">Total de unidades</th><td class="py-3 px-6">28</td></tr></tfoot>`;
    },
    $$slots: { default: true }
  });
}
function Arrow($$payload, $$props) {
  push();
  let {
    direction = 1,
    loop = false,
    index = 0,
    items = 0,
    step = 1,
    vertical = false,
    children,
    onclick
  } = $$props;
  const classNames2 = getContext("classNames");
  const i18n = getContext("i18n");
  const disabled = direction < 0 ? index === 0 && !loop : index === items - 1 && !loop;
  const title = direction > 0 ? i18n.next : i18n.prev;
  $$payload.out += `<button${attr("aria-label", title)}${attr("aria-orientation", vertical ? "vertical" : "horizontal")}${attr("class", `${stringify(classNames2.arrow)} ${stringify([direction < 1 ? "prev" : ""].filter(Boolean).join(" "))}`)}${attr("data-step", direction * step)}${attr("disabled", disabled, true)}${attr("title", title)}>`;
  children?.($$payload);
  $$payload.out += `<!----></button>`;
  pop();
}
function Core($$payload, $$props) {
  push();
  let {
    animation = void 0,
    axis = "x",
    clamp = 0,
    className = "",
    duration = 450,
    easing = (t2) => t2,
    gravity = 1.2,
    indent = 2,
    index = 0,
    loop = false,
    plugins = [],
    position = 0,
    sensity = 5,
    snap = void 0,
    tag = "ol",
    children,
    onmount,
    onkeys,
    onresize,
    onupdate,
    ondestroy,
    onindex = (e) => index = e.detail.index,
    onmove = (e) => position = e.detail.position
  } = $$props;
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${attr("class", className)} aria-live="polite" role="listbox" tabindex="0"`;
    },
    () => {
      children?.($$payload);
      $$payload.out += `<!---->`;
    }
  );
  pop();
}
function Image($$payload, $$props) {
  push();
  let {
    alt = "",
    decoding = "auto",
    height = void 0,
    lazy = false,
    src = "",
    width = void 0
  } = $$props;
  const classNames2 = getContext("classNames");
  $$payload.out += `<img${attr("alt", alt)}${attr("src", src)}${attr("width", width)}${attr("height", height)}${attr("decoding", decoding)}${attr("class", classNames2["img"])}${attr("loading", lazy ? "lazy" : void 0)}>`;
  pop();
}
var a = { viewBox: "0 0 32 32", path: "M19.56,24a.89.89,0,0,1-.63-.26L11.8,16.65a.92.92,0,0,1,0-1.27h0l7.13-7.16A.9.9,0,0,1,20.2,9.48L13.69,16l6.51,6.5a.91.91,0,0,1,0,1.26h0A.9.9,0,0,1,19.56,24Z" };
var c = (n, ...r) => {
  for (let t2 of r) n = n.replace("%s", t2.toString());
  return n;
};
var m = (n, t2) => {
  let e = t2 - n + 1;
  return [...Array(e).keys()].map((c2) => c2 + n);
}, h = ({ current: n, start: t2 = 0, end: e, limit: c2, siblings: r }) => {
  if (Math.max(5 + r * 2, e - t2 + 1) <= c2) return m(t2, e);
  let f = Math.max(n - r, t2), s = Math.min(n + r, e), i = f > 2, a2 = s < e - 1;
  if (!i && a2) return [...m(t2, 3 + 2 * r), -1, e];
  if (i && !a2) {
    let o = 3 + 2 * r, x = m(e - o + 1, e);
    return [t2, -1, ...x];
  }
  if (i && a2) {
    let o = m(f, s);
    return [t2, -1, ...o, -1, e];
  }
  return [];
};
function Navigation($$payload, $$props) {
  push();
  let {
    current = 0,
    start = 0,
    end = 0,
    ordinal = false,
    vertical = false,
    limit = 7,
    siblings = 1,
    onclick
  } = $$props;
  const classNames2 = getContext("classNames");
  const i18n = getContext("i18n");
  const setTitle = (i) => {
    if (i === start) {
      return i18n.first;
    } else if (i === end) {
      return i18n.last;
    } else {
      return c(i18n.slideN, i);
    }
  };
  const indices = h({ current, start, end, limit, siblings });
  const each_array = ensure_array_like(indices);
  $$payload.out += `<nav aria-label="pagination"${attr("aria-orientation", vertical ? "vertical" : "horizontal")}${attr("class", classNames2?.nav)}><button${attr("aria-label", i18n.first)}${attr("class", `${stringify(classNames2["nav-item"])} arrow`)}${attr("data-step", -1)}${attr("disabled", current <= 1, true)}${attr("title", i18n.prev)}><svg${attr("viewBox", a.viewBox)}><path${attr("d", a.path)}></path></svg></button> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    const active = item === current;
    const contents = item < 0 ? "…" : item;
    const ellipsis = item < 0;
    const title = setTitle(item);
    $$payload.out += `<button${attr("aria-current", active ? "true" : void 0)}${attr("aria-label", title)}${attr("class", `${stringify(classNames2["nav-item"])} ${stringify([
      active ? "active" : "",
      ellipsis ? "ellipsis" : "",
      ordinal ? "ordinal" : ""
    ].filter(Boolean).join(" "))}`)}${attr("data-index", ellipsis ? void 0 : item - 1)}${attr("disabled", ellipsis, true)}${attr("title", title)}>${escape_html(ordinal ? contents : "")}</button>`;
  }
  $$payload.out += `<!--]--> <button${attr("aria-label", i18n.first)}${attr("class", `${stringify(classNames2["nav-item"])} arrow`)}${attr("data-step", 1)}${attr("disabled", current >= end, true)}${attr("title", i18n.next)}><svg${attr("viewBox", a.viewBox)}><path${attr("d", a.path)}></path></svg></button></nav>`;
  pop();
}
function Progress($$payload, $$props) {
  push();
  let {
    value = 0,
    max = 1,
    vertical = false,
    change = (valueAsNumber) => valueAsNumber
  } = $$props;
  const classNames2 = getContext("classNames");
  const progress = () => Math.ceil(value * 100 / max);
  const size = () => Math.ceil(100 / max);
  $$payload.out += `<div${add_styles({
    "--_slidy-progress-size": `${stringify(size)}%`,
    "--_slidy-progress": `${stringify(progress)}%`
  })}${attr("aria-orientation", vertical ? "vertical" : "horizontal")}${attr("class", classNames2.progress)}><input class="slidy-progress-input" name="slidy-progress" type="range"${attr("min", 1)}${attr("value", value)}${attr("max", max)}> <span${attr("class", classNames2["progress-handle"])}></span></div>`;
  pop();
}
function Thumbnail($$payload, $$props) {
  push();
  let {
    active = 0,
    animation = void 0,
    background = false,
    clamp = 0,
    duration = 250,
    easing = (t2) => t2,
    getImgSrc = (item) => item.src ?? "",
    gravity = 0.75,
    indent = 0,
    index = 0,
    loop = false,
    sensity = 5,
    slides = [],
    snap = void 0,
    // `"start", "center", "end", "deck = undefined,
    select = () => {
    }
  } = $$props;
  const classNames2 = getContext("classNames");
  const i18n = getContext("i18n");
  Core($$payload, {
    animation,
    clamp,
    duration,
    easing,
    gravity,
    indent,
    index,
    loop,
    sensity,
    snap,
    tag: "nav",
    axis: "x",
    className: classNames2?.thumbnails,
    children: ($$payload2) => {
      const each_array = ensure_array_like(slides);
      $$payload2.out += `<!--[-->`;
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let item = each_array[i];
        const title = c(i18n.slideN, i + 1);
        $$payload2.out += `<button${add_styles({
          "--_slidy-slide-bg": background ? `url(${getImgSrc(item)})` : ""
        })}${attr("aria-current", i === active ? "true" : void 0)}${attr("aria-label", title)} aria-roledescription="slide"${attr("class", `${stringify(classNames2.thumbnail)} ${stringify([
          i === active ? "active" : "",
          background ? "bg" : ""
        ].filter(Boolean).join(" "))}`)}${attr("title", title)}>`;
        if (!background) {
          $$payload2.out += "<!--[-->";
          Image($$payload2, spread_props([{ src: getImgSrc(item) }, item]));
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--></button>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  pop();
}
const classNames = {
  "arrow": "slidy-arrow",
  "autoplay": "slidy-autoplay",
  "counter": "slidy-counter",
  "img": "slidy-img",
  "nav": "slidy-nav",
  "nav-item": "slidy-nav-item",
  "overlay": "slidy-overlay",
  "progress": "slidy-progress",
  "progress-handle": "slidy-progress-handle",
  "root": "slidy",
  "slide": "slidy-slide",
  "slides": "slidy-slides",
  "thumbnail": "slidy-thumbnail",
  "thumbnails": "slidy-thumbnails"
};
var t = { carousel: "carousel", counter: "%s de %s", first: "Go to the first slide", last: "Go to the last slide", next: "Go to the next slide", play: "Start autoplay", prev: "Return back to previous slide", slide: "slide", slideN: "flamengo %s", stop: "Stop autoplay" };
function Slidy($$payload, $$props) {
  push();
  let {
    animation = void 0,
    arrows = true,
    axis = "x",
    background = false,
    counter = true,
    clamp = 0,
    classNames: classNames$1 = classNames,
    duration = 450,
    easing = (t2) => t2,
    getImgSrc = (item) => item.src || "",
    getThumbSrc = (item) => getImgSrc(item),
    navigation = false,
    gravity = 1.2,
    i18n = t,
    indent = 2,
    index = 0,
    position = 0,
    loop = false,
    groups = 0,
    plugins = [],
    progress = false,
    sensity = 5,
    slides = [],
    snap = void 0,
    thumbnail = false,
    vertical = false,
    onmove,
    onmount,
    onkeys,
    onresize,
    onupdate,
    ondestroy,
    slide,
    overlay,
    thumbnails,
    arrrows,
    arrrow
  } = $$props;
  setContext("classNames", classNames$1);
  setContext("i18n", i18n);
  const length = slides.length;
  const handleClick = (event) => {
    const element2 = event.target;
    if (element2.nodeName !== "BUTTON") return;
    if (element2.dataset.index) {
      index = parseInt(element2.dataset.index);
      return;
    }
    if (element2.dataset.step) {
      index = parseInt(element2.dataset.step) + index;
      return;
    }
  };
  $$payload.out += `<section${add_styles({ "--slidy-group-items": groups })}${attr("aria-roledescription", i18n.carousel)}${attr("aria-orientation", vertical ? "vertical" : "horizontal")}${attr("class", `${stringify(classNames$1?.root)} ${stringify([groups > 1 ? "groups" : ""].filter(Boolean).join(" "))}`)}>`;
  if (counter) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", classNames$1?.overlay)}>`;
    if (counter) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<output${attr("class", classNames$1?.counter)}>${escape_html(c(i18n.counter, index + 1, length))}</output>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    overlay?.($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  Core($$payload, {
    animation,
    axis,
    clamp,
    duration,
    easing,
    gravity,
    indent,
    index,
    position,
    loop,
    plugins,
    sensity,
    snap,
    onmove,
    onkeys,
    onmount,
    onresize,
    onupdate,
    ondestroy,
    className: classNames$1?.slides,
    onindex: (e) => index = e.detail.index,
    children: ($$payload2) => {
      const each_array = ensure_array_like(slides);
      $$payload2.out += `<!--[-->`;
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let item = each_array[i];
        const active = i === index;
        $$payload2.out += `<li${add_styles({
          "--_slidy-slide-bg": background ? `url(${getImgSrc(item)}` : void 0
        })}${attr("aria-current", active ? "true" : void 0)}${attr("aria-label", c(i18n.counter, i, length))}${attr("aria-roledescription", i18n.slide)}${attr("class", `${stringify(classNames$1?.slide)} ${stringify([active ? "active" : "", background ? "bg" : ""].filter(Boolean).join(" "))}`)} role="group">`;
        if (slide) {
          $$payload2.out += "<!--[-->";
          slide($$payload2, item);
          $$payload2.out += `<!---->`;
        } else {
          $$payload2.out += "<!--[!-->";
          if (!background) {
            $$payload2.out += "<!--[-->";
            Image($$payload2, spread_props([{ src: getImgSrc(item) }, item]));
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]--></li>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  if (arrows) {
    $$payload.out += "<!--[-->";
    if (arrrows) {
      $$payload.out += "<!--[-->";
      arrrows?.($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      const each_array_1 = ensure_array_like([-1, 1]);
      $$payload.out += `<!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let direction = each_array_1[$$index_1];
        Arrow($$payload, {
          direction,
          index,
          loop,
          vertical,
          items: length,
          step: clamp > 0 ? clamp : 1,
          onclick: handleClick,
          children: ($$payload2) => {
            if (arrrow) {
              $$payload2.out += "<!--[-->";
              arrrow?.($$payload2);
              $$payload2.out += `<!---->`;
            } else {
              $$payload2.out += "<!--[!-->";
              $$payload2.out += `<svg class="slidy-arrow-icon"${attr("viewBox", a.viewBox)} xmlns="http://www.w3.org/2000/svg"><path${attr("d", a.path)}></path></svg>`;
            }
            $$payload2.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (progress) {
    $$payload.out += "<!--[-->";
    Progress($$payload, {
      value: index + 1,
      max: length,
      change: (valueAsNumber) => index = valueAsNumber - 1,
      vertical
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (thumbnail) {
    $$payload.out += "<!--[-->";
    if (thumbnails) {
      $$payload.out += "<!--[-->";
      thumbnails($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      Thumbnail($$payload, {
        background,
        duration,
        easing,
        indent,
        loop,
        sensity,
        slides,
        active: index,
        index,
        getImgSrc: getThumbSrc,
        select: (indx) => index = indx
      });
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navigation) {
    $$payload.out += "<!--[-->";
    Navigation($$payload, {
      current: index + 1,
      start: 1,
      end: length,
      vertical,
      onclick: handleClick
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { index, position });
  pop();
}
function Carousel($$payload) {
  const slides = [
    {
      id: 1,
      width: 400,
      height: 400,
      src: "/src/lib/images/apartamentos.png"
    },
    {
      id: 2,
      width: 400,
      height: 400,
      src: "/src/lib/images/vista.png"
    },
    {
      id: 3,
      width: 400,
      height: 400,
      src: "/src/lib/images/apartamentos2.jpg"
    }
  ];
  let index = 4, position = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<main class="svelte-14yrx4y">`;
    Slidy($$payload2, {
      slides,
      snap: "center",
      thumbnail: true,
      get index() {
        return index;
      },
      set index($$value) {
        index = $$value;
        $$settled = false;
      },
      get position() {
        return position;
      },
      set position($$value) {
        position = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></main>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function _page($$payload) {
  $$payload.out += `<div data-id="menu1-chart">`;
  Chart($$payload);
  $$payload.out += `<!----></div> <div data-id="menu1-carousel">`;
  Carousel($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
