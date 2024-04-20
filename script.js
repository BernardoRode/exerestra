var form = document.getElementById('formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var numero = document.getElementById('numero').value;

    adicionarATabela(nome, numero);

    document.getElementById('nome').value = '';
    document.getElementById('numero').value = '';
});

function adicionarATabela(nome, numero) {
    var corpoTabela = document.getElementById('corpo-tabela');

    var novaLinha = document.createElement('tr');
    var celulaNome = document.createElement('td');
    var celulaNumero = document.createElement('td');
    var celulaExcluir = document.createElement('td');

    celulaNome.textContent = nome;
    celulaNumero.textContent = numero;

    var botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function () {
        corpoTabela.removeChild(novaLinha);
    });

    celulaExcluir.appendChild(botaoExcluir);

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaNumero);
    novaLinha.appendChild(celulaExcluir);

    corpoTabela.appendChild(novaLinha);
}
