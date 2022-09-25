export {};
declare global {
  interface Window {
    VITE__APP_VERSION__?: string;
    [s:string]:any
  }
}
window.VITE__APP_VERSION__ = window.VITE__APP_VERSION__|| '';