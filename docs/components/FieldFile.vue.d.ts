import type { TUiFiledWrapperProps } from './FieldWrapper.vue';
type TModelValue = FileList;
export type TUiFieldFileProps = TUiFiledWrapperProps & {
    modelValue?: TModelValue;
    multiple?: boolean;
    accept?: string;
};
export type TUiFieldFileEmits = {
    (e: 'input', v?: Event): void;
    (e: 'update:model-value', v?: TModelValue): void;
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
        type: import('./vue/dist/vue.esm-bundler.js').PropType<FileList>;
    };
    multiple: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    accept: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (v?: Event | undefined) => void;
    "update:model-value": (v?: FileList | undefined) => void;
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
        type: import('./vue/dist/vue.esm-bundler.js').PropType<FileList>;
    };
    multiple: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    accept: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}>> & {
    onInput?: ((v?: Event | undefined) => any) | undefined;
    "onUpdate:model-value"?: ((v?: FileList | undefined) => any) | undefined;
    "onUpdate:error"?: ((v?: string | undefined) => any) | undefined;
}, {}, {}>;
export default _default;
