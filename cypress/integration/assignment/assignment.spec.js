///<reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPageObj from "../../Pages/login";
import dashboardPageObj from "../../Pages/dashboard";
import DNCManagePageObj from "../../Pages/DNCManage";
import DNCUploadingPageObj from "../../Pages/DNCUploading";
import DNCEditPageObj from "../../Pages/DNCEdit";

let DNCData;
let cookie="";
before(()=>{
  cy.fixture('uploadDNC').then((data)=>{
    DNCData=data
  })
})
after(()=>{
  cy.fixture('deleteAPIPayload').then((data)=>{
    cy.APIPOSTREQUEST(Cypress.config().deleteDataAPI,data.deleteAPIPayloadGlobal,{Cookie:cookie}).then((res)=>{
      expect(res.status).to.eql(200)
    })
    cy.APIPOSTREQUEST(Cypress.config().deleteDataAPI,data.deleteAPIPayloadAut,{Cookie:cookie}).then((res)=>{
      expect(res.status).to.eql(200)
    })
  })
})
Given("User launches application", () => {
  loginPageObj.loginApp(Cypress.config().baseUrl, Cypress.config().creds);
  dashboardPageObj.verifyLogoOnDashboard();
});

And(
  "User Navigate to {string} Dashboard from {string}",
  (listOption, MenOpt) => {
    dashboardPageObj.navigateToMenueOption(listOption, MenOpt).then((data)=>{
      cookie=data
    });
  }
);

And("User click on Upload DNC", () => {
  DNCManagePageObj.verifyManageDNCTitle();
  DNCManagePageObj.clickUplaodDNC();
});

And ("User Add Contact Numbers in DNC Upload Page",()=>{
  DNCUploadingPageObj.fillAddNumber(DNCData)
})

Then("User Apply Filters",()=>{
  DNCManagePageObj.verifyManageDNCTitle();
  DNCManagePageObj.applyFilters(DNCData)
})

And("User click on edit button of Second Last record",()=>{
  DNCManagePageObj.editSeconLastNumber()
})

And("User Update Details to be changed",()=>{
  DNCEditPageObj.editNumber(DNCData.editNumber)
})

When("User Apply updated Filters on Dnc Manage Page",()=>{
  DNCManagePageObj.verifyManageDNCTitle();
  DNCManagePageObj.applyUpdatedFilters(DNCData)
})

Then("User validate Updated Number on UI",()=>{
  DNCManagePageObj.validateUpdatedNumber(DNCData.editNumber)
})
