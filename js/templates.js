const templates = {
  home: `
    <section>
      <h2>Missão</h2>
      <p>Promover ensino e projetos sociais nas comunidades.</p>

      <h2>Visão</h2>
      <p>Ser referência em transformação social no Brasil.</p>

      <h2>Valores</h2>
      <ul>
        <li>Transparência</li>
        <li>Empatia</li>
        <li>Compromisso</li>
      </ul>
    </section>

    <section>
      <h2>Projetos em Destaque</h2>
      <article>
        <h3>Projeto Criando Educação</h3>
        <p>Aulas de reforço para crianças e adolescentes.</p>
      </article>
      <article>
        <h3>Projeto Mãos que Ajudam</h3>
        <p>Capacitação profissional para jovens entre 16 e 23 anos.</p>
      </article>
    </section>

    <section>
      <h2>Participe!</h2>
      <p>Seja voluntário ou faça uma doação para transformar vidas.</p>
      <a href="#voluntariado">Quero ser voluntário</a>
      <a href="#doacoes">Quero doar</a>
    </section>
  `,

  sobre: `
    <section>
      <h2>Sobre a Organização</h2>
      <p>A ONG Biblioteca de Ouro atua há mais de 10 anos promovendo educação, cultura e inclusão social em comunidades carentes.</p>
      <p>Nosso trabalho é sustentado por voluntários dedicados e doações que tornam nossos projetos possíveis.</p>
    </section>
  `,

  projetos: `
    <section>
      <h2>Projetos</h2>
      <article>
        <h3>Projeto Criando Educação</h3>
        <p>Oferece aulas de reforço escolar para crianças e adolescentes em situação de vulnerabilidade.</p>
      </article>
      <article>
        <h3>Projeto Mãos que Ajudam</h3>
        <p>Capacitação profissional para jovens entre 16 e 23 anos, com foco em empregabilidade.</p>
      </article>
      <article>
        <h3>Projeto Leitura Livre</h3>
        <p>Distribuição de livros e rodas de leitura em praças públicas.</p>
      </article>
    </section>
  `,

  voluntariado: `
    <section>
      <h2>Voluntariado</h2>
      <p>Você pode fazer parte da transformação social sendo voluntário em nossos projetos.</p>
      <form id="userForm">
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <button type="submit">Quero ser voluntário</button>
      </form>
      <div id="formMessage"></div>
    </section>
  `,

  doacoes: `
    <section>
      <h2>Doações</h2>
      <p>Ajude a manter nossos projetos ativos com sua contribuição.</p>
      <ul>
        <li>Pix: ong@bibliotecadeouro.org</li>
        <li>Banco Social - Agência 0001 - Conta 123456-7</li>
      </ul>
      <p>Você também pode doar livros, materiais escolares e equipamentos.</p>
    </section>
  `,

  contato: `
    <section>
      <h2>Fale Conosco</h2>
      <p>Envie sua dúvida, sugestão ou mensagem de apoio.</p>
      <form id="userForm">
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div id="formMessage"></div>
    </section>
  `
};