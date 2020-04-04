import React from 'react';
import { render } from '@testing-library/react';
import Gatekeeper from './index.tsx';

test('renders gatekeeper react link', () => {
  const { getByText } = render(<Gatekeeper />);
  const linkElement = getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
