
# Svelte Otp 

[![Netlify Status](https://api.netlify.com/api/v1/badges/01cc3b58-429a-41d5-b1d4-f96641a3245f/deploy-status)](https://app.netlify.com/sites/svelte-otp/deploys)

A Otp Component that can be used with Svelte. 

# Install
``` bash
npm install svelte-otp --save

yarn add svelte-otp
```

- [Demo](#demo)
- [Usage](#usage)
- [Props](#available-props)
- [Events](#events)

## Demo

To view a demo online: <https://svelte-otp.netlify.app/>

To view demo examples locally clone the repo and run `npm install && npm run dev`

``` javascript
import SvelteOtp from 'svelte-otp';

// main 
<SvelteOtp	
    separator="-"
    placeholder="0000"
    ...
/>
```

## Usage

``` html
<SvelteOtp	
		separator="-"
		placeholder="0000"
        ...
	/>
```

***numberOfInputs* prop**

``` html
    <SvelteOtp numberOfInputs={6} />
```
***numberOfInputs* along with *separator*prop**
``` html
<SvelteOtp numberOfInputs={4} separator="-"  />
```
**Using *numberOfInputs*, *separator* and *placeholder* props**
``` html
<SvelteOtp separator="-" placeholder="******" numberOfInputs={6}  />
```
**Masking Input**
``` html
<SvelteOtp separator="-" placeholder="****" numberOfInputs={4} maskInput={true} />
```
**Change Focus on Input/Delete**
``` html
<SvelteOtp 
	...
	autoFocusNextOnInput={true}
	focusPreviousOnDelete={true}
/>
```
**Programtic Access of value of Otp**
```html
    let otpInstance: {getValue: () => void};
    function handleClick() {
        console.log('value on click', 
            otpInstance?.getValue());
    }
	...
<SvelteOtp 
		...
		bind:this={otpInstance}
	/>
```

**Prefill value on some other events/actions**
``` html
function callbackFunction(event: CustomEvent) {
    console.log('emittedValue', event.detail);
}
function handlePrefill() {
    value = '123456';
}
<SvelteOtp
		...
        bind:initialValue={value}
		on:notify={callbackFunction}
		...
		emitEventOnPrefill={false}
	/>
<div class="button-otp" on:click={handleClick}> Get Value </div>
```

**Event on Otp Filled completely**
``` html
function callbackFunction(event: CustomEvent) {
    console.log('emittedValue', event.detail);
}

<SvelteOtp
		...
		on:notify={callbackFunction}
		...
		emitEventOnPrefill={false}
	/>
```

## Available props

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| numberOfInputs                | Number          |     4       | Number of Inputs to be shown             |
| separator                     | String          |             | separator between inputs                 |
| placeholder                   | String          |             | placeholder for text inputs.             |
| maskInput                     | Boolean         | false       | mask input values                        |
| autoFocusNextOnInput          | Boolean         | true        | focus on next input after entering value              |
| focusPreviousOnDelete         | Boolean         | true        | move focus to previous element on delete                   |
| emitEventOnPrefill            | Boolean         | false       | emits events on filling all input fields                   |

## Events

Only emitted event.

eventObj = {
            completevalue: string;
            isInputComplete: boolean;
        }

| Event             | Output     | Description                          |
|-------------------|------------|--------------------------------------|
| notify            |  eventObj  | Even is emitted when input is complete                 |

## Authors
[@shubhadip](https://www.github.com/shubhadip)
