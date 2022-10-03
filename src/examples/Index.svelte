<script lang="ts">
  import NumberOfInputs from './NumberOfInputs/Index.svelte';
  import PlaceholderSeparators from './PlaceholderSeparators/Index.svelte';
  import Styles from './Styles/Index.svelte';
  import MaskInput from './MaskInput/Index.svelte';
  import Focus from './Focus/Index.svelte';
  import GetValue from './GetValue/Index.svelte';
  import Prefill from './Prefill/Index.svelte';
</script>

<main class="main-container">
  <div class="example">
    <NumberOfInputs />
  </div>
  <div class="example">
    <PlaceholderSeparators />
  </div>
  <div class="example">
    <MaskInput />
  </div>
  <div class="example">
    <Focus />
  </div>
  <div class="example">
    <GetValue />
  </div>
  <div class="example">
    <Styles />
  </div>
  <div class="example">
    <Prefill />
  </div>
</main>

<style lang="postcss">
  @import './examples.postcss';
</style>
