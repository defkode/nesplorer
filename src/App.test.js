import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/NES ROM/i);
  expect(linkElement).toBeInTheDocument();
});
