import { When } from 'cypress-cucumber-preprocessor/steps';
export interface CucumberOperators {
    When: typeof When;
}
export declare function setupCucumber(): void;
