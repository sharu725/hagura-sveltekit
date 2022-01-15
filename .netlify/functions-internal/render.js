const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["left-arrow.svg"]),
	_: {
		mime: {".svg":"image/svg+xml"},
		entry: {"file":"start-4917e0d1.js","js":["start-4917e0d1.js","chunks/vendor-97e84e10.js"],"css":["assets/vendor-69adaad4.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/posts\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/posts.json.js'))
			},
			{
				type: 'page',
				pattern: /^\/contact\/?$/,
				params: null,
				path: "/contact",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/secondpost\/?$/,
				params: null,
				path: "/blog/secondpost",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/third-post\/?$/,
				params: null,
				path: "/blog/third-post",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/firstpost\/?$/,
				params: null,
				path: "/blog/firstpost",
				a: [0,7],
				b: [1]
			}
		]
	}
});
