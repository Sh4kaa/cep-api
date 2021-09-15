const searchCep = async () => {
  try {
    const cep = document.getElementById("cep").value;
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const response = await request.json();
    preencherDados(response);
  } catch (error) {
    document.getElementById("logradouro").value = "😥NÃO FOI POSSIVEL😥";
    return error;
  }
};
addEventListener("focusout", searchCep);

const preencherDados = (dados) => {
  document.getElementById("logradouro").value = dados.logradouro;
  document.getElementById("complemento").value = dados.complemento;
  document.getElementById("bairro").value = dados.bairro;
  document.getElementById("localidade").value = dados.localidade;
  document.getElementById("uf").value = dados.uf;
  document.getElementById("ibge").value = dados.ibge;
  document.getElementById("gia").value = dados.gia;
  document.getElementById("codarea").value = dados.ddd;
  document.getElementById("siaf").value = dados.siafi;
};
