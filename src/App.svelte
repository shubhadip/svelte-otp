<!-- <script lang="ts">
  import OtpInput from './lib/OtpInput/OtpInput.svelte';
  let value = '';
  let otpInstance: {getValue: () => void};

  function handleClick() {
    console.log('value on click', otpInstance?.getValue());
  }

  function callbackFunction(event: CustomEvent) {
    console.log('emittedValue', event.detail);
  }

  function handlePrefill() {
    value = '123456';
  }
</script>

<main>
  <div>
    <OtpInput
      numberOfInputs={6}
      separator={'*'}
      placeholder={'000000'}
      customTextInputClass={''}
      customSeparatorClass={''}
      customRowClass={''}
      customWrapperClass={''}
      customInputWrapperClass={''}
      bind:initialValue={value}
      bind:this={otpInstance}
      on:notify={callbackFunction}
      maskInput={true}
      autoFocusNextOnInput={true}
      focusPreviousOnDelete={true}
      emitEventOnPrefill={true}
    />
    <button class="button-otp" on:click={handleClick}> Get Otp </button>
    <button class="button-otp" on:click={handlePrefill}> Prefill </button>
  </div>
</main>

<style>
</style> -->

<script lang="ts">
  import Example from './examples/Index.svelte';
</script>

<main>
  <Example />
</main>

<style lang="postcss">

</style>
