import * as server from '../entries/pages/_uid_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_uid_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[uid]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.8dc666cd.js","_app/immutable/chunks/scheduler.711bf361.js","_app/immutable/chunks/index.03153aed.js","_app/immutable/chunks/index.c356249f.js"];
export const stylesheets = ["_app/immutable/assets/index.df35923a.css"];
export const fonts = [];
