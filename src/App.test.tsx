import { render, screen } from '@testing-library/react';

import App from './App';

it('loads and displays greeting', async () => {
  render(<App />);
  expect(await screen.findByText('Containers')).toBeInTheDocument();
});
