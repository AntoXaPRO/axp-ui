import type { TUiIcon } from '../icons';
export type TUiIconProps = {
    name: TUiIcon;
    fill?: boolean;
};
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    name: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TUiIcon>;
        required: true;
    };
    fill: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    name: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TUiIcon>;
        required: true;
    };
    fill: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>>, {}, {}>;
export default _default;
