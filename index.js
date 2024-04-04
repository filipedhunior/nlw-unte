//array []
let participantes = [
  {
    nome: "Filipe Dhunior",
    email: "filoroch@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 6, 22, 20)
  },
  {
    nome: "Mayk Batista",
    email: "maykbatista@gmail.com",
    dataInscricao: new Date(2024, 2, 21, 19, 20),
    dataCheckIn: new Date(2024, 2, 2, 22, 20)
  },
  {
    nome: "Ana Silva",
    email: "anasilva@gmail.com",
    dataInscricao: new Date(2024, 2, 20, 19, 20),
    dataCheckIn: new Date(2024, 2, 23, 22, 20)
  },
  {
    nome: "João Oliveira",
    email: "joaooliveira@gmail.com",
    dataInscricao: new Date(2024, 2, 19, 19, 20),
    dataCheckIn: new Date(2024, 2, 22, 22, 20)
  },
  {
    nome: "Maria Santos",
    email: "mariasantos@gmail.com",
    dataInscricao: new Date(2024, 2, 18, 19, 20),
    dataCheckIn: new Date(2024, 2, 21, 22, 20)
  },
  {
    nome: "Lucas Oliveira",
    email: "lucasoliveira@gmail.com",
    dataInscricao: new Date(2024, 2, 17, 19, 20),
    dataCheckIn: new Date(2024, 2, 20, 22, 20)
  },
  {
    nome: "Carla Silva",
    email: "carlasilva@gmail.com",
    dataInscricao: new Date(2024, 2, 16, 19, 20),
    dataCheckIn: new Date(2024, 2, 19, 22, 20)
  },
  {
    nome: "Pedro Santos",
    email: "pedrosantos@gmail.com",
    dataInscricao: new Date(2024, 2, 15, 19, 20),
    dataCheckIn: new Date(2024, 2, 18, 22, 20)
  },
  {
    nome: "Luana Oliveira",
    email: "luanaoliveira@gmail.com",
    dataInscricao: new Date(2024, 2, 14, 19, 20),
    dataCheckIn: new Date(2024, 2, 17, 22, 20)
  },
  {
    nome: "Marcos Silva",
    email: "marcossilva@gmail.com",
    dataInscricao: new Date(2024, 2, 13, 19, 20),
    dataCheckIn: new Date(2024, 2, 01, 22, 20)
  }
]// variavel mutavel. provavelmente devido ao fato da lista poder ser atualizavel

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
  
  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)
  
  if(participantes.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `

  }

  return `
    <tr>
        <td>
          <strong>
            ${participante.nome}
          </strong>
          <br>
          <small>${participante.email}</small>
          </td> <!--Informações dentro do corpo da tabela-->
        <td> ${dataInscricao}</td>
        <td> ${dataCheckIn}</td>
    </tr>
    `;
};

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição
  for(let participante of participantes)
  {output = output + criarNovoParticipante(participante)}
  document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault();

  const dadosDoFormulario = new FormData(event.target);

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null,
  };

  // Verificar se o participante já existe
  const participanteExiste = participantes.find((p) => {
    return p.email == participante.email;
  });

  if (participanteExiste) {
    alert('Email já cadastrado');
    return;
  }

  participantes = [participante, ...participantes];
  atualizarLista(participantes);

  // Limpar o formulário
  event.target.querySelector('[name="nome"]').value = "";
  event.target.querySelector('[name="email"]').value = "";
};

const fazerCheckIn = (event) => {
  //confirmar checkin
  const mensagemConfirmacao = 'Quer mesmo fazer isso chapa?'
  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  //encontrar o participante dentro da lista
  //atualizar o check-in do participante
  //atualizar a lista de participantes
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  participante.dataCheckIn = new Date()
  atualizarLista(participantes)
}