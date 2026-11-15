export class HomePage {
  constructor(page) {
    this.page = page;

    this.mainHeading = page.getByRole('heading', { name: 'Test Automation Practice' });
    this.availableExamplesHeading = page.getByRole('heading', { name: 'Available Examples' });
    this.homeLink = page.getByRole('link', { name: 'Home' });

    this.abTestingLink = page.getByRole('link', { name: 'A/B Testing' });
    this.addRemoveElementsLink = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.autocompleteLink = page.getByRole('link', { name: 'Autocomplete' });
    this.basicAuthLink = page.getByRole('link', { name: 'Basic Auth' });
    this.brokenImagesLink = page.getByRole('link', { name: 'Broken Images' });
    this.challengingDomLink = page.getByRole('link', { name: 'Challenging DOM' });
    this.checkboxesLink = page.getByRole('link', { name: 'Checkboxes' });
    this.contextMenuLink = page.getByRole('link', { name: 'Context Menu' });
    this.disappearingElementsLink = page.getByRole('link', { name: 'Disappearing Elements' });
    this.dragAndDropLink = page.getByRole('link', { name: 'Drag and Drop', exact: true });
    this.dragAndDropCirclesLink = page.getByRole('link', { name: 'Drag and Drop Circles' });
    this.dropdownLink = page.getByRole('link', { name: 'Dropdown' });
    this.dynamicContentLink = page.getByRole('link', { name: 'Dynamic Content' });
    this.dynamicControlsLink = page.getByRole('link', { name: 'Dynamic Controls' });
    this.dynamicLoadingLink = page.getByRole('link', { name: 'Dynamic Loading' });
    this.entryAdLink = page.getByRole('link', { name: 'Entry Ad' });
    this.exitIntentLink = page.getByRole('link', { name: 'Exit Intent' });
    this.fileDownloadLink = page.getByRole('link', { name: 'File Download', exact: true });
    this.fileUploadLink = page.getByRole('link', { name: 'File Upload' });
    this.floatingMenuLink = page.getByRole('link', { name: 'Floating Menu' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' });
    this.formAuthenticationLink = page.getByRole('link', { name: 'Form Authentication' });
    this.framesLink = page.getByRole('link', { name: 'Frames', exact: true });
    this.geolocationLink = page.getByRole('link', { name: 'Geolocation' });
    this.horizontalSliderLink = page.getByRole('link', { name: 'Horizontal Slider' });
    this.hoversLink = page.getByRole('link', { name: 'Hovers' });
    this.infiniteScrollLink = page.getByRole('link', { name: 'Infinite Scroll' });
    this.inputsLink = page.getByRole('link', { name: 'Inputs' });
    this.jqueryUiMenusLink = page.getByRole('link', { name: 'JQuery UI Menus' });
    this.javascriptAlertsLink = page.getByRole('link', { name: 'JavaScript Alerts' });
    this.javascriptOnloadErrorLink = page.getByRole('link', { name: 'JavaScript onload event error' });
    this.keyPressesLink = page.getByRole('link', { name: 'Key Presses' });
    this.largeDeepDomLink = page.getByRole('link', { name: 'Large & Deep DOM' });
    this.multipleButtonsLink = page.getByRole('link', { name: 'Multiple Buttons' });
    this.multipleWindowsLink = page.getByRole('link', { name: 'Multiple Windows' });
    this.nestedFramesLink = page.getByRole('link', { name: 'Nested Frames' });
    this.newTabLink = page.getByRole('link', { name: 'New tab' });
    this.notificationMessagesLink = page.getByRole('link', { name: 'Notification Messages' });
    this.radioButtonsLink = page.getByRole('link', { name: 'Radio Buttons' });
    this.redirectLink = page.getByRole('link', { name: 'Redirect Link' });
    this.registrationFormLink = page.getByRole('link', { name: 'Registration Form' });
    this.secureFileDownloadLink = page.getByRole('link', { name: 'Secure File Download' });
    this.shiftingContentLink = page.getByRole('link', { name: 'Shifting Content' });
    this.signUpForMailingListLink = page.getByRole('link', { name: 'Sign Up For Mailing List' });
    this.slowResourcesLink = page.getByRole('link', { name: 'Slow Resources' });
    this.sortableDataTablesLink = page.getByRole('link', { name: 'Sortable Data Tables' });
    this.statusCodesLink = page.getByRole('link', { name: 'Status Codes' });
    this.typosLink = page.getByRole('link', { name: 'Typos' });
    this.wysiwygEditorLink = page.getByRole('link', { name: 'WYSIWYG Editor' });
    this.webTablesLink = page.getByRole('link', { name: 'Web Tables' });

    this.cydeoLink = page.getByRole('link', { name: 'CYDEO' });
    this.poweredByText = this.cydeoLink.locator('..');
  }

  async goto() {
    await this.page.goto('https://the-internet-5chk.onrender.com/');
  }
}
