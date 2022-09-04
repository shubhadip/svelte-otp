<script lang="ts">
	import Prism from 'svelte-prism'
	import OtpInput from '../../lib/OtpInput/OtpInput.svelte';
	const InputSix = `
		<OtpInput numberOfInputs={6} />`;
</script>
  
<main>
	<div>
		<div class="container">
			<div class="codesnippet">
				<Prism language="html" source="{InputSix}" />
			</div>
			<div>
				<OtpInput numberOfInputs={6} />
			</div>
			<label for="number-of-inputs">Number Of Inputs</label>
		</div>
	</div>
</main>
