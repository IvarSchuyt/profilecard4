

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slice-simulator/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e01a3fd1.js","_app/immutable/chunks/scheduler.711bf361.js","_app/immutable/chunks/index.03153aed.js","_app/immutable/chunks/index.c356249f.js"];
export const stylesheets = ["_app/immutable/assets/index.df35923a.css"];
export const fonts = [];
