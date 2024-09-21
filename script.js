document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar'); // Używamy identyfikatora 'sidebar'
    const toggleButton = document.getElementById('toggle-button'); // Przycisk do otwierania/zamykania

    // Funkcja do otwierania/zamykania panelu
    toggleButton.addEventListener('click', function(event) {
        sidebar.classList.toggle('hidden'); // Dodanie/usunięcie klasy 'hidden'
        event.stopPropagation(); // Zatrzymanie propagacji zdarzenia
    });

    // Zamyka panel, gdy kliknięto poza nim
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.add('hidden'); // Ukrywa panel, gdy kliknięto poza nim
        }
    });
});
