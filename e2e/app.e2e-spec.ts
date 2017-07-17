import { FixfPage } from './app.po';

describe('fixf App', () => {
  let page: FixfPage;

  beforeEach(() => {
    page = new FixfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
