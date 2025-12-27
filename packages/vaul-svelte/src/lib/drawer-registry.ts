import type { ParentDrawerState } from "./types.js";

/**
 * Global registry for tracking open drawers.
 * Enables automatic parent-child relationships without manual prop passing.
 *
 * NOTE: This is intentionally NOT using $state to avoid creating reactive
 * dependencies that would cause infinite effect loops.
 */

// Stack of open drawers (most recent last) - intentionally non-reactive
let openDrawers: ParentDrawerState[] = [];

/**
 * Register a drawer as open.
 */
export function registerDrawer(state: ParentDrawerState): void {
	openDrawers.push(state);
}

/**
 * Unregister a drawer when it closes.
 */
export function unregisterDrawer(state: ParentDrawerState): void {
	const index = openDrawers.indexOf(state);
	if (index !== -1) {
		openDrawers.splice(index, 1);
	}
}

/**
 * Get the current topmost drawer state (if any).
 * Used to auto-detect parent drawer when a new drawer opens.
 * Returns the most recently opened drawer, which becomes the parent of the new drawer.
 */
export function getCurrentParentDrawer(): ParentDrawerState | undefined {
	return openDrawers.at(-1);
}
