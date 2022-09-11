import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/svelte";
import userEvent from '@testing-library/user-event';

// @ts-ignore
import Otp from '../lib/Index.svelte';

test("Case 1: Otp Component Renders Without any props or Default Props", () => {
    const { container } = render(Otp);
		const input1 = screen.getByTestId(`elem-0`)
		expect(input1).toBeInTheDocument()
		
		const input2 = screen.getByTestId(`elem-1`)
		expect(input2).toBeInTheDocument()
		
		const input3 = screen.getByTestId(`elem-2`)
		expect(input3).toBeInTheDocument()
		
		const input4 = screen.getByTestId(`elem-3`)
		expect(input4).toBeInTheDocument()
		
		/**
		 * falsy test case
		 */
		const inputNA = screen.queryByTestId('elem-5')
		expect(inputNA).toBeNull() 
		expect(container.querySelector('.separator').innerHTML).toBe('-')
});

test("Case 2: Otp Component Renders with 6 Inputs & separator value & placeholder value", () => {
	const numberOfInputs = 6;
	const separator = '$' ;
	const { container } = render(Otp, {
		numberOfInputs,
		separator,
		placeholder: "000000",
	});
	expect(container.getElementsByClassName('separator').length).toBe(numberOfInputs - 1)
	expect(container.querySelector('.separator').innerHTML).toBe(separator)
	expect(screen.getAllByPlaceholderText('0').length).toBe(6)
	expect(screen.getAllByText('$').length).toBe(5)
});

test("Case 3: Otp Component Renders masked Inputs", () => {
	const numberOfInputs = 4;
	const separator = '$' ;
	render(Otp, {
		numberOfInputs,
		separator,
		maskInput: true,
	});
	
	/**
	 * need to find a better way
	 * getByRole doesn't work since type is password
	 */

	const input = screen.getByTestId('elem-0')
	const input2 = screen.getByTestId('elem-1')
	const input3 = screen.getByTestId('elem-2')
	const input4 = screen.getByTestId('elem-3')

	expect(input).toHaveAttribute("type","password")
	expect(input2).toHaveAttribute("type","password")
	expect(input3).toHaveAttribute("type","password")
	expect(input4).toHaveAttribute("type","password")

});

test("Case 4: Otp Component Renders With Initial Value", () => {
	const prefillValue = '1234';
	
	render(Otp, { initialValue:'1234', separator: "-", placeholder: "0000", numberOfInputs: 4 });
	/**
	 * need to find a better way
	 */
	screen.getAllByRole('textbox').forEach((o, index) => {
		const shouldHaveValue = prefillValue[index]
		expect(o).toHaveValue(shouldHaveValue)
	})

});

test("Case 4: Input Value Change & Focus Change on Input ", async () => {	
	
	const { component } = render(Otp, { separator: "-", placeholder: "0000", numberOfInputs: 4 });
	
	let mockEvent = jest.fn();
	component.$on('notify', function (event) {
		mockEvent(event.detail);
	});

	const input = screen.getByTestId('elem-0')
	const input2 = screen.getByTestId('elem-1')
	const input3 = screen.getByTestId('elem-2')
	const input4 = screen.getByTestId('elem-3')

	await fireEvent.input(input, {target: {value: '2'}})
	// @ts-ignore
	expect((input).value).toBe('2');
	expect(input2).toHaveFocus()

	await fireEvent.input(input2, {target: {value: '3'}})
	// @ts-ignore
	expect(input2.value).toBe('3')
	expect(input3).toHaveFocus()

	await fireEvent.input(input3, {target: {value: '4'}})
	// @ts-ignore
	expect(input3.value).toBe('4')
	expect(input4).toHaveFocus()

	await fireEvent.input(input4, {target: {value: '5'}})
	// @ts-ignore
	expect(input4.value).toBe('5')
	
	expect(mockEvent).toHaveBeenCalled(); 
	expect(mockEvent).toHaveBeenCalledTimes(4); 
	expect(mockEvent).toHaveBeenLastCalledWith({
		completevalue: '2345', isInputComplete: true
	});

});


