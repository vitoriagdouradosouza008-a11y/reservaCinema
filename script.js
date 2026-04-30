// --- A NOSSA MATRIZ (O CORAÇÃO DO SISTEMA) ---
// Cada array interno é uma FILA. Cada número é um LUGAR.
// 0 = Livre | 1 = Ocupado
let salaCinema = [
    [0, 1, 1, 0, 0], // Fila 0
    [0, 0, 0, 0, 0], // Fila 1
    [0, 0, 0, 0, 0], // Fila 2
    [0, 0, 0, 1, 1], // Fila 3
    [0, 1, 1, 0, 0], // Fila 4
    [0, 0, 0, 0, 0], // Fila 5
    [1, 1, 1, 1, 1]  // Fila 6
];

// Função responsável por transformar os dados da Matriz em elementos HTML
function renderizarMapa() {
    // Selecionamos o elemento HTML onde o mapa será desenhado
    const container = document.getElementById('mapa-cinema');
    
    // Limpamos o mapa antes de desenhar (evita duplicar ao atualizar)
    container.innerHTML = '';

    // Definimos quantas colunas a Grelha terá com base na nossa matriz
    container.style.gridTemplateColumns = `repeat(${salaCinema[0].length}, 40px)`;

    // Percorremos a Matriz (Linhas)
    salaCinema.forEach((fila, l) => {
        // Percorremos cada Lugar da Fila (Colunas)
        fila.forEach((status, c) => {
            // Criamos uma "div" para representar o lugar no ecrã
            const lugarDiv = document.createElement('div');
            
            // Adicionamos a classe base de estilo
            lugarDiv.classList.add('lugar');

            // Verificamos o valor na Matriz para definir a cor (0 ou 1)
            if (status === 0) {
                lugarDiv.classList.add('livre');
                lugarDiv.innerText = `${l}:${c}`; // Mostra as coordenadas (Opcional)
                // Adicionamos o evento de clique para comprar
                lugarDiv.onclick = () => comprarIngresso(l, c);
            } else {
                lugarDiv.classList.add('ocupado');
                lugarDiv.innerText = "X";
                // Adicionamos o evento de clique para devolver
                lugarDiv.onclick = () => devolverIngresso (l, c);
            }

            // Colocamos o lugar criado dentro do contentor principal
            container.appendChild(lugarDiv);
        });
    });
}

// Função para alterar o valor na Matriz
function comprarIngresso(linha, coluna) {
    // Altera o valor na posição específica da Matriz de 0 para 1
    salaCinema[linha][coluna] = 1;
    
    // Exibe um alerta para o utilizador
    alert(`Sucesso! Lugar na Fila ${linha}, Posição ${coluna} reservado.`);
    
    // CHAVE DE TUDO: Chamamos a renderização novamente para atualizar o ecrã com os novos dados
    renderizarMapa();
}

// Função para alterar o valor na Matriz
function devolverIngresso(linha, coluna){
    // Altera o valor na posição específica da Matriz de 1 para 0
    salaCinema[linha][coluna] = 0;

    // Exibe um alerta para o utilizador
    alert(`Sucesso! Lugar na fila ${linha}, Posição ${coluna} devolvido.`);

    // CHAVE DE TUDO: Chamadas a redenrização novamente para atualizar o ecrã com os novos dados
    renderizarMapa();
}    

// Chamada inicial para desenhar o mapa assim que a página carregar
renderizarMapa();
