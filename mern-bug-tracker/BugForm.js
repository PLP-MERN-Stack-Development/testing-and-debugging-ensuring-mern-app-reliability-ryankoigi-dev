test("displays error when submitting empty form", () => {
  render(<BugForm />);
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getByText(/title is required/i)).toBeInTheDocument();
});
