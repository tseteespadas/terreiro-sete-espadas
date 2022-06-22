import React from "react";
import { render } from "@testing-library/react";
import Theme from "../styles/theme";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


const TestProviders = ({ children }) => {
  library.add(fas, fab);
  return <Theme>{children}</Theme>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProviders, ...options });

// override render method
export { customRender as render };
