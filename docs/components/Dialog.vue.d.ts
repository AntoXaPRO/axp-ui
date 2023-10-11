export type TUiDialogProps = {
    title?: string;
    open?: boolean;
    close?: boolean;
};
export type TUiDialogEmits = {
    (e: 'update:open', v: boolean): void;
};
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    title: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    open: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    close: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:open": (v: boolean) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    title: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    open: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    close: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>> & {
    "onUpdate:open"?: ((v: boolean) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
