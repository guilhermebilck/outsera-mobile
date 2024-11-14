# Mobile Testing Project with Appium

Este projeto contém testes automatizados utilizando o WebdriverIO como framework de teste e o Appium como plataforma para executar testes móveis Android.

## Tecnologias Utilizadas

- Appium: Framework para automação de testes móveis Android e iOS
- WebDriverIO (WDIO): Framework de teste automatizado com suporte a web e mobile
- Mocha: Runner de testes JavaScript com framework BDD

## Configuração

Para configurar o ambiente de desenvolvimento:

1. Instale as dependências necessárias:
   
   npm install

3. Certifique-se de ter Appium instalado e rodando no seu sistema.

4. Configure o arquivo `wdio.conf.js` com as configurações específicas do seu dispositivo e aplicativo, no meu caso eu usei:
   - UDI (Unique Device Identifier): emulator-5554
   - Nome do dispositivo: nightwatch-android-11
   - Pacote do app: io.appium.android.apis
   - Atividade: .ApiDemos

## Executando os Testes

Para executar todos os testes:

  npx wdio run wdio.conf.js

## Tarefas 1 e 2

- A tarefa 1 está contemplada no cenário "should open the app and navigate to Accessibility Node Provider".
- A tarefa 2 est´á contemplada no cenário "should fill out an example form".

## Resultados

Os resultados podem ser observados através de gravações na pasta "Resultados" na raiz do projeto.
