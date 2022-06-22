import { render } from '../helpers/test-util';
import { screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Menu from './Menu';

import menuItems from "../data/menuItems.json";

test('renders Menu component', async () => {
  render(<Menu menuItems={menuItems.home} />);
  const menuElement = screen.getByRole("button");
  await fireEvent.click(menuElement);

  menuItems.home.forEach(item => {
    expect(menuElement).toHaveTextContent(item.name);
  })
});