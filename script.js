
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', function(event) {
        sidebar.classList.toggle('hidden');
        event.stopPropagation(); // Zatrzymuje propagację
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.add('hidden'); // Ukrywa menu
        }
    });
});
