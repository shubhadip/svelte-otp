<script lang="ts">
  export let maskInput = false;
  export let inputType: string = maskInput ? 'password' : 'tel';
  export let value = '';
  export let componentIndex: string;
  export let placeholder = '';
  export let customInputWrapperClass = '';
  export let customInputClass = '';
  export let handleChange: (componentIndex: string, value: any) => void;

  let component;

  function onChange(e: Event & { currentTarget: EventTarget & HTMLInputElement }): void {
		value = (e.target as HTMLInputElement).value;
		if (handleChange) {
			handleChange(componentIndex, e);
		}
  }

</script>

<svelte:window />

<div class={`${customInputWrapperClass} textcontainer`}>
  <input
		type={inputType}
		{placeholder}
		{value}
		on:input={onChange}
		maxlength={1}
		class={`${customInputClass} inputclass`}
		bind:this={component}
		/>
</div>

<style lang="postcss">
  @import './textinput.css';
</style>
