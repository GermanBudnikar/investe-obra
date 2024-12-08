

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BkRNxWVr.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.CtaTdtmd.js","_app/immutable/chunks/index.BFqC5wTN.js"];
export const stylesheets = [];
export const fonts = [];
