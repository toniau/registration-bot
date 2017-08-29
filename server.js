var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

// open FF
var driver = new webdriver.Builder().forBrowser('firefox').build();
// delete all cookies
driver.manage().deleteAllCookies();

// navigate to my test site
driver.get('https://toniau.github.io/registration-bot/');
// fill out form
driver.findElement(By.id('firstName')).sendKeys('Toeknee');
driver.findElement(By.id('lastName')).sendKeys('Ow');
driver.findElement(By.css('#food > option:nth-child(3)')).click();

// wait
driver.sleep(4000);

// click submit button
driver.findElement(By.id('submitBtn')).click();
