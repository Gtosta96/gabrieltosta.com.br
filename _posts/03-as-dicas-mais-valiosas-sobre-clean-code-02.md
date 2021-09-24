---
title: 'As dicas mais valiosas sobre clean code que alguém vai te dar! - Parte 02'
description: Existem diversas formas de construir um programa e de longe a mais problemática é aquela que manipula e faz mutações em diferentes níveis. Nesse post vamos aprender a evitar essa abordagem de uma forma simples!
date: '2020-09-25'
modified_date: '2020-09-25'
image: '/assets/images/posts/clean-code.jpg'
---

Opa, e ai, tudo certinho? [No post passado](@@baseUrl@@/posts/02-as-dicas-mais-valiosas-sobre-clean-code-01) vimos algumas dicas bem interessantes relacionadas a clean code e hoje, para finalizar esse assunto - ao menos por enquanto - separei uma dica sobre, na minha opinião, um dos piores - senão o pior - erro na hora de construir um algoritmo, vamos lá?

Como você já deve saber, um programa/algoritmo é basicamente composto por:

```bash
      (input)                            (output)
  entrada de dados -> processamento -> saída de dados
```

Quando comecei a estudar programação, achei o conceito extremamente simples - mal sabia eu que o problema era exatamente o **processamento**!

Existem diversas formas de construir um programa e na minha opinião, de longe a mais problemática é aquela que manipula e faz *mutações* em diferentes níveis. Vamos dar uma olhada no exemplo abaixo:

```js
function setEyesColor(person) {
  const shouldBeBrown = Math.random() > 0.3; // 70% de chances de ser marrom;
  person.eyes = shouldBeBrown ? 'brown' : 'green';
}

function createPerson() {
  const person = {};
  setEyesColor(person);

  return person;
}
```

A ideia do código acima é de criar um objeto `person` e definir a propriedade `eyes` baseado em um algoritmo de *probabilidade*; quem define a propriedade `eyes` é a função `setEyesColor`.

O algoritmo cumpre o seu papel, porém, como será que essa implementação se comportaria caso a nossa necessidade fosse um pouco mais complexa?

```js
function setHairLength(person) {
  const shouldBeLong = Math.random() > 0.5; // 50% de chances de ser longo;
  person.hair.length = shouldBeLong ? 'long' : 'short';
}

function setHairColor(person) {
  const shouldBeDark = Math.random() > 0.6; // 60% de chances de ser escuro;
  person.hair.color = shouldBeDark ? 'dark' : 'light';
}

function setHairDetails(person) {
  setHairColor(person)
  setHairLength(person)
}

function setEyesColor(person) {
  const shouldBeBrown = Math.random() > 0.3; // 70% de chances de ser marrom;
  person.eyes = shouldBeBrown ? 'brown' : 'green';
}

function setHeadDetails(person) {
  setEyesColor(person);
  setHairDetails(person);
}

function createPerson() {
  const person = {
    eyes: undefined,
    hair: { color: undefined, length: undefined }
  };
  setHeadDetails(person);

  return person;
}
```

Nesse cenário estamos construindo os detalhes da cabeça do objeto `person` através de algumas funções. Cada função é **extremamente declarativa** e tem uma única responsabilidade, e isso é **ótimo**, porém, temos um problema!
Mesmo com um exemplo relativamente simples como o acima, é possível notar o quão difícil é *trackear* as mutações do objeto `person`, ou seja, como o objeto é alterado ao longo da execução do algoritmo. Isso dificulta absurdamente a *previsibilidade* e o *debugging* do nosso programa.

Agora, vamos tentar uma nova abordagem. Vamos deixar todas as responsabilidades de definição em uma única função e utilizar as outras apenas como *provedores* de informação:

```js
function getEyesColor() {
  const shouldBeBrown = Math.random() > 0.3; // 70% de chances de ser marrom;
  return shouldBeBrown ? 'brown' : 'green';
}

function getHairColor() {
  const shouldBeDark = Math.random() > 0.6; // 60% de chances de ser escuro;
  return shouldBeDark ? 'dark' : 'light';
}

function getHairLength() {
  const shouldBeLong = Math.random() > 0.5; // 50% de chances de ser longo;
  return shouldBeLong ? 'long' : 'short';
}

function createPerson() {
  const person = {
    eyes: undefined,
    hair: { color: undefined, length: undefined }
  };

  person.eyes = getEyesColor();
  person.hair.color = getHairColor();
  person.hair.length = getHairLength();

  return person;
}
```

Refatoramos a função `createPerson` para conter toda a lógica sobre *criar* e *definir* as propriedades do objeto `person`, dessa forma nenhuma de nossas funções altera diretamente as propriedades do objeto, apenas definem seus valores, logo o nosso código fica extremamente previsível e fácil de debugar.

Concluindo, evitar `mutar` objetos diretamente em funções espalhadas pelo código e tratar funções `void` como de fato, `void`, podem nos salvar algumas horas de *stress* quebrando a cabeça na hora de encontrar um *bug* na aplicação que estamos desenvolvendo.
E aí, o que você acha? Concorda comigo?

É isso aí pessoal, mais um dia, mais um *post*, espero que você tenha gostado, até a próxima e forte abraço!