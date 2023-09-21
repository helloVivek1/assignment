class DNCEdit{
 get campaignDropDown(){
    return cy.get('[ng-model="data.CurrentGeneralOptions.campaign_id"]')
 }
 get phoneNumber_txt(){
   return cy.get('[ng-model="data.CurrentGeneralOptions.phone_number"]')
 }
 get applyChnages_btn(){
   return cy.get('#send-email')
 }
 editNumber(data){
   this.campaignDropDown.select(data.Campaign)
   this.phoneNumber_txt.clear().type(data.PhoneNumber)
   this.applyChnages_btn.click()
 }
}
let DNCEditPageObj=new DNCEdit()
export default DNCEditPageObj