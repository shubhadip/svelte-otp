<script lang="ts">
	import OtpInput from '../../lib/Index.svelte';
	import Prism from 'svelte-prism';

	const prefillValueHTML = `
		<OtpInput
		numberOfInputs={4}
		separator='*'
		placeholder='0000'
		customWrapperClass='customWrapperClass'
		customRowClass='customRowClass'
		customSeparatorClass='customSeparatorClass'
		customInputWrapperClass='customInputWrapperClass'
		customTextInputClass='customTextInputClass'
	/>`
</script>
  
<main>
	<div class="container">
		<div class="codesnippet prism-multi">
			<Prism language="html" source="{prefillValueHTML}" />	
		</div>
		<OtpInput 
			numberOfInputs={4} 
			placeholder="****"
			separator="-"
			customWrapperClass={'customWrapperClass'}
			customSeparatorClass={'customSeparatorClass'}
			customRowClass={'customRowClass'}
			customInputWrapperClass={'customInputWrapperClass'}
			customTextInputClass={'customTextInputClass'}
    />
		<label class="textEmitted" for="name">Css Classes</label>
	</div>
</main>

<style lang="postcss">
	@import './stylecss.postcss';
</style>