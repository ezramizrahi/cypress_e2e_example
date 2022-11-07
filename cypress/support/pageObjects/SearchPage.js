class SearchPage {
    // return the search button element
    getSearchButton() {
        return cy.get('input[value="Search"]');
    };

    // search for item
    enterSearchTerm(searchTerm) {
        cy.get('input[placeholder="Search for anything"]').type(searchTerm);
    };

    // click on 'shop by category' button
    selectShopByCategory() {
        cy.get('button').contains('Shop by category').click();
    };
};

module.exports = new SearchPage();