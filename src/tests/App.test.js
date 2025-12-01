import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.js";

test("renders welcome heading", () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to the Employment Application/i);
  expect(heading).toBeInTheDocument();
});

test("renders start application button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Start Application/i });
  expect(button).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});

test("start application button is clickable", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Start Application/i });
  expect(button).toBeEnabled();
});

test("Start Application button exists and is clickable", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Start Application/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(button).toBeEnabled();
});

test("form inputs render correctly", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Last Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Phone/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Nationality/i)).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument(); // gender select
});

test("can type into form inputs", () => {
  render(<App />);
  const firstName = screen.getByPlaceholderText(/First Name/i);
  fireEvent.change(firstName, { target: { value: "John" } });
  expect(firstName.value).toBe("John");

  const lastName = screen.getByPlaceholderText(/Last Name/i);
  fireEvent.change(lastName, { target: { value: "Doe" } });
  expect(lastName.value).toBe("Doe");
});
