export type TUiPickerDaysProps = {
    modelValue?: number[];
    label?: string;
    error?: string;
    readonly?: boolean;
    disabled?: boolean;
};
export type TUiPickerDaysEmits = {
    (e: 'update:modelValue', v: number[]): void;
};
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<number[]>;
    };
    label: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    error: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    readonly: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (v: number[]) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<number[]>;
    };
    label: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    error: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    readonly: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((v: number[]) => any) | undefined;
}, {}, {}>;
export default _default;
