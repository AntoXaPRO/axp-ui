export type TUiIconVisibilityProps = {
    modelValue?: boolean;
    color?: boolean;
    cursor?: boolean;
};
export type TUiIconVisibilityEmits = {
    (e: 'update:modelValue', v: boolean): void;
};
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    color: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    cursor: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (v: boolean) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    color: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    cursor: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}, {}, {}>;
export default _default;
