import type { TUiFiledWrapperProps } from './FieldWrapper.vue';
export type TUiFieldSelectProps = TUiFiledWrapperProps & {
    modelValue?: string | string[] | number | number[];
    options?: {
        text: string;
        value: string | number;
    }[];
    multiple?: boolean;
};
export type TUiFieldSelectEmits = {
    (e: 'input', v: Event): void;
    (e: 'update:model-value', v?: string | string[] | number | number[]): void;
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
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string | number | string[] | number[]>;
    };
    options: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<{
            text: string;
            value: string | number;
        }[]>;
    };
    multiple: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (v: Event) => void;
    "update:model-value": (v?: string | number | string[] | number[] | undefined) => void;
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
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string | number | string[] | number[]>;
    };
    options: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<{
            text: string;
            value: string | number;
        }[]>;
    };
    multiple: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>> & {
    onInput?: ((v: Event) => any) | undefined;
    "onUpdate:model-value"?: ((v?: string | number | string[] | number[] | undefined) => any) | undefined;
    "onUpdate:error"?: ((v?: string | undefined) => any) | undefined;
}, {}, {}>;
export default _default;
