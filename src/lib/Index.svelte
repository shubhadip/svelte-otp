<script lang="ts">
    import { createEventDispatcher, tick } from 'svelte';
    import TextInput from './TextInput/Index.svelte';
    interface IInputValue {
      completevalue: string;
      isInputComplete: boolean;
    }
  
    export let numberOfInputs = 4;
    export let separator = '-';
    export let initialValue = '';
    export let placeholder = '';
    export let customTextInputClass = '';
    export let customSeparatorClass = '';
    export let customRowClass = '';
    export let customWrapperClass = '';
    export let customInputWrapperClass = '';
    export let maskInput = false;
    export let autoFocusNextOnInput = true;
    export let focusPreviousOnDelete = true;
    export let emitEventOnPrefill = false;
    export let isDark = false
    function getComponents(): {
      componentIndex: string;
      ref: any | null;
      initialValue: string;
      placeholder: string;
    }[] {
      return Array.from(Array(numberOfInputs).keys()).map((i: number) => {
        const initVal = initialValue[i] || '';
        const initPlaceholder = placeholder[i] || '';
        return {
          componentIndex: `otp${i}`,
          ref: null,
          initialValue: initVal,
          placeholder: initPlaceholder,
        };
      });
    }
  
    function checkValidity(doNotify: boolean, extrakeys: { [x: string]: any } = {}): IInputValue | void {
      let completevalue = '';
      let isInputComplete = true;
  
      components.forEach((i: {
        [x: string]: any
      }) => {
        /* eslint-disable */
        let value: string = `${i?.ref?.$$?.ctx[0]}` as string;
        /* eslint-enable */
        if (!value) {
          isInputComplete = false;
        }
        completevalue += value || ' ';
      });
  
      let returnObj = {
        completevalue,
        isInputComplete: isInputComplete && completevalue.length === numberOfInputs,
      };
      if (extrakeys) {
        returnObj = {
          ...returnObj,
          ...(extrakeys),
        };
      }
      if (doNotify) {
        dispatch('notify', returnObj);
      } else {
        return returnObj;
      }
    }
  
    let components = getComponents();
    
    $: {
      /* eslint-disable */
      async function prefillValueOnInitialValueChange() : Promise<void> {
        if (initialValue !== undefined && initialValue.trim().length > 0) {
          components = getComponents();
          await tick();
          if (emitEventOnPrefill) {
            checkValidity(true, { onValueUpdateOrPrefill: true });
          }
        }
      };
      prefillValueOnInitialValueChange();
      /* eslint-enable */
    }
  
    const dispatch = createEventDispatcher<{
    'notify': IInputValue
    }>();
  
    export const getValue = (): IInputValue => {
      return checkValidity(false) as IInputValue;
    };
  
    const handleChange = (currentElement: string, event: InputEvent): void => {
      const isDeleteEvent = event.inputType === 'deleteContentBackward';
      const currentIndex = components.findIndex((i) => i.componentIndex === currentElement);
      let nextIndex;
  
      if (isDeleteEvent && focusPreviousOnDelete) {
        nextIndex = currentIndex === 0 ? 0 : currentIndex - 1;
        /* eslint-disable */
        const nextRef: {[x:string]: any} = components[nextIndex]?.ref;
        nextRef?.$$?.ctx[7]?.focus();
        /* eslint-enable */
      }
  
      if (!isDeleteEvent && autoFocusNextOnInput) {
        nextIndex = currentIndex < components.length - 1 ? currentIndex + 1 : currentIndex;
        /* eslint-disable */
        const nextRef: {[x:string]: any} = components[nextIndex].ref;
        nextRef?.$$?.ctx[7]?.focus();
        /* eslint-enable */
      }
  
      checkValidity(true);
    };
  </script>
  
  <section class={`${customWrapperClass} otp-wrapper`}>
    {#each components as comp, index}
      <div class={`${customRowClass} otp-row`}>
        <TextInput
          value={comp.initialValue}
          componentIndex={comp.componentIndex}
          {handleChange}
          placeholder={comp.placeholder}
          bind:this={comp.ref}
          customInputClass={customTextInputClass}
          {customInputWrapperClass}
          {maskInput}
          dataAttr={`elem-${index}`}
          isDark={isDark}
        />
        {#if index !== components.length - 1}
          <div class={`${customSeparatorClass} separator`}>{separator}</div>
        {/if}
      </div>
    {/each}
  </section>
  
  <style lang="postcss">
    @import './index.css';
  </style>
  