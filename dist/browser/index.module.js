import { spread, mergeProps, insert, template } from 'solid-js/web';
import { splitProps } from 'solid-js';

const _tmpl$ = /*#__PURE__*/template(`<svg>`);
/**
 * The Icon helper is just a SVG wrapper that can take any attributes
 * an SVG element can take plus a special props named `path` that represent
 * a function returning all the path(s) to insert within the SVG element.
 *
 * It will take the parent CSS `color` value as fill/stroke depending on
 * whether it's imported from `outline`, `solid` or `solid-mini`.
 *
 * @example
 * ```tsx
 * import { arrowLeft } from 'solid-heroicons/outline'
 * import { arrowRight } from 'solid-heroicons/solid'
 * import { arrowDown } from 'solid-heroicons/solid-mini'
 *
 * const icon = <Icon path={arrowLeft} class="text-gray-900 h-6" />
 * const icon2 = <Icon path={arrowRight} class="text-gray-900 h-6" />
 * const icon3 = <Icon path={arrowDown} class="text-gray-900 h-6" />
 * ```
 */
const Icon = props => {
  const [internal, external] = splitProps(props, ["path"]);
  return (() => {
    const _el$ = _tmpl$();
    spread(_el$, mergeProps({
      get viewBox() {
        return internal.path.mini ? "0 0 20 20" : "0 0 24 24";
      },
      get fill() {
        return internal.path.outline ? "none" : "currentColor";
      },
      get stroke() {
        return internal.path.outline ? "currentColor" : "none";
      },
      get ["stroke-width"]() {
        return internal.path.outline ? 1.5 : undefined;
      }
    }, external), true, true);
    insert(_el$, () => internal.path.path);
    return _el$;
  })();
};

export { Icon };
//# sourceMappingURL=index.module.js.map
