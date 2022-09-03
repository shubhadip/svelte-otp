<script lang="ts">
	export let maskInput: boolean = false;
	export let inputType: string = maskInput ? 'password': 'tel';
	export let value: string = ''
	export let componentIndex: string;
	export let placeholder: string = ''
	export let customInputWrapperClass: string = '';
	export let customInputClass: string = '';
	export let handleBlur: (componentIndex: string) => void = () => {} ;
	export let handleChange: (componentIndex: string, value: any) => void ;
	
	let component;
	
	function onChange(e : Event & { currentTarget: EventTarget & HTMLInputElement }) : void {
		value = ((e.target as HTMLInputElement).value);
		if(handleChange) {
			handleChange(componentIndex, e)
		}
	};

	function onBlur() : void {
		if(handleBlur) {
			handleBlur(componentIndex)
		}
	};

</script>

<svelte:window/>

<div class={`${customInputWrapperClass} textcontainer`}>
	<input 
		type={inputType}
		placeholder={placeholder} 
		value={value}
		on:input="{onChange}"
		on:blur="{onBlur}"
		maxlength={1}
		class={`${customInputClass} inputclass`}
		bind:this={component} 
	/>
</div>

<style lang="postcss">
	@import './textinput.postcss';
</style>