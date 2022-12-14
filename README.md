
# Svelte Otp

[![Build Status](https://app.travis-ci.com/shubhadip/svelte-otp.svg?branch=main)](https://app.travis-ci.com/shubhadip/svelte-otp)

[![codecov](https://codecov.io/gh/shubhadip/svelte-otp/branch/main/graph/badge.svg?token=P95PBOGESX)](https://codecov.io/gh/shubhadip/svelte-otp)

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
import OtpInput from 'svelte-otp';

// main
<OtpInput
    separator="-"
    placeholder="0000"
    ...
/>
```

## Usage

``` html
<OtpInput
		separator="-"
		placeholder="0000"
        ...
	/>
```

***numberOfInputs* prop**

``` html
    <OtpInput numberOfInputs={6} />
```
***numberOfInputs* along with *separator*prop**
``` html
<OtpInput numberOfInputs={4} separator="-"  />
```
**Using *numberOfInputs*, *separator* and *placeholder* props**
``` html
<OtpInput separator="-" placeholder="******" numberOfInputs={6}  />
```
**Masking Input**
``` html
<OtpInput separator="-" placeholder="****" numberOfInputs={4} maskInput={true} />
```
**Change Focus on Input/Delete**
``` html
<OtpInput
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
<OtpInput
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
<OtpInput
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

<OtpInput
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
| customWrapperClass            | string          | false       | used to style wrapper element of otp                |
| customSeparatorClass          | string          |             | used to style separator                   |
| customRowClass                | string          |           	| used to style individual input                   |
| customInputWrapperClass       | string	      |        		| used to style input wrapper                    |
| customTextInputClass          | string          |        		| used to style input box                   |
| emitEventOnPrefill            | string          |        		| emits events on filling all input fields                   |

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
