<script lang="ts">
	import Prism from 'svelte-prism'
	import OtpInput from '../../lib/Index.svelte';
	const PlaceholderValue = `
		<OtpInput numberOfInputs={4} placeholder="****"  />`;
	const SeparatorValue = `
		<OtpInput separator="-" placeholder="******" numberOfInputs={6}  />`;
</script>
  
<main>
	<div class="container">
		<div class="codesnippet">
			<Prism language="html" source="{PlaceholderValue}" />
		</div>
		<div>
			<OtpInput numberOfInputs={4} placeholder="****" />
		</div>
		<label for="name">Placeholder : *</label>
	</div>

	<div class="container">
		<div class="codesnippet">
			<Prism language="html" source="{SeparatorValue}" />
		</div>
		<div>
			<OtpInput separator={"-"} placeholder="******" numberOfInputs={6}  />
		</div>
		<label for="name">Separator : - </label>
	</div>

</main>
<style>

</style>
