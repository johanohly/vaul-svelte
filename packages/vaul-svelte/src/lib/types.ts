export type * from "./components/drawer/types.js";
export type DrawerDirection = "left" | "right" | "top" | "bottom";
export type OnChangeFn<T> = (value: T) => void;
export type OnDrag = (event: PointerEvent | MouseEvent, percentageDragged: number) => void;
export type OnRelease = (event: PointerEvent | MouseEvent, open: boolean) => void;

/**
 * State object exposed by a drawer that can be passed to another drawer
 * to establish a parent-child relationship without component hierarchy.
 * Use this for global/portal drawers that need to behave as nested drawers.
 */
export type ParentDrawerState = {
	onNestedOpenChange: (open: boolean) => void;
	onNestedDrag: (event: PointerEvent, percentageDragged: number) => void;
	onNestedRelease: (event: PointerEvent, open: boolean) => void;
	direction: DrawerDirection;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any;

export type Getters<T> = {
	[K in keyof T]: () => T[K];
};

export type VaulPointerEvent<T extends Element = HTMLElement> = PointerEvent & { currentTarget: T };
