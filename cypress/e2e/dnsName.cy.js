describe('template spec', () => {
  it('passes', () => {
    //See the test data for this test. 
    const testURL = "bbc.co.uk"
    const dnsName = "ddns0.bbc.co.uk."
    //Test visits the test url below
    cy.visit('https://www.nominet.uk/lookup/')
    //Using cy.get the text box is located and the test data is type. The {delay: 100} is to slow down cypress typing as that can be very flaky
    cy.get('#rdapLookup')
    .clear()
    .type(testURL, {delay: 100})
    //Button asserts the correct text and then clicked
    cy.get('#gtm-rdap-click')
    .contains("Lookup")
    .click()
    //The code below asserts the response from the UI matches the input earlier in the test
    cy.get('#result-title')
    .contains(testURL)
    //This is quite a bad selector. If I had the oppurtunity I would enter a more stable selector for this test. The following code asserts a DNSname
    cy.get('app-rdap-result-table-nameserver > .section--table-wrapper')
    .contains(dnsName)
  })
})