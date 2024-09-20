document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-button');

    // Obsługuje kliknięcie przycisku do przełączania panelu bocznego
    toggleButton.addEventListener('click', function(event) {
        sidebar.classList.toggle('hidden');
        event.stopPropagation(); // Zapobiega ukrywaniu menu po kliknięciu przycisku
    });

    // Ukrywa menu, gdy kliknięto gdzie indziej
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.add('hidden'); // Ukrywa menu
        }
    });
});
