import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import Main, { MainProvider } from './components/Main';

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
  //here in case I want to do object compare later
  // const objectsEqual = (o1, o2) =>
  //   Object.keys(o1).length === Object.keys(o2).length
  //       && Object.keys(o1).every(p => o1[p] === o2[p]);
  expect(MainProvider.initializeTimes().items.length === times.length)
})

test('Test to see if the update times function works properly', () => {
  let times = [
    { key: "1", value: "17:00" },
    { key: "2", value: "18:00" },
    { key: "3", value: "19:00" },
    { key: "4", value: "20:00" },
    { key: "5", value: "21:00" },
    { key: "6", value: "22:00" },
  ];
  let action = { type: 'get-items', date: '' }
  let response = MainProvider.updateTimes([], action)

  expect(response.items.length === times.length)

})