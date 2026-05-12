# Relatório de Análise — Marcograf Landing Page

## Atualização de Execução — 12/05/2026

Correções aplicadas nesta rodada:

- `Location.tsx` passou a ser renderizada em `Home.tsx` e o mapa duplicado foi removido de `Contact.tsx`.
- `about.paragraphs[1]` passou a aparecer na seção Sobre.
- `Portfolio.tsx` deixou de cortar o 4º item e o `alt` temporário foi removido.
- `Contact.tsx` ganhou CTA de WhatsApp dentro do bloco de contato.
- `Footer.tsx` foi simplificado para priorizar canais principais e agora usa ano dinâmico.
- `src/data/visuals.ts` deixou de usar `Unsplash` e `Pexels`; as imagens agora vêm apenas de assets Google/Google Sites ligados à presença da Marcograf.

Pontos ainda dependentes de material/decisão externa:

- Substituir referências visuais por fotos oficiais definitivas em resolução controlada, idealmente salvas localmente no projeto.
- Rever o fluxo do formulário para envio real sem depender de cliente de e-mail.
- Atualizar depoimentos com textos mais fortes e contexto dos autores.

> Cores da marca: `#e81f78` (magenta) · `#0884b8` (ciano) · `#fdee03` (amarelo)
> Stack: React + TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod

---

## 1. Bugs / Problemas Críticos

### 1.1 Seção `Location.tsx` existe mas nunca é renderizada

O arquivo `src/components/sections/Location.tsx` está implementado e correto, mas não é importado em `Home.tsx`. A seção de localização que aparece na página está embutida dentro de `Contact.tsx` (com um mapa menor). A `Location.tsx` tem um mapa completo em tela cheia (520px de altura) — é a versão mais profissional. Recomenda-se substituir o bloco de localização dentro de `Contact.tsx` pelo `<Location />` no `Home.tsx`.

### 1.2 Formulário de contato depende de cliente de e-mail

O botão "Abrir cliente de e-mail" usa `mailto:` via `window.location.assign()`. No Brasil, a maioria dos usuários acessa pelo Chrome sem cliente de e-mail configurado — o botão simplesmente não funciona para boa parte dos visitantes. Para o público de uma gráfica, o ideal seria integrar com um serviço de envio real (Formspree, EmailJS, ou uma função serverless) ou transformar o formulário num link direto para o WhatsApp com os dados pré-preenchidos.

### 1.3 Portfólio usa imagens de stock com alt text revelador

`Portfolio.tsx` linha 35: `alt="Imagem temporária de referência para..."` — confirma que as fotos são placeholders do Unsplash/Pexels. Nenhuma imagem do portfólio representa trabalho real da Marcograf. Isso enfraquece a credibilidade da gráfica para quem avalia qualidade de impressão visual.

---

## 2. Problemas de Conteúdo / UX

### 2.1 WhatsApp não aparece como opção no formulário

O botão flutuante de WhatsApp existe, mas na seção de contato não há nenhuma opção de entrar em contato pelo aplicativo. Para uma gráfica brasileira, o WhatsApp é o canal de orçamento mais utilizado. Um botão "Solicitar pelo WhatsApp" no formulário seria muito mais eficaz para conversão do que o fluxo de e-mail atual.

### 2.2 Depoimentos muito curtos

4 dos 6 depoimentos são fragmentos de frase: "Compromisso e qualidade.", "Atendimento excelente.", "Qualidade total". Isso tem pouco peso como prova social. Vale estimular clientes a deixar avaliações mais detalhadas no Google e atualizar o arquivo `testimonials.ts`.

### 2.3 `about.paragraphs[1]` nunca é renderizado

Em `company.ts`, há dois parágrafos definidos em `about.paragraphs`, mas em `About.tsx` apenas `[0]` é usado. O segundo parágrafo ("São mais de 25 anos atendendo materiais editoriais...") nunca aparece na página.

### 2.4 Dados da estrutura são superficiais

Em `structure.ts`, "Impressão offset" lista apenas `["Papel", "BOPP"]` e "Pré-impressão" lista apenas `["CTP"]`. Para uma gráfica com parque próprio, isso é pouco informativo. O visitante não consegue ter dimensão real do equipamento.

### 2.5 Portfólio mostra apenas 3 de 4 itens

`Portfolio.tsx` faz `.slice(0, 3)` mas `portfolioCases` tem 4 itens. O quarto item ("Comunicação visual") nunca aparece.

---

## 3. Design e Identidade Visual

### 3.1 Amarelo (#fdee03) inacessível em fundos claros

