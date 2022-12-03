import { fireEvent, render, screen } from '@testing-library/react';
import TaskTwo from './TaskTwo';


test('button color functionality', ()=> {
  render(<TaskTwo/>);
  const buttonElement = screen.getByRole('button', {name: /click/i})
  expect(buttonElement).toHaveStyle({backgroundColor: 'red'})

  const checkboxElement = screen.getByRole('checkbox')
  fireEvent.click(checkboxElement)
  expect(buttonElement).toHaveStyle({backgroundColor: 'gray'})


  fireEvent.click(checkboxElement)
  expect(buttonElement).toHaveStyle({backgroundColor: 'red'})

  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'})

})