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

// describe("Login", () => {
//   it("renders the login form", () => {
//     const wrapper = shallow(<Login />);
//     console.log(wrapper)
//     // expect(wrapper.find("form"));
//   });

// });

// describe("LoginForm", () => {
//   it("renders the email input field", () => {
//     const wrapper = shallow(<Login />);
//     expect(wrapper.find('input[type="email"]'));
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

import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import Login from "./Login";
import { shallow,mount } from "enzyme";


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockedUsedNavigate,
}));

describe("Login", () => {
  it("has a button and does navigate to other component", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByText("Sign In"));
  });
  it("renders the login form", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("form"));
  });
  it("renders the email input field", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="email"]'));
  });
  it("renders the password input field", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="password"]'));
  });
  it("renders the login button", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[type="submit"]'));
  });


  it('should update state when username input is changed', () => {
    const wrapper = shallow(<Login />);
    const usernameInput = wrapper.find('email');
    usernameInput.simulate('change', {
      target: { value: 'testuser' }
    });
    expect(wrapper.state('email')).toEqual('testuser');
  });


    describe("LoginForm", () => {


        // it('should submit when data filled', () => {
        //     submitForm.mockResolvedValue({ loggedIn: true });
        //     const wrapper = shallow(<Login />)
        //     const updatedEmailInput = simulateChangeOnInput(wrapper, 'input#email-input', 'test@gmail.com')
        //     const updatedPasswordInput = simulateChangeOnInput(wrapper, 'input#password-input', 'cats'); 
        //     wrapper.find('form').simulate('submit', {
        //       preventDefault: () =>{}
        //     })
        
        //     expect(submitForm).toBeCalled()
        //  })


      //     it("submits the form with valid data", () => {
      // const wrapper = shallow(<Login />);
      // const emailInput = wrapper.find('input[type="email"]');
      // const passwordInput = wrapper.find('input[type="password"]');
      // const submitButton = wrapper.find('button[type="submit"]');

      // emailInput.simulate("change", { target: { value: "shivani@gmail.com" } });
      // passwordInput.simulate("change", { target: { value: "shivani" } });
      // submitButton.simulate("submit", { preventDefault: () => {} });
      //     })
        
        // it('validates model on button click', () => {
        //     const handleSubmit = jest.fn();
        //     const wrapper = shallow(
        //         <Login handleSubmit={handleSubmit}/>
        //     );
        //     const instance = wrapper.instance();
        //     const submitBtn = wrapper.find('#sign-in')
        //     // submitBtn.simulate('Sign In')
        //     expect(handleSubmit).toHaveBeenCalled();
        //   });


   

    
       
      
    //   // Assert that the form submitted correctly and redirected to the home page
    // //   expect(window.location.href).toEqual("/home");
    // });
  });
});
