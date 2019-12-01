# frontend-developer-challenge2

# Desafio | Frontend Developer

## Sobre o desafio

O desafio consiste no *layout* de uma *landing page* com uma grade de produtos e um formulário de *newsletter*. Seu principal objetivo é transformar este *layout* em uma página funcional.

**Link do layout**: https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/

**Endpoint da API**: https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1

### Layout

Você terá que implementar o *layout* de acordo com esse **[mock](https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/)**. O *mock* contém a estrutura do layout e todo o estilo da página.

É importante se ater aos detalhes de tamanho e espaçamento entre os elementos da página, construindo o HTML mais semântico possível utilizando-se das tags do HTML5.

### Comportamento:

Para preencher a página com as informações dos produtos, você terá que consultar esta **[API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)** de forma paginada, sendo que cada página consultada retornará as informações de **8 produtos** e um **link para a próxima página**.

Assim que obter os dados, você deverá implementar os seguintes pontos:

- Para cada **produto** retornado pela API, um **card de produto** com as respectivas informações deve ser criado na grade de produtos;
- Ao clicar no botão **Ainda mais produtos aqui!** a próxima página da API deve ser consultada, gerando mais **8 produtos** na grade existente, abaixo dos produtos já carregados pela primeira requisição;
- O formulário de *newsletter* com o título **Compartilhe a novidade** deve ter seus campos de *input* validados de acordo com o conteúdo (ex: O campo de email deve conter um email válido);


## Dicas

> Crie uma estrutura de arquivos organizada para suas implementações

> Construa o CSS de forma bem estruturada e em um arquivo separado.

> Evite poluir o escopo global do Javascript

> Documente suas funções e seja o mais conciso possível ao escrever seu código

> Seu README.md deve conter as instruções necessárias para qualquer pessoa fazer seu projeto funcionar

> Your code will be better understood in English ;)

Em caso de dúvidas, [abra uma issue](https://github.com/chaordic/frontend-intern-challenge/issues).

**Boa sorte =]**
