import { fireEvent, render, screen } from '@testing-library/react';
import TaskOne from "./TaskOne"


test('checkbox with button functionality', ()=> {
  render(<TaskOne/>);
  const buttonElement = screen.getByRole('button', {name: /click/i})
  expect(buttonElement).toBeEnabled()

  const checkboxElement = screen.getByRole('checkbox')
  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeDisabled()

  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeEnabled()
})