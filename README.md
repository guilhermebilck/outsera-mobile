# Mobile Testing Project with Appium

Este projeto contém testes automatizados utilizando o WebdriverIO como framework de teste e o Appium como plataforma para executar testes móveis Android.

## Tecnologias Utilizadas

- Appium: Framework para automação de dispositivos móveis
- WebDriverIO (WDIO): Ferramenta de automação web para Node.js
- Mocha: Framework de teste comportamental

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
