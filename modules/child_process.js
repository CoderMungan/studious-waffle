const { spawn, exec } = require("child_process")

// cli islemleri icin - terminalden islemleri yapmak icin

const otherJs = exec('node path.js')
const myEcho = spawn('sh', ["-c", 'echo Hello World!'])

myEcho.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})
// if have a error.
myEcho.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

myEcho.on('close', (code, signal) => {
  console.log(`child process exited with code ${code} and signal ${signal}`)
})

otherJs.stdout.on('data', (data) => {
  console.log(`stdout for the other js file: ${data}`)
})


