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
      <a class="links" target="_blank" href="https://github.com/shubhadip/svelte-otp/releases/tag/v1.0.2">v1.0.2 </a>
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
      <p class="subtitle">Powerful OTP Input</p>
      <p class="subtitle">Component for Svelte</p>
      <p>Lightweight & reusable OTP input component for svelte projects.</p>
      <div class="try-out">
        <a class="links" href="/about">
          <img class="icon" src="./src/assets/icons/laptop_mac.svg" alt="">Get Started
        </a>
        <a class="links" href="/">
          <img class="icon" src="./src/assets/icons/github.svg" alt="">Github
        </a>
        <a class="links" href="/">
          <img class="icon" src="./src/assets/icons/code.svg" alt="">Playground
        </a>
      </div>
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
