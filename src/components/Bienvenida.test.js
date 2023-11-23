import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Bienvenida } from './Bienvenida';

test('renders without crashing', () => {
  const { getByText } = render(<Bienvenida />);
  expect(getByText(/Hola te estabamos esperando!/i)).toBeInTheDocument();
});