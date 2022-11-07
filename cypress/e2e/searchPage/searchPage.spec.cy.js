
import CommonPage from '../../support/pageObjects/CommonPage';
import SearchPage from '../../support/pageObjects/SearchPage';

describe('Search ebay', () => {
    beforeEach(() => {
        // visit baseUrl before each test
        CommonPage.visitBaseUrl();
    });

    it('should enter text into search bar', () => {
        // Check that the plan widget exists in the DOM and is visible
        SearchPage.getSearchButton().should('exist');
        SearchPage.getSearchButton().should('be.visible');

        // enter a search term into the search bar
        SearchPage.enterSearchTerm('search term text');

        // select shop by category
        SearchPage.selectShopByCategory();
    });
});