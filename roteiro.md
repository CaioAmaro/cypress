Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.


#Exercícios 01

Com o Cypress, escreva os códigos dos seguintes testes:

    Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
    Visite a página de principal do AdoPet e teste os botões header;
    Visite a página de /login do Adopet;
    Visite a página de /home do Adopet;
    Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.



#Exercícios 02

Agora é com você! A partir do Roteiro de testes abaixo, escreva um teste e complemente sua suíte no login:

Funcionalidade: Login no site Adopet

Cenário: Falha no login do sistema

Passos:

    O usuário acessa a página de login.
    O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
    O usuário clica no botão "Entrar".

Resultados Esperados:

    O sistema valida as credenciais fornecidas.
    O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".

Regra de Negócio:

    O e-mail deve ter um formato válido.
    A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres


#03 Exercícios

    Refatore os testes já realizados aplicando o método beforeEach().

    Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.

    Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.

    Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
    
    Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.