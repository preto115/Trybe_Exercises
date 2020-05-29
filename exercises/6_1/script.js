//Made by Elisângelo
//script para preencheenchimento de formulario
const siglaEstado = document.getElementById("estado");
const stateList = [
    ['Acre', 'AC'],
    ['Alagoas', 'AL'],
    ['Amapá', 'AP'],
    ['Amazonas', 'AM'],
    ['Bahia', 'BA'],
    ['Ceará', 'CE'],
    ['Distrito Federal', 'DF'],
    ['Espírito Santo', 'ES'],
    ['Goiás', 'GO'],
    ['Maranhão', 'MA'],
    ['Mato Grosso', 'MT'],
    ['Mato Grosso do Sul', 'MS'],
    ['Minas Gerais', 'MG'],
    ['Pará', 'PA'],
    ['Paraíba', 'PB'],
    ['Paraná', 'PR'],
    ['Pernambuco', 'PE'],
    ['Piauí', 'PI'],
    ['Rio de Janeiro', 'RJ'],
    ['Rio Grande do Norte', 'RN'],
    ['Rio Grande do Sul', 'RS'],
    ['Rondônia', 'RO'],
    ['Roraima', 'RR'],
    ['Santa Catarina', 'SC'],
    ['São Paulo', 'SP'],
    ['Sergipe', 'SE'],
    ['Tocantins', 'TO']
  ];

for(item in stateList){
let lista = document.createElement("option");
lista.value = stateList[item][0];
lista.innerHTML = stateList[item][1];
siglaEstado.appendChild(lista);
}