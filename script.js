/* =====================================================
   DADOS EDITÁVEIS — altere tudo aqui, sem mexer no resto
   ===================================================== */
const DATA = {
  // Contato e redes. Deixe "" para ocultar o item.
  contact: {
    whatsapp: "5511994536354",             // EDITE: DDI + DDD + número, só dígitos
    email: "davigracianosouza17@gmail.com",        // EDITE
    github: "https://github.com/Davi-cyber-17",        // EDITE
    instagram: "",                        // EDITE (opcional)
    linkedin: "https://www.linkedin.com/in/davi-graciano-de-souza-a0008a3ab?utm_source=share_via&utm_content=profile&utm_medium=member_android"                          // EDITE (opcional)
  },
  photo: "img/favicon.png",                              // EDITE: caminho da foto, ex.: "img/davi.jpg"

  // Valores DEMONSTRATIVOS — troque pelos reais
  stats: [
    { n: "10", l: "Projetos realizados" }, { n: "15", l: "Tecnologias" },
    { n: "5", l: "Certificados" }, { n: "02", l: "Anos de experiência" }
  ],

  // Habilidades: adicione ou remova linhas
  /* Habilidades agrupadas. g = título do grupo, ico = símbolo do cartão, items = tecnologias.
     "main" destaca (em dourado) a tecnologia principal do grupo. */
  skills: [
    { g: "Linguagens",     ico: "{ }", items: ["Java", "Python", "JavaScript"], main: "Java" },
    { g: "Front-end",      ico: "</>", items: ["HTML5", "CSS3", "JavaScript"] },
    { g: "Back-end",       ico: "=>",  items: ["Java", "Python", "APIs"] },
    { g: "Banco de dados", ico: "DB",  items: ["SQL", "MySQL"] },
    { g: "Ferramentas",    ico: "#",   items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Office 365", "Visual Paradigm"] }
  ],

  /* Sobre mim: cartões de resposta rápida e trajetória.
     CONFIRME as datas e os textos (2024, 2025, 2026...) e ajuste como quiser.
     Em "quick", use "a" para um texto ou "pills" para uma lista de tecnologias. */
  about: {
    quick: [
      { k: "Quem sou", a: "Davi Graciano de Souza, desenvolvedor full-stack." },
      { k: "O que estudo", a: "Programação, com foco em desenvolvimento full-stack" },
      { k: "O que desenvolvo", a: "Sites, landing pages, sistemas web e projetos com IA." },
      { k: "Tecnologias", pills: ["Java", "Python", "JavaScript", "HTML5", "CSS3"] },
      { k: "O que procuro", a: "Oportunidades profissionais e novos projetos." }
    ],
    path: [
      { y: "2024", t: "Início dos estudos em tecnologia" },
      { y: "2025", t: "Conhecendo o Office 365" },
      { y: "2026", t: "Priticando a programação Full-Stack" },
      { y: "Atualmente", t: "Buscando oportunidades profissionais e projetos", now: true }
    ]
  },

  // Opções do formulário de orçamento
  form: {
    tipos: ["Site institucional", "Landing page", "Sistema web", "API ou back-end", "Melhoria em site existente", "Outro"],
    prazos: ["Urgente (até 2 semanas)", "Até 1 mês", "1 a 3 meses", "Sem pressa"],
    dicas: {
      "Site institucional": "Ex.: qual é a empresa, o que ela faz e quais páginas você precisa (início, serviços, contato...).",
      "Landing page": "Ex.: o que você quer divulgar e qual ação o visitante deve fazer (chamar no WhatsApp, comprar...).",
      "Sistema web": "Ex.: quem vai usar, o que precisa cadastrar ou controlar e se terá login de usuários.",
      "API ou back-end": "Ex.: com o que precisa se integrar, quais dados e quais regras de negócio.",
      "Melhoria em site existente": "Ex.: endereço do site e o que precisa ser corrigido ou melhorado.",
      "Outro": "Conte o que você precisa e qual problema quer resolver."
    }
  },

  /* Assistente virtual: perguntas sugeridas e respostas prontas (edite os textos à vontade).
     q = exemplo de pergunta (só para você se organizar) | keys = palavras que o visitante pode digitar (sem acento, minúsculas)
     a = resposta | links = botões na resposta. Use "@whatsapp" e "@email" para puxar de DATA.contact.
     O visitante só vê o campo para digitar; as respostas aparecem conforme as palavras-chave. */
  assistant: {
    hello: "Olá! Me chamo Orion, sou o assistente virtual do Davi. Pergunte sobre tecnologias, projetos, serviços, valores ou contato.",
    fallback: {
      a: "Não tenho uma resposta para essa pergunta. Tente perguntar sobre tecnologias, projetos, serviços ou contato, ou fale direto com o Davi:",
      links: [{ t: "Chamar no WhatsApp", href: "@whatsapp" }, { t: "Enviar e-mail", href: "@email" }]
    },
    faq: [
      { q: "Quais tecnologias ele utiliza?",
        keys: ["tecnolog", "linguagem", "java", "python", "stack", "habilidad", "ferramenta", "framework", "banco de dados", "front", "back", "html", "css", "sql"],
        a: "O Davi trabalha principalmente com Java e também tem experiência com Python e JavaScript.\n\n• Front-end: HTML5, CSS3 e JavaScript\n• Back-end: Java, Python e APIs\n• Banco de dados: SQL e MySQL\n• Ferramentas: Git, GitHub, VS Code, Visual Paradigm, Intellij IDEA e Office 365",
        links: [{ t: "Ver habilidades", href: "#habilidades" }] },
      { q: "Quais projetos ele já fez?",
        keys: ["projeto", "portfolio", "portifolio", "trabalhos", "ja fez", "fez ", "feito", "exemplo", "cases", "demo"],
        a: "Alguns projetos do Davi:\n\n• R&F Soluções em Obras: site institucional de uma construtora, com serviços, projetos executados e formulário de contato.\n• MindSide: versão demonstrativa de um secretário digital, com tarefas, agenda, objetivos e histórico.",
        links: [{ t: "Ver R&F Soluções em Obras", href: "https://rfsolucoesemobras.gt.tc/?i=1" }, { t: "Ver MindSide", href: "https://mindside-demo.gt.tc/?i=1" }, { t: "Todos os projetos", href: "#projetos" }] },
      { q: "Ele desenvolve sites?",
        keys: ["site", "pagina", "landing", "sistema", "desenvolve", "cria ", "criar", "faz ", "fazer", "servico", "aplicativo", "loja", "web"],
        a: "Sim! O Davi cria sites institucionais, landing pages, sistemas web e back-end (APIs), além de melhorias e manutenção em sites que já existem. Tudo com layout responsivo, que funciona bem no celular.",
        links: [{ t: "Ver serviços", href: "#servicos" }, { t: "Solicitar orçamento", href: "#orcamento" }] },
      { q: "Como entrar em contato?",
        keys: ["contato", "contatar", "whatsapp", "zap", "email", "e mail", "mail", "telefone", "falar", "chamar", "conversar", "onde encontro", "linkedin", "github", "instagram", "redes"],
        a: "Você pode falar com o Davi pelo WhatsApp, por e-mail ou preenchendo o formulário de orçamento. Escolha o que for mais fácil:",
        links: [{ t: "WhatsApp", href: "@whatsapp" }, { t: "E-mail", href: "@email" }, { t: "Formulário de orçamento", href: "#orcamento" }] },
      { q: "Quanto custa um site?",
        keys: ["preco", "custo", "custa", "valor", "quanto", "cobra", "orcamento", "barato", "caro", "pagamento", "investimento"],
        a: "Os valores são definidos depois de analisar o projeto, porque cada site ou sistema tem necessidades diferentes. Conte o que você precisa no formulário e o Davi responde com uma proposta.",
        links: [{ t: "Solicitar orçamento", href: "#orcamento" }] },
      { q: "Como funciona o processo?",
        keys: ["processo", "funciona", "etapa", "passo", "como funciona", "prazo", "demora", "tempo", "entrega"],
        a: "São 6 etapas:\n\n1. Contato: você fala com o Davi\n2. Conversa: você explica o projeto\n3. Análise: ele analisa as necessidades\n4. Proposta: define o projeto e o orçamento (o prazo é combinado aqui)\n5. Desenvolvimento: ele constrói o site\n6. Entrega: entrega e faz os ajustes",
        links: [{ t: "Ver como funciona", href: "#como-funciona" }] },
      { q: "Ele está disponível para trabalhar?",
        keys: ["disponivel", "disponibilidade", "contrat", "vaga", "oportunidade", "freelanc", "freela", "emprego", "trabalhar com", "procura", "estagio", "recrut"],
        a: "Sim. O Davi está buscando oportunidades profissionais e novos projetos. Se quiser conversar, chame no WhatsApp ou envie um e-mail.",
        links: [{ t: "WhatsApp", href: "@whatsapp" }, { t: "E-mail", href: "@email" }] },
      { q: "Quem é o Davi?",
        keys: ["quem", "sobre", "apresent", "formacao", "estuda", "estudo", "experiencia", "conhece", "especialidade", "principal"],
        a: "O Davi Graciano de Souza é desenvolvedor full-stack. Sua linguagem principal é Java, e ele também trabalha com Python e JavaScript. Gosta de transformar ideias em sistemas e páginas organizados, rápidos e fáceis de manter.",
        links: [{ t: "Conhecer mais", href: "#sobre" }] },
      { q: "Onde baixo o currículo?",
        keys: ["curriculo", "cv", "resumo", "baixar", "download"],
        a: "O currículo do Davi está em PDF, no botão \"Baixar currículo\" da seção Sobre.",
        links: [{ t: "Ir para a seção Sobre", href: "#sobre" }] },
      { keys: ["oi ", "ola", "bom dia", "boa tarde", "boa noite", "e ai", "hello", "hey ", "opa", "hi"],
        a: "Olá! Como posso ajudar? Pergunte sobre tecnologias, projetos, serviços, valores ou contato." },
      { keys: ["obrigad", "valeu", "agradec", "brigad", "vlw"],
        a: "Por nada! Se precisar de mais alguma coisa, é só perguntar." }
    ]
  },

  // Categorias dos filtros de projetos
  categories: ["Todos", "Sites", "Sistemas", "Projetos pessoais", "Outros"],

  // Projetos (EXEMPLOS). image: caminho da capa; se vazio, usa capa gerada.
  // demo/repo: deixe "" se não houver (botão fica desativado ou oculto).
  projects: [
    { name: "R&F Soluções em Obras", cat: "Sites", desc: "Site institucional de uma construtora de obras e reformas residenciais e comerciais, com serviços, projetos executados, liderança e formulário de contato.", tech: ["HTML5", "CSS3", "JavaScript"], image: "img/capa-rf.png", demo: "https://rfsolucoesemobras.gt.tc/?i=1", repo: "", real: true },
    { name: "MindSide", cat: "Projetos pessoais", desc: "Versão demonstrativa de um secretário digital com tarefas, compromissos, agenda, objetivos e histórico. Detecta conflitos de horário e o assistente interpreta texto livre, mas só altera algo depois da sua aprovação. Roda no navegador, com os dados salvos no próprio dispositivo.", tech: ["HTML5", "CSS3", "JavaScript", "AI"], image: "img/capa-mindside.jpg", demo: "https://davi-cyber-17.github.io/MindSide/", repo: "", real: true },
    { name: "Nexo FX", cat: "Sistemas", desc: "Plataforma que permite acompanhar cotações de moedas, realizar conversões, visualizar gráficos e monitorar as variações do mercado cambial.", tech: ["HTML5", "CSS3", "JavaScript"], image: "img/capa-nexofx.png", demo: "https://davi-cyber-17.github.io/NexoFX/", repo: "", real: true  },
    { name: "PizzaByte", cat: "Outros", desc: "Sistema demonstrativo de pedidos online para pizzarias, com cardápio interativo, personalização de pizzas e ferramentas administrativas para gerenciar produtos e pedidos.", tech: ["HTML5", "CSS3", "JavaScript", "Python"], image: "img/capa-pizzabyte.png", demo: "https://davi-cyber-17.github.io/PizzaByte/", repo: "" }
  ],

  // Experiências (EXEMPLOS)
  experiences: [
    { title: "Título da experiência", org: "Empresa ou projeto", period: "Período", desc: "Descrição de exemplo. Substitua pelos dados reais.", tasks: ["Atividade principal 1", "Atividade principal 2"] },
    { title: "Outra experiência", org: "Empresa ou projeto", period: "Período", desc: "Descrição de exemplo.", tasks: ["Atividade principal 1", "Atividade principal 2"] }
  ],

  // Certificados (EXEMPLOS). image: caminho da imagem/PDF convertido em imagem.
  certs: [
    { name: "Certificado de exemplo 1", inst: "Instituição", date: "Data", area: "Desenvolvimento Web", image: "" },
    { name: "Certificado de exemplo 2", inst: "Instituição", date: "Data", area: "Programação", image: "" }
  ],

  services: [
    ["Criação de Sites", "Desenvolvimento de sites modernos, responsivos e personalizados."],
    ["Sites Institucionais", "Sites profissionais para empresas, profissionais e projetos."],
    ["Landing Pages", "Páginas focadas em apresentação, divulgação e conversão."],
    ["Sistemas Web e Back-end", "Desenvolvimento de sistemas, APIs e aplicações web completas, do front-end ao back-end."],
    ["Manutenção e Melhorias", "Atualizações, correções e melhorias em sites existentes."]
  ],

  steps: [
    ["Contato", "Você entra em contato."], ["Conversa", "Você explica o projeto."],
    ["Análise", "Analiso as necessidades."], ["Proposta", "Defino o projeto e o orçamento."],
    ["Desenvolvimento", "Construo o site."], ["Entrega", "Entrego e faço os ajustes."]
  ]
};

/* =====================================================
   CÓDIGO (não precisa editar)
   ===================================================== */
/* Atalhos: $ encontra um elemento na página; esc protege textos contra HTML indevido (segurança). */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const C = DATA.contact;

/* Ícones simples (SVG) */
const ICONS = {
  whatsapp: '<path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  github: '<path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5a3 3 0 0 0-1-2.5c3.300-.4 6.500-1.600 6.500-7a5 5 0 0 0-1.400-3.500 4.600 4.600 0 0 0-.1-3.500s-1.200-.4-3.900 1.400a13 13 0 0 0-7 0C6.400 2.100 5.200 2.500 5.200 2.500a4.600 4.600 0 0 0-.1 3.500A5 5 0 0 0 3.700 9.500c0 5.400 3.200 6.600 6.500 7a3 3 0 0 0-1 2.500V21"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',
  linkedin: '<path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h4v2c.8-1.400 2.300-2.300 4-2.300 3 0 4 2 4 5V21h-4v-6c0-1.500-.6-2.400-2-2.400s-2 1-2 2.400V21h-4z"/>'
};
const icon = k => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;

/* Capa gerada para projetos sem imagem */
/* Cria a capa (imagem SVG) usada quando um projeto não tem imagem própria. */
function cover(name, i) {
  const hues = [215, 160, 265, 30];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" fill="hsl(${hues[i % 4]},35%,22%)"/><rect x="24" y="24" width="272" height="16" rx="8" fill="#fff" opacity=".18"/><rect x="24" y="60" width="120" height="116" rx="8" fill="#fff" opacity=".12"/><rect x="156" y="60" width="140" height="50" rx="8" fill="#fff" opacity=".12"/><rect x="156" y="122" width="140" height="54" rx="8" fill="#fff" opacity=".08"/></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

/* Links de contato */
/* Monta a lista de contatos (só os preenchidos em DATA.contact) e desenha na seção Contato e no rodapé. */
const wa = C.whatsapp ? `https://wa.me/${C.whatsapp}` : "";
const links = [
  ["whatsapp", "WhatsApp", wa], ["email", "E-mail", C.email ? `mailto:${C.email}` : ""],
  ["github", "GitHub", C.github], ["instagram", "Instagram", C.instagram], ["linkedin", "LinkedIn", C.linkedin]
].filter(l => l[2]);
const ext = h => h.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
$("#contacts").innerHTML = links.map(([k, n, h]) => `<li><a class="card" href="${esc(h)}"${ext(h)}>${icon(k)}<span>${n}</span></a></li>`).join("");
$("#socials").innerHTML = links.filter(l => l[0] !== "email").map(([k, n, h]) => `<li><a href="${esc(h)}"${ext(h)}>${n}</a></li>`).join("");

/* Foto, indicadores, habilidades */
$("#photo").innerHTML = DATA.photo ? `<img src="${esc(DATA.photo)}" alt="Davi Graciano de Souza">` : "DG";
$("#stats").innerHTML = DATA.stats.map(s => `<li><b>${esc(s.n)}</b><span>${esc(s.l)}</span></li>`).join("");
/* Sobre mim: cartões rápidos e trajetória */
$("#quick").innerHTML = DATA.about.quick.map(q => `<li class="card quick-i reveal"><span class="q-k">${esc(q.k)}</span>${q.pills ? `<div class="pills">${q.pills.map(p => `<span class="pill">${esc(p)}</span>`).join("")}</div>` : `<p class="q-a">${esc(q.a)}</p>`}</li>`).join("");
$("#path").innerHTML = DATA.about.path.map(p => `<li class="reveal${p.now ? " now" : ""}"><span class="p-y">${esc(p.y)}</span><p>${esc(p.t)}</p></li>`).join("");

$("#skills").innerHTML = DATA.skills.map(g => `<li class="card skill-group">
  <div class="sg-head"><span class="sg-ico" aria-hidden="true">${esc(g.ico)}</span><h3>${esc(g.g)}</h3><span class="sg-n">${g.items.length}</span></div>
  <div class="pills">${g.items.map((s, k) => `<span class="pill${s === g.main ? " main" : ""}" style="--k:${k}"${s === g.main ? ' title="Tecnologia principal"' : ""}>${esc(s)}</span>`).join("")}</div>
</li>`).join("");
/* Projetos + filtros */
/* Desenha os cards da seção Projetos a partir de DATA.projects (botões sem link ficam desativados). */
$("#projects").innerHTML = DATA.projects.map((p, i) => {
  const btn = (label, url, ghost) => `<a class="btn ${ghost ? "btn-ghost" : ""}" href="${url ? esc(url) : "#projetos"}"${url ? ext(url) : ' aria-disabled="true" tabindex="-1"'}>${label}</a>`;
  return `<article class="card project reveal" data-cat="${esc(p.cat)}">
    <img src="${esc(p.image || cover(p.name, i))}" alt="Capa do projeto ${esc(p.name)}" loading="lazy" width="320" height="200">
    <div class="pb">${p.real ? "" : '<span class="badge">Exemplo editável</span>'}<h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
    <div class="chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="actions">${btn("Ver projeto", p.demo)}${p.repo ? btn("Código", p.repo, true) : ""}</div></div></article>`;
}).join("");

/* Cria os botões de filtro e mostra/esconde os projetos conforme a categoria clicada. */
$("#filters").innerHTML = DATA.categories.map((c, i) => `<button type="button" aria-pressed="${i === 0}" data-f="${esc(c)}">${esc(c)}</button>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  document.querySelectorAll(".project").forEach(p => p.classList.toggle("hide", b.dataset.f !== "Todos" && p.dataset.cat !== b.dataset.f));
});

/* Experiências, certificados, serviços, etapas */
/* Desenha as seções Experiências, Certificados, Serviços e Como funciona a partir dos dados no topo do arquivo. */
$("#timeline").innerHTML = DATA.experiences.map(x => `<li class="card reveal"><time>${esc(x.period)}</time><h3>${esc(x.title)}</h3><p class="org">${esc(x.org)}</p><p>${esc(x.desc)}</p><ul>${x.tasks.map(t => `<li>${esc(t)}</li>`).join("")}</ul></li>`).join("");
$("#certs").innerHTML = DATA.certs.map((c, i) => `<article class="card reveal"><h3>${esc(c.name)}</h3><p class="meta">${esc(c.inst)} · ${esc(c.date)} · ${esc(c.area)}</p><button class="btn btn-ghost" data-cert="${i}" type="button">Ver certificado</button></article>`).join("");
$("#services").innerHTML = DATA.services.map(s => `<article class="card reveal"><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></article>`).join("");
$("#steps").innerHTML = DATA.steps.map(s => `<li class="card reveal"><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></li>`).join("");

/* Modal de certificados */
/* Modal (janela) que mostra o certificado sem sair da página. Fecha com o X, clique fora ou tecla Esc. */
const modal = $("#modal"); let lastFocus;
/* Abre o modal com o certificado escolhido e leva o foco do teclado para ele (acessibilidade). */
function openModal(i) {
  const c = DATA.certs[i]; lastFocus = document.activeElement;
  $("#modal-title").textContent = c.name;
  $("#modal-body").innerHTML = c.image ? `<img src="${esc(c.image)}" alt="Certificado: ${esc(c.name)}">` : `<div class="ph">Imagem do certificado ainda não adicionada.</div>`;
  modal.hidden = false; $("#modal-x").focus();
}
/* Fecha o modal e devolve o foco ao botão que o abriu. */
function closeModal() { modal.hidden = true; if (lastFocus) lastFocus.focus(); }
$("#certs").addEventListener("click", e => { const b = e.target.closest("[data-cert]"); if (b) openModal(+b.dataset.cert); });
$("#modal-x").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* Menu mobile */
/* Abre/fecha o menu no celular: fecha ao clicar num link, fora do menu, com Esc ou ao voltar para tela larga; trava a rolagem do fundo enquanto aberto. */
const burger = $("#burger"), menu = $("#menu");
const setMenu = o => {
  menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o);
  burger.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); document.body.classList.toggle("menu-open", o);
};
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("click", e => { if (menu.classList.contains("open") && !e.target.closest("#menu,#burger")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); burger.focus(); } });
matchMedia("(min-width:1001px)").addEventListener("change", e => { if (e.matches) setMenu(false); });

/* Seção atual no menu + animação ao entrar na tela */
/* Destaca no menu a seção que está na tela (spy) e faz os blocos aparecerem suavemente ao rolar (reveal). */
const navLinks = [...menu.querySelectorAll("a:not(.btn)")];
const spy = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
const rev = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } }), { threshold: .1 });
document.querySelectorAll(".reveal").forEach(el => rev.observe(el));

/* Voltar ao topo */
/* Mostra o botão de voltar ao topo depois de rolar 600px e sobe suavemente ao clicar. */
const toTop = $("#totop");
addEventListener("scroll", () => { toTop.hidden = scrollY < 600; }, { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* Formulário inteligente: opções em botões, contato único (e-mail ou WhatsApp, com máscara),
   dica de descrição conforme o tipo de projeto e envio por WhatsApp (ou e-mail).
   Para usar um backend/serviço de formulário no futuro, envie `data` com fetch() dentro de sendForm(). */
const form = $("#form"), fb = $("#feedback"), contatoEl = form.elements.contato, hint = $("#contato-hint"), descEl = form.elements.descricao;
const descPadrao = descEl.placeholder;
const radios = (name, list) => list.map(o => `<label class="opt"><input type="radio" name="${name}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("");
$("#tipos").innerHTML = radios("tipo", DATA.form.tipos);
$("#prazos").innerHTML = radios("prazo", DATA.form.prazos);

const digits = v => v.replace(/\D/g, "");
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isPhone = v => { const n = digits(v).length; return n >= 10 && n <= 13; };
const kindOf = v => /[a-zA-Z@]/.test(v) ? "email" : (digits(v) ? "whatsapp" : "");
/* Formata (00) 00000-0000 enquanto a pessoa digita; números com "+" (internacionais) ficam como digitados. */
const maskPhone = v => {
  if (v.trim().startsWith("+")) return v;
  const d = digits(v).slice(0, 11); if (!d) return "";
  if (d.length <= 2) return `(${d}`;
  const b = d.length > 10 ? d.slice(2, 7) : d.slice(2, 6), c = d.length > 10 ? d.slice(7) : d.slice(6);
  return `(${d.slice(0, 2)}) ${b}` + (c ? `-${c}` : "");
};
const setHint = () => {
  const k = kindOf(contatoEl.value);
  hint.innerHTML = k === "email" ? "Vou responder por <b>e-mail</b>." : k === "whatsapp" ? "Vou responder por <b>WhatsApp</b>." : "Pode ser e-mail ou WhatsApp.";
};
contatoEl.addEventListener("input", e => {
  if (kindOf(contatoEl.value) === "whatsapp" && !(e.inputType || "").startsWith("delete")) contatoEl.value = maskPhone(contatoEl.value);
  setHint();
});
/* Ao escolher o tipo de projeto, a dica do campo de descrição muda. */
form.addEventListener("change", e => { if (e.target.name === "tipo") descEl.placeholder = DATA.form.dicas[e.target.value] || descPadrao; });
form.addEventListener("reset", () => setTimeout(() => { setHint(); descEl.placeholder = descPadrao; }));
/* Ao corrigir um campo, o aviso de erro dele some. */
form.addEventListener("input", e => { const box = e.target.closest("[data-k]"); if (box && box.classList.contains("bad")) { box.classList.remove("bad"); box.querySelector(".err").textContent = ""; } });

/* Regras de validação: cada campo devolve true se estiver certo ou a mensagem de erro. */
const rules = {
  nome: v => v.trim().length >= 2 || "Informe seu nome.",
  contato: v => isEmail(v) || isPhone(v) || "Informe um e-mail ou um WhatsApp com DDD.",
  tipo: v => !!v || "Escolha o tipo de projeto.",
  prazo: v => !!v || "Escolha um prazo.",
  descricao: v => v.trim().length >= 10 || "Descreva o projeto (mín. 10 caracteres)."
};
/* Aplica as regras, mostra os erros abaixo de cada campo e leva a tela até o primeiro com problema. */
function validate() {
  let ok = true, first = null;
  for (const [k, fn] of Object.entries(rules)) {
    const f = form.elements[k], r = fn(f.value), bad = r !== true, box = form.querySelector(`[data-k="${k}"]`);
    box.classList.toggle("bad", bad); box.querySelector(".err").textContent = bad ? r : "";
    const inp = f.length ? f[0] : f; inp.setAttribute("aria-invalid", bad);
    if (bad) { ok = false; first = first || inp; }
  }
  if (first) { first.focus({ preventScroll: true }); first.closest("[data-k]").scrollIntoView({ block: "center", behavior: "smooth" }); }
  return ok;
}
/* Monta a mensagem do orçamento e abre o WhatsApp ou o e-mail. Retorna false se o contato não estiver configurado. */
function sendForm(data, via) {
  const canal = kindOf(data.contato) === "email" ? "E-mail" : "WhatsApp";
  const msg = `Olá, Davi! Gostaria de solicitar um orçamento.\n\nNome: ${data.nome}\n${canal}: ${data.contato}\nTipo de projeto: ${data.tipo}\nPrazo: ${data.prazo}\nDescrição: ${data.descricao}`;
  if (via === "email") {
    if (!C.email) return false;
    location.href = `mailto:${C.email}?subject=${encodeURIComponent("Orçamento: " + data.tipo)}&body=${encodeURIComponent(msg)}`;
  } else {
    if (!C.whatsapp) return false;
    window.open(`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }
  return true;
}
/* Ao enviar: valida, prepara a mensagem, mostra o feedback e limpa o formulário se deu certo. */
form.addEventListener("submit", e => {
  e.preventDefault();
  fb.className = "feedback";
  if (!validate()) { fb.textContent = "Revise os campos destacados."; return; }
  const via = e.submitter && e.submitter.dataset.via || "whatsapp";
  const done = sendForm(Object.fromEntries(new FormData(form)), via);
  fb.textContent = done ? "Solicitação preparada! Confirme o envio na janela aberta." : "Contato não configurado. Edite DATA.contact em script.js.";
  if (done) { fb.classList.add("ok"); form.reset(); }
});

/* Assistente virtual: janela de conversa com respostas prontas (DATA.assistant).
   Ao digitar, procura a resposta pelas palavras-chave; se não achar, indica o contato direto. */
const A = DATA.assistant, asst = $("#asst"), aFab = $("#asst-fab"), aLog = $("#asst-log"), aIn = $("#asst-in");
const aNorm = s => " " + s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim() + " ";
const aHref = h => h === "@whatsapp" ? wa : h === "@email" ? (C.email ? `mailto:${C.email}` : "") : h;
/* Monta o balão do assistente: texto (quebras de linha preservadas) + botões de link. */
const aHtml = it => {
  const ls = (it.links || []).map(l => [l.t, aHref(l.href)]).filter(l => l[1]);
  return `<p>${esc(it.a).replace(/\n/g, "<br>")}</p>` + (ls.length ? `<div class="msg-links">${ls.map(([t, u]) => `<a class="msg-link" href="${esc(u)}"${ext(u)}>${esc(t)}</a>`).join("")}</div>` : "");
};
const aScroll = () => aLog.scrollTo({ top: aLog.scrollHeight, behavior: RM ? "auto" : "smooth" });
const aAdd = (who, html) => { const d = document.createElement("div"); d.className = "msg " + who; d.innerHTML = html; aLog.append(d); aScroll(); return d; };
/* Escolhe a resposta com mais palavras-chave encontradas (empate: a primeira da lista). */
function aFind(text) {
  const n = aNorm(text); let best = null, top = 0;
  for (const it of A.faq) { const s = it.keys.filter(k => n.includes(" " + k)).length; if (s > top) { top = s; best = it; } }
  return best || A.fallback;
}
/* Mostra a pergunta do visitante, os três pontinhos "digitando" e depois a resposta. */
function aAsk(text, item) {
  aAdd("user", `<p>${esc(text)}</p>`);
  const typing = aAdd("bot typing", "<span></span><span></span><span></span>");
  typing.setAttribute("aria-label", "Digitando");
  setTimeout(() => { typing.remove(); aAdd("bot", aHtml(item || aFind(text))); }, RM ? 0 : 650);
}
$("#asst-form").addEventListener("submit", e => {
  e.preventDefault(); const v = aIn.value.trim(); if (!v) return;
  aIn.value = ""; aAsk(v);
});
function aOpen() {
  if (!aLog.children.length) aAdd("bot", `<p>${esc(A.hello)}</p>`);
  asst.hidden = false; aFab.setAttribute("aria-expanded", "true");
  (matchMedia("(hover:hover)").matches ? aIn : asst).focus({ preventScroll: true }); aScroll();
}
function aClose(back = true) { asst.hidden = true; aFab.setAttribute("aria-expanded", "false"); if (back) aFab.focus({ preventScroll: true }); }
aFab.addEventListener("click", aOpen);
$("#asst-x").addEventListener("click", () => aClose());
document.addEventListener("keydown", e => { if (e.key === "Escape" && !asst.hidden && modal.hidden) aClose(); });
/* Ao tocar num link interno da resposta (ex.: #orcamento), fecha a janela para a página aparecer. */
aLog.addEventListener("click", e => { const a = e.target.closest("a[href^='#']"); if (a) aClose(false); });

/* Atualiza o ano do copyright no rodapé automaticamente. */
$("#year").textContent = new Date().getFullYear();

/* =====================================================
   ANIMAÇÕES EXTRAS (tudo respeita "reduzir movimento")
   ===================================================== */
const RM = false; /* animações sempre ligadas, mesmo com "reduzir movimento" ativo no sistema. Para respeitar essa opção: matchMedia("(prefers-reduced-motion:reduce)").matches */
if (!RM) {
  /* Barra de progresso de rolagem + sombra do cabeçalho */
  const bar = document.createElement("div"); bar.className = "progress"; document.body.prepend(bar);
  const hd = $(".header"); let tick = false;
  const onScroll = () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      hd.classList.toggle("scrolled", scrollY > 10); tick = false;
    });
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* Números dos indicadores contam até o valor */
  const cnt = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; cnt.unobserve(en.target);
    const b = en.target, m = b.textContent.match(/^(\D*)(\d+)(\D*)$/);
    if (!m || +m[2] === 0) return;
    const [, p, d, s] = m, to = +d, t0 = performance.now();
    const step = t => {
      const k = Math.min((t - t0) / 1200, 1);
      b.textContent = p + String(Math.round(to * (1 - Math.pow(1 - k, 3)))).padStart(d.length, "0") + s;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: .6 });
  document.querySelectorAll("#stats b").forEach(b => cnt.observe(b));

  /* Entrada escalonada nos grupos de itens e nos títulos */
  document.querySelectorAll("#skills li,#quick li,#path li,#stats li,#services article,#certs article,#steps li,#contacts li,.projects .project,h2").forEach((el, i, all) => {
    const idx = [...el.parentElement.children].indexOf(el);
    el.classList.add("reveal"); el.style.setProperty("--d", (idx % 6) * .07 + "s");
    el.addEventListener("transitionend", () => el.style.removeProperty("--d"), { once: true });
    rev.observe(el);
  });
  $("#photo").classList.add("reveal", "from-l"); rev.observe($("#photo"));
  rev.observe($("#timeline"));

  /* Projetos reaparecem com animação ao trocar o filtro */
  $("#filters").addEventListener("click", () => document.querySelectorAll(".project:not(.hide)").forEach((p, i) => {
    p.classList.add("in"); p.classList.remove("pop"); void p.offsetWidth;
    p.style.setProperty("--pd", i * .06 + "s"); p.classList.add("pop");
  }));
}
