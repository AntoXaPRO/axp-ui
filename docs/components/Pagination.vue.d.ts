import type { TPagination } from 'axp-ts';
export type TUiPaginationPage = {
    value: number;
    active?: boolean;
};
export type TUiPaginationProps = {
    modelValue?: TPagination;
    length?: number;
};
export type TUiPaginationEmits = {
    (e: 'update:model-value', v: TPagination): void;
};
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    length: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<{
            page: number;
            limit: number;
            total: number;
            skip: number;
            pages: number;
        }>;
        default: {
            page: number;
            limit: number;
            total: number;
            skip: number;
            pages: number;
        };
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:model-value": (v: {
        page: number;
        limit: number;
        total: number;
        skip: number;
        pages: number;
    }) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    length: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    modelValue: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<{
            page: number;
            limit: number;
            total: number;
            skip: number;
            pages: number;
        }>;
        default: {
            page: number;
            limit: number;
            total: number;
            skip: number;
            pages: number;
        };
    };
}>> & {
    "onUpdate:model-value"?: ((v: {
        page: number;
        limit: number;
        total: number;
        skip: number;
        pages: number;
    }) => any) | undefined;
}, {
    length: number;
    modelValue: {
        page: number;
        limit: number;
        total: number;
        skip: number;
        pages: number;
    };
}, {}>;
export default _default;
