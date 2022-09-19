<script lang="ts">
	import Prism from 'svelte-prism'
	import OtpInput from '../../lib/Index.svelte';
	const InputSix = `
		<OtpInput numberOfInputs={6} isDark={true} />`;
</script>
  
<main>
	<div>
		<div class="container">
			<div class="codesnippet">
				<Prism language="html" source="{InputSix}" />
			</div>
			<div>
				<OtpInput numberOfInputs={6} isDark={true} />
			</div>
			<label class="textEmitted" for="number-of-inputs">Number Of Inputs</label>
		</div>
	</div>
</main>
