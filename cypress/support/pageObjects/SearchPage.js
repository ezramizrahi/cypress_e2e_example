class SearchPage {
    // return the search button element
    getSearchButton() {
        return cy.get('input[value="Search"]');
    };

    // search for item
    enterSearchTerm(searchTerm) {
        cy.get('input[placeholder="Search for anything"]').type(searchTerm);
    };
};

module.exports = new SearchPage();