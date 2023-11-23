document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hamburger-menu').addEventListener('click', function () {
        document.getElementById('dropdown-menu').classList.toggle('hidden');
    });
});