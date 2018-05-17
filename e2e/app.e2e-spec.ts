import { AngularKonzertportalFeaturedPage } from './app.po';

describe('angular-konzertportal-featured App', () => {
  let page: AngularKonzertportalFeaturedPage;

  beforeEach(() => {
    page = new AngularKonzertportalFeaturedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
