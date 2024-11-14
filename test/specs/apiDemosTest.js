describe('ApiDemos App Test', function () {
    it('should open the app and navigate to Accessibility Node Provider', async () => {
        await driver.startActivity('io.appium.android.apis', '.ApiDemos');

        await driver.pause(5000);

        const accessibilityButton = await $('android=new UiSelector().text("Accessibility")');
        await accessibilityButton.click();

        const accessibilityNodeProviderButton = await $('android=new UiSelector().text("Accessibility Node Provider")');
        await accessibilityNodeProviderButton.click();

        const newPageText = await $('android=new UiSelector().textContains("Enable TalkBack and Explore-by-touch from accessibility settings")').getText();
        expect(newPageText).toContain('Enable TalkBack and Explore-by-touch from accessibility settings');
    });

    it('should fill out an example form', async () => {
        await driver.startActivity('io.appium.android.apis', '.ApiDemos');

        await driver.pause(5000);

        const accessibilityButton = await $('android=new UiSelector().text("OS")');
        await accessibilityButton.click();

        const accessibilityNodeProviderButton = await $('android=new UiSelector().text("SMS Messaging")');
        await accessibilityNodeProviderButton.click();

        const recipientField = await $('id:io.appium.android.apis:id/sms_recipient');
        if (recipientField.isDisplayed()) {
            await recipientField.setValue('5548996320902');
        }

        const contentField = await $('id:io.appium.android.apis:id/sms_content');
        if (contentField.isDisplayed()) {
            await contentField.setValue('Envio de dados de formulário');
        }

        const sendButton = await $('id:io.appium.android.apis:id/sms_send_message');
        if (sendButton.isDisplayed()) {
            await sendButton.click();
        }
    });

})
