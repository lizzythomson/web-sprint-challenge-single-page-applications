describe("Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/pizza");
  });

  const nameInput = () => cy.get('input[id="name-input"]');
  const sizeInput = () => cy.get('select[id="size-dropdown"]');
  const pepperoniInput = () => cy.get('input[name="pepperoni"]');
  const sausageInput = () => cy.get('input[name="sausage"]');
  const pineappleInput = () => cy.get('input[name="pineapple"]');
  const tomatoesInput = () => cy.get('input[name="tomatoes"]');
  const olivesInput = () => cy.get('input[name="olives"]');
  const specialInput = () => cy.get('input[id="special-text"]');
  const submitBtn = () => cy.get('button[id="order-button"]');

  it("verify that tests are working correctly", () => {
    expect(2 + 2).to.equal(4);
  });

  it("veriying that correct elements are being selected", () => {
    nameInput().should("exist");
    sizeInput().should("exist");
    pepperoniInput().should("exist");
    sausageInput().should("exist");
    pineappleInput().should("exist");
    tomatoesInput().should("exist");
    olivesInput().should("exist");
    specialInput().should("exist");
    submitBtn().should("exist");
  });

  describe("Verifying that user can type in name and special instructions inputs", () => {
    it("can type in the inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("Jello")
        .should("have.value", "Jello");

      specialInput()
        .should("have.value", "")
        .type("Jello")
        .should("have.value", "Jello");
    });

    it("verify that user can check toppings", () => {
      pepperoniInput().check();
      sausageInput().check();
      pineappleInput().check();
      tomatoesInput().check();
      olivesInput().check();
      pepperoniInput().should("be.checked");
      sausageInput().should("be.checked");
      pineappleInput().should("be.checked");
      tomatoesInput().should("be.checked");
      olivesInput().should("be.checked");
    });

    it("submit a new order", () => {
      cy.contains("John Doe").should("not.exist");
      nameInput().type("John Doe");
      specialInput().type("Please do not cut the pizza");
      submitBtn().click();
      cy.contains("John Doe").should("exist");
    });
  });
});
