import { DotNetCoreSpa.WebPage } from './app.po';

describe('dot-net-core-spa.web App', () => {
  let page: DotNetCoreSpa.WebPage;

  beforeEach(() => {
    page = new DotNetCoreSpa.WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
