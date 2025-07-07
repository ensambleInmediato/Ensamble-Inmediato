// members.js
document.addEventListener('DOMContentLoaded', function() {
    const memberTabs = document.querySelectorAll('.member-tab');
    const memberContents = document.querySelectorAll('.member-content');

    memberTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover clases activas
            memberTabs.forEach(t => t.classList.remove('active'));
            memberContents.forEach(c => c.classList.remove('active'));

            // Agregar clase activa al tab seleccionado
            tab.classList.add('active');

            // Mostrar contenido correspondiente
            const memberId = tab.getAttribute('data-member');
            document.getElementById(memberId).classList.add('active');
        });
    });
});