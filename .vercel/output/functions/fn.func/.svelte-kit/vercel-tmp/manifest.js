export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.kBStWmNV.js","app":"_app/immutable/entry/app.CooKwRgR.js","imports":["_app/immutable/entry/start.kBStWmNV.js","_app/immutable/chunks/entry.XBpak5Al.js","_app/immutable/chunks/runtime.FnWCUTe1.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index.Qm3ghGgE.js","_app/immutable/entry/app.CooKwRgR.js","_app/immutable/chunks/runtime.FnWCUTe1.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/render.DD7LCjUO.js","_app/immutable/chunks/utils.Bbjjb1lO.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/props.BCU3xBdf.js","_app/immutable/chunks/store.B1kJAeZp.js","_app/immutable/chunks/index-client.DbcgUeuL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pages/about",
				pattern: /^\/pages\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/pages/menu1",
				pattern: /^\/pages\/menu1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/pages/menu2",
				pattern: /^\/pages\/menu2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/pages/menu3",
				pattern: /^\/pages\/menu3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/pages/menu4",
				pattern: /^\/pages\/menu4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/pages/menu5",
				pattern: /^\/pages\/menu5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
