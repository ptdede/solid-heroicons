import { Component, JSX } from "solid-js";
interface Props extends JSX.SvgSVGAttributes<SVGSVGElement> {
    /**
     * This is the path of the SVG
     */
    path: {
        path: JSX.Element;
        outline?: boolean;
        mini?: boolean;
    };
}
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
export declare const Icon: Component<Props>;
export {};
