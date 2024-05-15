document.addEventListener("DOMContentLoaded", function() {
    const savedQuotationsList = document.getElementById("saved-quotations");

    // Función para cargar las cotizaciones guardadas al cargar la página
    function loadSavedQuotations() {
        // Aquí cargaríamos las cotizaciones guardadas desde algún almacenamiento (como localStorage o una base de datos)
        // Por ahora, simularemos una cotización guardada para propósitos de ejemplo
        const quotationData = { number: "001", items: [{ concept: "Cable", quantity: 10, unitPrice: 5, totalCost: 50 }] };
        displayQuotation(quotationData);
    }

    // Función para mostrar una cotización en la lista de cotizaciones guardadas
    function displayQuotation(quotation) {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="#" onclick="viewQuotation('${quotation.number}')">${quotation.number}</a>
            <button onclick="deleteQuotation('${quotation.number}')">Eliminar</button>
        `;
        savedQuotationsList.appendChild(li);
    }

    // Función para ver una cotización
    window.viewQuotation = function(quotationNumber) {
        // Aquí podrías mostrar la cotización completa en una tabla u otro formato
        alert(`Mostrar cotización ${quotationNumber}`);
    };

    // Función para eliminar una cotización
    window.deleteQuotation = function(quotationNumber) {
        // Aquí implementarías la lógica para eliminar la cotización y reorganizar los números de cotización si es necesario
        alert(`Eliminar cotización ${quotationNumber}`);
    };

    loadSavedQuotations();
});
