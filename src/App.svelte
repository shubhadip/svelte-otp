<script lang="ts">
  import Prism from 'svelte-prism';
  import OtpInput from './lib/Index.svelte';
  const FocusValue = `
		<OtpInput
	separator="-"
	maskInput={true}
	numberOfInputs={4}
	placeholder="****"
	autoFocusNextOnInput={true}
	focusPreviousOnDelete={true}
/>`;
  import Example from './examples/Index.svelte';
</script>

<main>
  <header class="header-wrapper">
    <h1 class="header-logo">
      <a class="links" href="/about">OTP Input</a>
    </h1>
    <div class="header-links">
      <a class="links" href="/about">About</a>
      <a class="links" href="/">Usage</a>
      <a class="links" href="/">Github</a>
      <a class="links" href="/">Contact</a>
    </div>
  </header>
  <div class="content-wrapper">
    <div class="left">
      <div class="otp-block-wrapper">
        <div class="otp-block"><p>S</p></div>
        <div class="otp-block"><p>V</p></div>
        <div class="otp-block"><p>E</p></div>
        <div class="otp-block"><p>L</p></div>
        <div class="otp-block"><p>T</p></div>
        <div class="otp-block"><p>E</p></div>
      </div>
      <p class="subtitle">Supernatural OTP Input</p>
      <p class="subtitle">Component for Svelte</p>
    </div>
    <div class="right">
      <div class="codesnippet-card">
        <div class="codesnippet">
          <Prism language="html" source={FocusValue} />
        </div>
        <div>
          <OtpInput
            separator={'-'}
            maskInput={true}
            numberOfInputs={4}
            placeholder={'****'}
            autoFocusNextOnInput={true}
            focusPreviousOnDelete={true}
          />
        </div>
        <label class="textEmitted" for="name">Focus Change on Input/Delete </label>
      </div>
    </div>
    <!-- <Example /> -->
  </div>
  <!-- <Example /> -->
</main>