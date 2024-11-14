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
});
