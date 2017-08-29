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


/* To my HackRU friendos, you might want to
 * capture screenshot when you encounter error.
 * How to do that:
 *
 * 1) Include fs module
 *    var fs = require('fs');
 *
 * 2) Take screenshot
 *    driver.takeScreenshot().then(function(data) {
 *	     fs.writeFileSync('img.png', data, 'base64');
 *    });
 * 
 * It saves to your current directory.
 * Remember to use date/timestamp or something
 * to change image name each time so you don't overwrite!
 */
