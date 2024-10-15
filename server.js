const {exec} = require('child_process')
const { stdout, stderr } = require('process')
const date = new Date()
const day = date.toLocaleDateString().replace(/[/]/g, ".")

//const test = (`tcpdump -w ${day}.pcap`)
//console.log(test)
//console.log(day)
exec (`tcpdump arp -U -w "${day}".pcap`, (err, stdout, stderr) => {
    if (err) {
        res.err('Command tidak dapat dijalankan')
        return
    }

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
})
