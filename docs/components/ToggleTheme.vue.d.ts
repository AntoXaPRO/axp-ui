export type TUiThemeName = 'light' | 'dark';
export type TUiToggleThemeProps = {
    modelValue?: TUiThemeName;
};
export type TUiToggleThemeEmits = {
    (e: 'update:modelValue', v: TUiThemeName): void;
};
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TUiThemeName>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (v: TUiThemeName) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TUiThemeName>;
    };
}>> & {
    "onUpdate:modelValue"?: ((v: TUiThemeName) => any) | undefined;
}, {}, {}>;
export default _default;
