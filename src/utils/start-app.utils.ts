export function startApp() {
    return cy.viewport(1200, 1600).then(() => {
        const adpStage = Cypress.env('adpStage');
        // eslint-disable-next-line no-console
        console.info(`adpStage: ${adpStage}`);

        // eslint-disable-next-line promise/no-nesting
        return waitForPageVisit().then(() => cy.get('guv-root', { timeout: 1000 }).should('exist'));

    });

}

function waitForPageVisit() {
    return cy.visit('http://localhost:4300');
}
