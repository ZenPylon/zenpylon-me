import { newE2EPage } from '@stencil/core/testing';

describe('app-playground', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-playground></app-playground>');

    const element = await page.find('app-playground');
    expect(element).toHaveClass('hydrated');
  });
});
