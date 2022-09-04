<script lang="ts">
	import Prism from 'svelte-prism';
	import OtpInput from '../../lib/Index.svelte';
	let value = '';
	let otpInstance

	function callbackFunction(event: CustomEvent) {
		console.log('emittedValue', event.detail);
	}

	function handlePrefill() {
		value = '1234';
	}

	const prefillValueHtml = `
		// script 
		let value = '';
		function callbackFunction(event: CustomEvent) {
			console.log('emittedValue', event.detail);
		}
		function handlePrefill() {
			value = '123456';
		}
`	
	const prefillValueJS = `
		<OtpInput
		numberOfInputs={4}
		separator='*'
		placeholder='0000'
		bind:initialValue={value}
		on:notify={callbackFunction}
		maskInput={false}
		autoFocusNextOnInput={true}
		focusPreviousOnDelete={true}
		emitEventOnPrefill={false}
	/>`
</script>

<main>
	<div class="container">
		<div class="codesnippet prism-multi">
			<Prism language="html" source="{prefillValueHtml}" />
			<Prism language="html" source="{prefillValueJS}" />
		</div>
		<OtpInput
			numberOfInputs={4}
			separator={'*'}
			placeholder={'0000'}
			bind:initialValue={value}
			on:notify={callbackFunction}
			maskInput={false}
			autoFocusNextOnInput={true}
			focusPreviousOnDelete={true}
			emitEventOnPrefill={false}
			bind:this={otpInstance}
		/>
		<button class="button-otp" on:click={handlePrefill}> Prefill </button>
	</div>
</main>

<style>
</style>
