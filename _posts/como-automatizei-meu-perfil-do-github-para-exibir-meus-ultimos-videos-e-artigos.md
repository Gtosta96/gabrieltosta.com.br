---
title: Como automatizei meu perfil do GitHub para exibir meus últimos videos e artigos
description: 'Atualizando a apresentação do meu perfil no GitHub pensei: "Seria
  possível gerar uma lista com os artigos que eu posto aqui no blog, e também
  dos meus vídeos no YouTube?'
date: 2021-10-11 08:32:15
modified_date: 2021-10-11 08:32:15
image: /assets/images/posts/1632833102817.jpeg
---
E aí meu povo, tudo jóia?

Ao longo de toda a minha carreira, sempre que possível eu criei muita coisa e contribui com a comunidade - principalmente local, aqui na cidade onde eu moro - porém meu marketing pessoal sempre foi bem dos mixuruca e deixado em segundo plano - \~besta\~ péssimo que fala, né?\
Ultimamente fui indicado para o [Microsoft MVP Award](https://mvp.microsoft.com/pt-br/) e com isso veio uma motivação de construir uma base no *online* um pouco mais sólida e um dos principais pontos falhos sobre como eu posiciono na internet como programador estava no meu GitHub.

Atualizando a[ apresentação do meu perfil no GitHub](https://github.com/gtosta96) pensei: "Seria possível gerar uma lista com os artigos que eu posto aqui no blog, e também dos meus [vídeos no YouTube](https://www.youtube.com/channel/UCnn6QwXCmb5kR5rqSQZAo2w)?". Decidi buscar na internet alguma forma de fazer isso, e cá estamos!

Após muita pesquisa, dor de cabeça e *copy/paste* cheguei em um resultado satisfatório e gostaria de compartilhar aqui para quem tenha o mesmo desejo e talvez enfrente a mesma dificuldade. Vamos lá?

Primeiramente você deve [criar o seu perfil de apresentação no GitHub](https://docs.github.com/pt/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme), que basicamente se resume em criar, commitar e dar push em um repositório com o mesmo nome do seu usuário do GitHub contendo um arquivo README.md

![](/assets/images/posts/screen-shot-2021-10-11-at-21.18.29.png)

Uma vez criado o repositório vamos adicionar as seguintes linhas de código no README.md

```markdown
### 📕 Blog posts
<!-- BLOG:START -->
<!-- BLOG:END -->

### 📺 Youtube Videos
<!-- YOUTUBE:START -->
<!-- YOUTUBE:END -->
```

Esses *Markups* serão necessários lá na frente, dentro deles que os links serão gerados automaticamente