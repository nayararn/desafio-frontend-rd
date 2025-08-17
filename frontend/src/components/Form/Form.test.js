import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

test('chama setRecommendations ao enviar o formulário', () => {
  const setRecommendations = jest.fn();
  const { getByText } = render(<Form setRecommendations={setRecommendations} />);
  const button = getByText(/Obter recomendação/i);
  fireEvent.click(button);
  expect(setRecommendations).toHaveBeenCalled();
});