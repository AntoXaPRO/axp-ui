export declare enum ColorEnum {
    primary = "primary",
    accent = "accent",
    info = "info",
    success = "success",
    warning = "warning",
    error = "error",
    dark = "dark",
    light = "light"
}
export type TColor = keyof typeof ColorEnum;
export declare const colors: ("primary" | "accent" | "info" | "success" | "warning" | "error" | "dark" | "light")[];
