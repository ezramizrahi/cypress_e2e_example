
import CommonPage from '../../support/pageObjects/CommonPage';
import SearchPage from '../../support/pageObjects/SearchPage';

describe('Search ebay', () => {
    beforeEach(() => {
        // visit baseUrl before each test
        CommonPage.visitBaseUrl();
    });

    it('should have a visible search button', () => {
        // Check that the search button exists in the DOM and is visible
        SearchPage.getSearchButton().should('exist');
        SearchPage.getSearchButton().should('be.visible');
    });

    it('should enter text into the search bar', () => {
        // enter a search term into the search bar
        SearchPage.enterSearchTerm('search term text');
    });

    it('should shop by category', () => {
        // select shop by category
        SearchPage.selectShopByCategory();
    });
});