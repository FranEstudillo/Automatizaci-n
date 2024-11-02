//Nombre de la Suite de pruebas
describe("Test Web ODM", () => {
  //Validaciones previas a cada prueba
  // beforeEach(() => {
  //   //Visitar la URL
  //   //Establecer datos iniciales
  //   cy.visit("/");
  // });
  //Caso de prueba 1
  it("Validar la URL", () => {
    cy.visit("https://odm.com.mx/gridsistemas.php");
  });
});
