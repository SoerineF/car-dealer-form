import React from "react";
import {configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
import Form from "../../App";

configure({adapter: new Adapter() });

describe("<Form />", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = mount(<CarDealerForm />)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

it('calls onSubmit prop function when form is submitted', () => {
    const onSubmitFn = jest.fn();
    const wrapper = mount(<Form onSubmit={onSubmitFn}/>);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });