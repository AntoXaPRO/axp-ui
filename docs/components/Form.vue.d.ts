import type { TNotificationItem, IFormModel } from 'axp-ts';
export type TUiFormProps<T = any> = {
    modelValue?: IFormModel<T>;
    title?: string;
    noTitle?: boolean;
    messages?: TNotificationItem[];
    noActions?: boolean;
    disabled?: boolean;
    load?: boolean;
    showAll?: boolean;
    fn?: (obj?: T) => Promise<T>;
};
export type TUiFormEmits<T = any> = {
    (e: 'submit', v?: IFormModel<T>): void;
    (e: 'failedValid', v?: IFormModel<T>): void;
    (e: 'update:load', v: boolean): void;
    (e: 'fnCompleted', v?: any): void;
};
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<IFormModel<any>>;
    };
    title: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    noTitle: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    messages: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TNotificationItem[]>;
    };
    noActions: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    load: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    showAll: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    fn: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<(obj?: any) => Promise<any>>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    submit: (v?: IFormModel<any> | undefined) => void;
    failedValid: (v?: IFormModel<any> | undefined) => void;
    "update:load": (v: boolean) => void;
    fnCompleted: (v?: any) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<IFormModel<any>>;
    };
    title: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    noTitle: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    messages: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TNotificationItem[]>;
    };
    noActions: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    load: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    showAll: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    fn: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<(obj?: any) => Promise<any>>;
    };
}>> & {
    onSubmit?: ((v?: IFormModel<any> | undefined) => any) | undefined;
    onFailedValid?: ((v?: IFormModel<any> | undefined) => any) | undefined;
    "onUpdate:load"?: ((v: boolean) => any) | undefined;
    onFnCompleted?: ((v?: any) => any) | undefined;
}, {}, {}>, {
    pre?(_: {}): any;
    default?(_: {}): any;
    post?(_: {}): any;
    actions?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
