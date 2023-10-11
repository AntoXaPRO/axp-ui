import type { TUiFieldInputProps, TUiFieldInputEmits } from './FieldInput.vue';
export type TUiFieldPhoneProps = TUiFieldInputProps<number>;
export type TUiFieldPhoneEmits = TUiFieldInputEmits;
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
    type: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"number" | "text" | "checkbox" | "password" | "date">;
    };
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    placeholder: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (v: Event) => void;
    "update:model-value": (v?: string | number | Date | undefined) => void;
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
    type: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"number" | "text" | "checkbox" | "password" | "date">;
    };
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    placeholder: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}>> & {
    onInput?: ((v: Event) => any) | undefined;
    "onUpdate:model-value"?: ((v?: string | number | Date | undefined) => any) | undefined;
    "onUpdate:error"?: ((v?: string | undefined) => any) | undefined;
}, {}, {}>;
export default _default;
