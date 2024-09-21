document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar'); // Poprawny identyfikator panelu bocznego
    const toggleButton = document.getElementById('toggle-button'); // Przycisk do otwierania/zamykania

    // Funkcja do otwierania/zamykania panelu
    toggleButton.addEventListener('click', function(event) {
        sidebar.classList.toggle('active'); // Dodanie/usunięcie klasy 'active'
        event.stopPropagation(); // Zatrzymanie propagacji zdarzenia
    });

    // Zamyka panel, gdy kliknięto poza nim
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove('active'); // Usunięcie klasy 'active', panel wraca na swoje miejsce
        }
    });
});
