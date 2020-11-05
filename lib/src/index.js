import { When } from 'cypress-cucumber-preprocessor/steps';
import { startApp } from './utils/start-app.utils';
export function setupCucumber() {
    When(`I open the Antragsstrecke`, () => cy.viewport(1200, 1600).then(() => startApp()));
}
//# sourceMappingURL=index.js.map