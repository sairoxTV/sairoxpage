
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('leftPanel');
    const toggleButton = document.getElementById('toggle-button');

    // Funkcja do otwierania/zamykania panelu
    toggleButton.addEventListener('click', function(event) {
        sidebar.classList.toggle('active');
        event.stopPropagation(); // Zatrzymuje propagację
    });

    // Zamyka panel, gdy kliknięto poza nim
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove('active'); // Ukrywa panel
        }
    });
});
