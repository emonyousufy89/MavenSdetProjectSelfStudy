$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "I want to Login with my credential",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Successfull login with valid Credential",
  "description": "",
  "id": "login-test;successfull-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be on \"Dashboard / NopCommerce News\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks logout",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User shoud be on page \"Welcome, please sign in!\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepRegister.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 3631197420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 16
    }
  ],
  "location": "StepRegister.user_opens_URL(String)"
});
formatter.result({
  "duration": 2527384797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "StepRegister.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 396334429,
  "status": "passed"
});
formatter.match({
  "location": "StepRegister.user_clicks_login_button()"
});
formatter.result({
  "duration": 3208952461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / NopCommerce News",
      "offset": 19
    }
  ],
  "location": "StepRegister.user_should_be_on(String)"
});
formatter.result({
  "duration": 18619494,
  "status": "passed"
});
formatter.match({
  "location": "StepRegister.user_clicks_logout()"
});
formatter.result({
  "duration": 1079807018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, please sign in!",
      "offset": 23
    }
  ],
  "location": "StepRegister.user_shoud_be_on_page(String)"
});
formatter.result({
  "duration": 11714275,
  "status": "passed"
});
formatter.match({
  "location": "StepRegister.user_close_the_browser()"
});
formatter.result({
  "duration": 2167556348,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Login with user Credential",
  "description": "",
  "id": "login-test;login-with-user-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be on \"Dashboard / NopCommerce News\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks logout",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User shoud be on page \"Welcome, please sign in!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-test;login-with-user-credential;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 27,
      "id": "login-test;login-with-user-credential;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 28,
      "id": "login-test;login-with-user-credential;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "Admin"
      ],
      "line": 29,
      "id": "login-test;login-with-user-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Login with user Credential",
  "description": "",
  "id": "login-test;login-with-user-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be on \"Dashboard / NopCommerce News\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks logout",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User shoud be on page \"Welcome, please sign in!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepRegister.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1335635993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 16
    }
  ],
  "location": "StepRegister.user_opens_URL(String)"
});
formatter.result({
  "duration": 1852667059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "StepRegister.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 371587669,
  "status": "passed"
});
formatter.match({
  "location": "StepRegister.user_clicks_login_button()"
});
formatter.result({
  "duration": 3542107830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / NopCommerce News",
      "offset": 19
    }
  ],
  "location": "StepRegister.user_should_be_on(String)"
});
formatter.result({
  "duration": 18418136,
  "status": "passed"
});
formatter.match({
  "location": "StepRegister.user_clicks_logout()"
});
formatter.result({
  "duration": 1024772794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, please sign in!",
      "offset": 23
    }
  ],
  "location": "StepRegister.user_shoud_be_on_page(String)"
});
formatter.result({
  "duration": 10553308,
  "status": "passed"
});
formatter.match({
  "location": "StepRegister.user_close_the_browser()"
});
formatter.result({
  "duration": 2165262914,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login with user Credential",
  "description": "",
  "id": "login-test;login-with-user-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"Admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be on \"Dashboard / NopCommerce News\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks logout",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User shoud be on page \"Welcome, please sign in!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepRegister.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1278697053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 16
    }
  ],
  "location": "StepRegister.user_opens_URL(String)"
});
formatter.result({
  "duration": 2039785301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "Admin",
      "offset": 60
    }
  ],
  "location": "StepRegister.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 367746185,
  "status": "passed"
});
formatter.match({
  "location": "StepRegister.user_clicks_login_button()"
});
formatter.result({
  "duration": 389929434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / NopCommerce News",
      "offset": 19
    }
  ],
  "location": "StepRegister.user_should_be_on(String)"
});
formatter.result({
  "duration": 23726005,
  "error_message": "java.lang.AssertionError: expected [Your store. Login] but found [Dashboard / nopCommerce administration]\n\tat org.testng.Assert.fail(Assert.java:97)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:575)\n\tat org.testng.Assert.assertEquals(Assert.java:585)\n\tat com.boston.steps.StepRegister.user_should_be_on(StepRegister.java:55)\n\tat ✽.And User should be on \"Dashboard / NopCommerce News\"(register.feature:21)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepRegister.user_clicks_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, please sign in!",
      "offset": 23
    }
  ],
  "location": "StepRegister.user_shoud_be_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepRegister.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});