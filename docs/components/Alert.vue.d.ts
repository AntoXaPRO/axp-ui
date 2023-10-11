import type { TColor } from '../colors';
export type TUiAlertProps = {
    color?: TColor;
    value?: string;
    close?: boolean;
};
export type TUiAlertEmits = {
    (e: 'close'): void;
};
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    color: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"primary" | "accent" | "info" | "success" | "warning" | "error" | "dark" | "light">;
    };
    value: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    close: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    close: () => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    color: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"primary" | "accent" | "info" | "success" | "warning" | "error" | "dark" | "light">;
    };
    value: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    close: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>> & {
    onClose?: (() => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
