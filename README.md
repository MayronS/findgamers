# 🎮 FindGamers

Protótipo front-end de uma rede social para jogadores encontrarem parceiros e grupos para jogar. A ideia: você vê o perfil de outros jogadores (jogos, estilo, disponibilidade), dá "match", conversa por chat e acompanha um feed de publicações da comunidade.

> 🚧 **Status:** em desenvolvimento. Esta versão é a interface (UI) do projeto, com dados de exemplo. O back-end e a autenticação ainda não foram implementados.

## ✨ Telas

| Rota | Descrição |
|---|---|
| `/findgamers` | Tela inicial com cards de jogadores (jogos, descrição) e ações de aceitar, recusar ou pular |
| `/findgamers/feed` | Feed de publicações da comunidade, com jogo, autor, data e imagem |
| `/findgamers/chats` | Lista de conversas e janela de chat |
| `/findgamers/profile` | Perfil do usuário, com jogos favoritos e menu de configurações (tema, preferências, conta) |

Também inclui barra lateral de navegação (recolhível, via Context API) e painel de notificações (mensagens e convites para grupos).

## 🛠️ Tecnologias

- [React 18](https://react.dev/)
- [React Router 6](https://reactrouter.com/) (navegação entre páginas)
- [Tailwind CSS 3](https://tailwindcss.com/) + tailwind-scrollbar (estilização e layout responsivo)
- [React Icons](https://react-icons.github.io/react-icons/)
- Create React App (`react-scripts`)
- Deploy com `gh-pages`

## 📁 Estrutura

```
src/
├── App.jsx                  # rotas da aplicação
├── index.jsx
├── styles/                  # estilos globais
├── assets/                  # ícones, avatares e imagens
└── Components/
    ├── Home/                # tela de match e barra lateral direita
    ├── Feed/                # feed, cabeçalho e posts
    ├── Chats/               # lista de conversas e chat
    ├── Profile/             # perfil do usuário
    ├── Notifications/       # painel de notificações
    ├── SideBar/             # navegação lateral + contexto (abrir/fechar)
    └── presentation/        # tela de apresentação do projeto
```

## 🗺️ Próximos passos

- [ ] Back-end com API REST (usuários, matches, posts e mensagens)
- [ ] Autenticação e cadastro
- [ ] Chat em tempo real
- [ ] Filtro de jogadores por jogo, rank e horário
- [ ] Alternar tema claro/escuro

## 👤 Autor

**Mayron Silva Vieira**
[LinkedIn](https://linkedin.com/in/mayronsv) · [GitHub](https://github.com/MayronS)
