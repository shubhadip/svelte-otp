<script lang="ts">
  export let maskInput = false;
  export let inputType: string = maskInput ? 'password' : 'tel';
  export let value = '';
  export let componentIndex: string;
  export let placeholder = '';
  export let customInputWrapperClass = '';
  export let customInputClass = '';
  export let handleChange: (componentIndex: string, value: any) => void;
  export let dataAttr = '';
  export let isDark = false;

  let component;

  function onChange(e: Event & { currentTarget: EventTarget & HTMLInputElement }): void {
		value = (e.target as HTMLInputElement).value;
		if (handleChange) {
			handleChange(componentIndex, e);
		}
  }

</script>

<svelte:window />

<div class={`${customInputWrapperClass} textcontainer ${isDark ? 'isdark' : ' ' }`}>
  <input
    name="input"
		type={inputType}
		{placeholder}
		{value}
		on:input={onChange}
		maxlength={1}
		class={`${customInputClass} inputclass`}
		bind:this={component}
    data-testid={dataAttr}
    data-input={'elem'}
		/>
</div>

<style lang="postcss">
  @import './textinput.css';
</style>
