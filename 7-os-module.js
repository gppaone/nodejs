const os = require('os');

// current user
const user = os.userInfo();
console.log(user);

// uptime in seconds
console.log(`The system update is: ${os.uptime()}`);

// OS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);