class DNCUploading {
  get phoneNumber() {
    return cy.get("#number");
  }
  get selectCountry_cmb() {
    return cy.get('[ng-model="data.country_id_number"]');
  }
  get selectCampaign_cmb() {
    return cy.get('[ng-model="data.campaign_id_number"]');
  }
  get addButton() {
    return cy.get('[ng-click="addNumber()"]');
  }
  get numberAdded_msg() {
    return cy.get("[ng-show=\"uploadTextOk != ''\"]");
  }
  fillAddNumber(data) {
    this.selectCountry_cmb.select(data.country);
    this.selectCampaign_cmb.select(data.Campaign).then(() => {
      data.PhoneNumber.forEach((el) => {
        this.phoneNumber.clear().type(el);
        this.addButton.click();
        this.numberAdded_msg.should("contain", el);
      });
    });
  }
}
let DNCUploadingPageObj = new DNCUploading();
export default DNCUploadingPageObj;
