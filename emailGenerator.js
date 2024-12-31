const domains = [
    "example.com", "test.com", "mail.org", "randomsite.net", 
    "demo.io", "myemail.com", "fakemail.net", "temporary.org",
    "webmail.co", "inbox.me", "samplemail.info", "testdomain.xyz"
  ];
  
  function generateEmail(name) {
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    // Randomly choose an email format
    const formats = [
      `${name.toLowerCase().replace(" ", ".")}@${domain}`,         // first.last@example.com
      `${name.toLowerCase().replace(" ", "_")}@${domain}`,         // first_last@example.com
      `${name.toLowerCase().split(" ")[0]}${Math.floor(Math.random() * 100)}@${domain}`, // firstXX@example.com
      `${name.toLowerCase().split(" ")[0]}_${name.toLowerCase().split(" ")[1] || "user"}@${domain}`, // first_last@example.com
      `${name.toLowerCase().split(" ")[0]}${name.toLowerCase().split(" ")[1] || ""}@${domain}` // firstlast@example.com
    ];
  
    const email = formats[Math.floor(Math.random() * formats.length)];
    return email;
  }
  
  module.exports = generateEmail;
  