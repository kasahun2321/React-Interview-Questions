import { render, screen } from '@testing-library/react';
import AppContextProviderComponent from './App-Context-provider-componet';

test('renders learn react link', () => {
  render(<AppContextProviderComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
