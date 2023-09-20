import { c as create_ssr_component, d as add_attribute, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, v as validate_component, k as each, e as escape, m as missing_component } from "./ssr.js";
import { isFilled, asImageWidthSrcSet, asImagePixelDensitySrcSet, asLinkAttrs } from "@prismicio/client";
import { asTree } from "@prismicio/richtext";
const PrismicEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return ` ${isFilled.embed(field) ? `<div${add_attribute("data-oembed", field.embed_url, 0)}${add_attribute("data-oembed-type", field.type, 0)}${add_attribute("data-oembed-provider", field.provider_name, 0)}> <!-- HTML_TAG_START -->${field.html}<!-- HTML_TAG_END --></div>` : ``}`;
});
const PrismicImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "field",
    "imgixParams",
    "alt",
    "fallbackAlt",
    "width",
    "height",
    "widths",
    "pixelDensities"
  ]);
  let { field } = $$props;
  let { imgixParams = {} } = $$props;
  let { alt = void 0 } = $$props;
  let { fallbackAlt = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { widths = void 0 } = $$props;
  let { pixelDensities = void 0 } = $$props;
  let src = void 0;
  let srcset = void 0;
  let resolvedWidth = void 0;
  let resolvedHeight = void 0;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.imgixParams === void 0 && $$bindings.imgixParams && imgixParams !== void 0)
    $$bindings.imgixParams(imgixParams);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fallbackAlt === void 0 && $$bindings.fallbackAlt && fallbackAlt !== void 0)
    $$bindings.fallbackAlt(fallbackAlt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  if ($$props.pixelDensities === void 0 && $$bindings.pixelDensities && pixelDensities !== void 0)
    $$bindings.pixelDensities(pixelDensities);
  {
    {
      if (isFilled.imageThumbnail(field)) {
        const castInt = (input) => {
          if (typeof input === "number" || typeof input === "undefined" || input === null) {
            return input;
          } else {
            const parsed = Number.parseInt(input);
            if (Number.isNaN(parsed)) {
              return void 0;
            } else {
              return parsed;
            }
          }
        };
        const ar = field.dimensions.width / field.dimensions.height;
        const castedWidth = castInt(width);
        const castedHeight = castInt(height);
        resolvedWidth = castedWidth ?? field.dimensions.width;
        resolvedHeight = castedHeight ?? field.dimensions.height;
        if (castedWidth != null && castedHeight == null) {
          resolvedHeight = castedWidth / ar;
        } else if (castedWidth == null && castedHeight != null) {
          resolvedWidth = castedHeight * ar;
        }
        if (widths || !pixelDensities) {
          const res = asImageWidthSrcSet(field, {
            ...imgixParams,
            widths: widths === "defaults" ? void 0 : widths
          });
          src = res.src;
          srcset = res.srcset;
        } else if (pixelDensities) {
          const res = asImagePixelDensitySrcSet(field, {
            ...imgixParams,
            pixelDensities: pixelDensities === "defaults" ? void 0 : pixelDensities
          });
          src = res.src;
          srcset = res.srcset;
        }
      }
    }
  }
  return ` ${isFilled.imageThumbnail(field) ? `<img${spread(
    [
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      {
        alt: escape_attribute_value(alt ?? (field.alt || fallbackAlt))
      },
      {
        width: escape_attribute_value(resolvedWidth)
      },
      {
        height: escape_attribute_value(resolvedHeight)
      },
      escape_object($$restProps)
    ],
    {}
  )}>` : ``}`;
});
const PrismicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkAttrs;
  let resolvedRel;
  let $$restProps = compute_rest_props($$props, ["field", "document", "rel"]);
  let { field = void 0 } = $$props;
  let { document = void 0 } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.document === void 0 && $$bindings.document && document !== void 0)
    $$bindings.document(document);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  linkAttrs = asLinkAttrs(field ?? document, {
    rel: typeof rel === "function" ? rel : void 0
  });
  resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
  return ` <a${spread(
    [
      escape_object(linkAttrs),
      { rel: escape_attribute_value(resolvedRel) },
      {
        href: escape_attribute_value(linkAttrs.href)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const DefaultComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  return `${node.type === "heading1" ? `<h1>${slots.default ? slots.default({}) : ``}</h1>` : `${node.type === "heading2" ? `<h2>${slots.default ? slots.default({}) : ``}</h2>` : `${node.type === "heading3" ? `<h3>${slots.default ? slots.default({}) : ``}</h3>` : `${node.type === "heading4" ? `<h4>${slots.default ? slots.default({}) : ``}</h4>` : `${node.type === "heading5" ? `<h5>${slots.default ? slots.default({}) : ``}</h5>` : `${node.type === "heading6" ? `<h6>${slots.default ? slots.default({}) : ``}</h6>` : `${node.type === "paragraph" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${node.type === "preformatted" ? `<pre>${slots.default ? slots.default({}) : ``}</pre>` : `${node.type === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${node.type === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${node.type === "list-item" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "o-list-item" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "group-list-item" ? `<ul>${slots.default ? slots.default({}) : ``}</ul>` : `${node.type === "group-o-list-item" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `${node.type === "image" ? `<p class="block-img">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: node }, {}, {})}</p>` : `${node.type === "embed" ? `${validate_component(PrismicEmbed, "PrismicEmbed").$$render($$result, { field: node.oembed }, {}, {})}` : `${node.type === "hyperlink" ? `${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: node.data }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${node.type === "label" ? `<span${add_attribute("class", node.data.label, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${each(node.text.split("\n"), (line, index) => {
    return ` ${index > 0 ? `<br>` : ``}${escape(line)}`;
  })}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
const Serialize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components: components2 = {} } = $$props;
  let { children } = $$props;
  const CHILD_TYPE_RENAMES = {
    "list-item": "listItem",
    "o-list-item": "oListItem",
    "group-list-item": "list",
    "group-o-list-item": "oList"
  };
  function getComponent(child) {
    return components2[CHILD_TYPE_RENAMES[child.type] || child.type] || DefaultComponent;
  }
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  return `${each(children, (child) => {
    return `${validate_component(getComponent(child) || missing_component, "svelte:component").$$render($$result, { node: child.node }, {}, {
      default: () => {
        return ` ${child.children.length > 0 ? `${validate_component(Serialize, "svelte:self").$$render($$result, { children: child.children, components: components2 }, {}, {})}` : ``}`;
      }
    })}`;
  })}`;
});
const PrismicRichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let children;
  let { field } = $$props;
  let { components: components2 = {} } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  children = asTree(field).children;
  return ` ${validate_component(Serialize, "Serialize").$$render($$result, { children, components: components2 }, {}, {})}`;
});
const TodoComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  "slice_type" in slice ? slice.slice_type : slice.type;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `${``}`;
});
const SliceZone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slices = [] } = $$props;
  let { components: components2 = {} } = $$props;
  let { context = {} } = $$props;
  let { defaultComponent = void 0 } = $$props;
  if ($$props.slices === void 0 && $$bindings.slices && slices !== void 0)
    $$bindings.slices(slices);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.defaultComponent === void 0 && $$bindings.defaultComponent && defaultComponent !== void 0)
    $$bindings.defaultComponent(defaultComponent);
  return ` ${each(slices, (slice, index) => {
    let type = "slice_type" in slice ? slice.slice_type : slice.type, Component = components2[type] || defaultComponent;
    return `  ${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, { slice, slices, context, index }, {}, {})}` : `${validate_component(TodoComponent, "TodoComponent").$$render($$result, { slice }, {}, {})}`}`;
  })}`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-e7wybu.svelte-e7wybu{font-family:-apple-system, BlinkMacSystemFont, 'Trebuchet MS','Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';margin:0;color:white}.card.svelte-e7wybu.svelte-e7wybu{background:#1F1F1F;width:30rem;display:flex;flex-direction:column;padding:2.5rem 0;border-radius:1rem;margin:0 auto;margin-top:2rem;margin-bottom:2rem}.profilepicture.svelte-e7wybu.svelte-e7wybu{align-self:center;border-radius:1rem}.written-content.svelte-e7wybu.svelte-e7wybu{margin:0 2.5rem}.name.svelte-e7wybu.svelte-e7wybu{margin:0.5rem 0}.skill.svelte-e7wybu.svelte-e7wybu{background:#4C4C4C;border-radius:1rem;padding:0.5rem 1rem;display:inline-block;margin:0 0.15rem 0.5rem 0}.location.svelte-e7wybu.svelte-e7wybu{color:#21b16e}.link-github.svelte-e7wybu.svelte-e7wybu{filter:invert(0.68)}.link-instagram.svelte-e7wybu.svelte-e7wybu,.link-email.svelte-e7wybu.svelte-e7wybu{filter:invert(0.32)}.links.svelte-e7wybu.svelte-e7wybu{display:flex;flex-direction:column;width:1rem;margin-left:23rem;margin-top:-3.5rem}.links.svelte-e7wybu a.svelte-e7wybu{margin-bottom:0.5rem}.hire-me.svelte-e7wybu.svelte-e7wybu{text-decoration:none;color:black;padding:1rem;background:rgb(42,233,134);background:linear-gradient(90deg, rgba(42,233,134,1) 0%, rgba(52,233,95,1) 100%);border-radius:2rem;width:10rem;text-align:center;align-self:center}@media only screen and (max-width: 600px){.card.svelte-e7wybu.svelte-e7wybu{background:#1F1F1F;width:30rem;display:flex;flex-direction:column;padding:2.5rem 0;border-radius:1rem;margin:0 auto}}",
  map: null
};
const RichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  $$result.css.add(css);
  return `<div class="card svelte-e7wybu"><section class="profilepicture svelte-e7wybu">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.profilepicture }, {}, {})}</section> <div class="written-content svelte-e7wybu"><section class="name svelte-e7wybu"><h1 class="h1-name svelte-e7wybu">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.name }, {}, {})}</h1></section> <section class="skills svelte-e7wybu"><p class="skill svelte-e7wybu">${escape(slice.primary.skill1)}</p> <p class="skill svelte-e7wybu">${escape(slice.primary.skill2)}</p> <p class="skill svelte-e7wybu">${escape(slice.primary.skill3)}</p></section> <section class="location svelte-e7wybu">${escape(slice.primary.location)}</section> <section class="links svelte-e7wybu"><a href="https://github.com/IvarSchuyt" class="link-github svelte-e7wybu" target="_blank">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.LogoGithub }, {}, {})}</a> <a href="https://www.instagram.com/prodbyishh" class="link-instagram svelte-e7wybu" target="_blank">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.LogoInstagram }, {}, {})}</a> <a href="mailto:ivar.schuyt@hva.nl" class="link-email svelte-e7wybu" target="_blank">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.LinkEmail }, {}, {})}</a></section></div> <a href="https://www.linkedin.com/in/ivar-schuyt-388a0a228" class="hire-me svelte-e7wybu" target="_blank" data-svelte-h="svelte-108cx00">Hire me</a> </div>`;
});
const components = {
  rich_text: RichText
};
export {
  SliceZone as S,
  components as c
};
