import { test, expect } from '@playwright/test';

test('home page renders correctly', async ({ page }) => {
  await page.goto('/');

  const main = page.getByRole('main');

  await expect(
    main.getByRole('heading', { name: 'OneTime Messenger' })
  ).toBeVisible();

  await expect(
    main.getByText(/temporary|временн/i)
  ).toBeVisible();
});

test('header renders correctly', async ({ page }) => {
  await page.goto('/404');

  const header = page.getByRole('banner');

  await expect(header).toBeVisible();

  const homeLink = header.getByRole('link', {
    name: 'OneTime Messenger',
  });

  await expect(homeLink).toBeVisible();
  await expect(homeLink).toHaveAttribute('href', '/');

  homeLink.click();
  await expect(page).toHaveURL('/');

});

test('switchers work correctly', async ({ page }) => {
  await page.goto('/');

  const html = page.locator('html');
  const header = html.getByRole('banner');
  const main = html.getByRole('main');
  const themeSwitcher = header.getByRole('button', {
    name: 'Toggle theme',
  });
  const langSwitcher = header.getByRole('button', {
    name: 'Change language',
  });

  await expect(themeSwitcher).toBeVisible();
  await expect(langSwitcher).toBeVisible();

  // Toggle theme
  await expect(html).toHaveAttribute('data-mode', 'light');
  await themeSwitcher.click();
  await expect(html).toHaveAttribute('data-mode', 'dark');
  await themeSwitcher.click();
  await expect(html).toHaveAttribute('data-mode', 'light');

  // Toggle language
  await expect(
    main.getByRole('link', { name: /create room/i })
  ).toBeVisible();
  await langSwitcher.click();
  await expect(
    main.getByRole('link', { name: /создать/i })
  ).toBeVisible();
  await langSwitcher.click();
  await expect(
    main.getByRole('link', { name: /create room/i })
  ).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /create/i }).click();
  await expect(page).toHaveURL(/\/create/);

  await page.goto('/');
  await page.getByRole('link', { name: /join/i }).click();
  await expect(page).toHaveURL(/\/join/);

  await page.goto('/');
  await page.getByRole('link', { name: /sign in/i }).click();
  await expect(page).toHaveURL(/\/auth/);
});
