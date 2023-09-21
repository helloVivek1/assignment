Feature: Assignment

  Scenario: Assignment
    Given User launches application
    And User Navigate to 'DNC' Dashboard from 'Call Center'
    And User click on Upload DNC
    And User Add Contact Numbers in DNC Upload Page
    And User Navigate to 'DNC' Dashboard from 'Call Center'
    Then User Apply Filters
    And User click on edit button of Second Last record
    And User Update Details to be changed
    And User Navigate to 'DNC' Dashboard from 'Call Center'
    When User Apply updated Filters on Dnc Manage Page
    Then User validate Updated Number on UI
