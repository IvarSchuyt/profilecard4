

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4c44c6ab.js","_app/immutable/chunks/scheduler.711bf361.js","_app/immutable/chunks/index.03153aed.js","_app/immutable/chunks/stores.06c9818b.js","_app/immutable/chunks/singletons.9e792d0d.js"];
export const stylesheets = [];
export const fonts = [];
