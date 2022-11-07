
import CommonPage from '../../support/pageObjects/CommonPage';
import SearchPage from '../../support/pageObjects/SearchPage';

describe('Search ebay', () => {
    it('should search for a search term with no matches found', () => {
        // visit ebay
        CommonPage.visitBaseUrl();

        // Check that the plan widget exists in the DOM and is visible
        SearchPage.getSearchButton().should('exist');
        SearchPage.getSearchButton().should('be.visible');

        // search for an item
        SearchPage.searchForItem('search term text');

        // confirm null matches found
        SearchPage.getNullMatchesText().should('exist');
        SearchPage.getNullMatchesText().should('be.visible');
    });
});