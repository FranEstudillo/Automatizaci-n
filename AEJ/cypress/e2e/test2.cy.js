/* ==== Test Created with Cypress Studio ==== */
it("venta-sencillo", function () {
  /* ==== Generated with Cypress Studio ==== */

  //PÁGINA WEB
  cy.visit("http://webq.omnibusexpress.com/OExpress/Filtros/ComboVentasES");

  //TIPO DE VIAJE
  cy.get("#btnSencillo").click();

  //SELECCIÓN DE ORIGEN
  cy.get("#Origen").select("DFW");
  //ESPERA PARA CARGA DE DESTINOS
  cy.wait(10000);
  //SELECCIÓN DE DESTINO
  cy.get("#Destino").select("MTY");

  //SELECCIÓN DE FECHA DE SALIDA
  cy.get("#fsalida")
    .invoke("val", "22/11/2024") // Cambia a la fecha deseada en formato DD/MM/YYYY
    .trigger("change"); // Dispara un evento para simular que se cambió el valor

  //BUSCAR CORRIDAS
  cy.get(".buscar > input").click();

  cy.visit("http://webq.omnibusexpress.com/OExpress/Filtros/ComboVentasES");
  cy.visit(
    "http://webq.omnibusexpress.com/OExpress/Filtros/Paso1/ItinerariosES"
  );
  cy.origin(
    "http://webq.omnibusexpress.com/OExpress/Filtros/Paso1/ItinerariosES",
    () => {
      cy.get(":nth-child(9) > .col-md-3 > .precio-viaje > .selecc-mov", {
        timeout: 11000,
      })
        .should("be.visible")
        .first()
        .click();
    }
  );

  cy.get(":nth-child(4) > .text-center > .boton-continuar").click();
  cy.get("#\\30 1i").click();
  cy.get("#p1i").clear("te");
  cy.get("#p1i").type("test aej autmatico");
  cy.get("#p1i").clear("test aej automatico");
  cy.get("#p1i").type("test aej automatico");
  cy.get(".boton-continuar").click();
  cy.get("#nombreTB").clear("t");
  cy.get("#nombreTB").type("test");
  cy.get("#email").clear();
  cy.get("#email").type("jestudillo@odm.com.mx");
  cy.get("#apellidoTB").clear("t");
  cy.get("#apellidoTB").type("test");
  cy.get("#terminos-condiciones").check();
  cy.get("#emailc").clear("j");
  cy.get("#emailc").type("jestudillo@odm.com.mx");
  cy.get("#uword").clear("w");

  cy.pause();
  cy.get("section.container > .row > .col-md-12 > .boton-continuar").click();
  /* ==== End Cypress Studio ==== */
});
