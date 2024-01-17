import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./app";

describe("App", () => {
  it("should work as expected", () => {
    const { container } = render(<App />);

    const element = screen.getByText("The Bots Frontend coding challenge");

    expect(element).toBeDefined();
  });

  it("should display unshifted result", () => {
    const { container } = render(<App />);

    const messageInput = screen.getByLabelText("Message:");
    fireEvent.change(messageInput, {
      target: { value: "foo" },
    });

    const resultText = screen.getByText("Result: foo");

    expect(resultText).toBeDefined();
  });

  it("should shift a message forwards with a shift key of 5", () => {
    const { container } = render(<App />);

    const messageInput = screen.getByLabelText("Message:");
    fireEvent.change(messageInput, {
      target: {
        value: "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      },
    });

    const shiftKeyInput = screen.getByLabelText("Shift Key:");
    fireEvent.change(shiftKeyInput, { target: { value: "5" } });

    const resultText = screen.getByText(
      "Result: fghijklmnopqrstuvwxyzabcde FGHIJKLMNOPQRSTUVWXYZABCDE"
    );

    expect(resultText).toBeDefined();
  });

  it("should shift a message backwards with a shift key of 5", () => {
    const { container } = render(<App />);

    const messageInput = screen.getByLabelText("Message:");
    fireEvent.change(messageInput, {
      target: {
        value: "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      },
    });

    const shiftKeyInput = screen.getByLabelText("Shift Key:");
    fireEvent.change(shiftKeyInput, { target: { value: "5" } });

    const shiftBackwardsCheckbox = screen.getByLabelText("Shift backwards:");
    fireEvent.click(shiftBackwardsCheckbox);

    const resultText = screen.getByText(
      "Result: vwxyzabcdefghijklmnopqrstu VWXYZABCDEFGHIJKLMNOPQRSTU"
    );

    expect(resultText).toBeDefined();
  });

  it("should not shift non-alphabetic characters", () => {
    const { container } = render(<App />);

    const messageInput = screen.getByLabelText("Message:");
    fireEvent.change(messageInput, {
      target: { value: "?! 123 :/\"`'" },
    });

    const shiftKeyInput = screen.getByLabelText("Shift Key:");
    fireEvent.change(shiftKeyInput, { target: { value: "5" } });

    const resultText = screen.getByText("Result: ?! 123 :/\"`'");

    expect(resultText).toBeDefined();
  });
});
