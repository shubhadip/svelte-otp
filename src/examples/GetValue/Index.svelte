<script lang="ts">
	import Prism from 'svelte-prism';
	import OtpInput from '../../lib/Index.svelte';
	let value = '';
	let emittedValue = ''
	let otpInstance: {getValue: () => void};

	function handleClick() {
		alert(JSON.stringify(otpInstance?.getValue()))
	}

	function callbackFunction(event: CustomEvent) {
		emittedValue = JSON.stringify(event.detail)
	}

	const GetInputValueHtml = `
		// script 
		let value = '';
		let otpInstance: {getValue: () => void};
		function handleClick() {
			console.log('value on click', 
				otpInstance?.getValue());
		}
		function callbackFunction(event: CustomEvent) {
			console.log('emittedValue', event.detail);
		}
`	
	const GetInputValueJS = `
		<OtpInput
		numberOfInputs={4}
		separator='*'
		placeholder='0000'
		bind:initialValue={value}
		on:notify={callbackFunction}
		maskInput={false}
		autoFocusNextOnInput={true}
		focusPreviousOnDelete={true}
		emitEventOnPrefill={true}
		bind:this={otpInstance}
	/>`
</script>

<main>
	<div class="container">
		<div class="codesnippet prism-multi">
			<Prism language="html" source="{GetInputValueHtml}" />
			<Prism language="html" source="{GetInputValueJS}" />
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
			emitEventOnPrefill={true}
			bind:this={otpInstance}
		/>
		<p class="textEmitted">EmittedValue: {emittedValue}</p>
		<div class="button-otp" on:click={handleClick}> Get Value </div>
	</div>
</main>

<style>
</style>
