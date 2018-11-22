var client = require('webdriverio').remote({
    user: "madhu.mattangi",
    key: "cd60e905-9262-4d70-9897-d4ba6606e936",   
    host: "ondemand.saucelabs.com",
    port: 80,
    logLevel: "silent",
    desiredCapabilities: {  
        browserName: 'chrome',
        platform: 'Windows 7',
        version: '43.0'
    }
});
 
client
    .init()
    // .url('http://saucelabs.com/test/guinea-pig')
    .url('https://drivers.lexus.com/lexusdrivers/')
    .getTitle().then(function (title) {
        console.log("title is: " + title);
    })
    .end();