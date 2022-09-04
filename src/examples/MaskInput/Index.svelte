<script lang="ts">
	import Prism from 'svelte-prism';
	import OtpInput from '../../lib/OtpInput/OtpInput.svelte';
	const MaskingValue = `
		<OtpInput separator="-" placeholder="****" numberOfInputs={4} maskInput={true} />`;
</script>
  
<main>
	<div class="container">
		<div class="codesnippet">
			<Prism language="html" source="{MaskingValue}" />
		</div>
		<div>
			<OtpInput 
				separator={"-"}
				maskInput={true}
				numberOfInputs={4}
				placeholder={"****"}
			/>
		</div>
		<label for="name">Masking Input </label>
	</div>
</main>
<style>

</style>
