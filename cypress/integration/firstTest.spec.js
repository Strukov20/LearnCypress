/// <reference types="Cypress" />


describe("Mobile phone replenishment ", () => {
    
    context("Replenishment less than allowed amount", () => {
        it("Show error: Minimum amount of the replenishment 1 UAH", () => {

        });
    });
});

it('By ID', () => {
    cy.visit("https://facebook.com/");
    cy.get("#email");
});

it('By ID', () => {
    cy.visit("https://docs.cypress.io/");
    cy.get("#docsearch");
});

it('By TAG', () => {
    cy.visit("https://docs.cypress.io/");
    cy.get("nav");
});

it('By tag value', () => {
    cy.visit("https://facebook.com/");
    cy.get('[name="pass"]');
});

it('By different tag', () => {
    cy.visit("https://facebook.com/");
    cy.get('[data-testid="open-registration-form-button"][role="button"]');
});

it.only('By class contains name', () => {
    cy.visit("https://next.privat24.ua/");
    cy.get('*[class^="card"]');
});

it('using get with Find and Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open");
    cy.get('tbody').find('td').find('div').find('button').eq(0);
});

it.only('using get with Find and Eq', () => {
    cy.viewport(1920, 1080);
    cy.visit("https://docs.cypress.io/api/commands/eq");
    cy.get('nav').find('ul').find('li').find('a').eq(3);
});