A cor amarela da marca tem contraste insuficiente sobre branco (falha WCAG AA). Ela só é usada de forma segura em seções escuras (hero, footer). Em textos ou badges sobre fundo claro essa cor não deve ser usada — o código atual não a usa nesses contextos, o que é correto. Vale documentar isso para futuros contribuidores.

### 3.2 Azul/ciano (#0884b8) pouco usado nas seções de conteúdo

O azul aparece quase só nos gradientes de fundo. Nas seções de conteúdo a cor dominante é sempre o magenta. Para uma gráfica com identidade CMYK, o azul poderia aparecer mais como acento em badges, linhas divisórias ou ícones em seções alternadas.

### 3.3 Footer sem redes sociais

Nenhum link para Instagram, Facebook ou LinkedIn. Para uma gráfica com portfólio visual, o Instagram é canal importante tanto para captação quanto para prova de trabalho real.

### 3.4 `ogImage` aponta para a logo

Em `company.ts`: `ogImage: "/logo_marcograf.png"`. Quando o site é compartilhado no WhatsApp/LinkedIn, a imagem que aparece é a logo em fundo branco — não é impactante. Uma foto da produção seria muito mais efetiva.

---

## 4. Qualidade de Código / Configuração

### 4.1 Arquivos de configuração duplicados

Na raiz do projeto existem:
- `tailwind.config.js` + `tailwind.config.ts` + `tailwind.config.d.ts`
- `vite.config.js` + `vite.config.ts` + `vite.config.d.ts`

Os arquivos `.js` e `.d.ts` são artefatos de build que não deveriam estar no repositório. O `.gitignore` deveria excluí-los. Apenas o `.ts` deve existir para cada um.

### 4.2 `architeture.md` na raiz

Arquivo de documentação interna na raiz do projeto. Deveria estar em `/docs` ou no README.

### 4.3 `sectionIds.location` definido mas nunca usado

`constants.ts` define `location: "localizacao"` mas nenhuma seção com esse id existe na página renderizada. É um resquício direto do ponto 1.1.

---

## 5. Resumo de Prioridades

| Prioridade | Item |
|---|---|
| 🔴 Alta | Formulário de contato não funciona sem cliente de e-mail — integrar WhatsApp ou serviço de envio real |
| 🔴 Alta | `Location.tsx` implementada mas nunca renderizada |
| 🔴 Alta | Imagens do portfólio são placeholders — substituir por fotos reais da gráfica |
| 🟡 Média | Depoimentos muito curtos — atualizar com textos mais elaborados |
| 🟡 Média | `about.paragraphs[1]` nunca renderizado — adicionar ou remover do dado |
| 🟡 Média | Footer sem redes sociais |
| 🟡 Média | `ogImage` deveria ser uma foto da produção, não a logo |
| 🟢 Baixa | Arquivos `.js` e `.d.ts` duplicados de config — adicionar ao `.gitignore` |
| 🟢 Baixa | `portfolioCases[3]` nunca exibido — remover o `.slice(0, 3)` ou o 4º item |
| 🟢 Baixa | Dados de estrutura muito genéricos — detalhar equipamentos reais |

---

## 6. Análise Visual — UX / UI

> Análise baseada em inspeção visual do site em execução local (localhost:5173).

### 6.1 Header

**Positivo:**
- Pill flutuante com blur é elegante e funciona bem no scroll.
- Logo legível e bem proporcionada.
- CTA "Solicitar orçamento" visível no desktop.

**Problemas:**
- No mobile, o menu hambúrguer abre um drawer que cobre conteúdo mas não tem overlay/backdrop — o usuário não tem indicação visual clara de onde clicar para fechar além do ícone X.
- O botão de orçamento some no mobile (apenas no menu) — perde uma oportunidade de conversão permanente na navbar mobile.
- A linha "Marcograf · Fortaleza • 25+ anos" ao lado da logo (visível apenas em telas ≥1180px) usa mistura de separadores: `·` e `•` sem consistência.

### 6.2 Hero

**Positivo:**
- Background dark com aura CMYK é visualmente coerente com a identidade da gráfica.
- Hierarquia tipográfica clara: nome em magenta, headline grande, subheadline menor.
- Os três badges informativos (anos, rating, produção própria) funcionam como proof points imediatos.
- Animação de entrada suave e não intrusiva.

**Problemas:**
- No mobile, a imagem da prensa ocupa apenas `h-[17rem]` — fica comprimida e perde impacto. A foto escolhida (prensa industrial) é genérica e não identifica a Marcograf.
- O card sobreposto na imagem ("Do arquivo ao acabamento.") repete informação que já está no headline — poderia mostrar algo mais específico como um número ou dado técnico.
- No breakpoint `sm` (tablet), os dois botões ficam em grid de 2 colunas mas com larguras diferentes dependendo do conteúdo — o alinhamento fica irregular.

