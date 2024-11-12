describe("Validación de acceso a URL", () => {
  it("Debería cargar correctamente la página gridsistemas.php", () => {
    // Navegar a la URL especificada usando la ruta relativa
    cy.visit("https://odm.com.mx/gridsistemas.php");

    //SELECCIONAMOS EL NUMERO DE PASAJEROS
    const adultos = 3;
    // Ignorar el error de asientosRaw.filter
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("asientosRaw.filter is not a function")) {
        return false; // Ignorar el error
      }
    });

    //Seleccionar origen y destino
    cy.wait(1000);
    cy.get("#cbx_estado").select("MEX", { force: true });
    cy.wait(1000);
    cy.get("#cbx_municipio").select("AGU", { force: true });

    //Seleccionar la fecha de viaje
    // Modifica el valor de la fecha directamente
    cy.get("#fechasalida1")
      .invoke("val", "12/11/2024") // Cambia a la fecha deseada en formato DD/MM/YYYY
      .trigger("change"); // Dispara un evento para simular que se cambió el valor

    // Verificar que el campo tiene la fecha deseada
    cy.get("#fechasalida1").should("have.value", "12/11/2024");

    //Seleccionar tipos de pasajeros
    cy.get("#adultos").select(adultos);

    //Buscar corrida
    cy.get("#idboton").click();

    //Validamos que aparezcan las corridas
    cy.get("#u50849-4", { timeout: 10000 }).should("be.visible");
    cy.wait(5000);
    cy.get("#u50849-4").first().click();
    cy.wait(7000);

    //Modal de confirmación de asientos
    cy.get(".aceptarBtn").click();
    cy.wait(1000);

    //selección de asientos
    // cy.get("td.piso1.disponible[name=4]").click({ multiple: true }); //Selecciona asientos en específico
    for (let q = 0; q < adultos; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }

    //nombres
    for (let i = 0; i < adultos; i++) {
      cy.get("input[name=nombre]").eq(i).type("a{enter}");
    }
    cy.wait(1000);

    //AVANZAR AL PAGO
    cy.get("#u76094").click();
  });
});
