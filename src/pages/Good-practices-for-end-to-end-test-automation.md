---
title: "Good practices for end-to-end test automation"
date: "2020-03-31"
excerpt: "Good practices to follow when developing an end-to-end test automation framework."
---

1.	Don’t drive testing entirely through the user interface. Unit tests and Integration tests need to exist before developing user interface tests.
2.	Create the Build/Test/Deploy pipeline in early stages (i.e. Continuous Integration or Continuous Delivery). Avoid triggering automation tests manually.
3.	Instead of jumping into automating each application page, take a step back; Look at the layers of the application. See what functionalities are actually important and how much time and value one saves by automating them. Focus on automating the most important part of the software. One approach is to do this at the story level what some call a minimum marketable feature.
4.	Don’t Keep user interface tests separate and distinct from development. Don’t wait until the entire software is developed.
5.	Keep functional, performance and loads tests separate from each other. They should not be run together.
6.	Create Small, Atomic, Autonomous Tests. Do not put too many asserts or expect.
7.	Use Build IDs, Tags, and Names to identify tests.
8.	Use Declarative Test Scenarios to identify tests; all information that the business cares about. i.e.
•	Given I am on the Login Page
•	When I sign in with correct credentials
•	Then I should see a welcome message
9.	Consider creating command-line parameters to speed up testing (i.e. Database commands for inserting test data). Don’t Set up test data through the user interface; It is slow and valueless.
10.	Tests need to be able to run against different environments without breaking (i.e. Tests cannot depend on one set of data to work) That said we can always insert test data to the database as needed for testing.
11.	Tests need to start in a known state. (i.e. Home page with user signed out)
12.	Tests should be responsible for managing their own data (i.e. If a test requires some data to exist it should create itself or verify that exists) 
13.	For finding elements, avoid XPath expressions like //body/div/div/*[@class="someClass"] or CSS selectors like #content .wrapper .main where possible. With small changes to the HTML (like re-order contents) they will no longer work. Instead use findElement(By.id("someId")); or driver.findElement(By.name("someName"));
14.	Use Explicit Waits where possible. i.e. wait up to 2 seconds for a button to become clickable.
15.	Use new Accounts for Each Test. Reusing test accounts is an antipattern. That said you can use existing test accounts created as part of test data.

References:
1.	https://techbeacon.com/app-dev-testing/6-common-test-automation-mistakes-how-avoid-them
2.	https://wiki.saucelabs.com/display/DOCS/_best_practices