import type * as Kit from '@sveltejs/kit';

type RouteParams = {  }
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureParentData<T> = T extends null | undefined ? {} : T;
type PageParentData = EnsureParentData<LayoutData>;
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureParentData<{}>;

export type PageServerData = null;
export type PageData = PageParentData;
export type LayoutServerData = null;
export type LayoutData = LayoutParentData;