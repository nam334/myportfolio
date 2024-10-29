// import { render, screen } from "@testing-library/react";
// import ContactUs from "./ContactUs";

// describe("Contact Us", () => {
//   test("contact us elements render correctly", () => {
//     render(<ContactUs />);

//     const inputEl = screen.getByRole("textbox", {
//       name: "YOUR NAME",
//     });
//     expect(inputEl).toBeInTheDocument();

//     const btnEl = screen.getByRole("button");
//     expect(btnEl).toBeInTheDocument();

//     const txtEl = screen.getByText("Send me a message!");
//     expect(txtEl).toBeInTheDocument();

//     const loginBtn = screen.queryByRole("button", {
//       name: "Login",
//     });
//     expect(loginBtn).not.toBeInTheDocument();
//   });
// });

import { render, screen } from "@testing-library/react";
import ContactUs from "./ContactUs";
import userEvent from "@testing-library/user-event";

describe("Counter component", () => {
  test("check the counter comp", () => {
    render(<ContactUs />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toBeInTheDocument();
    const btnEl = screen.getByRole("button", {
      name: "Increment",
    });
    expect(btnEl).toBeInTheDocument();
  });

  test("chk if initial value is 0", () => {
    render(<ContactUs />);
    const countEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(countEl).toHaveTextContent("0");
  });

  test("renders count of 1 after clicking btn", async () => {
    // const user = userEvent.default.setup();
    render(<ContactUs />);
    const btnEl = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(btnEl);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("1");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<ContactUs />);
    const inputEl = screen.getByRole("textbox");
    await userEvent.type(inputEl, "10");
    expect(inputEl).toHaveValue("10");

    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setBtn);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("10");
  });
});
