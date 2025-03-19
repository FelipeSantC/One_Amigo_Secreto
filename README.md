# Projeto Amigo Secreto

Este projeto é uma aplicação simples que simula um sorteio de "Amigo Secreto" (ou "Amigo Oculto"), onde você pode adicionar amigos a uma lista e, posteriormente, realizar o sorteio para ver quem é o amigo secreto de cada pessoa. A aplicação é desenvolvida em HTML, CSS e JavaScript.

## Funcionalidades

- **Adicionar Amigos**: Você pode adicionar amigos à lista através de um campo de texto.
- **Sorteio de Amigo Secreto**: Após adicionar pelo menos dois amigos à lista, você pode realizar o sorteio de um amigo secreto.
- **Exibição da Lista**: A lista de amigos é atualizada dinamicamente na tela sempre que um novo amigo é adicionado.
- **Alertas e Validações**: A aplicação exibe alertas se o usuário tentar realizar o sorteio sem amigos suficientes ou adicionar um nome vazio.

## Como Funciona

### 1. Adicionar Amigos
- O usuário digita o nome de um amigo no campo de texto e clica no botão "Adicionar Amigo".
- O nome é adicionado à lista de amigos e a lista é atualizada na tela.

### 2. Sortear um Amigo Secreto
- O usuário clica no botão "Sortear Amigo Secreto" para selecionar um amigo aleatoriamente da lista.
- O nome do amigo secreto é exibido na tela.

### 3. Validações
- Se o campo de nome estiver vazio, um alerta será exibido pedindo para adicionar um nome.
- Se o número de amigos for inferior a dois, o sorteio não é permitido e um alerta é mostrado.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página e elementos interativos.
- **CSS**: Estilo básico (caso desejado, o estilo pode ser adicionado).
- **JavaScript**: Lógica para adicionar amigos à lista, realizar o sorteio e atualizar a interface do usuário.

## Como Usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Digite o nome de um amigo no campo de texto e clique em "Adicionar Amigo" para adicioná-lo à lista.
4. Clique em "Sortear Amigo Secreto" para realizar o sorteio.

### Exemplo de Funcionamento

1. Digite o nome de um amigo no campo de texto e clique em "Adicionar Amigo".
2. Adicione pelo menos dois amigos à lista.
3. Clique no botão "Sortear Amigo Secreto" para exibir o nome do amigo secreto sorteado.

## Estrutura do Código

### Funções

#### `adicionarAmigo()`
Esta função é chamada quando o botão "Adicionar Amigo" é clicado. Ela lê o nome inserido no campo de texto, valida se o nome não está vazio e o adiciona ao array `amigos`. Após adicionar, a lista de amigos na tela é atualizada.

#### `atualizacaoLista()`
Esta função é responsável por atualizar a lista de amigos na interface. Ela limpa a lista exibida na tela e a preenche novamente com os amigos contidos no array `amigos`.

#### `sortearAmigo()`
Quando o botão "Sortear Amigo Secreto" é clicado, essa função sorteia um amigo aleatoriamente da lista de amigos. Se houver menos de dois amigos na lista, um alerta será exibido.

