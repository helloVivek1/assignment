class DNCManage {
  get manageDncTitle() {
    return cy.xpath("//h1[text()='Manage DNC']");
  }
  get uploadDNCOption() {
    return cy.get('[href="/dnc/upload"]');
  }
  get formFilterCMB(){
    return cy.xpath("(//option[@label=\"Campaign\"]/..)[1]")
  }
  get searchButton(){
    return cy.get('[ng-click="search(\'\')"]')
  }
  get filterCriteria_txt(){
    return cy.get('[placeholder="Click to select"]')
  }
  get filterValue(){
    return cy.get('[data-value="GLOBAL"]')
  }
  get UpdatedFilterValue(){
    return cy.get('[data-value="2281"]')
  }
  get editOption(){
    return cy.get('.table-striped .dropdown-toggle ')
  }
  get editPencilButton(){
    return cy.get('.fa-pencil')
  }
  get tableRowIndex(){
    return cy.xpath('(//span[@class="table-index-font ng-binding"]/..)[1]')
  }
  verifyManageDNCTitle() {
    this.manageDncTitle.should("be.visible");
  }
  clickUplaodDNC() {
    this.uploadDNCOption.click();
  }

  applyFilters(data){
    this.formFilterCMB.select(data.filter,{force:true})
    this.filterCriteria_txt.eq(1).click({force:true})
    this.filterValue.should('be.visible').click()
    this.searchButton.click()
  }

  editSeconLastNumber(){
    this.editOption.eq(8).click()
    this.editPencilButton.eq(8).click()
  }

  applyUpdatedFilters(data){
    this.formFilterCMB.select(data.filter,{force:true})
    this.filterCriteria_txt.eq(1).click({force:true})
    this.UpdatedFilterValue.should('be.visible').click()
    this.searchButton.click()
  }

  validateUpdatedNumber(data){
    this.tableRowIndex.next().should('have.text',data.PhoneNumber)
  }
}
let DNCManagePageObj = new DNCManage();
export default DNCManagePageObj;
