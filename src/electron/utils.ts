export function devMode(): boolean {
    return process.env.NODE_ENV === "development";
}