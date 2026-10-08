import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import emailjs from 'emailjs-com';

jest.mock('emailjs-com', () => ({ __esModule: true, default: { sendForm: jest.fn() } }));
const sendForm = emailjs.sendForm as jest.Mock;
jest.setTimeout(30000);

beforeEach(() => {
  sendForm.mockReset();
  window.history.replaceState({}, '', '/');
});

async function openPortfolio() {
  render(<App />);
  await screen.findByRole('heading', { level: 1, name: /Building software/ }, { timeout: 20000 });
}

function fillContact() {
  fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: 'Alex Johnson' } });
  fireEvent.change(screen.getByLabelText(/Email address/), { target: { value: 'alex@example.com' } });
  fireEvent.change(screen.getByLabelText(/Your message/), { target: { value: 'I would love to discuss a project with you.' } });
}

test('shows the portfolio and expands all projects', async () => {
  await openPortfolio();
  const projects = document.getElementById('projects')!;
  expect(projects.querySelectorAll('.work-card')).toHaveLength(4);
  fireEvent.click(screen.getByRole('button', { name: 'View all 7 projects' }));
  expect(projects.querySelectorAll('.work-card')).toHaveLength(7);
  fireEvent.click(screen.getByRole('button', { name: 'Show selected work' }));
  expect(projects.querySelectorAll('.work-card')).toHaveLength(4);
});

test('filters projects and resets the selected category', async () => {
  await openPortfolio();
  fireEvent.click(screen.getByRole('button', { name: 'FinTech' }));
  expect(document.querySelectorAll('.work-card')).toHaveLength(1);
  expect(screen.getByRole('heading', { name: /Payment Gateway Service/ })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'FinTech' })).toHaveAttribute('aria-pressed', 'true');
  fireEvent.click(screen.getByRole('button', { name: 'All work' }));
  expect(document.querySelectorAll('.work-card')).toHaveLength(4);
});

test('opens accessible project details and restores keyboard focus on Escape', async () => {
  await openPortfolio();
  const trigger = screen.getByRole('button', { name: 'View Incident Report Monitoring System (IRMS)' });
  trigger.focus();
  fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog', { name: 'Incident Report Monitoring System (IRMS)' });
  const first = within(dialog).getByRole('button', { name: 'Close project details' });
  await waitFor(() => expect(first).toHaveFocus());
  expect(document.querySelector('.portfolio-page')).toHaveAttribute('inert');
  fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
  expect(within(dialog).getByRole('button', { name: 'Close' })).toHaveFocus();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.querySelector('.portfolio-page')).not.toHaveAttribute('inert');
  expect(trigger).toHaveFocus();
});

test('toggles mobile navigation and closes it after selecting a section', async () => {
  await openPortfolio();
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
  expect(screen.getByRole('button', { name: 'Close navigation', expanded: true })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Expertise' }));
  expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
});

test('validates contact fields without sending an invalid message', async () => {
  await openPortfolio();
  fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
  expect(screen.getByText(/Please enter your name/)).toBeInTheDocument();
  expect(screen.getByText(/Please enter a valid email/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Your name/)).toHaveFocus();
  expect(sendForm).not.toHaveBeenCalled();
});

test('shows confirmation and clears the form after successful delivery', async () => {
  sendForm.mockResolvedValueOnce({ status: 200 });
  await openPortfolio();
  fillContact();
  fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
  expect(await screen.findByRole('status')).toHaveTextContent('Your message is on its way');
  expect(sendForm).toHaveBeenCalledTimes(1);
  expect(screen.getByLabelText(/Your name/)).toHaveValue('');
});

test('keeps the message and shows a recovery link when delivery fails', async () => {
  sendForm.mockRejectedValueOnce(new Error('Delivery failed'));
  await openPortfolio();
  fillContact();
  fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
  expect(await screen.findByRole('alert')).toHaveTextContent("Your message couldn't be sent");
  expect(screen.getByLabelText(/Your message/)).toHaveValue('I would love to discuss a project with you.');
  expect(screen.getByRole('link', { name: 'email me directly' })).toHaveAttribute('href', 'mailto:sinagadaniel012@gmail.com');
});
