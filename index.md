<table> Cria uma tabela
<table width=100%> Defino que a largura(width) da tabela sera 100%
<thead> Cria um cabeçalho
<tr> Cada linha da tabela
<th>Participante</th> Nome da coluna

# ANOTAÇÕES 
*Identação*
é o nome do recuo que fica no codigo todas as vezes que digitamos e ele recuo um pouco a frente a fim de manter o codigo organizado e coeso

*Atributos:* 
propriedades especificas das minhas marcações (provavelmente definidas pelo CSS)

*Elementos/tags:* 

# JS
// Variavel: guardar e reutilizar dados
  const mensagem = "Oi, tudo bem?" // variavel const (constante) guarda o dado usando a crase '' . Ulitilizando a crase é possivel dar quebra de linha. 

// Tipos de dados
  // number
  //string

// função
  alert(mensagem) // criou um alerta com a variavel definida anteriormente

  //objeto {}
const participante = {
  nome: "Filipe Dhunior",
  email: "filoroch@gmail.com",
  dataInscricao: new Date(2024,2,22,19,20), //Date funciona com: ano, mês, dia, hora e minuto. Somente os numeros separados por virgula
  dataCheckIn: new Date(2024,2,25,22,20),
}
//array []
let participantes = // variavel mutavel. provavelmente devido ao fato da lista poder ser atualizavel

const criarNovoParticipante = (participante) => {
  return `
    <tr>
        <td>
          <strong>
            ${participante.nome}
          </strong>
          <br>
          <small>${participante.email}</small>
          </td> <!--Informações dentro do corpo da tabela-->
        <td> ${participante.dataInscricao}</td>
        <td> ${participante.dataCheckIn}</td>
    </tr>
    `
  }