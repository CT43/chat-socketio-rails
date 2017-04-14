import { browser, element, by } from 'protractor';

describe('Client Side Chat E2E Tests', function () {

  let expectedMsg = 'Toggle Sidebar';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.id('toggle-sidebar')).getText()).toEqual(expectedMsg);
  });

  it('should have links', function () {
    expect(element(by.id('dashboard-link')).getText()).toEqual('My Simple Chat App');
    expect(element(by.id('sign-in-link')).getText()).toEqual('Sign In');
    expect(element(by.id('sign-up-link')).getText()).toEqual('Sign Up');
    expect(element(by.id('about-link')).getText()).toEqual('About');
  });

  it('can click Sign In link in template', function () {
    element(by.id('sign-in-link')).click();
    expect(element(by.css('.sign-in')).getText()).toEqual('Sign In');
  });

  it('can click Sign Up link in template', function () {
    element(by.id('sign-up-link')).click();
    expect(element(by.css('.sign-up')).getText()).toEqual('Sign Up');
  });
});
