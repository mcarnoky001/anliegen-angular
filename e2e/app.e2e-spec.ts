import { AngularboilerPage } from './app.po';

describe('angularboiler App', function() {
  let page: AngularboilerPage;

  beforeEach(() => {
    page = new AngularboilerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
