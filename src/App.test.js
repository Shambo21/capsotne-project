import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import Main from './components/Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('Tests to see if times are initialized properly', () => {
  let times = [
    { key: "1", value: "17:00" },
    { key: "2", value: "18:00" },
    { key: "3", value: "19:00" },
    { key: "4", value: "20:00" },
    { key: "5", value: "21:00" },
    { key: "6", value: "22:00" },
  ];

})