### 6.3 Sobre (About)

**Positivo:**
- Layout de duas colunas com sticky na esquerda é eficaz para leitura progressiva.
- O card escuro "Base da operação" com numeração `01 / 02 / 03` transmite seriedade técnica.
- Uso do `text-yellow` para highlight nos pilares funcionando bem no fundo escuro.

**Problemas:**
- No mobile, a seção `operationBase` usa `sm:grid-cols-3` (3 colunas em tablet) mas os cards são longos — fica espremido. Em telas de 640–768px, o layout de 3 colunas com texto é ilegível.
- O badge "Escala + controle" no canto superior direito dos "Pontos de força" está `hidden sm:inline-flex` — no mobile o usuário não vê essa informação, mas o espaço em branco onde estaria ele fica estranho visualmente.
- A imagem da seção About (profissional carregando papel) tem `opacity-90` mas o fundo escuro consome muito dela — pouca visibilidade da foto real.

### 6.4 Diferenciais

**Positivo:**
- Grid de cards com `auto-rows-fr` mantém altura uniforme — visualmente limpo.
- O destaque em magenta nos cards com `index % 3 === 0` cria ritmo visual sem ser repetitivo.
- A barra CMYK no topo do painel esquerdo é um detalhe de identidade bem executado.

**Problemas:**
- A lógica `index % 3 === 0` destaca os cards 1, 4, 7 — mas com 6 cards isso resulta em destaque nos cards 1 e 4, criando assimetria visual. O card 4 ("Critério técnico") fica destacado mas não é necessariamente o mais importante.
- A imagem de impressão à esquerda tem `h-44 sm:h-56` — em desktop fica pequena comparada ao card, especialmente com o botão de CTA no rodapé que empurra a imagem para cima.

### 6.5 Serviços

**Positivo:**
- As barras de cor (`bg-cyan`, `bg-magenta`, `bg-yellow`, `bg-ink`) no topo de cada card são um uso inteligente da paleta CMYK para diferenciar serviços.
- O card de Editorial (índice 4) ocupando `md:col-span-2` equilibra o grid de forma elegante.

**Problemas:**
- As imagens de serviço têm `h-32 sm:h-40` — muito baixas para uma gráfica onde a visual é o produto. O visitante mal consegue ver o que está sendo fotografado.
- Os tags de itens (ex.: "Livros", "Revistas") têm estilo idêntico ao dos serviços no painel lateral esquerdo — não há diferenciação visual entre os dois contextos.
- O serviço "Papelaria" (índice 4) com `md:col-span-2` tem a imagem estendida horizontalmente mas o objeto da foto não beneficia desse formato wide — a foto fica esticada.

### 6.6 Portfólio

**Positivo:**
- Layout de 3 colunas com cards uniformes é limpo.
- O badge de categoria sobreposto na imagem funciona bem visualmente.

**Problemas:**
- Com imagens de stock, a seção não tem valor real de portfólio — é essencialmente vazia de conteúdo.
- A seção não tem nenhum CTA ou caminho de ação — o visitante vê as referências e fica sem saber o que fazer a seguir.
- Em mobile, os 3 cards ficam empilhados verticalmente em coluna única — a seção fica muito longa sem densidade de informação proporcional.

### 6.7 Processo

**Positivo:**
- Linha conectando os steps (`h-[calc(100%-3.5rem)] w-px`) funciona bem no mobile (vertical) e desktop (horizontal).
- Numeração com circle magenta é clara e leve.

**Problemas:**
- Em tablet (768–1024px), o grid não define `lg:grid-cols-4` — os 4 steps ficam em 1 coluna (`auto-rows-fr` sem definição de colunas para md). Em telas médias, a seção ocupa muito espaço vertical.
- O conector horizontal no desktop (`lg:left-[calc(100%-1rem)] lg:h-px lg:w-8`) é muito curto e sutil — em algumas configurações de tela o usuário pode não perceber a continuidade entre steps.

### 6.8 Estrutura

**Positivo:**
- O card de "Acabamentos" com grid de 2 colunas para os tipos é visualmente eficaz.
- O contador "15" acabamentos no card branco é um bom uso de números para credibilidade.

**Problemas:**
- Os cards de categoria (`Impressão offset: Papel, BOPP`) têm pouco conteúdo — visualmente criam um grid desequilibrado com cards de 1–2 itens ao lado de cards com 5+ itens.
- A seção tem o mesmo padrão visual de `About` (sticky esquerda + grid direita) — a repetição do layout cria monotonia ao longo da página.

