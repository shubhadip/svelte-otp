<script lang="ts">
  import OtpInput from '../lib/Index.svelte';

</script>
<main>
  <header class="header-wrapper">
    <h1 class="header-logo">
      <a class="links" href="/about">OTP Input</a>
    </h1>
    <div class="header-links">
      <a class="links" rel="noreferrer" href="/examples">API</a>
      <a class="links" target="_blank" rel="noreferrer" href={`https://github.com/shubhadip/svelte-otp/releases/tag/v1.0.9`}>v1.0.9</a>
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
      <p class="text">Lightweight & reusable OTP input component for Svelte projects.</p>
      <div class="try-out">
        <a class="links" href="/examples">
          <img class="icon" src="./src/assets/icons/laptop_mac.svg" alt="" />Get Started
        </a>
        <a class="links" href="https://github.com/shubhadip/svelte-otp">
          <img class="icon" src="./src/assets/icons/github.svg" alt="" />Github
        </a>
        <a class="links" href="/">
          <img class="icon" src="./src/assets/icons/code.svg" alt="" />Playground
        </a>
      </div>
    </div>
    <div class="right">
      <div class="feature-list feature-list--card">
        <div class="title">Focus change on Input/Delete</div>
        <OtpInput
          separator={'-'}
          maskInput={true}
          numberOfInputs={4}
          placeholder={'****'}
          autoFocusNextOnInput={true}
          focusPreviousOnDelete={true}
        />
        <div class="title">OTP input with 6 number of inputs</div>
        <OtpInput
          separator={'-'}
          placeholder={'------'}
          maskInput={false}
          numberOfInputs={6}
          autoFocusNextOnInput={true}
          focusPreviousOnDelete={true}
        />
      </div>
    </div>

    <!-- <Example /> -->
  </div>
  <div class="footer">
    <div>Released under the MIT License</div>
    <div>
      <span>© 2022 OTP Input for Svelte</span><span
        >author <a target="_blank" href="https://github.com/shubhadip/" class="link">shubhadip</a></span
      >
    </div>
  </div>
  <!-- <Example /> -->
</main>

<style lang="postcss">
  @import "../app.css";
</style>