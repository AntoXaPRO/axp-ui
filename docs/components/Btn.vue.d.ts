import type { TColor } from '../colors';
import type { TIcon } from '../icons';
export type TUiBtnType = 'button' | 'submit';
export type TUiBtnProps = {
    label?: string;
    type?: TUiBtnType;
    color?: TColor;
    icon?: TIcon;
    to?: string;
    disabled?: boolean;
};
export type TUiBtnEmits = {
    (e: 'click', v: PointerEvent): void;
};
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    type: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TUiBtnType>;
    };
    color: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"primary" | "accent" | "info" | "success" | "warning" | "error" | "dark" | "light">;
    };
    icon: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"menu" | "video" | "circle" | "visibility" | "close" | "account" | "doc" | "vk" | "youtube" | "yandex" | "arrow-down" | "car" | "review" | "phone" | "dzen" | "instagram" | "moon" | "sun" | "edit" | "visibility_off">;
    };
    to: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: (v: PointerEvent) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    type: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<TUiBtnType>;
    };
    color: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"primary" | "accent" | "info" | "success" | "warning" | "error" | "dark" | "light">;
    };
    icon: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<"menu" | "video" | "circle" | "visibility" | "close" | "account" | "doc" | "vk" | "youtube" | "yandex" | "arrow-down" | "car" | "review" | "phone" | "dzen" | "instagram" | "moon" | "sun" | "edit" | "visibility_off">;
    };
    to: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    disabled: {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
}>> & {
    onClick?: ((v: PointerEvent) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