### 6.9 Depoimentos

**Positivo:**
- O card de rating com estrelas e fundo escuro é bem executado visualmente.
- O `md:col-span-2` no primeiro depoimento cria hierarquia entre o mais relevante e os demais.

**Problemas:**
- Os depoimentos curtos ("Compromisso e qualidade.") têm `flex-1` mas o conteúdo não ocupa o espaço — cria cards com muito espaço em branco no centro e o autor no rodapé colado na borda.
- O ícone `Quote` é `text-brand/75` (magenta transparente) — fica fraco demais, quase invisível em alguns monitores.
- Sem foto ou avatar dos avaliadores — para uma empresa B2B, nome sem contexto (cargo, empresa) tem menos credibilidade.

### 6.10 Contato

**Positivo:**
- O formulário é bem estruturado com grid de 2 colunas nos campos principais.
- Focus ring `ring-brand/10` no foco dos inputs dá feedback visual de identidade.
- O bloco explicativo sobre o processo de envio é honesto com o usuário.

**Problemas:**
- O bloco "Envio" dentro do formulário que explica o funcionamento do `mailto:` é um sintoma do problema 1.2 — se o envio funcionasse de verdade, esse bloco não precisaria existir.
- O botão "Copiar mensagem" como fallback revela fragilidade do sistema de envio.
- O formulário tem 8 campos obrigatórios/opcionais — para um primeiro contato de orçamento, isso é acima do ideal. Quantidade e prazo poderiam ir para a mensagem livre.
- O mapa dentro de `Contact.tsx` (`h-[260px]`) é pequeno e subutiliza o espaço disponível — o `Location.tsx` independente resolveria isso.

### 6.11 CTA Final

**Positivo:**
- A barra CMYK no topo do card é consistente com o padrão da página.
- Os dois botões lado a lado funcionam bem em desktop.

**Problemas:**
- Em mobile, a imagem (`h-44`) fica abaixo do texto e dos botões — a seção tem pouco impacto visual no mobile, que é onde mais importa para uma gráfica local.
- O título "Precisa validar especificação, prazo e acabamento com mais segurança?" é técnico demais para um CTA final — poderia ser mais direto e comercial.

### 6.12 Footer

**Positivo:**
- Layout de 3 colunas organizado e legível.
- Logo com fundo branco no fundo escuro funciona bem.

**Problemas:**
- Três e-mails listados no footer (`comercial@`, `orcamento@`, `preimpressao@`) sem hierarquia visual — o visitante não sabe qual usar. Para o público geral, apenas o de orçamento seria suficiente.
- Sem redes sociais (Instagram especialmente relevante para gráfica).
- Sem horário de atendimento — informação básica para uma empresa física.
- O copyright "© Marcograf Indústria Gráfica" não tem ano — deveria ser dinâmico (`© {new Date().getFullYear()} Marcograf`).

### 6.13 Botão flutuante de WhatsApp

**Positivo:**
- Posicionamento padrão (bottom-right) é esperado pelo usuário.
- Animação `hover:scale-[1.04]` é sutil e elegante.

**Problemas:**
- O ícone usado é `MessageCircle` (Lucide) — não é o ícone oficial do WhatsApp. Usuários podem não reconhecer imediatamente. Recomenda-se usar um SVG do logo do WhatsApp.
- O botão não tem tooltip ou label visível — depende apenas do `aria-label` para acessibilidade, invisível para usuários sem leitor de tela.

---

## 7. Resumo Visual — UX / UI

| Seção | Nota | Principal problema |
|---|---|---|
| Header | ✅ Bom | Menu mobile sem overlay de fechamento |
| Hero | ✅ Bom | Imagem mobile comprimida, card redundante |
| Sobre | 🟡 Regular | `sm:grid-cols-3` ilegível em tablet |
| Diferenciais | ✅ Bom | Lógica de destaque `% 3` cria assimetria |
| Serviços | 🟡 Regular | Imagens muito baixas para produto visual |
| Portfólio | 🔴 Fraco | Sem imagens reais, sem CTA |
| Processo | 🟡 Regular | Layout em tablet sem definição de colunas |
| Estrutura | 🟡 Regular | Dados rasos, layout repetindo padrão do About |
| Depoimentos | 🔴 Fraco | Cards com espaço vazio, sem contexto dos autores |
| Contato | 🟡 Regular | Formulário com muitos campos, envio frágil |
| CTA Final | 🟡 Regular | Pouco impacto no mobile |
| Footer | 🟡 Regular | Três e-mails sem hierarquia, sem redes sociais |
| WhatsApp | 🟡 Regular | Ícone não oficial, sem tooltip |
