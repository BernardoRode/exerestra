var form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var numero = parseInt(document.getElementById('numero').value); // Convertendo para número

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
    botaoExcluir.addEventListener('click', function() {
        corpoTabela.removeChild(novaLinha);
    });

    celulaExcluir.appendChild(botaoExcluir);

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaNumero);
    novaLinha.appendChild(celulaExcluir);

    // Classificar a tabela antes de adicionar a nova linha
    var linhas = corpoTabela.querySelectorAll('tr');
    var linhasArray = Array.from(linhas);
    linhasArray.push(novaLinha);
    linhasArray.sort(function(a, b) {
        var numeroA = parseInt(a.querySelector('td:nth-child(2)').textContent);
        var numeroB = parseInt(b.querySelector('td:nth-child(2)').textContent);
        return numeroB - numeroA;
    });

    linhasArray.forEach(function(linha) {
        corpoTabela.appendChild(linha);
    });
}
