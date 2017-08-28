var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

// open FF
var driver = new webdriver.Builder().forBrowser('firefox').build();
// delete all cookies
driver.manage().deleteAllCookies();

// navigate to my test site
driver.get('toniau.github.io/registration-bot');
// fill out form
driver.findElement(By.id('firstName')).sendKeys('Toeknee');
driver.findElement(By.id('lastName')).sendKeys('Ow');
driver.findElement(By.css('#food > option:nth-child(3)')).click();