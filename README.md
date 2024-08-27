# challenge-one

# Curtain - O Decodificador de Texto

Curtain é um aplicativo simples para criptografar e descriptografar textos. O aplicativo converte vogais em sequências de texto específicas para proteger as mensagens, que podem ser facilmente decodificadas usando o mesmo aplicativo.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autor](#autor)

## Funcionalidades

- **Criptografar**: Converte as vogais em sequências de caracteres pré-definidas.
  - `e` → `enter`
  - `i` → `imes`
  - `a` → `ai`
  - `o` → `ober`
  - `u` → `ufat`

- **Descriptografar**: Reverte as sequências de caracteres criptografadas de volta às vogais originais.

- **Copiar Mensagem**: Permite copiar a mensagem codificada ou decodificada para a área de transferência.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica do aplicativo.
- **CSS**: Estilização da interface.
- **JavaScript**: Lógica de criptografia, descriptografia e manipulação da DOM.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Insira a mensagem que deseja codificar no campo de texto.
   - **Nota**: Apenas letras minúsculas e sem acentos são permitidas.
3. Clique em **Criptografar** para codificar a mensagem ou em **Descriptografar** para decodificá-la.
4. O resultado aparecerá no segundo campo de texto.
5. Para copiar a mensagem resultante, clique em **Copiar**.

## Estrutura do Projeto

- **`assets/`**: Contém a logo do aplicativo.
- **`app.js`**: Contém as funções de criptografia, descriptografia e cópia da mensagem.
- **`index.html`**: Marca a estrutura HTML e os elementos do aplicativo.
- **`style.css`**: Contém as regras de estilo para a interface.

## Autor

Este projeto foi desenvolvido por Lucas Nunes, como um desafio para o curso Oracle ONE. Sinta-se à vontade para contribuir, sugerir melhorias ou reportar problemas.

