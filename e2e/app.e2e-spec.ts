import { ReciperoostPage } from './app.po';

describe('reciperoost App', () => {
  let page: ReciperoostPage;

  beforeEach(() => {
    page = new ReciperoostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
