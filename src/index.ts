import { When } from 'cypress-cucumber-preprocessor/steps';
import { startApp } from './utils/start-app.utils';

export interface CucumberOperators {
    When: typeof When
}

export function setupCucumber(): void {
    When(`I open the Antragsstrecke`, () => cy.viewport(1200, 1600).then(() => startApp()));
}
