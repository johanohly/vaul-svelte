<script lang="ts">
	import { Drawer } from "vaul-svelte";

	let secondOpen = $state(false);
	let thirdOpen = $state(false);
</script>

<!-- Parent Drawer -->
<Drawer.Root shouldScaleBackground>
	<Drawer.Trigger
		class="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
	>
		Open Auto Nested Drawer
	</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content
			class="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[10px] bg-gray-100"
		>
			<div class="flex-1 rounded-t-[10px] bg-white p-4">
				<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
				<div class="mx-auto max-w-md">
					<Drawer.Title class="mb-4 font-medium">Level 1 - Parent</Drawer.Title>
					<p class="mb-2 text-gray-600">
						Drawers now automatically detect and connect to parent drawers without any manual
						wiring.
					</p>
					<p class="mb-4 text-gray-600">
						No need for <code class="font-mono text-sm">bind:drawerState</code> or
						<code class="font-mono text-sm">parentDrawer</code> props - it just works!
					</p>
					<button
						onclick={() => (secondOpen = true)}
						class="mb-6 w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
					>
						Open Level 2
					</button>
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

<!-- Second Drawer - automatically nests -->
<Drawer.Root bind:open={secondOpen}>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content
			class="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[94%] flex-col rounded-t-[10px] bg-gray-100"
		>
			<div class="flex-1 rounded-t-[10px] bg-white p-4">
				<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
				<div class="mx-auto max-w-md">
					<Drawer.Title class="mb-4 font-medium">Level 2 - Nested</Drawer.Title>
					<p class="mb-4 text-gray-600">
						This drawer automatically detected the parent and connected to it. Notice how the
						parent drawer scales.
					</p>
					<button
						onclick={() => (thirdOpen = true)}
						class="mb-4 w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
					>
						Open Level 3
					</button>
					<button
						onclick={() => (secondOpen = false)}
						class="w-full rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-300"
					>
						Close
					</button>
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

<!-- Third Drawer - automatically nests to second -->
<Drawer.Root bind:open={thirdOpen}>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content
			class="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[92%] flex-col rounded-t-[10px] bg-gray-100"
		>
			<div class="flex-1 rounded-t-[10px] bg-white p-4">
				<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
				<div class="mx-auto max-w-md">
					<Drawer.Title class="mb-4 font-medium">Level 3 - Deep Nested</Drawer.Title>
					<p class="mb-4 text-gray-600">
						Three levels deep! Each drawer automatically connects to its parent.
					</p>
					<button
						onclick={() => (thirdOpen = false)}
						class="w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
					>
						Close
					</button>
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
