---
title: 'As dicas mais valiosas sobre clean code que alguém vai te dar! - Parte 01'
description: 'Desenvolver algoritmos é tarefa primordial de um programador, porém, desenvolver softwares vai muito além de criar algoritmos e resolver problemas.'
date: '2020-09-16'
modified_date: '2020-09-16'
image: '/assets/images/posts/clean-code.jpg'
---

Fala meu povo, só alegria de viver? Nesse post vamos falar de uma das dicas mais importantes sobre *clean code* que alguém poderia te dar!
Então depois de ler esse artigo, que tal deixar aqui embaixo sua opinião?
Agora, chega de papo, bora para o conteúdo!

Naturalmente, quando estamos aprendendo programação e precisamos resolver um problema focamos em criar um passo a passo, uma receita de bolo, aquela famosa estrutura lógica que chamamos de algoritmo.

Ótimo, desenvolver algoritmos é tarefa primordial de um programador, porém, o desenvolvimento de *softwares* vai muito além de criar algoritmos e resolver problemas. Precisamos ter em mente que em algum momento nós mesmos ou alguém terá contato com o código escrito, e vamos combinar, ninguém merece mexer em código ~cagado~ ruim, não é mesmo?

Dito isso, um dos pontos primordiais para um código limpo é o cuidado com indentação, padrão e nomenclatura! Se liga só nesse exemplo **real** de um projeto em que trabalho:

```jsx
const renderBadge = () => {
  if (this.props.loggedIn) {
    const count = Object.keys(this.props.orders).reduce((counter, itemId) => {
      if (
        this.props.mapOfIdCode[itemId] &&
        this.props.orders[itemId].orderedQuantity
      ) { return counter + 1 }
      return counter
    }, 0)
    const formattedCount = count > 99 ? '+' : count
    let jsx
    if (count > 0) {
      if (this.props.failing) {
        jsx = (
          <View style={styles.redBadge}>
            <Image source={preparing} style={styles.syncIcon} />
          </View>
        )
      } else if (
        this.props.basketStatus &&
        Object.keys(this.props.queue).length
      ) {
        jsx = (
          <View style={styles.greyBadge}>
            <Image source={preparing} style={styles.syncIcon} />
          </View>
        )
      } else {
        jsx = (
          <View style={styles.greenBadge}>
            <Text style={styles.number} allowFontScaling={false}>
              {formattedCount}
            </Text>
          </View>
        )
      }
    }
    return jsx
  } else {
    return null
  }
}
```

Apesar desse algoritmo ser funcional, você entende o que isso faz? Eu não, nem em código, nem em contexto, a poluição, desorganização e falta de cuidado com a nomenclatura é nítida!

Agora, vamos reescrever o mesmo código tendo em mente apenas 03 regras:
- 1 - Indentação
- 2 - Extração e nomenclatura de variáveis
- 3 - Simplificação e remoção código duplicado

```jsx
const renderBadge = () => {
  const { loggedIn, orders, mapOfIdCode, failing, basketStatus, queue } = this.props;

  if (loggedIn) {
    return
  }

  const count = Object.keys(orders).reduce((acc, key) => {
    const shouldIncrementCounter = mapOfIdCode[key] && orders[key].orderedQuantity
    return shouldIncrementCounter ? acc + 1 : acc
  }, 0)

  if (!count) {
    return
  }

  const isSuccess = basketStatus && Object.keys(queue).length
  if (isSuccess || failing) {
    return (
      <View style={isSuccess ? styles.greenBadge : styles.redBadge}>
        <Image source={preparing} style={styles.syncIcon} />
      </View>
    )
  }

  const formattedCount = count > 99 ? '+' : count
  return (
    <View style={styles.greenBadge}>
      <Text style={styles.number} allowFontScaling={false}>
        {formattedCount}
      </Text>
    </View>
  )
}
```

Bem melhor, não é mesmo? Com apenas 03 simples passos melhoramos **muito** nosso código, inserimos legibilidade, didática e ainda por cima reduzimos a função em 8 linhas.

Uma das grandes lições que aprendi ao longo da minha caminhada é que **criamos código para seres humanos, não para máquinas**.
Quanto mais claro tivermos isso em mente, melhor será a qualidade do código produzido. Talvez possamos ganhar alguns milissegundos de performance evitando criar funções, diminuindo o nome de variáveis, ou até mesmo deixando de cria-las, mas, será que isso é realmente importa?
Nomenclatura, legibilidade e contexto são primordiais para que aplicações cresçam manuteníveis e saudável.

No próximo *post* vamos continuar falando sobre código limpo e como evitar um dos maiores erros que programadores jovens e até mesmo experientes cometem.

Forte Abraço!