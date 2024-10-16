const {exec} = require('child_process')
const { stdout, stderr } = require('process');
const { start } = require('repl');
const cron = require('node-cron');

//const test = (`tcpdump -w ${day}.pcap`)
// console.log(date)
const scriptCaptureArp = function() {
    const date = new Date().getUTCDate()
    const hours = new Date().getHours()
    const months = new Date().getMonth()
    const years = new Date().getFullYear()
    const Seconds = new Date().getSeconds()
    const NameFile = (`${hours}H-${date}-${months}-${years}`)
    exec (`tcpdump arp -U -w ./packet/${NameFile}.pcap`, (err, stdout, stderr) => {
    if (err) {
        res.err('Command tidak dapat dijalankan')
        return
    }

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
})
}

cron.schedule('* 0 * * * *', () => {
    scriptCaptureArp()    
}, {
    timezone: "Asia/Jakarta"
});

scriptCaptureArp()
