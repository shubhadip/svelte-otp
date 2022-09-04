<script lang="ts">
	import OtpInput from '../../lib/Index.svelte';
</script>
  
<main>
	<div>
		<p> Css Styles : </p>
		<OtpInput 
			numberOfInputs={4} 
			placeholder="*"
			customTextInputClass={'customTextInputClass'}
      customSeparatorClass={'customSeparatorClass'}
      customRowClass={'customRowClass'}
      customWrapperClass={'customWrapperClass'}
      customInputWrapperClass={'customInputWrapperClass'}
    />
	</div>
</main>
<style lang="postcss">
	.customTextInputClass {

	}
	.customSeparatorClass {
		
	}
	.customRowClass {

	}
	.customWrapperClass {

	}
	.customWrapperClass {

	}
</style>
