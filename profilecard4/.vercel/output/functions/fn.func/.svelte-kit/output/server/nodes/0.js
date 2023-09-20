

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.264569fb.js","_app/immutable/chunks/scheduler.711bf361.js","_app/immutable/chunks/index.03153aed.js","_app/immutable/chunks/stores.06c9818b.js","_app/immutable/chunks/singletons.9e792d0d.js"];
export const stylesheets = [];
export const fonts = [];
