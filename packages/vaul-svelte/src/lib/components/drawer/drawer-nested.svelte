<script lang="ts">
	import DrawerRoot from "./drawer.svelte";
	import type { RootProps } from "./index.js";
	import { noop } from "$lib/internal/noop.js";
	import { DrawerContext } from "$lib/context.js";

	let {
		open = $bindable(false),
		activeSnapPoint = $bindable(null),
		onOpenChange = noop,
		onDrag = noop,
		...restProps
	}: Omit<RootProps, "nested" | "onRelease" | "onClose"> = $props();

	const rootState = DrawerContext.get();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const rest = $derived(restProps) as any;

	// Watch open state to handle programmatic changes (bind:open)
	$effect(() => {
		rootState.onNestedOpenChange(open);
	});
</script>

<DrawerRoot
	bind:activeSnapPoint
	bind:open
	nested
	onClose={() => rootState.onNestedOpenChange(false)}
	onDrag={(e, p) => {
		rootState.onNestedDrag(e, p);
		onDrag(e, p);
	}}
	onOpenChange={(o) => {
		onOpenChange(o);
	}}
	onRelease={rootState.onNestedRelease}
	{...rest}
/>
