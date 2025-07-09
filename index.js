const readline = require("readline-sync");

const perguntas = [
  {
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    opcoes: ["a) Terra", "b) Júpiter", "c) Marte"],
    resposta: "b"
  },
  {
    pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
    opcoes: ["a) 1969", "b) 1975", "c) 1959"],
    resposta: "a"
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    opcoes: ["a) Machado de Assis", "b) José de Alencar", "c) Clarice Lispector"],
    resposta: "a"
  },
  {
    pergunta: "Qual é o elemento químico representado por 'O'?",
    opcoes: ["a) Ouro", "b) Oxigênio", "c) Osmônio"],
    resposta: "b"
  },
  {
    pergunta: "Qual país é conhecido como Terra do Sol Nascente?",
    opcoes: ["a) Japão", "b) China", "c) Coreia do Sul"],
    resposta: "a"
  },
  {
    pergunta: "Qual é o menor número primo?",
    opcoes: ["a) 0", "b) 1", "c) 2"],
    resposta: "c"
  },
  {
    pergunta: "Quantos ossos há no corpo humano adulto?",
    opcoes: ["a) 206", "b) 208", "c) 210"],
    resposta: "a"
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    opcoes: ["a) Michelangelo", "b) Van Gogh", "c) Leonardo da Vinci"],
    resposta: "c"
  },
  {
    pergunta: "Qual o maior oceano do mundo?",
    opcoes: ["a) Atlântico", "b) Índico", "c) Pacífico"],
    resposta: "c"
  },
  {
    pergunta: "Qual é o plural de 'cidadão'?",
    opcoes: ["a) Cidadões", "b) Cidadãos", "c) Cidadãs"],
    resposta: "b"
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    opcoes: ["a) Cristóvão Colombo", "b) Pedro Álvares Cabral", "c) Vasco da Gama"],
    resposta: "b"
  },
  {
    pergunta: "Em qual continente está o Egito?",
    opcoes: ["a) Ásia", "b) Europa", "c) África"],
    resposta: "c"
  },
  {
    pergunta: "Qual o resultado de 7 x 8?",
    opcoes: ["a) 54", "b) 56", "c) 58"],
    resposta: "b"
  },
  {
    pergunta: "Qual o nome do processo de passagem do sólido para o gasoso?",
    opcoes: ["a) Fusão", "b) Sublimação", "c) Condensação"],
    resposta: "b"
  },
  {
    pergunta: "Quantos segundos há em 1 hora?",
    opcoes: ["a) 3600", "b) 6000", "c) 1000"],
    resposta: "a"
  }
];

const premios = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 10000, 15000, 30000, 100000];

function jogar() {
  console.clear();
  const nome = readline.question("Digite seu nome: ");
  console.log(`\n🎉 Bem-vindo ao Show do Milhão, ${nome}!\n`);

  let rodada = 0;

  while (rodada < 5) {
    const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];

    console.log(`📣 Rodada ${rodada + 1} - Prêmio: R$ ${premios[rodada]}`);
    console.log(pergunta.pergunta);
    pergunta.opcoes.forEach((opcao) => console.log(opcao));

    const resposta = readline.question("➡️ Sua resposta (a, b ou c) ou 'p' para parar: ").toLowerCase();

    if (resposta === 'p') {
      const premioParar = rodada === 0 ? 0 : premios[rodada - 1];
      console.log(`\n🛑 Você parou na rodada ${rodada + 1}. Prêmio final: R$ ${premioParar}`);
      break;
    }

    if (resposta === pergunta.resposta) {
      console.log("✅ Resposta correta!\n");
      rodada++;
    } else {
      console.log(`❌ Resposta errada! A resposta correta era: ${pergunta.resposta}`);
      console.log("😢 Você perdeu tudo. Prêmio final: R$ 50");
      break;
    }

    if (rodada === 5) {
      console.log(`\n🏆 Parabéns ${nome}, você ganhou R$ ${premios[rodada - 1]}!`);
    }
  }

  const jogarNovamente = readline.question("\n🔁 Deseja jogar novamente? (s/n): ");
  if (jogarNovamente.toLowerCase() === 's') {
    jogar();
  } else {
    console.log("👋 Obrigado por jogar! Até mais.");
  }
}

jogar();
