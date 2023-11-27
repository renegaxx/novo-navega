document.getElementById('abrirModal').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', function(event) {
    var modal = document.getElementById('loginForm');
    var overlay = document.getElementById('overlay');
    if (event.target == overlay) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
});