class dashboard {
  get convoscoLogo() {
    return cy.get('[src="/images/convoso-logo-black.png"]');
  }
  verifyLogoOnDashboard() {
    this.convoscoLogo.should("be.visible");
  }
  navigateToMenueOption(listOption, MenOpt) {
    cy.intercept('**/dnc/options').as('dncApi')
    cy.xpath("//span[text()='$var']/..".replace("$var", MenOpt)).click();
    cy.xpath("//a[text()='$var']".replace("$var", listOption))
      .eq(0)
      .should("be.visible")
      .click();
    return cy.wait('@dncApi').then((res)=>{
      return res.request.headers.cookie
    })
  }
}
let dashboardPageObj = new dashboard();
export default dashboardPageObj;
