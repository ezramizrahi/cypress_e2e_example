class SearchPage {
    // return the search button element
    getSearchButton() {
        return cy.get('input[value="Search"]');
    };

    // search for item
    searchForItem(item) {
        cy.get('input[placeholder="Search for anything"]').type(item);
        cy.get('input[value="Search"]').click();
    };

    // check for null matches
    getNullMatchesText() {
        return cy.contains('No exact matches found');
    };
};

module.exports = new SearchPage();