<script lang="ts">
	import Prism from 'svelte-prism';
	import OtpInput from '../../lib/Index.svelte';
	const FocusValue = `
		<OtpInput 
	separator="-"
	maskInput={true}
	numberOfInputs={4}
	placeholder="****"
	autoFocusNextOnInput={true}
	focusPreviousOnDelete={true}
/>`;
</script>
  
<main>

	<div class="container">
		<div class="codesnippet">
			<Prism language="html" source="{FocusValue}" />
		</div>
		<div>
			<OtpInput 
				separator={"-"}
				maskInput={true}
				numberOfInputs={4}
				placeholder={"****"}
				autoFocusNextOnInput={true}
				focusPreviousOnDelete={true}
			/>
		</div>
		<label class="textEmitted" for="name">Focus Change on Input/Delete </label>
	</div>
</main>
<style>

</style>
