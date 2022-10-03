import { c as create_ssr_component, d as add_attribute, e as escape, f as createEventDispatcher, h as each, t as tick, v as validate_component } from "../../chunks/index.js";
import prism$1 from "prismjs";
import "prism-svelte";
if (typeof window !== "undefined") {
  if (window.Prism)
    console.warn(
      "Prism has already been initiated. Please ensure that svelte-prism is imported first."
    );
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
}
const prism = prism$1;
prism$1.highlightElement;
const globalConfig = { transform: (x) => x };
const Prism = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { language = "javascript" } = $$props;
  let { source = "" } = $$props;
  let { transform = (x) => x } = $$props;
  let element, formattedCode;
  function highlightCode() {
    const grammar = prism.languages[language];
    let body = source || element.textContent;
    body = globalConfig.transform(body);
    body = transform(body);
    formattedCode = language === "none" ? body : prism.highlight(body, grammar, language);
  }
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  $$props && (source || element) && highlightCode();
  return `<code style="${"display:none"}"${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</code>

<pre class="${"language-" + escape(language, true)}" command-line data-output="${"2-17"}"><code class="${"language-" + escape(language, true)}">${language === "none" ? `${escape(formattedCode)}` : `<!-- HTML_TAG_START -->${formattedCode}<!-- HTML_TAG_END -->`}</code></pre>`;
});
const Index_svelte_svelte_type_style_lang$3 = "";
const css$3 = {
  code: "@import './textinput.css';",
  map: null
};
const Index$9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { maskInput = false } = $$props;
  let { inputType = maskInput ? "password" : "tel" } = $$props;
  let { value = "" } = $$props;
  let { componentIndex } = $$props;
  let { placeholder = "" } = $$props;
  let { customInputWrapperClass = "" } = $$props;
  let { customInputClass = "" } = $$props;
  let { handleChange } = $$props;
  let { dataAttr = "" } = $$props;
  let component;
  if ($$props.maskInput === void 0 && $$bindings.maskInput && maskInput !== void 0)
    $$bindings.maskInput(maskInput);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0)
    $$bindings.inputType(inputType);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.componentIndex === void 0 && $$bindings.componentIndex && componentIndex !== void 0)
    $$bindings.componentIndex(componentIndex);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.customInputWrapperClass === void 0 && $$bindings.customInputWrapperClass && customInputWrapperClass !== void 0)
    $$bindings.customInputWrapperClass(customInputWrapperClass);
  if ($$props.customInputClass === void 0 && $$bindings.customInputClass && customInputClass !== void 0)
    $$bindings.customInputClass(customInputClass);
  if ($$props.handleChange === void 0 && $$bindings.handleChange && handleChange !== void 0)
    $$bindings.handleChange(handleChange);
  if ($$props.dataAttr === void 0 && $$bindings.dataAttr && dataAttr !== void 0)
    $$bindings.dataAttr(dataAttr);
  $$result.css.add(css$3);
  return `

<div${add_attribute("class", `${customInputWrapperClass} textcontainer`, 0)}><input name="${"input"}"${add_attribute("type", inputType, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}${add_attribute("maxlength", 1, 0)}${add_attribute("class", `${customInputClass} inputclass`, 0)}${add_attribute("data-testid", dataAttr, 0)}${add_attribute("data-input", "elem", 0)}${add_attribute("this", component, 0)}>
</div>`;
});
const Index_svelte_svelte_type_style_lang$2 = "";
const css$2 = {
  code: "@import './index.css';",
  map: null
};
const Index$8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { numberOfInputs = 4 } = $$props;
  let { separator = "-" } = $$props;
  let { initialValue = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { customTextInputClass = "" } = $$props;
  let { customSeparatorClass = "" } = $$props;
  let { customRowClass = "" } = $$props;
  let { customWrapperClass = "" } = $$props;
  let { customInputWrapperClass = "" } = $$props;
  let { maskInput = false } = $$props;
  let { autoFocusNextOnInput = true } = $$props;
  let { focusPreviousOnDelete = true } = $$props;
  let { emitEventOnPrefill = false } = $$props;
  function getComponents() {
    return Array.from(Array(numberOfInputs).keys()).map((i) => {
      const initVal = initialValue[i] || "";
      const initPlaceholder = placeholder[i] || "";
      return {
        componentIndex: `otp${i}`,
        ref: null,
        initialValue: initVal,
        placeholder: initPlaceholder
      };
    });
  }
  function checkValidity(doNotify, extrakeys = {}) {
    let completevalue = "";
    let isInputComplete = true;
    components.forEach((i) => {
      var _a, _b;
      let value = `${(_b = (_a = i == null ? void 0 : i.ref) == null ? void 0 : _a.$$) == null ? void 0 : _b.ctx[0]}`;
      if (!value) {
        isInputComplete = false;
      }
      completevalue += value || " ";
    });
    let returnObj = {
      completevalue,
      isInputComplete: isInputComplete && completevalue.length === numberOfInputs
    };
    if (extrakeys) {
      returnObj = { ...returnObj, ...extrakeys };
    }
    if (doNotify) {
      dispatch("notify", returnObj);
    } else {
      return returnObj;
    }
  }
  let components = getComponents();
  const dispatch = createEventDispatcher();
  const getValue = () => {
    return checkValidity(false);
  };
  const handleChange = (currentElement, event) => {
    var _a, _b, _c, _d, _e;
    const isDeleteEvent = event.inputType === "deleteContentBackward";
    const currentIndex = components.findIndex((i) => i.componentIndex === currentElement);
    let nextIndex;
    if (isDeleteEvent && focusPreviousOnDelete) {
      nextIndex = currentIndex === 0 ? 0 : currentIndex - 1;
      const nextRef = (_a = components[nextIndex]) == null ? void 0 : _a.ref;
      (_c = (_b = nextRef == null ? void 0 : nextRef.$$) == null ? void 0 : _b.ctx[6]) == null ? void 0 : _c.focus();
    }
    if (!isDeleteEvent && autoFocusNextOnInput) {
      nextIndex = currentIndex < components.length - 1 ? currentIndex + 1 : currentIndex;
      const nextRef = components[nextIndex].ref;
      (_e = (_d = nextRef == null ? void 0 : nextRef.$$) == null ? void 0 : _d.ctx[6]) == null ? void 0 : _e.focus();
    }
    checkValidity(true);
  };
  if ($$props.numberOfInputs === void 0 && $$bindings.numberOfInputs && numberOfInputs !== void 0)
    $$bindings.numberOfInputs(numberOfInputs);
  if ($$props.separator === void 0 && $$bindings.separator && separator !== void 0)
    $$bindings.separator(separator);
  if ($$props.initialValue === void 0 && $$bindings.initialValue && initialValue !== void 0)
    $$bindings.initialValue(initialValue);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.customTextInputClass === void 0 && $$bindings.customTextInputClass && customTextInputClass !== void 0)
    $$bindings.customTextInputClass(customTextInputClass);
  if ($$props.customSeparatorClass === void 0 && $$bindings.customSeparatorClass && customSeparatorClass !== void 0)
    $$bindings.customSeparatorClass(customSeparatorClass);
  if ($$props.customRowClass === void 0 && $$bindings.customRowClass && customRowClass !== void 0)
    $$bindings.customRowClass(customRowClass);
  if ($$props.customWrapperClass === void 0 && $$bindings.customWrapperClass && customWrapperClass !== void 0)
    $$bindings.customWrapperClass(customWrapperClass);
  if ($$props.customInputWrapperClass === void 0 && $$bindings.customInputWrapperClass && customInputWrapperClass !== void 0)
    $$bindings.customInputWrapperClass(customInputWrapperClass);
  if ($$props.maskInput === void 0 && $$bindings.maskInput && maskInput !== void 0)
    $$bindings.maskInput(maskInput);
  if ($$props.autoFocusNextOnInput === void 0 && $$bindings.autoFocusNextOnInput && autoFocusNextOnInput !== void 0)
    $$bindings.autoFocusNextOnInput(autoFocusNextOnInput);
  if ($$props.focusPreviousOnDelete === void 0 && $$bindings.focusPreviousOnDelete && focusPreviousOnDelete !== void 0)
    $$bindings.focusPreviousOnDelete(focusPreviousOnDelete);
  if ($$props.emitEventOnPrefill === void 0 && $$bindings.emitEventOnPrefill && emitEventOnPrefill !== void 0)
    $$bindings.emitEventOnPrefill(emitEventOnPrefill);
  if ($$props.getValue === void 0 && $$bindings.getValue && getValue !== void 0)
    $$bindings.getValue(getValue);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        async function prefillValueOnInitialValueChange() {
          if (initialValue !== void 0 && initialValue.trim().length > 0) {
            components = getComponents();
            await tick();
            if (emitEventOnPrefill) {
              checkValidity(true, { onValueUpdateOrPrefill: true });
            }
          }
        }
        prefillValueOnInitialValueChange();
      }
    }
    $$rendered = `<section${add_attribute("class", `${customWrapperClass} otp-wrapper`, 0)}>${each(components, (comp, index) => {
      return `<div${add_attribute("class", `${customRowClass} otp-row`, 0)}>${validate_component(Index$9, "TextInput").$$render(
        $$result,
        {
          value: comp.initialValue,
          componentIndex: comp.componentIndex,
          handleChange,
          placeholder: comp.placeholder,
          customInputClass: customTextInputClass,
          customInputWrapperClass,
          maskInput,
          dataAttr: `elem-${index}`,
          this: comp.ref
        },
        {
          this: ($$value) => {
            comp.ref = $$value;
            $$settled = false;
          }
        },
        {}
      )}
      ${index !== components.length - 1 ? `<p${add_attribute("class", `${customSeparatorClass} separator`, 0)}>${escape(separator)}</p>` : ``}
    </div>`;
    })}
</section>`;
  } while (!$$settled);
  return $$rendered;
});
const Index$7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const InputSix = `
		<OtpInput numberOfInputs={6} />`;
  return `<main><div><div class="${"container"}"><div class="${"codesnippet"}">${validate_component(Prism, "Prism").$$render($$result, { language: "html", source: InputSix }, {}, {})}</div>
			<div>${validate_component(Index$8, "OtpInput").$$render($$result, { numberOfInputs: 6 }, {}, {})}</div>
			<label class="${"textEmitted"}" for="${"number-of-inputs"}">Number Of Inputs</label></div></div></main>`;
});
const Index$6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const PlaceholderValue = `
		<OtpInput numberOfInputs={4} placeholder="****"  />`;
  const SeparatorValue = `
		<OtpInput separator="-" placeholder="******" numberOfInputs={6}  />`;
  return `<main><div class="${"container"}"><div class="${"codesnippet"}">${validate_component(Prism, "Prism").$$render(
    $$result,
    {
      language: "html",
      source: PlaceholderValue
    },
    {},
    {}
  )}</div>
		<div>${validate_component(Index$8, "OtpInput").$$render($$result, { numberOfInputs: 4, placeholder: "****" }, {}, {})}</div>
		<label class="${"textEmitted"}" for="${"name"}">Placeholder : *</label></div>

	<div class="${"container"}"><div class="${"codesnippet"}">${validate_component(Prism, "Prism").$$render($$result, { language: "html", source: SeparatorValue }, {}, {})}</div>
		<div>${validate_component(Index$8, "OtpInput").$$render(
    $$result,
    {
      separator: "-",
      placeholder: "******",
      numberOfInputs: 6
    },
    {},
    {}
  )}</div>
		<label class="${"textEmitted"}" for="${"name"}">Separator : - </label></div>

</main>`;
});
const Index_svelte_svelte_type_style_lang$1 = "";
const css$1 = {
  code: "@import './stylecss.postcss';",
  map: null
};
const Index$5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prefillValueHTML = `
		<OtpInput
		numberOfInputs={4}
		separator='*'
		placeholder='0000'
		customWrapperClass='customWrapperClass'
		customRowClass='customRowClass'
		customSeparatorClass='customSeparatorClass'
		customInputWrapperClass='customInputWrapperClass'
		customTextInputClass='customTextInputClass'
	/>`;
  $$result.css.add(css$1);
  return `<main><div class="${"container"}"><div class="${"codesnippet prism-multi"}">${validate_component(Prism, "Prism").$$render(
    $$result,
    {
      language: "html",
      source: prefillValueHTML
    },
    {},
    {}
  )}</div>
		${validate_component(Index$8, "OtpInput").$$render(
    $$result,
    {
      numberOfInputs: 4,
      placeholder: "****",
      separator: "-",
      customWrapperClass: "customWrapperClass",
      customSeparatorClass: "customSeparatorClass",
      customRowClass: "customRowClass",
      customInputWrapperClass: "customInputWrapperClass",
      customTextInputClass: "customTextInputClass"
    },
    {},
    {}
  )}
		<label class="${"textEmitted"}" for="${"name"}">Css Classes</label></div>
</main>`;
});
const Index$4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const MaskingValue = `
		<OtpInput separator="-" placeholder="****" numberOfInputs={4} maskInput={true} />`;
  return `<main><div class="${"container"}"><div class="${"codesnippet"}">${validate_component(Prism, "Prism").$$render($$result, { language: "html", source: MaskingValue }, {}, {})}</div>
		<div>${validate_component(Index$8, "OtpInput").$$render(
    $$result,
    {
      separator: "-",
      maskInput: false,
      numberOfInputs: 4,
      placeholder: "****",
      initialValue: "1234"
    },
    {},
    {}
  )}</div>
		<label class="${"textEmitted"}" for="${"name"}">Masking Input </label></div>
</main>`;
});
const Index$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const FocusValue = `
		<OtpInput 
	separator="-"
	maskInput={true}
	numberOfInputs={4}
	placeholder="****"
	autoFocusNextOnInput={true}
	focusPreviousOnDelete={true}
/>`;
  return `<main><div class="${"container"}"><div class="${"codesnippet"}">${validate_component(Prism, "Prism").$$render($$result, { language: "html", source: FocusValue }, {}, {})}</div>
		<div>${validate_component(Index$8, "OtpInput").$$render(
    $$result,
    {
      separator: "-",
      maskInput: true,
      numberOfInputs: 4,
      placeholder: "****",
      autoFocusNextOnInput: true,
      focusPreviousOnDelete: true
    },
    {},
    {}
  )}</div>
		<label class="${"textEmitted"}" for="${"name"}">Focus Change on Input/Delete </label></div>
</main>`;
});
const Index$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = "";
  let emittedValue = "";
  let otpInstance;
  const GetInputValueHtml = `
		// script 
		let value = '';
		let otpInstance: {getValue: () => void};
		function handleClick() {
			console.log('value on click', 
				otpInstance?.getValue());
		}
		function callbackFunction(event: CustomEvent) {
			console.log('emittedValue', event.detail);
		}
`;
  const GetInputValueJS = `
		<OtpInput
		numberOfInputs={4}
		separator='*'
		placeholder='0000'
		bind:initialValue={value}
		on:notify={callbackFunction}
		maskInput={false}
		autoFocusNextOnInput={true}
		focusPreviousOnDelete={true}
		emitEventOnPrefill={true}
		bind:this={otpInstance}
	/>`;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main><div class="${"container"}"><div class="${"codesnippet prism-multi"}">${validate_component(Prism, "Prism").$$render(
      $$result,
      {
        language: "html",
        source: GetInputValueHtml
      },
      {},
      {}
    )}
			${validate_component(Prism, "Prism").$$render(
      $$result,
      {
        language: "html",
        source: GetInputValueJS
      },
      {},
      {}
    )}</div>
		${validate_component(Index$8, "OtpInput").$$render(
      $$result,
      {
        numberOfInputs: 4,
        separator: "*",
        placeholder: "0000",
        maskInput: false,
        autoFocusNextOnInput: true,
        focusPreviousOnDelete: true,
        emitEventOnPrefill: true,
        initialValue: value,
        this: otpInstance
      },
      {
        initialValue: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          otpInstance = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		<p class="${"textEmitted"}">EmittedValue: ${escape(emittedValue)}</p>
		<div class="${"button-otp"}">Get Value </div></div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
const Index$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = "2345";
  let otpInstance;
  const prefillValueHtml = `
		// script 
		let value = '';
		function callbackFunction(event: CustomEvent) {
			console.log('emittedValue', event.detail);
		}
		function handlePrefill() {
			value = '123456';
		}
`;
  const prefillValueJS = `
		<OtpInput
		numberOfInputs={4}
		separator='*'
		placeholder='0000'
		bind:initialValue={value}
		on:notify={callbackFunction}
		maskInput={false}
		autoFocusNextOnInput={true}
		focusPreviousOnDelete={true}
		emitEventOnPrefill={false}
	/>`;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main><div class="${"container"}"><div class="${"codesnippet prism-multi"}">${validate_component(Prism, "Prism").$$render(
      $$result,
      {
        language: "html",
        source: prefillValueHtml
      },
      {},
      {}
    )}
			${validate_component(Prism, "Prism").$$render($$result, { language: "html", source: prefillValueJS }, {}, {})}</div>
		${validate_component(Index$8, "OtpInput").$$render(
      $$result,
      {
        numberOfInputs: 4,
        separator: "*",
        placeholder: "0000",
        maskInput: false,
        autoFocusNextOnInput: true,
        focusPreviousOnDelete: true,
        emitEventOnPrefill: false,
        initialValue: value,
        this: otpInstance
      },
      {
        initialValue: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          otpInstance = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		<button class="${"button-otp"}">Prefill </button></div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
const Index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import './examples.postcss';",
  map: null
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"main-container"}"><div class="${"example"}">${validate_component(Index$7, "NumberOfInputs").$$render($$result, {}, {}, {})}</div>
  <div class="${"example"}">${validate_component(Index$6, "PlaceholderSeparators").$$render($$result, {}, {}, {})}</div>
  <div class="${"example"}">${validate_component(Index$4, "MaskInput").$$render($$result, {}, {}, {})}</div>
  <div class="${"example"}">${validate_component(Index$3, "Focus").$$render($$result, {}, {}, {})}</div>
  <div class="${"example"}">${validate_component(Index$2, "GetValue").$$render($$result, {}, {}, {})}</div>
  <div class="${"example"}">${validate_component(Index$5, "Styles").$$render($$result, {}, {}, {})}</div>
  <div class="${"example"}">${validate_component(Index$1, "Prefill").$$render($$result, {}, {}, {})}</div>
</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Index, "Example").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
