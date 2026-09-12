/**
 * SCTech • Portfólio de Desenvolvimento Web - Eduardo da Costa
 * Lógica do Portfólio Interativo Estilo VS Code
 */

document.addEventListener('DOMContentLoaded', () => {
    // Base embutida de códigos-fonte dos exercícios (Garante funcionamento 100% offline e via protocolo file://)
    const EMBEDDED_FILES = {
  "1-meuCurriculo/aedc.html": "",
  "1-meuCurriculo/style.css": "",
  "Aula06/index.html": "<!DOCTYPE html>\n<html lang=\"pt-br\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Boas Práticas, SEO e Acessibilidade para a Web</title>\n</head>\n\n<body>\n    <form id=\"dadosCadastrais\">\n        <label id=\"nome\">Nome Completo:\n            <input type=\"text\" required>\n        </label><br>\n        <label id=\"email\">Email:\n            <input type=\"email\" required>\n        </label><br>\n        <label id=\"idade \">Idade:\n            <input type=\"number\" name=\"\" id=\"\" required>\n        </label><br>\n    </form>\n    <form class=\"materiaALecionar\">\n        <label>\n            Selecione a matéria:\n        </label>\n        <label>\n            <input type=\"radio\" name=\"materia\" value=\"1\" required> Matemática\n        </label>\n        <label>\n            <input type=\"radio\" name=\"materia\" value=\"2\"> Português\n        </label>\n        <label>\n            <input type=\"radio\" name=\"materia\" value=\"3\"> Biologia\n        </label>\n        <label>\n            <input type=\"radio\" name=\"materia\" value=\"4\"> Ciência\n        </label>\n        <label>\n            <input type=\"radio\" name=\"materia\" value=\"5\"> História\n        </label>\n        <label>\n            <input type=\"radio\" name=\"materia\" value=\"6\"> Geografia\n        </label>\n        <label>\n            <input type=\"radio\" name=\"materia\" value=\"7\"> Artes\n        </label>\n    </form>\n    <form class=\"turnosDisponiveis\">\n        <label>\n            Selecione o turno:\n        </label>\n        <label>\n            <input type=\"radio\" name=\"turno\" value=\"1\" required> Manhã\n        </label>\n        <label>\n            <input type=\"radio\" name=\"turno\" value=\"2\" required> Tarde\n        </label>\n        <label>\n            <input type=\"radio\" name=\"turno\" value=\"3\" required> Noite\n        </label>\n    </form>\n    <label id=\"escolaridadeAtual\">Nível de Escolaridade:\n        <select>\n            <option value=\"naoInformado\">Não informado...</option>\n            <option value=\"superiorCompleto\">Superior Completo</option>\n            <option value=\"cursandoMestrado\">Cursando Mestrado</option>\n            <option value=\"mestradoConcluido\">Mestrado Concluído</option>\n            <option value=\"cursandoDoutorado\">Cursando Doutorado</option>\n            <option value=\"doutoradoConcluido\">Doutorado Concluído</option>\n        </select>\n    </label><br>\n    <label id=\"mensagemUsuario\">Mensagem:\n        <textarea name=\"mensagem\" id=\"mensagem\" cols=\"100%\" rows=\"1\" maxlength=\"200\"></textarea>\n    </label>\n    <section id=\"botaoEnviar\">\n        <button type=\"submit\">\n            Enviar\n        </button>\n    </section>\n</body>\n\n</html>",
  "Aula08/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <p>Texto Parágrafo</p>\n    <p class=\"p2\">Outro paragrafo</p>\n</body>\n</html>",
  "Aula08/style.css": "*{\n    font-size: 50pt;\n    color: red;\n}\n.p2{\n    color:blueviolet;\n}",
  "Aula09-10/index.html": "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"style.css\" />\n  </head>\n  <body>\n    <h1>Primeiro Parágrafo</h1>\n    <p>Segundo Parágrafo</p>\n  </body>\n</html>\n",
  "Aula09-10/style.css": "*{\n    font-size: 40pt;\n}\np{\n    font-size: 20pt;\n    color: blue;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: bold;\n}\n",
  "Aula10-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <!-- Desafio - Aplicar cor e modificar fonte do paragráfo;\n     1º Crie um arquivo HTML e adicione um parágrafo de texto simples;\n     2º Crie um arquivo CSS e vincule-o ao seu arquivo HTML;\n     3º Use o seletor de TAG para selecionar o parágrafo;\n     4º Altere a cor do texto para AZUL e mude a fonte para ARIAL;\n     DESAFIO ADICIONAL\n     5º Adicione mais dois parágragos ao seu arquivo HTML;\n     6º Atribua uma CLASSE a um parágrafo e um ID ao outro;\n     7º No arquivo CSS, crie regras específicas para a CLASSE e para o ID, alterrando a cor do texto e o tamanho da fonte para cada um.\n     --> \n    <h1>Antonio Eduardo da Costa</h1>\n    <p class=\"paragrafoH1\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, ducimus quaerat quibusdam a, natus hic veritatis qui odio minus, quod dolores adipisci eum voluptatibus sed voluptas quas velit eveniet.</p>\n    <h2>Subtitulo</h2>\n    <p id=\"paragrafoH2\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto repudiandae a ad tempore optio. Illum et facere eaque, corrupti, eligendi, ipsum blanditiis officia distinctio earum tempora a vero fuga!</p>\n    <h2>Subtitulo 2</h2>\n    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi illo molestiae iste quae sequi nostrum assumenda reprehenderit vitae magnam quibusdam in eius, adipisci nemo numquam fuga laboriosam ducimus temporibus?</p>\n</body>\n</html>",
  "Aula10-Atividade/style.css": "p{\n    color: blue;\n    font-family: 'Arial';\n    font-size: 8pt;\n}\n\n.paragrafoH1{\n    font-size: 16pt;\n    color: brown;\n}\n\n#paragrafoH2{\n    font-size: 12pt;\n    color: blueviolet;\n}",
  "Aula13-Atividade/index.html": "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=P, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"style.css\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <header class=\"cabecalho\">Cabeçalho</header>\n    <menu class=\"menu\">Menu</menu>\n    <div class=\"container\">\n      <p class=\"esquerda\">Coluna Esquerda</p>\n      <p class=\"content\">Conteúdo</p>\n      <p class=\"direito\">Coluna Direita</p>\n    </div>\n    <footer class=\"rodape\">Rodapé</footer>\n  </body>\n</html>\n",
  "Aula13-Atividade/style.css": "*{\n    font-size: 24pt;\n}\n\n.cabecalho {\n    text-align: center;\n    grid-column: 1 /-1;\n    background-color: rgb(188, 186, 186);\n    padding: 20px;\n}\n\n.menu {\n    text-align: center;\n    grid-column: auto;\n    background-color: aqua;\n    padding: 20px;\n}\n\n.container{\n    padding: 20px;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    background-color: blueviolet;\n    text-align: center;\n    border-left: 20px white;\n}\n\n.rodape{\n    margin-top: 40px;\n    padding: 20px;\n    text-align: center;\n    background-color: blue;\n}",
  "Aula14-Exercicio/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <main class=\"container\">\n        <div class=\"box\" id=\"box1\">Div 1</div>\n        <div class=\"box\" id=\"box2\">Div 2</div>\n        <div class=\"box\" id=\"box3\">Div 3</div>\n    </main>\n</body>\n</html>",
  "Aula14-Exercicio/style.css": ".container{\n    font-size: 12pt;\n    background-color: rgb(120, 157, 185);\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 10px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n}\n.box{\n    height: 50px;\n    width: 50px;\n    border: 3px solid black;\n    border-radius: 3px;\n}\n\n#box1{\n    background-color: blueviolet;\n}\n\n#box2{\n    background-color: brown;\n}\n\n#box3{\n    background-color: yellow;\n}",
  "Aula16/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap\" rel=\"stylesheet\">\n    <title>Portifólio - Eduardo da Costa</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <header>\n        <h1>Bem vindo(a) ao meu site</h1>\n    </header>\n    <main>\n        <section id=\"sobreMim\">\n            <h2>Sobre Mim...</h2>\n            <p>\n                Formado em Gestão da Tecnologia da Informação e atualmente atuo como Analista de Suporte Pleno (N2) no TRE-SC. Ao longo da minha trajetória, desenvolvi experiência em suporte técnico, infraestrutura, atendimento a usuários, gestão de ativos, Active Directory, virtualização e ferramentas de ITSM, além de ter trabalhado em empresas dos setores de tecnologia, comércio exterior e contabilidade.<br>\n                Estou sempre em busca de novos desafios e oportunidades de crescimento profissional, com preferência por posições remotas ou híbridas que me permitam continuar evoluindo tecnicamente e ampliar minha experiência.<br>\n                Tenho grande interesse por tecnologia e estou constantemente estudando para aprimorar meus conhecimentos, especialmente em áreas como ITIL, DevOps e infraestrutura. Também estou investindo no aprendizado de inglês para expandir minhas oportunidades de carreira.<br>\n                Além da vida profissional, gosto de acompanhar cultura pop, especialmente artistas como Madonna, Lady Gaga e Katy Perry. Também gosto de participar de debates nas redes sociais e valorizo o bom humor, a criatividade e uma comunicação bem construída.<br>\n                Nos últimos anos, também venho buscando desenvolver hábitos mais saudáveis e melhorar minha organização pessoal e financeira, sempre com o objetivo de evoluir tanto na vida profissional quanto na pessoal.<br>\n                Acredito que sou uma pessoa analítica, curiosa, proativa e comprometida com aprendizado contínuo. Gosto de resolver problemas, aprender novas tecnologias e enfrentar desafios que contribuam para meu crescimento e para a geração de resultados positivos nas equipes das quais faço parte.<br>\n            </p>   \n            </section>\n            <section>     \n                <h3>Tribunal Regional Eleitoral de Santa Catarina (TRE-SC)</h3>\n                <p>\n                    ➡️Desenvolvimento e manutenção de planilhas inteligentes no Google Sheets e AppSheet.<br>\n                    ➡️Automatização de controles de ativos, inventários e relatórios.<br>\n                    ➡️Criação de fórmulas, validações, fluxos e regras para otimizar processos internos, exigindo raciocínio lógico e modelagem de dados.\n                </p>\n                <h3>ALIX Tecnologia Corporativa</h3>\n                <p>\n                    ➡️Configuração e integração de sistemas como Oracle, Protheus e Siscomex.<br>\n                    ➡️Diagnóstico e resolução de problemas envolvendo bancos de dados, parâmetros de sistema e conectividade.<br>\n                    ➡️Manipulação de arquivos de configuração (como TNSNAMES.ORA) e análise lógica para integração entre aplicações.\n                </p>\n                <h3>BC Tech – Analista de Suporte / Gerente Comercial</h3>\n                <p>\n                    ➡️Implantação e parametrização de ERP (Agiss Sistemas).<br>\n                    ➡️Configuração de integrações entre sistemas, emissão de boletos e automação de processos utilizando ferramentas como UseBoletos e HandChat.<br>\n                    ➡️Mapeamento de regras de negócio e resolução de problemas técnicos que exigiam pensamento lógico e análise de fluxos.\n                </p>\n            </div>\n        </section>\n        <div><h2 class=\"competencias\">Minhas competências</h2></div>\n            <div class=\"competencias\">\n            <p>🧠 Lógica de Programação</p>\n            <p>🧩 Pensamento Algorítmico</p>\n            <p>🔍 Resolução de Problemas (Problem Solving)</p>\n            <p>⚙️ Automação de Processos</p>\n            <p>🗂️ Modelagem de Processos</p>\n            <p>💻 Análise de Sistemas</p>\n            <p>🛠️ Troubleshooting</p>\n            <p>🔗 Integração de Sistemas</p>\n            <p>🔄 Estruturação de Fluxos</p>\n            <p>📊 Análise de Dados</p>\n            <p>📈 Google Sheets (automação e fórmulas)</p>\n            <p>📱 AppSheet</p>\n            <p>📑 Excel Avançado</p>\n            <p>🎯 Raciocínio Analítico</p>\n            <p>📝 Documentação Técnica</p>\n        </div>\n    </main>\n    <footer>\n        <p>&copy; todos os direitos reservados.</p>\n    </footer>\n</body>\n</html>",
  "Aula16/style.css": "body{\n    font-family: 'PT Sans';\n    margin: 10px;\n    background-color: black;\n    color: white;\n}\n\nheader{\n    background-color: #363535;\n    text-align: center;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));\n    gap: 20px;\n    padding: 20px;\n\n}\n\n.competencias{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 15px;\n    padding: 20px;\n    justify-content: center;\n}\n\n.competencias h1{\n}\n\nfooter{\n    background-color: black;\n    text-align: center;\n    padding: 10px;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    align-content: space-between;\n}",
  "Aula17/index.html": "<!DOCTYPE html>\n<html lang='en'>\n<head>\n    <meta charset='utf-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1'>\n    <title>Aula de Javascript</title>\n    <script src=\"script.js\"></script>\n</head>\n<body>\n    <h1>Calculadora de aprovação</h1>\n    <label>Digite a nota do aluno:</label>\n    <input type=\"text\" id=\"nota\">\n    <button onclick=\"verificaAprovacao()\">Verificar aprovação</button>\n    <p id=\"resultado\"></p>\n</body>\n</html>",
  "Aula17/script.js": "function verificaAprovacao()\n{\n    let nota = document.getElementById(\"nota\").value;\n    console.log(nota);\n}",
  "Aula18-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Atividade 18</title>\n    <script src=\"script.js\"></script>\n</head>\n<body>\n    <h1>Simulador de Desconto</h1>\n    <p>Insira o valor original do produto:</p>\n    <input type=\"number\" id=\"valorSemDesconto\">\n    <p>Insira a porcentagem de desconto:</p>\n    <input type=\"number\" id=\"porcentagemDesconto\">\n    <button onclick=\"calcularDesconto()\">Calcular</button>\n    <h2 id=\"resultado\"></h2>\n</body>\n</html>",
  "Aula18-Atividade/script.js": "function calcularDesconto() {\n  const valorSemDesconto = document.getElementById(\"valorSemDesconto\").value;\n  console.log(\"Valor sem desconto:\", valorSemDesconto);\n  const porcentagemDesconto = document.getElementById(\n    \"porcentagemDesconto\",\n  ).value;\n  console.log(\"Porcentagem de desconto:\", porcentagemDesconto);\n\n  if (valorSemDesconto < 0 || porcentagemDesconto < 0) {\n    alert(\"Por favor, insira valores válidos, não pode ser negativo.\");\n    console.log(\"Usuário inseriu valores negativos. Valor inserido:\", valorSemDesconto, \"Porcentagem inserida:\", porcentagemDesconto);\n    return;\n  } else if (valorSemDesconto === \"\" || porcentagemDesconto === \"\") {\n    alert(\"Por favor, preencha todos os campos.\");\n    console.log(\"Usuário deixou campos vazios.\");\n    return;\n  } else if (valorSemDesconto === \"0\" || porcentagemDesconto === \"0\") {\n    alert(\"O valor e a porcentagem de desconto não podem ser zero.\");\n    console.log(\"Usuário inseriu valor ou porcentagem igual a zero. Valor inserido:\", valorSemDesconto, \"Porcentagem inserida:\", porcentagemDesconto);\n    return;\n  }\n\n  const valorComDesconto =\n    valorSemDesconto - (valorSemDesconto * porcentagemDesconto) / 100;\n  console.log(\"Valor com desconto:\", valorComDesconto);\n  console.log(\"Valor inserido pelo usuário:\", valorSemDesconto, \";Porcentagem inserida pelo usuário:\", porcentagemDesconto);\n\n  document.getElementById(\"resultado\").innerHTML =\n    `O valor com desconto é: R$ ${valorComDesconto.toFixed(2)}`;\n}\n",
  "Aula19-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Mensagem de Saudação</title>\n    <script src=\"script.js\"></script>\n</head>\n<body>\n    <h1>Escolha o idioma para a saudação:</h1>\n    <label>Idioma:</label>\n    <select id=\"linguagemSelecionada\">\n        <option value=\"pt\">Português</option>\n        <option value=\"en\">Inglês</option>\n        <option value=\"es\">Espanhol</option>\n        <option value=\"fr\">Francês</option>\n    </select>\n    <button onclick=\"saudar()\">Saudar</button>\n    <p id=\"mensagemSaudacao\"></p>\n</body>\n</html>",
  "Aula19-Atividade/script.js": "        function saudar() {\n            const linguagemSelecionada = document.getElementById(\"linguagemSelecionada\").value;\n            let mensagem = \"\";\n            switch (linguagemSelecionada) {\n                case \"pt\":\n                    mensagem = \"Olá! Bem-vindo!\";\n                    break;\n                case \"en\":\n                    mensagem = \"Hello! Welcome!\";\n                    break;\n                case \"es\":\n                    mensagem = \"¡Hola! ¡Bienvenido!\";\n                    break;\n                case \"fr\":\n                    mensagem = \"Bonjour! Bienvenue!\";\n                    break;\n                default:\n                    mensagem = \"Idioma não reconhecido.\";\n            }\n            document.getElementById(\"mensagemSaudacao\").innerText = mensagem;\n            console.log(\"Mensagem de saudação exibida:\", mensagem);\n        }",
  "Aula20-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Aula 20</title>\n    <script src=\"script.js\"></script>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>",
  "Aula20-Atividade/script.js": "const frutas = [\"maçã\", \"uva\", \"laranja\", \"maracuja\", \"abacaxi\"];\nconsole.log(frutas);\n\nconsole.log(frutas[2]); // Acessando o elemento na posição 2 do array 3º item da atividade.\nfrutas[1] = \"Kiwi\"; // Alterando o segundo item do array para \"Kiwi\"\nconsole.log(frutas); //Mostrando o array atualizado com a alteração do segundo item.\nfrutas.push(\"uva\"); // Adicionando um novo elemento ao final do array\nfrutas.push(\"limão\"); // Adicionando um novo elemento ao final do array\nconsole.log(frutas);// Mostrando o array atualizado com os novos elementos adicionados ao final.\n",
  "Aula23-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Aula 23</title>\n</head>\n<body>\n    <h1>Lista de Carros</h1>\n    <div id=\"conteudo\"></div>\n    <script src=\"script.js\"></script>\n</body>\n</html>",
  "Aula23-Atividade/script.js": "const carros = [\"Fiat\", \"BMW\", \"VW\", \"Ford\", \"Renault\"];\nconst conteudo = document.getElementById(\"conteudo\");\nvar contador = 0;\nvar continuar = true;\n\ndo {\n    // 1. Atualiza o HTML com o carro atual\n    const p = document.createElement(\"p\");\n    p.textContent = carros[contador];\n    conteudo.appendChild(p);\n\n    console.log(\"Carro Atual: \" + carros[contador]);\n\n    // 2. Prepara para o próximo carro\n    contador++;\n\n    // 3. Se ainda houver um próximo carro na lista, pede confirmação ANTES da próxima iteração\n    if (contador < carros.length) {\n        continuar = confirm(\"Deseja exibir o próximo carro (\" + carros[contador] + \")?\");\n    } else {\n        alert(\"Você chegou ao fim da lista!\");\n        continuar = false;\n    }\n\n} while (continuar && contador < carros.length);",
  "Aula25-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Atividade da Aula 25</title>\n</head>\n<body>\n    <h1>Atividade da Aula 25</h1>\n    <label>Digite o Codigo do pedido:</label>\n    <input type=\"number\" id=\"numeroPedido\" placeholder=\"Digite o código do pedido\">\n    <button onclick=\"clientePedido(document.getElementById('numeroPedido').value)\">Consultar Pedido</button>\n    <p id=\"resultado\"></p>\n    <script src=\"script.js\"></script>\n</body>\n</html>",
  "Aula25-Atividade/script.js": "function clientePedido(numeroPedido){\n    if (parseInt(numeroPedido) === 1){\n        document.getElementById(\"resultado\").innerHTML = \"Pizza Cababresa\";\n    } else if (parseInt(numeroPedido) === 2){\n        document.getElementById(\"resultado\").innerHTML = \"Pizza de Quatro Queijos\";\n    } else if (parseInt(numeroPedido) === 3){\n        document.getElementById(\"resultado\").innerHTML = \"Pizza de Frango com Catupiry\";\n    } else if (parseInt(numeroPedido) === 4){\n        document.getElementById(\"resultado\").innerHTML = \"Pizza de Brigadeiro\";\n    } else {\n        document.getElementById(\"resultado\").innerHTML = \"Numero do pedido inválido\";\n    }\n}",
  "Aula26/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>(o jogo da velha)</title>\n    <style>\n        body {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n        .tabuleiro {\n            display: grid;\n            grid-template-columns: repeat(3, 100px);\n            gap: 10px;\n        }\n        .celula {\n            display: flex;\n            background-color: #3dff4d;\n            width: 100px;\n            height: 100px;\n            justify-content: center;\n            align-items: center;\n            font-size: 46px;\n            cursor: pointer;\n        }   \n        #btnReiniciar {\n            margin-top: 20px;\n            padding: 15px;\n        }\n    </style>\n</head>\n<body>\n    <h1>Jogo da Vovózinha</h1>\n    <div id=\"tabuleiro-jogo\" class=\"tabuleiro\">\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n        <button class=\"celula\"></button>\n    </div>\n    <button id=\"btnReiniciar\">Reiniciar Jogo</button>\n    \n    <script src=\"script.js\"></script>\n</body>\n</html>",
  "Aula26/script.js": "const celulas = document.querySelectorAll(\".celula\");\nlet vezDoX = true;\ndocument.getElementById(\"btnReiniciar\").addEventListener(\"click\", iniciarJogo);\n\n\nfunction iniciarJogo() {\n    celulas.forEach((celula) => {\n            celula.textContent = \"\";\n            // quando o usuário clicar em uma célula, a função será chamada apenas uma vez (once=true)\n            celula.addEventListener(\"click\", tratarClique, { once: true });\n    } );\n}\n\n\nfunction tratarClique(evento) {\n  evento.target.textContent = vezDoX ? \"X\" : \"O\";\n  vezDoX = !vezDoX;\n}\n\niniciarJogo();",
  "Aula27-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Atividade da Aula 27</title>\n</head>\n<body>\n    <h1>Lista de Tarefas</h1>\n    <input type=\"text\" id=\"tarefa\" placeholder=\"Digite uma nova tarefa\">\n    <button id=\"btnAdicionar\">Adicionar Tarefa</button>\n    <ul id=\"listaTarefas\"></ul>\n    <script src=\"script.js\"></script>\n</body>\n</html>",
  "Aula27-Atividade/script.js": "const tarefaInput = document.getElementById(\"tarefa\");\nconst btnAdicionar = document.getElementById(\"btnAdicionar\");\nconst listaTarefas = document.getElementById(\"listaTarefas\");\n\nbtnAdicionar.addEventListener(\"click\", adicionarTarefa);\n\nfunction adicionarTarefa() {\n    const tarefa = tarefaInput.value.trim();\n    if (tarefa !== \"\") {\n        const li = document.createElement(\"li\");\n        li.textContent = tarefa;\n        listaTarefas.appendChild(li);\n        tarefaInput.value = \"\";\n    }\n}",
  "Aula28/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Aula 28</title>\n    <style>\n        label {\n            display: block;\n        }\n\n        </style>\n</head>\n<body>\n    <h1>Formulario de preenchimento</h1>\n    <form id=\"formularioContato\">\n        <label for=\"nome\">Nome:</label>\n        <input type=\"text\" id=\"nome\" required maxlength=\"256\">\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" id=\"email\" required maxlength=\"356\">\n        <label for=\"mensagem\">Mensagem:</label>\n        <textarea required id=\"mensagem\"></textarea>\n        <button type=\"submit\">Enviar</button>\n    </form>\n    <script src=\"script.js\"></script>\n</body>\n</html>",
  "Aula28/script.js": "function validarFormulario() {\n  const nome = document.getElementById(\"nome\").value;\n  const email = document.getElementById(\"email\").value;\n  const mensagem = document.getElementById(\"mensagem\").value;\n\n  if (nome === \"\" || email === \"\" || mensagem === \"\") {\n    alert(\"Por favor, preencha todos os campos do formulário.\");\n    return false;\n  }\n\n  if (nome.length < 3 || nome.length > 50) {\n    alert(\"O nome deve ter entre 3 e 50 caracteres.\");\n    return false;\n  }\n\n  if (email.length < 5 || email.length > 50) {\n    alert(\"O email deve ter entre 5 e 50 caracteres.\");\n    return false;\n  }\n\n  const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\n  if (!emailPatern.test(email)) {\n    alert(\"Por favor, insira um email válido.\");\n    return false;\n  }\n\n  return true;\n}\n\ndocument\n  .getElementById(\"formularioContato\")\n  .addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    if (validarFormulario()) {\n      alert(\"Formulário validado com sucesso!\");\n    }\n  });\n",
  "Aula28-Atividade/index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Atividade da Aula 28</title>\n</head>\n<body>\n    <h1> Insira seus dados para validação</h1>\n    <form id=\"formulario\">\n        <label>Email: </label><input type=\"email\" id=\"email\">\n        <label>Telefone: </label><input type=\"tel\" id=\"telefone\" maxlength=\"13\">\n        <label>Senha: </label><input type=\"password\" id=\"senha\">\n        <button type=\"submit\">Validar</button>\n    </form>\n    <script src=\"script.js\"></script>\n</body>\n</html>",
  "Aula28-Atividade/script.js": "\n  function validaForm() {\n  const email = document.getElementById(\"email\").value;\n  const telefone = document.getElementById(\"telefone\").value;\n  const senha = document.getElementById(\"senha\").value;\n\n    if (email === '' || telefone === '' || senha === ''){\n        alert('Insira informação em todos os campos');\n        return false;\n    }\n\n    if (email.length < 3 || email.length > 150){\n        alert('Email deve conter mais que 3 e menos de 150 caracateres');\n        return false;\n    }\n\n    if (senha.length <6){\n        alert('Senha deve ter mais de 6 caracteres.');\n        return false;\n    }\n\n    const emailPatern = /^(([A-Za-z0-9-_+]+(?:\\.[A-Za-z0-9-_]+)*)@([A-Za-z0-9-]+(?:\\.[A-Za-z0-9]+)*(?:\\.[A-Za-z]{2,})))$/;\n    if (!emailPatern.test(email)){\n        alert(\"Insina um valor de email valido.\")\n        return false;\n    }\n    return true;\n}\n\ndocument.getElementById('formulario').addEventListener('submit', function(event){\n    event.preventDefault();\n    if (validaForm())\n    {\n        alert(\"Formulario Validado\");\n    }\n})\n",
  "Back-End_Aula01/script.js": "class Veiculo {\n    constructor(fabricante,modelo,ano,tipo,qtdPortas){\n        this.fabricante=fabricante;\n        this.modelo = modelo;\n        this.ano = ano;\n        this.tipo=tipo;\n        this.qtdPortas=qtdPortas;        \n    }\n\n    mostraDadosVeiculo()\n    {\n        console.log (`${this.fabricante} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.qtdPortas}`)\n    }\n\n    mostraModelo() \n    {\n        console.log (`O modelo do carro é: ${this.modelo}`)\n    }\n    acelerar(){\n        console.log(`Acelerando...`)\n    }\n\n}\n\nclass Moto extends Veiculo {\n    constructor (fabricante,modelo,ano,cilindradas)\n    {\n        super(fabricante,modelo,ano)\n        this.cilindradas=cilindradas;\n    }\n\n    mostraDadosVeiculo()\n    {\n        console.log(`${this.fabricante} ${this.modelo}, ${this.ano}, ${this.cilindradas} Cilindradas.`)\n    }\n}\n\nclass Carro extends Veiculo{\n    constructor(fabricante,modelo,ano,tipo,qtdPortas){\n        super(fabricante,modelo,ano,tipo,qtdPortas);\n    }\n\n}\n\n\nconst meuCarro = new Carro (\"Ford\",\"KA\",\"2008\",\"Sedan\",4)\nconst minhaMoto = new Moto (\"Yamaha\",\"FZ250\",\"2008\",250)\nmeuCarro.mostraDadosVeiculo();\nminhaMoto.mostraDadosVeiculo();",
  "Back-End_Aula02-Atividade/script.js": "class Produto {\n  constructor(nomeP, preco) {\n    this.nomeP = nomeP;\n    this.preco = preco;\n  }\n  mostraDetalhes() {\n    console.log(\n      `O produto: ${this.nomeP} que custa: R$ ${this.preco}.`,\n    );\n  }\n}\n\nclass Eletronico extends Produto {\n  constructor(nomeP, preco, garantia) {\n    super(nomeP, preco);\n    this.garantia = garantia;\n  }\n\n  mostraDetalhes() {\n    console.log(\n      `O produto: ${this.nomeP} que custa: R$ ${this.preco}, está ${this.garantia}!`,\n    );\n  }\n}\n\nconst visualizaProduto = new Eletronico(\"iPhone 16\",2999.0,`Dentro da Garantia!`,);\nvisualizaProduto.mostraDetalhes();\nconst visualizaProduto2 = new Produto(\"Gel\",19.90)\nvisualizaProduto2.mostraDetalhes();\n\n",
  "Back-End_Aula03/script.js": "console.log(\"Inicio da execução.\")\n\nfunction buscandoDadosDoServidor() {\n  //CODIGO DE SIMULAÇÃO DE BUSCA DE DADOS NO SERVIDOR.\n  return new Promise((resolve, reject) => {\n    console.log(\"Buscando informações do servidor\");\n\n    setTimeout(() => {\n      let sucesso = Math.random() > 0.5;\n\n      if (sucesso) {\n        resolve(\"Dados recebidos com sucesso\");\n      } else {\n        reject(\"Falha na optenção de dados do servidor\");\n      }\n    }, 2000);\n  });\n}\n\nconst minhaFuncaoAssincrona = async () =>{\n    try{\n        const resultado = await buscandoDadosDoServidor();\n        console.log(resultado)\n    }\n    catch(erro){\n        console.erro(erro);\n    }\n}\n\nminhaFuncaoAssincrona();\nconsole.log(\"Fim da execução...\")\n",
  "Back-End_Aula04/atividade.js": "console.log(\"Inicio. \")\nconst produtos = [\n    {id:1, nome:\"Camiseta\",preco:25.99},\n    {id:2, nome:\"Calça\",preco:39.99},\n    {id:3, nome:\"Tênis\",preco:299.90},\n];\n\nfunction carregaProduto(id){\n    return new Promise ((resolve,reject)=>{\n        setTimeout(() => {\n      const produtoEncontrado = produtos.find(p => p.id === id);\n\n      if (produtoEncontrado) {\n        resolve(produtoEncontrado);\n      } else {\n        reject(new Error(\"Falha na optenção de dados do servidor\"));\n      }\n    }, 2000);\n    })\n}\n\ncarregaProduto(1)\n.then(produto => {\n    try {\n        const produtoJson = JSON.stringify(produto);\n        console.log(\"Produto em formato JSON: \",produtoJson);\n\n        const produtoObjeto = JSON.parse(produtoJson);\n        console.log(\"Produto convertido de volta para Objeto: \", produtoObjeto)\n    } catch (erroJson) {\n        console.error(\"Erro ao processar JSON no .then(): \", erroJson.message);\n    }\n})\n.catch(erro => {\n    console.error(\"Erro na busca do produto: \",erro.message)\n})\n\nasync function buscarEProcessarProduto(id) {\n    try {\n        const produto = await carregaProduto(id);\n\n        const produtoJSON = JSON.stringify(produto);\n        console.log(\"[Async/Await] Produto em JSON: \", produtoJSON);\n\n        const produtoObjeto = JSON.parse(produtoJSON);\n        console.log(\"[Async/Await] Objeto Revertido: \",produtoObjeto);\n\n        return produtoObjeto;\n    }\n    catch (erro){\n        console.error(\"[Async/Await] Ocorreu um erro: \",erro.message);\n    }\n}\n\nbuscarEProcessarProduto(1);\nbuscarEProcessarProduto(2);\nbuscarEProcessarProduto(3);\nbuscarEProcessarProduto(99);",
  "Back-End_Aula04/script.js": "function buscandoDadosDoServidor() {\n  //CODIGO DE SIMULAÇÃO DE BUSCA DE DADOS NO SERVIDOR.\n  return new Promise((resolve, reject) => {\n    console.log(\"Buscando informações do servidor\");\n\n    setTimeout(() => {\n      let sucesso = Math.random() > 0.5;\n\n      if (sucesso) {\n        resolve(\"Dados recebidos com sucesso\");\n      } else {\n        reject(\"Falha na optenção de dados do servidor\");\n      }\n    }, 2000);\n  });\n}\n\nbuscandoDadosDoServidor()\n.then((mensagem) => {\n  console.log(mensagem);\n})\n.catch((erro) => {\n    console.error(erro);\n});\n",
  "Back-End_Aula04/script02.js": "const produtos = [\n    {id:1, nome:\"Camiseta\",preco:25.99},\n    {id:2, nome:\"Calça\",preco:39.99},\n    {id:3, nome:\"Tênis\",preco:299.90},\n];\n\nconst produtosJson = JSON.stringify(produtos);\n\nconsole.log(produtos);\nconsole.log(produtosJson);\n\nconst produtosObjeto = JSON.parse(produtosJson);\nconsole.log(produtosObjeto);",
  "Back-End_Aula05/OlaMundo.js": "console.log(\"Olá Mundo\");",
  "Back-End_Aula06/OlaMundo.js": "console.log(\"Olá Mundo\");",
  "Back-End_Aula06/package.json": "{\n  \"name\": \"back-end_aula06\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"license\": \"ISC\",\n  \"author\": \"\",\n  \"type\": \"commonjs\",\n  \"main\": \"OlaMundo.js\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n  }\n}\n",
  "Back-End_Aula07/OlaMundo.js": "",
  "Back-End_Aula07/modulo_calculadora/app.js": "var soma = require(\"./soma\");\nvar multiplicacao = require(\"./multiplicacao\");\nvar divisao = require(\"./divisao\");\nvar subtracao = require(\"./subracao\")\n\nconsole.log(soma(5,5));\nconsole.log(multiplicacao(5,5));\nconsole.log(divisao(5,5));\nconsole.log(subtracao(5-5));\n",
  "Back-End_Aula07/modulo_calculadora/divisao.js": "module.exports = function (a,b){\n    return a/b;\n}",
  "Back-End_Aula07/modulo_calculadora/multiplicacao.js": "module.exports = function (a,b){\n    return a*b;\n}",
  "Back-End_Aula07/modulo_calculadora/soma.js": "module.exports = function (a,b){\n    return a+b;\n}",
  "Back-End_Aula07/modulo_calculadora/subracao.js": "module.exports = function (a,b){\n    return a-b;\n}",
  "Back-End_Aula07/modulo_exemplos/app.js": "var pessoa = require(\"./commons/Pessoas\");\nvar soma = require(\"./commons/soma\");\nvar imposto = require(\"./commons/calculoImporto\")\nvar calculo = require(\"./commons/calculadora\");\nvar calculadora = require(\"./commons/calculadora\");\n\ncosta = pessoa();\n\nconsole.log(JSON.stringify(costa))\nconsole.log(soma(2,2));\nconsole.log(calculadora.soma(5,5))\nconsole.log(calculadora.subtracao(5,5))\nconsole.log(calculadora.divisao(5,5))\nconsole.log(calculadora.multiplicacao(5,5))\n\nconsole.log(\"Valor do produto com o imposto: \",+imposto.adicionar(10));\nconsole.log(\"Valor do imposto: \"+imposto.valor(10));\nconsole.log(\"Taxa de imposto: \"+imposto.taxa)",
  "Back-End_Aula07/modulo_exemplos/commons/Pessoas.js": "// module.exports = function() {\n//     return {\n//         nome: \"Antonio Eduardo da Costa\",\n//         profissao: \"Analista de Suporte\",\n//         idade: \"30\",\n//         estado: \"SC\"\n//     }\n// }\n\nmodule.exports = function() {\n    a: 5\n    b: 5\n}",
  "Back-End_Aula07/modulo_exemplos/commons/calculadora.js": "    exports.soma = function (a,b){\n    return a+b;\n};\n\n    exports.subtracao = function (a,b){\n    return a-b;\n};\n\n    exports.divisao = function (a,b){\n    return a/b;\n};\n\n    exports.multiplicacao = function (a,b){\n    return a*b;\n};",
  "Back-End_Aula07/modulo_exemplos/commons/calculoImporto.js": "var taxa = 0.10;\n\nexports.valor = function(a){\n    return a * taxa;\n}\n\nexports.adicionar = function(a){\n    return a + (a*taxa);\n} ",
  "Back-End_Aula07/modulo_exemplos/commons/soma.js": "module.exports = function (a,b){\n    return a+b;\n}",
  "Back-End_Aula07/package.json": "{\n  \"dependencies\": {\n    \"bootstrap\": \"^5.3.8\"\n  }\n}\n",
  "Back-End_Aula08/app_expressjs/Controller/clientsController.ts": "import { Request, Response } from \"express\";\n\nfunction index (req: Request, res: Response, next: any){\n     res.render('index')\n}\n\nexport default {index};",
  "Back-End_Aula08/app_expressjs/Router/clientes.ts": "import { Router } from \"express\";\nimport clientsController from \"../Controller/clientsController\";\nconst router = Router();\n\nrouter.get('/', clientsController.index)\n\nrouter.get('/sobrenos', (req, res) => {\n    res.send(\"Rota falando sobre a empresa\")\n})\n\nrouter.get('/trabalheConosco', (req, res) => {\n    res.send(\"Opções de Carreira\")\n})\n\nrouter.get('/Contato', (req, res) => {\n    res.send(\"48-9999-9999\")\n})\n\nexport default router;",
  "Back-End_Aula08/app_expressjs/app.ts": "import express from \"express\";\nimport clientRouter from \"./Router/clientes\";\nimport BackEnd from \"./backend/backend\";    \nimport maisRotas from \"./maisRotas/maisRotas\";\nimport contTech from \"./conteudoDeTecnologia/contTech\";\n\n\nconst app = express();\n\napp.use(clientRouter);\napp.use(BackEnd);\napp.use(maisRotas);\napp.use(contTech);\napp.set('view engine', 'pug');\napp.set('views', './Views')\n\n\napp.listen(3000, () => {\n    console.log(\"Servidor criado...\")\n})",
  "Back-End_Aula08/app_expressjs/backend/backend.ts": "import { Router } from \"express\";\nconst BackEnd = Router();\n\nBackEnd.get('/BackEnd', (req, res) => {\n    res.send(\"<h1>BackEnd</h1>\")\n})\n\nexport default BackEnd;",
  "Back-End_Aula08/app_expressjs/conteudoDeTecnologia/contTech.ts": "import { Router } from \"express\";\nconst contTech = Router();\n\ncontTech.get('/contTech', (req, res) => {\n    res.send(\"<h1>Mais Rotas</h1>\")\n})\n\nexport default contTech;",
  "Back-End_Aula08/app_expressjs/maisRotas/maisRotas.ts": "import { Router } from \"express\";\nconst maisRotas = Router();\n\nmaisRotas.get('/maisRotas', (req, res) => {\n    res.send(\"<h1>Mais Rotas</h1>\")\n})\n\nexport default maisRotas;",
  "Back-End_Aula08/app_expressjs/package.json": "{\n  \"name\": \"app_expressjs\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"main\": \"app.ts\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",\n    \"start\": \"tsx app.ts\"\n  },\n  \"author\": \"\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n    \"express\": \"^5.2.1\",\n    \"pug\": \"^3.0.4\"\n  },\n  \"devDependencies\": {\n    \"@types/express\": \"^5.0.6\",\n    \"@types/node\": \"^26.1.2\",\n    \"ts-node\": \"^10.9.2\",\n    \"tsx\": \"^4.23.8\",\n    \"typescript\": \"^7.0.2\"\n  }\n}\n",
  "Back-End_Aula08/app_expressjs/tsconfig.json": "{\n  \"compilerOptions\": {\n    /* Visit https://aka.ms/tsconfig to read more about this file */\n\n    /* Projects */\n    // \"incremental\": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */\n    // \"composite\": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */\n    // \"tsBuildInfoFile\": \"./.tsbuildinfo\",              /* Specify the path to .tsbuildinfo incremental compilation file. */\n    // \"disableSourceOfProjectReferenceRedirect\": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */\n    // \"disableSolutionSearching\": true,                 /* Opt a project out of multi-project reference checking when editing. */\n    // \"disableReferencedProjectLoad\": true,             /* Reduce the number of projects loaded automatically by TypeScript. */\n\n    /* Language and Environment */\n    \"target\": \"es2016\",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */\n    // \"lib\": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */\n    // \"jsx\": \"preserve\",                                /* Specify what JSX code is generated. */\n    // \"experimentalDecorators\": true,                   /* Enable experimental support for legacy experimental decorators. */\n    // \"emitDecoratorMetadata\": true,                    /* Emit design-type metadata for decorated declarations in source files. */\n    // \"jsxFactory\": \"\",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */\n    // \"jsxFragmentFactory\": \"\",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */\n    // \"jsxImportSource\": \"\",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */\n    // \"reactNamespace\": \"\",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */\n    // \"noLib\": true,                                    /* Disable including any library files, including the default lib.d.ts. */\n    // \"useDefineForClassFields\": true,                  /* Emit ECMAScript-standard-compliant class fields. */\n    // \"moduleDetection\": \"auto\",                        /* Control what method is used to detect module-format JS files. */\n\n    /* Modules */\n    \"module\": \"commonjs\",                                /* Specify what module code is generated. */\n    // \"rootDir\": \"./\",                                  /* Specify the root folder within your source files. */\n    // \"moduleResolution\": \"node10\",                     /* Specify how TypeScript looks up a file from a given module specifier. */\n    // \"baseUrl\": \"./\",                                  /* Specify the base directory to resolve non-relative module names. */\n    // \"paths\": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */\n    // \"rootDirs\": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */\n    // \"typeRoots\": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */\n    // \"types\": [],                                      /* Specify type package names to be included without being referenced in a source file. */\n    // \"allowUmdGlobalAccess\": true,                     /* Allow accessing UMD globals from modules. */\n    // \"moduleSuffixes\": [],                             /* List of file name suffixes to search when resolving a module. */\n    // \"allowImportingTsExtensions\": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */\n    // \"resolvePackageJsonExports\": true,                /* Use the package.json 'exports' field when resolving package imports. */\n    // \"resolvePackageJsonImports\": true,                /* Use the package.json 'imports' field when resolving imports. */\n    // \"customConditions\": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */\n    // \"resolveJsonModule\": true,                        /* Enable importing .json files. */\n    // \"allowArbitraryExtensions\": true,                 /* Enable importing files with any extension, provided a declaration file is present. */\n    // \"noResolve\": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */\n\n    /* JavaScript Support */\n    // \"allowJs\": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */\n    // \"checkJs\": true,                                  /* Enable error reporting in type-checked JavaScript files. */\n    // \"maxNodeModuleJsDepth\": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */\n\n    /* Emit */\n    // \"declaration\": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */\n    // \"declarationMap\": true,                           /* Create sourcemaps for d.ts files. */\n    // \"emitDeclarationOnly\": true,                      /* Only output d.ts files and not JavaScript files. */\n    // \"sourceMap\": true,                                /* Create source map files for emitted JavaScript files. */\n    // \"inlineSourceMap\": true,                          /* Include sourcemap files inside the emitted JavaScript. */\n    // \"outFile\": \"./\",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */\n    // \"outDir\": \"./\",                                   /* Specify an output folder for all emitted files. */\n    // \"removeComments\": true,                           /* Disable emitting comments. */\n    // \"noEmit\": true,                                   /* Disable emitting files from a compilation. */\n    // \"importHelpers\": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */\n    // \"importsNotUsedAsValues\": \"remove\",               /* Specify emit/checking behavior for imports that are only used for types. */\n    // \"downlevelIteration\": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */\n    // \"sourceRoot\": \"\",                                 /* Specify the root path for debuggers to find the reference source code. */\n    // \"mapRoot\": \"\",                                    /* Specify the location where debugger should locate map files instead of generated locations. */\n    // \"inlineSources\": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */\n    // \"emitBOM\": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */\n    // \"newLine\": \"crlf\",                                /* Set the newline character for emitting files. */\n    // \"stripInternal\": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */\n    // \"noEmitHelpers\": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */\n    // \"noEmitOnError\": true,                            /* Disable emitting files if any type checking errors are reported. */\n    // \"preserveConstEnums\": true,                       /* Disable erasing 'const enum' declarations in generated code. */\n    // \"declarationDir\": \"./\",                           /* Specify the output directory for generated declaration files. */\n    // \"preserveValueImports\": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */\n\n    /* Interop Constraints */\n    // \"isolatedModules\": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */\n    // \"verbatimModuleSyntax\": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */\n    // \"allowSyntheticDefaultImports\": true,             /* Allow 'import x from y' when a module doesn't have a default export. */\n    \"esModuleInterop\": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */\n    // \"preserveSymlinks\": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */\n    \"forceConsistentCasingInFileNames\": true,            /* Ensure that casing is correct in imports. */\n\n    /* Type Checking */\n    \"strict\": true,                                      /* Enable all strict type-checking options. */\n    // \"noImplicitAny\": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */\n    // \"strictNullChecks\": true,                         /* When type checking, take into account 'null' and 'undefined'. */\n    // \"strictFunctionTypes\": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */\n    // \"strictBindCallApply\": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */\n    // \"strictPropertyInitialization\": true,             /* Check for class properties that are declared but not set in the constructor. */\n    // \"noImplicitThis\": true,                           /* Enable error reporting when 'this' is given the type 'any'. */\n    // \"useUnknownInCatchVariables\": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */\n    // \"alwaysStrict\": true,                             /* Ensure 'use strict' is always emitted. */\n    // \"noUnusedLocals\": true,                           /* Enable error reporting when local variables aren't read. */\n    // \"noUnusedParameters\": true,                       /* Raise an error when a function parameter isn't read. */\n    // \"exactOptionalPropertyTypes\": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */\n    // \"noImplicitReturns\": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */\n    // \"noFallthroughCasesInSwitch\": true,               /* Enable error reporting for fallthrough cases in switch statements. */\n    // \"noUncheckedIndexedAccess\": true,                 /* Add 'undefined' to a type when accessed using an index. */\n    // \"noImplicitOverride\": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */\n    // \"noPropertyAccessFromIndexSignature\": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */\n    // \"allowUnusedLabels\": true,                        /* Disable error reporting for unused labels. */\n    // \"allowUnreachableCode\": true,                     /* Disable error reporting for unreachable code. */\n\n    /* Completeness */\n    // \"skipDefaultLibCheck\": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */\n    \"skipLibCheck\": true                                 /* Skip type checking all .d.ts files. */\n  }\n}\n"
};

    // =========================================================================
    // 1. CATÁLOGO COMPLETO DE EXERCÍCIOS DO REPOSITÓRIO
    // =========================================================================
    const exercises = [
        // --- FRONT-END: HTML & CSS ---
        {
            id: '1-meuCurriculo',
            folder: '1-meuCurriculo',
            title: '1 - Meu Currículo',
            category: 'frontend',
            htmlFile: 'aedc.html',
            files: ['aedc.html', 'style.css', 'script.js'],
            tags: ['HTML', 'CSS'],
            desc: 'Primeira estrutura de currículo profissional em HTML e estilização CSS.',
            simulatedOutput: null
        },
        {
            id: 'Aula06',
            folder: 'Aula06',
            title: 'Aula 06 - Boas Práticas, SEO e Acessibilidade',
            category: 'frontend',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML'],
            desc: 'Formulário completo com tags semânticas, atributos required, labels acessíveis e boas práticas de SEO.',
            simulatedOutput: null
        },
        {
            id: 'Aula08',
            folder: 'Aula08',
            title: 'Aula 08 - Introdução ao CSS e Seletores',
            category: 'frontend',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'CSS'],
            desc: 'Primeiros passos com folhas de estilo em cascata (CSS), estilizando classes e parágrafos.',
            simulatedOutput: null
        },
        {
            id: 'Aula09-10',
            folder: 'Aula09-10',
            title: 'Aula 09/10 - Box Model e Estilização',
            category: 'frontend',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'CSS'],
            desc: 'Trabalhando com margens, bordas, preenchimentos (padding) e o modelo de caixas da Web.',
            simulatedOutput: null
        },
        {
            id: 'Aula10-Atividade',
            folder: 'Aula10-Atividade',
            title: 'Aula 10 - Atividade Prática de CSS',
            category: 'frontend',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'CSS'],
            desc: 'Exercício prático de aplicação de estilos e layout visual.',
            simulatedOutput: null
        },
        {
            id: 'Aula13-Atividade',
            folder: 'Aula13-Atividade',
            title: 'Aula 13 - Posicionamento e Layouts',
            category: 'frontend',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'CSS'],
            desc: 'Técnicas de alinhamento e organização de seções na página.',
            simulatedOutput: null
        },
        {
            id: 'Aula14-Exercicio',
            folder: 'Aula14-Exercicio',
            title: 'Aula 14 - Exercício de Flexbox & CSS',
            category: 'frontend',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'CSS'],
            desc: 'Construção de layouts modernos e flexíveis com Flexbox.',
            simulatedOutput: null
        },
        {
            id: 'Aula16',
            folder: 'Aula16',
            title: 'Aula 16 - Portfólio Pessoal de Eduardo',
            category: 'frontend',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'CSS'],
            desc: 'Página de apresentação profissional e biografia de Eduardo da Costa com design personalizado.',
            simulatedOutput: null
        },

        // --- FRONT-END: JAVASCRIPT & INTERATIVIDADE ---
        {
            id: 'Aula17',
            folder: 'Aula17',
            title: 'Aula 17 - Calculadora de Aprovação',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Primeira interação dinâmica com JavaScript: captura de nota via input e exibição no console.',
            simulatedOutput: null
        },
        {
            id: 'Aula18-Atividade',
            folder: 'Aula18-Atividade',
            title: 'Aula 18 - Condicionais e Funções',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Uso de if/else e validação lógica para tomada de decisões no código.',
            simulatedOutput: null
        },
        {
            id: 'Aula19-Atividade',
            folder: 'Aula19-Atividade',
            title: 'Aula 19 - Mensagem de Saudação',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Interatividade com o usuário: inserção de nome e exibição de saudação personalizada.',
            simulatedOutput: null
        },
        {
            id: 'Aula20-Atividade',
            folder: 'Aula20-Atividade',
            title: 'Aula 20 - Laços e Estruturas de Dados',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Exercícios práticos de repetição (loops) e manipulação de variáveis.',
            simulatedOutput: null
        },
        {
            id: 'Aula23-Atividade',
            folder: 'Aula23-Atividade',
            title: 'Aula 23 - Manipulação do DOM',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Modificando elementos HTML e reagindo a cliques e formulários com JavaScript.',
            simulatedOutput: null
        },
        {
            id: 'Aula25-Atividade',
            folder: 'Aula25-Atividade',
            title: 'Aula 25 - Funções e Eventos',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Gerenciamento de eventos de botão e funções no navegador.',
            simulatedOutput: null
        },
        {
            id: 'Aula26',
            folder: 'Aula26',
            title: 'Aula 26 - Jogo da Velha Interativo',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Jogo da Velha (Tic-Tac-Toe) totalmente funcional com tabuleiro interativo em CSS Grid e lógica de vitória em JavaScript.',
            simulatedOutput: null
        },
        {
            id: 'Aula27-Atividade',
            folder: 'Aula27-Atividade',
            title: 'Aula 27 - Manipulação Avançada de Elementos',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Criação e alteração dinâmica de classes e elementos da árvore DOM.',
            simulatedOutput: null
        },
        {
            id: 'Aula28',
            folder: 'Aula28',
            title: 'Aula 28 - Eventos de Teclado e Formulários',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Detecção de teclas pressionadas e tratamento de eventos.',
            simulatedOutput: null
        },
        {
            id: 'Aula28-Atividade',
            folder: 'Aula28-Atividade',
            title: 'Aula 28 - Validação de Formulário',
            category: 'javascript',
            htmlFile: 'index.html',
            files: ['index.html', 'style.css', 'script.js'],
            tags: ['HTML', 'JS'],
            desc: 'Validação de campos obrigatórios (E-mail, Telefone e Senha) com feedback visual imediato.',
            simulatedOutput: null
        },

        // --- BACK-END: NODE.JS & POO ---
        {
            id: 'Back-End_Aula01',
            folder: 'Back-End_Aula01',
            title: 'Back-End 01 - Classes e Herança (POO)',
            category: 'backend',
            htmlFile: null,
            files: ['script.js', 'style.css', 'index.html'],
            tags: ['Node.js', 'POO'],
            desc: 'Programação Orientada a Objetos em JavaScript: criação de classes Veiculo, Moto e Carro com herança e métodos.',
            simulatedOutput: 'Ford KA, 2008 (Sedan), 4\nYamaha FZ250, 2008, 250 Cilindradas.\nAcelerando...\nO modelo do carro é: KA'
        },
        {
            id: 'Back-End_Aula02-Atividade',
            folder: 'Back-End_Aula02-Atividade',
            title: 'Back-End 02 - Métodos e Atributos de Classe',
            category: 'backend',
            htmlFile: null,
            files: ['script.js', 'style.css', 'index.html'],
            tags: ['Node.js', 'POO'],
            desc: 'Aprofundamento em métodos construtores, atributos públicos e encapsulamento em JS.',
            simulatedOutput: 'Instâncias inicializadas com sucesso.\nMétodos de validação executados.'
        },
        {
            id: 'Back-End_Aula03',
            folder: 'Back-End_Aula03',
            title: 'Back-End 03 - Polimorfismo e Sobrescrita',
            category: 'backend',
            htmlFile: null,
            files: ['script.js', 'style.css', 'index.html'],
            tags: ['Node.js', 'POO'],
            desc: 'Comportamento polimórfico de métodos herdados em classes filhas no Node.js.',
            simulatedOutput: 'Execução de polimorfismo finalizada com sucesso.'
        },
        {
            id: 'Back-End_Aula04',
            folder: 'Back-End_Aula04',
            title: 'Back-End 04 - Módulos e Funções Utilitárias',
            category: 'backend',
            htmlFile: null,
            files: ['atividade.js', 'script.js', 'script02.js'],
            tags: ['Node.js'],
            desc: 'Divisão de código em múltiplos arquivos de script e funções reutilizáveis.',
            simulatedOutput: 'Execução de funções auxiliares e cálculos concluída.'
        },
        {
            id: 'Back-End_Aula05',
            folder: 'Back-End_Aula05',
            title: 'Back-End 05 - Primeiros Passos com Node.js',
            category: 'backend',
            htmlFile: null,
            files: ['OlaMundo.js', 'style.css', 'index.html'],
            tags: ['Node.js'],
            desc: 'O clássico Olá Mundo executado fora do navegador, no ambiente de servidor Node.js.',
            simulatedOutput: 'Olá, Mundo! Executando com Node.js v20.x'
        },
        {
            id: 'Back-End_Aula06',
            folder: 'Back-End_Aula06',
            title: 'Back-End 06 - Gerenciamento de Pacotes (NPM)',
            category: 'backend',
            htmlFile: null,
            files: ['OlaMundo.js', 'package.json'],
            tags: ['Node.js'],
            desc: 'Configuração do arquivo package.json e inicialização de um projeto Node com dependências.',
            simulatedOutput: 'Node.js Package Initialized.\nScripts configurados: { "start": "node OlaMundo.js" }'
        },
        {
            id: 'Back-End_Aula07',
            folder: 'Back-End_Aula07',
            title: 'Back-End 07 - Módulo Calculadora',
            category: 'backend',
            htmlFile: null,
            files: ['OlaMundo.js', 'package.json', 'modulo_calculadora/app.js', 'modulo_calculadora/soma.js'],
            tags: ['Node.js'],
            desc: 'Criação de módulos exportáveis (soma, subtração, multiplicação e divisão) com require e module.exports.',
            simulatedOutput: 'Soma (5,5) = 10\nMultiplicacao (5,5) = 25\nDivisao (5,5) = 1\nSubtracao (5-5) = 0'
        },
        {
            id: 'Back-End_Aula08',
            folder: 'Back-End_Aula08',
            title: 'Back-End 08 - API Web com Express & TypeScript',
            category: 'backend',
            htmlFile: null,
            files: ['app_expressjs/app.ts', 'app_expressjs/package.json'],
            tags: ['Node.js', 'TypeScript'],
            desc: 'Desenvolvimento de servidor web com rotas, controllers e tipagem estática via TypeScript.',
            simulatedOutput: 'Servidor Express criado e escutando na porta 3000...\nRotas mapeadas: /clientes, /conteudo, /backend'
        }
    ];

    // =========================================================================
    // 2. ESTADO DA APLICAÇÃO
    // =========================================================================
    let currentExercise = exercises[14]; // Padrão: Aula 26 (Jogo da Velha, muito visual e interativo)
    let currentFileName = 'index.html';
    let currentCodeRaw = '';

    // Cache de arquivos buscados para evitar requisições repetidas
    const fileCache = new Map();

    // Elementos DOM
    const explorerTree = document.getElementById('explorerTree');
    const exerciseSearchInput = document.getElementById('exerciseSearchInput');
    const tabsContainer = document.getElementById('tabsContainer');
    const codeContent = document.getElementById('codeContent');
    const lineNumbers = document.getElementById('lineNumbers');
    const codeDisplay = document.getElementById('codeDisplay');
    const bcFolder = document.getElementById('bcFolder');
    const bcFile = document.getElementById('bcFile');
    const previewIframe = document.getElementById('previewIframe');
    const backendTerminal = document.getElementById('backendTerminal');
    const termScriptName = document.getElementById('termScriptName');
    const termOutput = document.getElementById('termOutput');
    const browserUrlText = document.getElementById('browserUrlText');
    const browserExternalBtn = document.getElementById('browserExternalBtn');
    const browserReloadBtn = document.getElementById('browserReloadBtn');
    const previewContainer = document.getElementById('previewContainer');
    const statusActiveProject = document.getElementById('statusActiveProject');
    const statusLineCount = document.getElementById('statusLineCount');
    const statusLangName = document.getElementById('statusLangName');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const wrapCodeBtn = document.getElementById('wrapCodeBtn');
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const didacticModal = document.getElementById('didacticModal');
    const openHelpBtnTop = document.getElementById('openHelpBtnTop');
    const didacticModeBtn = document.getElementById('didacticModeBtn');
    const btnActivityInfo = document.getElementById('btnActivityInfo');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const understandModalBtn = document.getElementById('understandModalBtn');
    const btnActivityExplorer = document.getElementById('btnActivityExplorer');
    const btnActivitySearch = document.getElementById('btnActivitySearch');
    const vpDesktop = document.getElementById('vpDesktop');
    const vpTablet = document.getElementById('vpTablet');
    const vpMobile = document.getElementById('vpMobile');

    // =========================================================================
    // 3. ÍCONES E UTILITÁRIOS VISUAIS
    // =========================================================================
    function getFileIcon(filename) {
        if (filename.endsWith('.html')) return '📄';
        if (filename.endsWith('.css')) return '🎨';
        if (filename.endsWith('.js')) return '⚡';
        if (filename.endsWith('.ts')) return '🔷';
        if (filename.endsWith('.json')) return '⚙️';
        return '📑';
    }

    function getLanguageName(filename) {
        if (filename.endsWith('.html')) return 'HTML';
        if (filename.endsWith('.css')) return 'CSS';
        if (filename.endsWith('.js')) return 'JavaScript';
        if (filename.endsWith('.ts')) return 'TypeScript';
        if (filename.endsWith('.json')) return 'JSON';
        return 'Texto Puro';
    }

    // =========================================================================
    // 4. RENDERIZAR EXPLORADOR LATERAL COM CATEGORIAS
    // =========================================================================
    function renderExplorer(filterText = '') {
        explorerTree.innerHTML = '';
        const searchLower = filterText.toLowerCase().trim();

        const categories = [
            {
                key: 'frontend',
                title: 'Front-End (HTML & CSS)',
                icon: '📂'
            },
            {
                key: 'javascript',
                title: 'JavaScript & Interatividade',
                icon: '📂'
            },
            {
                key: 'backend',
                title: 'Back-End (Node.js & POO)',
                icon: '📂'
            }
        ];

        categories.forEach(cat => {
            const items = exercises.filter(ex => {
                const matchesCat = ex.category === cat.key;
                if (!matchesCat) return false;
                if (!searchLower) return true;
                return ex.title.toLowerCase().includes(searchLower) ||
                       ex.folder.toLowerCase().includes(searchLower) ||
                       ex.tags.some(t => t.toLowerCase().includes(searchLower));
            });

            if (items.length === 0) return;

            const sectionEl = document.createElement('div');
            sectionEl.className = 'tree-section';

            const headerEl = document.createElement('div');
            headerEl.className = 'tree-section-header';
            headerEl.innerHTML = `
                <span class="tree-chevron">▼</span>
                <span class="tree-cat-icon">${cat.icon}</span>
                <span>${cat.title} (${items.length})</span>
            `;

            headerEl.addEventListener('click', () => {
                sectionEl.classList.toggle('collapsed');
            });

            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'tree-items';

            items.forEach(ex => {
                const itemEl = document.createElement('div');
                itemEl.className = `tree-item ${currentExercise.id === ex.id ? 'active' : ''}`;
                itemEl.setAttribute('role', 'treeitem');
                itemEl.setAttribute('tabindex', '0');

                // Badge colorido por tecnologia
                const badgeClass = ex.category === 'backend' ? 'badge-node' :
                                   (ex.tags.includes('JS') ? 'badge-js' :
                                   (ex.tags.includes('CSS') ? 'badge-css' : 'badge-html'));

                itemEl.innerHTML = `
                    <div class="item-left">
                        <span class="item-icon">📁</span>
                        <span class="item-name" title="${ex.title}">${ex.title}</span>
                    </div>
                    <span class="item-badge ${badgeClass}">${ex.tags[0]}</span>
                `;

                itemEl.addEventListener('click', () => {
                    selectExercise(ex);
                });

                itemEl.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        selectExercise(ex);
                    }
                });

                itemsContainer.appendChild(itemEl);
            });

            sectionEl.appendChild(headerEl);
            sectionEl.appendChild(itemsContainer);
            explorerTree.appendChild(sectionEl);
        });
    }

    // =========================================================================
    // 5. SELEÇÃO DE EXERCÍCIO
    // =========================================================================
    function selectExercise(ex) {
        currentExercise = ex;

        // Atualizar classe ativa no explorer
        document.querySelectorAll('.tree-item').forEach(el => el.classList.remove('active'));
        const activeEl = Array.from(document.querySelectorAll('.tree-item')).find(el => {
            const nameEl = el.querySelector('.item-name');
            return nameEl && nameEl.textContent === ex.title;
        });
        if (activeEl) activeEl.classList.add('active');

        // Atualizar Status Bar
        statusActiveProject.textContent = `Projeto: ${ex.folder}`;

        // Selecionar arquivo padrão da aba (ex: index.html se existir, ou o primeiro da lista)
        const defaultTab = ex.htmlFile || ex.files[0] || 'index.html';
        renderTabs(defaultTab);
        loadFile(ex, defaultTab);
        updatePreview(ex);
    }

    // =========================================================================
    // 6. RENDERIZAÇÃO DAS ABAS (TABS)
    // =========================================================================
    function renderTabs(activeTabName) {
        tabsContainer.innerHTML = '';
        currentFileName = activeTabName;

        // Lista de abas a serem exibidas:
        // Se o exercício define arquivos específicos (ex: Back-End com app.ts, package.json), usa eles;
        // Caso contrário, usa as 3 clássicas: index.html, style.css, script.js
        const tabsToShow = (currentExercise.files && currentExercise.files.length > 0)
            ? currentExercise.files
            : ['index.html', 'style.css', 'script.js'];

        tabsToShow.forEach(fileName => {
            const tabEl = document.createElement('div');
            const isActive = fileName === activeTabName;
            tabEl.className = `editor-tab ${isActive ? 'active' : ''}`;
            tabEl.setAttribute('role', 'tab');
            tabEl.setAttribute('aria-selected', isActive ? 'true' : 'false');
            tabEl.setAttribute('tabindex', '0');

            const icon = getFileIcon(fileName);
            tabEl.innerHTML = `
                <span class="tab-icon">${icon}</span>
                <span class="tab-title">${fileName}</span>
                <span class="tab-close" title="Fechar aba">×</span>
            `;

            // Botão de fechar aba (×)
            const tabCloseBtn = tabEl.querySelector('.tab-close');
            if (tabCloseBtn) {
                tabCloseBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const allTabs = Array.from(tabsContainer.querySelectorAll('.editor-tab'));
                    if (allTabs.length > 1) {
                        tabEl.remove();
                        if (isActive) {
                            const nextTab = tabsContainer.querySelector('.editor-tab');
                            if (nextTab) nextTab.click();
                        }
                    }
                });
            }

            tabEl.addEventListener('click', () => {
                if (currentFileName !== fileName) {
                    renderTabs(fileName);
                    loadFile(currentExercise, fileName);
                }
            });

            tabEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    renderTabs(fileName);
                    loadFile(currentExercise, fileName);
                }
            });

            tabsContainer.appendChild(tabEl);
        });

        // Atualizar breadcrumbs
        bcFolder.textContent = currentExercise.folder;
        bcFile.textContent = activeTabName;
        statusLangName.textContent = getLanguageName(activeTabName);
    }

    // =========================================================================
    // 7. CARREGAMENTO DINÂMICO DE ARQUIVOS (FETCH API)
    // =========================================================================
    async function loadFile(exercise, fileName) {
        const filePath = `${exercise.folder}/${fileName}`;
        const cacheKey = filePath;

        // Indicador temporário
        codeContent.innerHTML = `<span class="tok-comment">// Carregando ${filePath}...</span>`;
        lineNumbers.innerHTML = '1';

        let contentText = null;

        // 1. Verificar cache em memória
        if (fileCache.has(cacheKey)) {
            contentText = fileCache.get(cacheKey);
        }

        // 2. Se não está em cache, tentar Fetch API (para quando estiver em HTTP/HTTPS/GitHub Pages)
        if (contentText === null) {
            try {
                const response = await fetch(filePath);
                if (response.ok) {
                    contentText = await response.text();
                }
            } catch (err) {
                // Fetch não disponível (ex: ao abrir diretamente como arquivo local file:// no navegador)
                console.log(`Fetch local não suportado para ${filePath} no protocolo atual, usando base embutida.`);
            }
        }

        // 3. Se o Fetch não funcionou ou falhou por CORS local (file://), buscar na base interna embutida
        if (contentText === null && typeof EMBEDDED_FILES !== 'undefined' && Object.prototype.hasOwnProperty.call(EMBEDDED_FILES, filePath)) {
            contentText = EMBEDDED_FILES[filePath];
        }

        // 4. Se encontramos o arquivo (seja por Fetch ou Base Embutida):
        if (contentText !== null) {
            fileCache.set(cacheKey, contentText);

            if (contentText.trim().length === 0) {
                contentText = `// -------------------------------------------------------------------------\n` +
                              `// ℹ️ ARQUIVO EM BRANCO\n` +
                              `// -------------------------------------------------------------------------\n` +
                              `// O arquivo "${fileName}" existe nesta pasta, mas está vazio (0 bytes).\n` +
                              `// Isso é comum nas primeiras aulas ou rascunhos de atividades.`;
            }

            displayCode(contentText, fileName);
            return;
        }

        // 5. Se o arquivo realmente não existe no exercício (ex: style.css na Aula 17):
        const friendlyNotFound = 
`// =========================================================================
// ℹ️ ARQUIVO NÃO ENCONTRADO NESTE EXERCÍCIO
// =========================================================================
// O exercício "${exercise.folder}" não utiliza o arquivo "${fileName}".
//
// Explicação didática:
// • Muitos exercícios focam exclusivamente em HTML sem necessidade de CSS.
// • Outros focam em pura lógica JavaScript ou possuem estilos inline.
// • Experimente clicar nas outras abas acima para ver o código existente!
// =========================================================================`;

        displayCode(friendlyNotFound, 'notfound.js');
    }

    // =========================================================================
    // 8. REALCE DE SINTAXE E NUMERAÇÃO DE LINHAS (Vanilla JS)
    // =========================================================================
    function displayCode(rawCode, fileName) {
        currentCodeRaw = rawCode || '';

        // 1. Gerar números de linhas
        const lines = currentCodeRaw.split('\n');
        const totalLines = lines.length;
        let lineNumsHtml = '';
        for (let i = 1; i <= totalLines; i++) {
            lineNumsHtml += `${i}<br>`;
        }
        lineNumbers.innerHTML = lineNumsHtml;
        statusLineCount.textContent = `Linhas: ${totalLines}`;

        // 2. Realce de sintaxe com fallback seguro (nunca deixa o código em branco)
        try {
            const highlighted = highlightSyntax(currentCodeRaw, fileName);
            codeContent.innerHTML = highlighted;
        } catch (err) {
            console.error('Falha no realce de sintaxe:', err);
            codeContent.textContent = currentCodeRaw;
        }
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function highlightSyntax(code, fileName) {
        const escaped = escapeHtml(code);

        // Se for HTML
        if (fileName.endsWith('.html')) {
            return escaped
                // Comentários HTML: &lt;!-- ... --&gt;
                .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-comment">$1</span>')
                // Doctype
                .replace(/(&lt;!DOCTYPE[\s\S]*?&gt;)/gi, '<span class="tok-keyword">$1</span>')
                // Tags de fechamento: &lt;/tag&gt;
                .replace(/(&lt;\/)([a-zA-Z0-9\-]+)(&gt;)/g, '$1<span class="tok-tag">$2</span>$3')
                // Tags de abertura: &lt;tag
                .replace(/(&lt;)([a-zA-Z0-9\-]+)/g, '$1<span class="tok-tag">$2</span>')
                // Atributos: class=, id=, etc.
                .replace(/([a-zA-Z0-9\-]+)(=)(&quot;.*?&quot;|&#039;.*?&#039;)/g, '<span class="tok-attr">$1</span>$2<span class="tok-string">$3</span>');
        }

        // Se for CSS
        if (fileName.endsWith('.css')) {
            return escaped
                // Comentários CSS: /* ... */
                .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>')
                // Strings
                .replace(/(&quot;.*?&quot;|&#039;.*?&#039;)/g, '<span class="tok-string">$1</span>')
                // Propriedades CSS (antes de :)
                .replace(/([a-zA-Z\-]+)(\s*:)/g, '<span class="tok-property">$1</span>$2');
        }

        // JavaScript / TypeScript / JSON / Fallback
        return escaped
            // Comentários de linha única // ...
            .replace(/(\/\/.*$)/gm, '<span class="tok-comment">$1</span>')
            // Comentários de bloco /* ... */
            .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>')
            // Strings com aspas duplas, simples ou crases
            .replace(/(&quot;.*?&quot;|&#039;.*?&#039;|`.*?`)/g, '<span class="tok-string">$1</span>')
            // Palavras-chave do JavaScript
            .replace(/\b(const|let|var|function|return|if|else|for|while|class|extends|new|import|export|from|default|typeof|instanceof|async|await|try|catch|finally|throw)\b/g, '<span class="tok-keyword">$1</span>')
            // Funções nativas e métodos
            .replace(/\b(console|document|window|Math|Array|Object|String|Number|JSON)\b/g, '<span class="tok-func">$1</span>')
            // Números
            .replace(/\b(\d+)\b/g, '<span class="tok-number">$1</span>');
    }

    // =========================================================================
    // 9. ATUALIZAÇÃO DO PAINEL DE PREVIEW (IFRAME OU TERMINAL BACK-END)
    // =========================================================================
    function updatePreview(exercise) {
        if (exercise.htmlFile) {
            // Modo Front-End: Exibir Iframe
            backendTerminal.style.display = 'none';
            previewIframe.style.display = 'block';

            const iframeUrl = `${exercise.folder}/${exercise.htmlFile}`;
            previewIframe.src = iframeUrl;

            // Atualizar barra de endereço simulada
            browserUrlText.textContent = `http://localhost:3000/${exercise.folder}/${exercise.htmlFile}`;
            browserExternalBtn.href = iframeUrl;
            browserExternalBtn.style.pointerEvents = 'auto';
            browserExternalBtn.style.opacity = '1';
        } else {
            // Modo Back-End: Exibir Terminal Integrado
            previewIframe.style.display = 'none';
            backendTerminal.style.display = 'flex';

            termScriptName.textContent = exercise.files[0] || 'script.js';
            termOutput.textContent = exercise.simulatedOutput || 'Executando script Node.js... Concluído com código 0.';

            browserUrlText.textContent = `terminal://node/${exercise.folder}`;
            browserExternalBtn.href = '#';
            browserExternalBtn.style.pointerEvents = 'none';
            browserExternalBtn.style.opacity = '0.5';
        }
    }

    // =========================================================================
    // 10. INTERAÇÕES E EVENTOS
    // =========================================================================

    // Busca / Filtro no Explorer
    exerciseSearchInput.addEventListener('input', (e) => {
        renderExplorer(e.target.value);
    });

    // Copiar código do editor
    copyCodeBtn.addEventListener('click', async () => {
        if (!currentCodeRaw) return;
        try {
            await navigator.clipboard.writeText(currentCodeRaw);
            const originalText = copyCodeBtn.querySelector('span').textContent;
            copyCodeBtn.querySelector('span').textContent = 'Copiado!';
            copyCodeBtn.style.background = '#2e7d32';
            setTimeout(() => {
                copyCodeBtn.querySelector('span').textContent = originalText;
                copyCodeBtn.style.background = '';
            }, 2000);
        } catch (err) {
            alert('Não foi possível copiar automaticamente.');
        }
    });

    // Alternar quebra de linhas (Word Wrap)
    wrapCodeBtn.addEventListener('click', () => {
        codeDisplay.classList.toggle('wrap-active');
        wrapCodeBtn.classList.toggle('active');
        const isActive = codeDisplay.classList.contains('wrap-active');
        wrapCodeBtn.querySelector('span').textContent = isActive ? 'Sem Quebra' : 'Quebrar Linhas';
    });

    // Recarregar o Iframe
    browserReloadBtn.addEventListener('click', () => {
        if (currentExercise.htmlFile) {
            const timestamp = Date.now();
            previewIframe.src = `${currentExercise.folder}/${currentExercise.htmlFile}?t=${timestamp}`;
        }
    });

    // Controles de Viewport (Desktop, Tablet, Mobile)
    vpDesktop.addEventListener('click', () => {
        setActiveViewport(vpDesktop, '');
    });

    vpTablet.addEventListener('click', () => {
        setActiveViewport(vpTablet, 'viewport-tablet');
    });

    vpMobile.addEventListener('click', () => {
        setActiveViewport(vpMobile, 'viewport-mobile');
    });

    function setActiveViewport(buttonEl, className) {
        [vpDesktop, vpTablet, vpMobile].forEach(btn => btn.classList.remove('active'));
        buttonEl.classList.add('active');
        previewContainer.className = `preview-frame-container ${className}`;
    }

    // Alternar Sidebar (Recolher / Expandir)
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const isCollapsed = sidebar.classList.contains('collapsed');
        toggleSidebarBtn.title = isCollapsed ? 'Expandir Explorador' : 'Recolher Explorador';
    });

    // Botões da Activity Bar
    btnActivityExplorer.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        btnActivityExplorer.classList.toggle('active', !sidebar.classList.contains('collapsed'));
    });

    btnActivitySearch.addEventListener('click', () => {
        sidebar.classList.remove('collapsed');
        exerciseSearchInput.focus();
        exerciseSearchInput.select();
    });

    // Modal Didático
    function openModal() {
        if (typeof didacticModal.showModal === 'function') {
            didacticModal.showModal();
        } else {
            didacticModal.setAttribute('open', '');
        }
    }

    function closeModal() {
        if (typeof didacticModal.close === 'function') {
            didacticModal.close();
        } else {
            didacticModal.removeAttribute('open');
        }
    }

    [openHelpBtnTop, didacticModeBtn, btnActivityInfo].forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal);
    understandModalBtn.addEventListener('click', closeModal);

    // Fechar ao clicar no backdrop do dialog
    didacticModal.addEventListener('click', (e) => {
        if (e.target === didacticModal) {
            closeModal();
        }
    });

    // Atalhos de teclado úteis no estilo VS Code
    document.addEventListener('keydown', (e) => {
        // Fechar modal com Escape
        if (e.key === 'Escape' && didacticModal.hasAttribute('open')) {
            closeModal();
        }
        // Ctrl+B ou Cmd+B: Ocultar / Exibir Explorador Lateral (como no VS Code real!)
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
            e.preventDefault();
            toggleSidebarBtn.click();
        }
    });

    // =========================================================================
    // 11. INICIALIZAÇÃO
    // =========================================================================
    renderExplorer();
    selectExercise(currentExercise);
});
