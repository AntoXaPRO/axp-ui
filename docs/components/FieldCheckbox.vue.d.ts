import type { TUiFiledWrapperProps } from './FieldWrapper.vue';
export type TUiFieldCheckboxProps = TUiFiledWrapperProps & {
    modelValue?: boolean;
};
export type TUiFieldCheckboxEmits = {
    (e: 'input', v: Event): void;
    (e: 'update:model-value', v?: boolean): void;
    (e: 'update:error', v?: string): void;
};
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    error: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    readonly: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    description: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (v: Event) => void;
    "update:model-value": (v?: boolean | undefined) => void;
    "update:error": (v?: string | undefined) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    error: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    readonly: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    description: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>> & {
    onInput?: ((v: Event) => any) | undefined;
    "onUpdate:model-value"?: ((v?: boolean | undefined) => any) | undefined;
    "onUpdate:error"?: ((v?: string | undefined) => any) | undefined;
}, {}, {}>;
export default _default;
