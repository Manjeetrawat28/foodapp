import SignupForm from "./SignupForm";
import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("form validations", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            message: "sing up successfully",
          }),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  beforeEach(
    async () =>
      await act(async () =>
        render(
          <MemoryRouter initialEntries={["/", "/authentication/singUp"]}>
            <SignupForm />
          </MemoryRouter>
        )
      )
  );
  it("renders all components correctly", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(3);
    expect(screen.getByTestId("passwordInput")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("display error when input is left empty on submit", async () => {
    await act(async () => fireEvent.submit(screen.getByTestId("singUpForm")));

    expect(screen.getAllByText("*The field is required")).toHaveLength(4);
  });

  it("diplay password error when input  is left empty after focus", async () => {
    await act(async () => fireEvent.focus(screen.getByTestId("passwordInput")));
    await act(async () => fireEvent.blur(screen.getByTestId("passwordInput")));

    expect(screen.getByText("*The field is required.")).toBeInTheDocument();
  });

  it("diplay name  error when input  is left empty after focus", async () => {
    await act(async () => fireEvent.focus(screen.getByTestId("nameInput")));
    await act(async () => fireEvent.blur(screen.getByTestId("nameInput")));

    expect(screen.getByText("*The field is required.")).toBeInTheDocument();
  });

  it("diplay last name error message", async () => {
    await act(async () => fireEvent.focus(screen.getByTestId("lastNameInput")));
    await act(async () => fireEvent.blur(screen.getByTestId("lastNameInput")));

    expect(screen.getByText("*The field is required.")).toBeInTheDocument();
  });

  it("diplay email error message", async () => {
    await act(async () => fireEvent.focus(screen.getByTestId("emailInput")));
    await act(async () => fireEvent.blur(screen.getByTestId("emailInput")));

    expect(screen.getByText("*The field is required.")).toBeInTheDocument();
  });

  it("diplay email  error when input  is left empty after focus", async () => {
    await act(async () =>
      fireEvent.change(screen.getByTestId("emailInput"), {
        target: {
          value: "wrongemail@email",
        },
      })
    );
    await act(async () => fireEvent.blur(screen.getByTestId("emailInput")));

    expect(screen.getByText("*Email is not valid")).toBeInTheDocument();

    await act(async () =>
      fireEvent.change(screen.getByTestId("emailInput"), {
        target: {
          value: "correctemailexample@gmail.com",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("emailInput")));

    expect(screen.queryByText("*Email is not valid")).not.toBeInTheDocument();
  });

  it("diplay last name  error when input  is left empty after focus", async () => {
    await act(async () =>
      fireEvent.change(screen.getByTestId("lastNameInput"), {
        target: {
          value: "lastName24",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("lastNameInput")));

    expect(screen.getByText("*Invalid Last Name")).toBeInTheDocument();

    await act(async () =>
      fireEvent.change(screen.getByTestId("lastNameInput"), {
        target: {
          value: "Díaz",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("lastNameInput")));

    expect(screen.queryByText("*invalid Last Name")).not.toBeInTheDocument();
  });

  it("diplay name error message", async () => {
    await act(async () =>
      fireEvent.change(screen.getByTestId("nameInput"), {
        target: {
          value: "Manjeet Rawat",
        },
      })
    );
    await act(async () => fireEvent.blur(screen.getByTestId("nameInput")));

    expect(screen.getByText("*Invalid Name")).toBeInTheDocument();

    await act(async () =>
      fireEvent.change(screen.getByTestId("nameInput"), {
        target: {
          value: "Manjeet  ",
        },
      })
    );
    await act(async () => fireEvent.blur(screen.getByTestId("nameInput")));

    expect(screen.getByText("*Invalid Name")).toBeInTheDocument();

    await act(async () =>
      fireEvent.change(screen.getByTestId("nameInput"), {
        target: {
          value: "Manjeet",
        },
      })
    );
    await act(async () => fireEvent.blur(screen.getByTestId("nameInput")));

    expect(screen.queryByText("*Invalid Name")).not.toBeInTheDocument();
  });

  it("diplay password error message", async () => {
    await act(async () =>
      fireEvent.change(screen.getByTestId("passwordInput"), {
        target: {
          value: "foo",
        },
      })
    );
    await act(async () => fireEvent.blur(screen.getByTestId("passwordInput")));

    expect(
      screen.getByText("*The minimum length is 5 characters")
    ).toBeInTheDocument();

    await act(async () =>
      fireEvent.change(screen.getByTestId("passwordInput"), {
        target: {
          value: "longsecretpassword",
        },
      })
    );
    await act(async () => fireEvent.blur(screen.getByTestId("passwordInput")));

    expect(
      screen.queryByText("*The minimum length is 5 characters")
    ).not.toBeInTheDocument();
  });

  it("submit with corrects values and render spinner", async () => {
    await act(async () =>
      fireEvent.change(screen.getByTestId("nameInput"), {
        target: {
          value: "Manjeet",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("nameInput")));

    expect(screen.getByTestId("nameInput")).toHaveValue("Manjeet");

    await act(async () =>
      fireEvent.change(screen.getByTestId("lastNameInput"), {
        target: {
          value: "Rawat",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("lastNameInput")));

    expect(screen.getByTestId("lastNameInput")).toHaveValue("Díaz");

    await act(async () =>
      fireEvent.change(screen.getByTestId("passwordInput"), {
        target: {
          value: "longsecretpasword",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("passwordInput")));

    expect(screen.getByTestId("passwordInput")).toHaveValue(
      "longsecretpasword"
    );

    await act(async () =>
      fireEvent.change(screen.getByTestId("emailInput"), {
        target: {
          value: "correctemailexample@gmail.com",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("emailInput")));

    expect(screen.getByTestId("emailInput")).toHaveValue(
      "correctemailexample@gmail.com"
    );

    await act(async () => fireEvent.submit(screen.getByTestId("singUpForm")));

    setTimeout(async () => {
      const spinner = await screen.findByTestId("spinner");

      expect(spinner).toBeInTheDocument();
    }, 1000);
  });
});

describe("handle fetch exeptions", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 400,
        json: () =>
          Promise.resolve({
            message: "bad request",
          }),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("display custom error messages", async () => {
    await act(async () =>
      render(
        <MemoryRouter initialEntries={["/", "/authentication/singUp"]}>
          <SignupForm />
        </MemoryRouter>
      )
    );
    await act(async () => fireEvent.blur(screen.getByTestId("nameInput")));

    await act(async () =>
      fireEvent.change(screen.getByTestId("lastNameInput"), {
        target: {
          value: "Díaz",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("lastNameInput")));

    await act(async () =>
      fireEvent.change(screen.getByTestId("passwordInput"), {
        target: {
          value: "wrongUserPasword",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("passwordInput")));

    await act(async () =>
      fireEvent.change(screen.getByTestId("emailInput"), {
        target: {
          value: "correctemailexample@gmail.com",
        },
      })
    );

    await act(async () => fireEvent.blur(screen.getByTestId("emailInput")));

    await act(async () => fireEvent.submit(screen.getByTestId("singUpForm")));

    setTimeout(async () => {
      await expect(screen.getByText("bad request")).toBeInTheDocument();
    }, 1000);
  });
});
