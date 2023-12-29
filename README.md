Está página é utilizada como página de redirecionamento dentro do fluxo de autorização em homologação para as emissões de boleto Cora.

1º Na primeira etapa, é necessário fazer login no portal da revenda em localhost e utilizar o token de autorização gerado, esse token deve ser substituído dentro do arquivo javascript (após o Bearer).

2º Entre no link de autorização, após logar nesse link você será redirecionado para a página desse repositório: 
Contas homologação:

Cliente A
CPF: 58418515864
Senha: 12345678

Cliente B
CPF: 36106266077
Senha: 12345678

https://api.stage.cora.com.br/oauth/authorize?client_id=app-ozqJMAMjBpXtTmmuNbjir&response_type=code&redirect_uri=https://leandro-lcsistemas.github.io/page_redirect&scopes=invoice.

3º Após as etapas anteriores, você deve clicar apenas uma vez no botão autorizar.

OBS: Se existir um token de produção no banco local, o mesmo deve ser excluído antes de gerar o token em homologação.
