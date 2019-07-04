import { TesteIBMPage } from './app.po';

describe('teste-ibm App', function() {
  let page: TesteIBMPage;

  beforeEach(() => {
    page = new TesteIBMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
