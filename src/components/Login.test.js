// import React from "react";
// import { shallow } from "enzyme";
// import {Login} from "./login";
// import { BrowserRouter } from "react-router-dom";

// describe("App", () => {
//   it("renders correctly", async () => {
//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );
//   });
// });

// describe("LoginForm", () => {
//     it("renders the password input field", () => {
//       const wrapper = shallow(<Login />);
//       expect(wrapper.find('input[type="password"]'));
//     });
//   });
//   describe("LoginForm", () => {
//

//   });
//   describe("LoginForm", () => {
//     it("submits the form with valid data", () => {
//       const wrapper = shallow(<LoginForm />);
//       const emailInput = wrapper.find('input[type="email"]');
//       const passwordInput = wrapper.find('input[type="password"]');
//       const submitButton = wrapper.find('button[type="submit"]');

//       emailInput.simulate("change", { target: { value: "example@example.com" } });
//       passwordInput.simulate("change", { target: { value: "password" } });
//       submitButton.simulate("submit", { preventDefault: () => {} });

//       // Assert that the form submitted correctly and redirected to the home page
//       expect(window.location.href).toEqual("/home");
//     });
//   });

// describe("LoginForm", () => {
//   it("displays an error message with invalid data", () => {
//     const wrapper = shallow(<Login />);
//     const emailInput = wrapper.find('input[type="email"]');
//     const passwordInput = wrapper.find('input[type="password"]');
//     const submitButton = wrapper.find('button[type="submit"]');

//     emailInput.simulate("change", { target: { value: "invalid-email" } });
//     passwordInput.simulate("change", { target: { value: "invalid-password" } });
//     submitButton.simulate("submit", { preventDefault: () => {} });

//     // Assert that the error message is displayed
//     expect(wrapper.find(".error")).toHaveLength(1);
//   });
// });

import * as React from "react";

import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { Button, TextField } from "@mui/material/";
import Login from "./Login";
import { shallow } from "enzyme";

const mockedUsedNavigate = jest.fn();
jest.mock("lodash");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockedUsedNavigate,
}));

describe("Login", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("has a button and does navigate to other component", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByText("Sign In"));
  });
  it("renders an email input field", () => {
    expect(wrapper.find("#email")).toHaveLength(1);
  });

  it("renders the password input field", () => {
    expect(wrapper.find("#password")).toHaveLength(1);
  });

  // it("renders the login button", () => {
  //   expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
  // });
  // it('renders a submit Button', () => {
  //   expect(wrapper.find(Button).filter({ type: 'submit' })).toHaveLength(1);
  // });
  it("renders a submit Button with Material UI formatting", () => {
    const submitButton = wrapper.find(Button).filter({ type: "submit" });
    expect(submitButton).toHaveLength(1);
    expect(submitButton.prop("variant")).toEqual("contained");
    expect(submitButton.prop("color")).toEqual("primary");
    expect(submitButton.text()).toEqual("Sign In");
  });
  // it('updates email state when email TextField changes', () => {
  //   const emailTextField = wrapper.find(TextField).filter({ name: 'email' });
  //   emailTextField.simulate('change', { target: { name: 'email', value: 'test@example.com' } });
  //   expect(wrapper.state('email')).toEqual('test@example.com');
  // });
  it("submits the form with valid data", () => {
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");
    const submitButton = wrapper.find(Button).filter({ type: "submit" });
// console.log("email",emailInput)
    emailInput.simulate("change", { target: { value: "shivani@gmail.com" } });
    passwordInput.simulate("change", { target: { value: "shivani" } });
    submitButton.simulate("submit", { preventDefault: () => {} });

    // Assert that the form submitted correctly and redirected to the home page
   expect(window.location.href).toEqual("/home");
  });

});
