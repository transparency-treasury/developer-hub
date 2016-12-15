import { Trunk2Page } from './app.po';

describe('trunk2 App', function() {
  let page: Trunk2Page;

  beforeEach(() => {
    page = new Trunk2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
