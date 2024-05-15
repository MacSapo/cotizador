document.addEventListener("DOMContentLoaded", function() {
    const catalog = [
        { concepto: "Cable de cobre calibre 10 verde", descripcion: "Cable de cobre calibre 10 verde por metro lineal", costo_unitario: Math.ceil(22 * 1.1) },
        { concepto: "Cable de cobre calibre 10 rojo", descripcion: "Cable de cobre calibre 10 rojo por metro lineal", costo_unitario: Math.ceil(22 * 1.1) },
        { concepto: "Cable de cobre calibre 10 blanco", descripcion: "Cable de cobre calibre 10 blanco por metro lineal", costo_unitario: Math.ceil(22 * 1.1) },
        { concepto: "Cable de cobre calibre 10 negro", descripcion: "Cable de cobre calibre 10 negro por metro lineal", costo_unitario: Math.ceil(22 * 1.1) },
        { concepto: "Cable de cobre calibre 1/0 verde", descripcion: "Cable de cobre calibre 1/0 verde por metro lineal", costo_unitario: Math.ceil(52 * 1.1) },
        { concepto: "Cable de cobre calibre 1/0 rojo", descripcion: "Cable de cobre calibre 1/0 rojo por metro lineal", costo_unitario: Math.ceil(52 * 1.1) },
        { concepto: "Cable de cobre calibre 1/0 blanco", descripcion: "Cable de cobre calibre 1/0 blanco por metro lineal", costo_unitario: Math.ceil(52 * 1.1) },
        { concepto: "Cable de cobre calibre 1/0 negro", descripcion: "Cable de cobre calibre 1/0 negro por metro lineal", costo_unitario: Math.ceil(52 * 1.1) },
        { concepto: "Cable de cobre calibre 12 verde", descripcion: "Cable de cobre calibre 12 verde por metro lineal", costo_unitario: Math.ceil(18 * 1.1) },
        { concepto: "Cable de cobre calibre 12 rojo", descripcion: "Cable de cobre calibre 12 rojo por metro lineal", costo_unitario: Math.ceil(18 * 1.1) },
        { concepto: "Cable de cobre calibre 12 blanco", descripcion: "Cable de cobre calibre 12 blanco por metro lineal", costo_unitario: Math.ceil(18 * 1.1) },
        { concepto: "Cable de cobre calibre 12 negro", descripcion: "Cable de cobre calibre 12 negro por metro lineal", costo_unitario: Math.ceil(18 * 1.1) },
        { concepto: "Cable de cobre calibre 8 verde", descripcion: "Cable de cobre calibre 8 verde por metro lineal", costo_unitario: Math.ceil(45 * 1.1) },
        { concepto: "Cable de cobre calibre 8 rojo", descripcion: "Cable de cobre calibre 8 rojo por metro lineal", costo_unitario: Math.ceil(45 * 1.1) },
        { concepto: "Cable de cobre calibre 8 blanco", descripcion: "Cable de cobre calibre 8 blanco por metro lineal", costo_unitario: Math.ceil(45 * 1.1) },
        { concepto: "Cable de cobre calibre 8 negro", descripcion: "Cable de cobre calibre 8 negro por metro lineal", costo_unitario: Math.ceil(45 * 1.1) },
        { concepto: "Tubo conduit pared delgada 3/4", descripcion: "Tubo conduit pared delgada 3/4 por metro lineal", costo_unitario: Math.ceil(16 * 1.35) },
        { concepto: "Tubo conduit pared delgada 1/2", descripcion: "Tubo conduit pared delgada 1/2 por metro lineal", costo_unitario: Math.ceil(13 * 1.35) },
        { concepto: "Tubo conduit pared gruesa 3/4", descripcion: "Tubo conduit pared gruesa 3/4 por metro lineal", costo_unitario: Math.ceil(19 * 1.35) },
        { concepto: "Tubo conduit pared gruesa 1 pulgada", descripcion: "Tubo conduit pared gruesa 1 pulgada por metro lineal", costo_unitario: Math.ceil(27 * 1.35) },
        { concepto: "Tubo corrugado 1 pulgada", descripcion: "Tubo corrugado 1 pulgada por metro lineal", costo_unitario: Math.ceil(8 * 1.35) },
        { concepto: "Transformador trifásico tipo pedestal 30KVA", descripcion: "Transformador trifásico tipo pedestal 30KVA por unidad", costo_unitario: Math.ceil(42000 * 1.5) },
        { concepto: "Transformador trifásico tipo pedestal 45KVA", descripcion: "Transformador trifásico tipo pedestal 45KVA por unidad", costo_unitario: Math.ceil(52000 * 1.5) },
        { concepto: "Transformador trifásico tipo pedestal 75KVA", descripcion: "Transformador trifásico tipo pedestal 75KVA por unidad", costo_unitario: Math.ceil(62000 * 1.5) },
        { concepto: "Transformador trifásico tipo poste 30KVA", descripcion: "Transformador trifásico tipo poste 30KVA por unidad", costo_unitario: Math.ceil(40000 * 1.5) },
        { concepto: "Transformador trifásico tipo poste 45KVA", descripcion: "Transformador trifásico tipo poste 45KVA por unidad", costo_unitario: Math.ceil(60000 * 1.5) },
        { concepto: "Transformador trifásico tipo poste 75KVA", descripcion: "Transformador trifásico tipo poste 75KVA por unidad", costo_unitario: Math.ceil(85000 * 1.5) },
        { concepto: "Transformador trifásico tipo garganta 225KVA", descripcion: "Transformador trifásico tipo garganta 225KVA por unidad", costo_unitario: Math.ceil(125000 * 1.5) },
        { concepto: "Centro de carga QO 24 espacios", descripcion: "Centro de carga QO 24 espacios por unidad", costo_unitario: Math.ceil(8000 * 1) },
        { concepto: "Centro de carga QO 12 espacios", descripcion: "Centro de carga QO 12 espacios por unidad", costo_unitario: Math.ceil(5000 * 1) },
        { concepto: "Contacto duplex de acero inoxidable con tapa", descripcion: "Contacto duplex de acero inoxidable con tapa por unidad", costo_unitario: Math.ceil(300 * 1.4) },
        { concepto: "Apagador de 1 interruptor de 2 vías", descripcion: "Apagador de 1 interruptor de 2 vías por unidad", costo_unitario: Math.ceil(50 * 1.4) },
        { concepto: "Apagador de 2 interruptores de 2 vías", descripcion: "Apagador de 2 interruptores de 2 vías por unidad", costo_unitario: Math.ceil(80 * 1.4) },
        { concepto: "Fusible 1A", descripcion: "Fusible 1A por pieza", costo_unitario: Math.ceil(6 * 1) },
        { concepto: "Fusible 2A", descripcion: "Fusible 2A por pieza", costo_unitario: Math.ceil(6 * 1) },
        { concepto: "Fusible 3A", descripcion: "Fusible 3A por pieza", costo_unitario: Math.ceil(6 * 1) },
        { concepto: "Fusible 5A", descripcion: "Fusible 5A por pieza", costo_unitario: Math.ceil(8 * 1) }
    ];

    const conceptList = document.getElementById("concept-list");
    const quotationBody = document.getElementById("quotation-body");
    const totalAmount = document.getElementById("total-amount");

    function displayCatalog() {
        catalog.forEach(concept => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${concept.concepto}</span>
                <button onclick="addToQuotation('${concept.concepto}', '${concept.descripcion}', ${concept.costo_unitario})">Agregar</button>
                <input type="number" id="${concept.concepto}-quantity" value="1" min="1">
            `;
            conceptList.appendChild(li);
        });
    }

    window.addToQuotation = function(concepto, descripcion, costo_unitario) {
        const quantityInput = document.getElementById(`${concepto}-quantity`);
        const quantity = parseInt(quantityInput.value);
        const totalCost = quantity * costo_unitario;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${concepto}</td>
            <td>${descripcion}</td>
            <td>${quantity}</td>
            <td>${costo_unitario}</td>
            <td class="total-cost">${totalCost}</td>
            <td><button onclick="removeFromQuotation(this)">Eliminar</button></td>
        `;
        quotationBody.appendChild(tr);
        updateTotal();
    };

    window.removeFromQuotation = function(button) {
        const rowToRemove = button.closest("tr");
        if (rowToRemove) {
            rowToRemove.remove();
            updateTotal();
        }
    };

    function updateTotal() {
        let total = 0;
        const rows = quotationBody.querySelectorAll("tr");
        rows.forEach(row => {
            total += parseInt(row.querySelector(".total-cost").textContent);
        });
        totalAmount.textContent = total;
    }

    displayCatalog();
});