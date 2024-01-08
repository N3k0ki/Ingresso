let ingressosDisponiveis = {
    pista: 100,
    superior: 200,
    inferior: 400
  };
  
  function comprar() {
    // Obter os elementos do formulário
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const quantidadeInput = document.getElementById("qtd");
  
    // Verificar se a quantidade é válida
    const quantidade = parseInt(quantidadeInput.value);
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Por favor, insira uma quantidade válida.");
      return;
    }
  
    // Verificar se há ingressos disponíveis
    if (quantidade > ingressosDisponiveis[tipoIngresso]) {
      alert(`Não há ingressos suficientes do tipo ${tipoIngresso}.`);
      return;
    }
  
    // Atualizar a quantidade disponível
    ingressosDisponiveis[tipoIngresso] -= quantidade;
  
    // Atualizar a exibição da quantidade disponível na página
    const elementoQuantidade = document.getElementById(`qtd-${tipoIngresso}`);
    elementoQuantidade.textContent = ingressosDisponiveis[tipoIngresso];
  
    // Exibir mensagem de sucesso
    alert(`Compra realizada com sucesso! ${quantidade} ingresso(s) do tipo ${tipoIngresso} comprado(s).`);
  }
  