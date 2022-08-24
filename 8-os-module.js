const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

const hours = new Date(os.uptime() * 1000).toISOString().substring(11, 19)

console.log(`The System Uptime is ${os.uptime()} seconds or ${hours} (HH:MM:SS)`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);