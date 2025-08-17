import { render } from '@testing-library/react';
import App from './App';

test('renderiza o título principal', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Recomendador de Produtos RD Station/i)).toBeInTheDocument();
});