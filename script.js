document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', function(event) {
        sidebar.classList.toggle('hidden'); // Przełączanie klasy 'hidden'
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.add('hidden'); // Ukrywa panel, jeśli kliknięto poza nim
        }
    });
});
