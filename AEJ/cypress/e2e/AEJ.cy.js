/* ==== Test Created with Cypress Studio ==== */
it("venta-ok", function () {
  /* ==== Generated with Cypress Studio ==== */

  //Página web
  cy.visit("http://10.20.180.152/OExpress/Filtros/ComboVentasES");

  //Esperoa para cargar la página completamente
  cy.wait(1000);

  // Ignorar el error de asientosRaw.filter
  cy.on("uncaught:exception", (e) => {
    if (e.message.includes("asientosRaw.filter is not a function")) {
      return false; // Ignorar el error
    }
  });
  //Ignorar el error de postMessage
  cy.on("uncaught:exception", (err) => {
    if (err.message.includes("postMessage")) {
      return false; // Ignora el error
    }
  });

  //Seleccionamos tipo de viaje
  cy.get("#btnSencillo").click();

  //Seleccion de Origen
  cy.get("#Origen").select("QET");

  //Seleccion de destino
  cy.get("#Destino").select("CJZ");

  //Modifica el valor de la fecha directamente
  cy.get("#fsalida")
    .invoke("val", "16/11/2024") // Cambia a la fecha deseada en formato DD/MM/YYYY
    .trigger("change"); // Dispara un evento para simular que se cambió el valor

  //Selección de pasajeros
  cy.get("#total-personas").click();
  cy.get(".cerrar-selector").click();

  //Buscar corridas
  cy.pause();
  cy.get("input[value=BUSCAR]").click();

  cy.pause();
});