test("Case 5: Delete Event to Change Focus to Previous element", async () => {
		
	const { component } = render(Otp, { separator: "-", placeholder: "0000", numberOfInputs: 4, initialValue: '1234', emitEventOnPrefill: true});
	
	let mockEvent = jest.fn();
	component.$on('notify', function (event) {
		mockEvent(event.detail);
	});

	const input = screen.getByTestId('elem-0')
	const input2 = screen.getByTestId('elem-1')
	const input3 = screen.getByTestId('elem-2')
	const input4 = screen.getByTestId('elem-3')
	
	waitFor (() => expect(mockEvent).toHaveBeenCalled()) 
	waitFor (() => expect(mockEvent).toHaveBeenCalledWith({
		completevalue: '1234',
		isInputComplete: true,
		onValueUpdateOrPrefill: true
	}))
	
	await userEvent.type(input4, '{backspace}')
	expect(input3).toHaveFocus();
	// @ts-ignore
	expect(input4.value).toBe('')
	
	expect(mockEvent).toHaveBeenCalled(); 
	expect(mockEvent).toHaveBeenLastCalledWith({
		completevalue: '123 ', isInputComplete: false
	});

	await userEvent.type(input3, '{backspace}')
	expect(input2).toHaveFocus();
	// @ts-ignore
	expect(input3.value).toBe('')
	
	expect(mockEvent).toHaveBeenCalled(); 
	expect(mockEvent).toHaveBeenLastCalledWith({
		completevalue: '12  ', isInputComplete: false
	});

	await userEvent.type(input2, '{backspace}')
	expect(input).toHaveFocus();
	// @ts-ignore
	expect(input2.value).toBe('')
	
	expect(mockEvent).toHaveBeenCalled(); 
	expect(mockEvent).toHaveBeenLastCalledWith({
		completevalue: '1   ', isInputComplete: false
	});

	await userEvent.type(input, '{backspace}')
	expect(input).toHaveFocus();
	// @ts-ignore
	expect(input.value).toBe('')
	
	expect(mockEvent).toHaveBeenCalled(); 
	expect(mockEvent).toHaveBeenLastCalledWith({
		completevalue: '    ', isInputComplete: false
	});

	expect(mockEvent).toHaveBeenCalledTimes(5);
});

test("Case 6: Get Value programatically", async () => {
	const { component } = render(Otp, { separator: "-", placeholder: "0000", numberOfInputs: 4, initialValue: '1234' });
	const ResponseWithInitialValue = component.$$.ctx[15]()
	expect(ResponseWithInitialValue).toEqual({ completevalue: '1234', isInputComplete: true })

	const input = screen.getByTestId('elem-0')
	const input2 = screen.getByTestId('elem-1')
	const input3 = screen.getByTestId('elem-2')
	const input4 = screen.getByTestId('elem-3')

	await fireEvent.input(input, {target: {value: '2'}})
	await fireEvent.input(input2, {target: {value: '3'}})
	await fireEvent.input(input3, {target: {value: '4'}})
	await fireEvent.input(input4, {target: {value: '5'}})

	const ResponseWithInputValue = component.$$.ctx[15]()
	expect(ResponseWithInputValue).toEqual({ completevalue: '2345', isInputComplete: true })
});

test("Case 6: Check Prefilled State & Emitted Events", async () => {
	const { rerender, component} = render(Otp, { separator: "-", placeholder: "0000", numberOfInputs: 4, emitEventOnPrefill: true });
	let mockEvent = jest.fn();
	component.$on('notify', function (event) {
		mockEvent(event.detail);
	});
	
	rerender({initialValue: '2345', separator: "-", placeholder: "0000", numberOfInputs: 4, emitEventOnPrefill: true});
	
	waitFor (() => expect(mockEvent).toHaveBeenCalled())
	waitFor (() => expect(mockEvent).toHaveBeenLastCalledWith({
		completevalue: '2345', isInputComplete: true, onValueUpdateOrPrefill: true
	}))
	waitFor (() => expect(mockEvent).toHaveBeenCalledTimes(1))
});

test("Case 7: Render Css Classes passed as props", async () => {
	const numberOfInputs = 4;
	const { container } = render(Otp, { separator: "-", placeholder: "0000", numberOfInputs, 
		customWrapperClass : 'customWrapperClass',
		customRowClass : 'customRowClass',
		customSeparatorClass : 'customSeparatorClass',
		customTextInputClass : 'customTextInputClass',
		customInputWrapperClass : 'customInputWrapperClass',
	 });
	 expect(container.getElementsByClassName('customWrapperClass').length).toBe(1)
	 expect(container.getElementsByClassName('customRowClass').length).toBe(numberOfInputs)
	 expect(container.getElementsByClassName('customSeparatorClass').length).toBe(numberOfInputs - 1)
	 expect(container.getElementsByClassName('customTextInputClass').length).toBe(numberOfInputs)
	 expect(container.getElementsByClassName('customInputWrapperClass').length).toBe(numberOfInputs)
});