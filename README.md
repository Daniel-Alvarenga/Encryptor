# Encryptor
A 3-layer encryption made in js, to encrypt and decrypt messages with a private key

Este é um projeto de criptografia simples que permite criptografar e descriptografar texto usando uma chave personalizada. Ele inclui uma página HTML, um arquivo CSS e scripts JavaScript para a funcionalidade.
A criptografia funciona em 3 camadas diferentes, que consistem em um cálculo com o binário da chave "privada inserida", um shift da entrada em um vetor com caracteres russos chineses e alfanuméricos, e por fim um binário desses caracteres.
Esse sistema não funciona caso a chave privada inserida seja uma palavra, sem nenhum número. Para garantir o funcionamento e a segurança de sua mensagem mesmo com a cheve privada, garanta que ela inclua ao menos um número.

 *Chave válida*:

   - minha_chave007

 *Chave inválida*:

   - minha_chave


**Atenção!**  
O intuito do projeto foi apenas brincar um pouco com o conceito de criptografia, e você pode usá-lo em dinâmicas com amigos para esconder mensagens através de uma chave combinada, mas lembre-se, esse sistema pode ser facilmente decriptado e o autor não recomenda o uso para mensagens realmente sigilosas
   
## Estrutura do Projeto

A estrutura do projeto é bem simples:

```
Encryptor  
 │   index.html  
 │   style.css    
 │
 └───scripts  
        overshadowed.js  
        script.js  
```

O arquivo HTML (`index.html`) contém a marcação da página com elementos identificados com id para comunicação com js e classes para estilização
O arqwuivo de CSS (`style.css`) para estilização. Você pode personalizar os estilos de acordo com suas preferências. 
Já na pasta script, o arquivo principal, (`script.js`) contém o script para execução de criptografia ou sua reversão mediante uma mensagem e uma chave, e o arquivo `overshadowed.js` é um script JavaScript que a executa a mesma função de script.js na pasta de scripts, mas ele está ofuscado

## Uso

Para usar o projeto, siga estas etapas:

1. Abra o arquivo `index.html` em seu navegador da web.
2. Digite o texto que deseja criptografar na área de texto "Texto para criptografar".
3. Insira uma chave no campo "Chave".
4. Clique no botão "Codificar" para criptografar o texto.
5. O texto criptografado aparecerá na área de texto "Código para descriptografar".
6. Para descriptografar o texto, insira a mesma chave no campo "Chave" e clique no botão "Decodificar".
