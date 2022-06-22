import { render } from '../helpers/test-util';
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from './Header';

test('renders header component', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Terreiro Sete Espadas/i);
  const imgElement = screen.getByAltText(/Logo Terreiro Sete Espadas - Estrela de 7 pontas/i);
  expect(titleElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});