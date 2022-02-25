# NodeMailer

<h1>EM DESENVOLVIMENTO</h1>

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
  <p><code>sudo apt install nodejs</code></p>
  <br>
  <li>NPM</li>
  <p><code>sudo apt install npm</code></p>
  <br>
  <li>Express</li>
  <p><code>npm install express</code></p>
  <br>
  <li>Mongoose</li>
  <p><code>npm install mongoose</code></p>
  <br>
</ul>

<h2>Sobre</h2>

<p>Sistema de cadastro e envio de email.</p>

<p>Na aba de cadastro temos 2 Input para informações do cadastramento do usuario, 2 Labels para esses input e 1 botão de envio, quando o usuario insere suas informações os dados são enviados ao back-end que faz o cadastramento do usuario no banco de dados MongoDB utilizando mongoose pela rota /api/cadastro</p>

<p>Apos o cadastramento um email é enviado para o email cadastrado.</p>

<h2>MODO DE USO</h2>

<h3>GIT</h3>

<p>FAÇA O DOWNLOADS DO REPOSITORIO OU USE:<br><code>git clone git@github.com:joaov1ct0r/node-mailer.git</code></p>

<h3>MongoDB</h3>

<p>INICIE O SEU SERVIDOR MYSQL COM O COMANDO:<br><code>sudo systemctl start mongod</code></p>

<h3>SERVER</h3>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA INICIE O SERVIDOR WEB NO SEU TERMINAL COM O COMANDO:<br><code>node src/index.js</code></p>

<p>APOS ISSO ABRA O NAVEGADOR E ENTRE COM A SEGUINTE URL:<br><code>http://localhost:3000/</code></p>

<p>A PAGINA PARA O CADASTRO SERA ABERTA E ESTARA PRONTA PARA CADASTRO</p>

<h2>Picture</h2>
