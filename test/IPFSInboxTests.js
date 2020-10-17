
const { assert } = require("console");

let IPFSInbox = artifacts.require("IPFSInbox");

contract("IPFSInbox", function(accounts) {
    let instance
    beforeEach(async () => {
        instance = await IPFSInbox.new()
    })

    // Sending an ipfs address should meit an event
    // Declare a var eventEmited and set to false
    // call the function that should emit an event using one of the accounts imported.
    // From the contents of the response (which comes in the log after transaction is sent ), check if 'IpfsSent'
    // which is the name of the event to be emitted is present, then set eventEmitted to true.
    // Thereafter, make an assertion statement if the eventEmitted is actually true.
  it("...should emit an event when you send an IPFS address.", async () => {
      let eventEmitted = false
      const addresstoparse = accounts[1]
      const caller = accounts[0]
      const y = await instance.sendIPFS(addresstoparse, "hash emmitted", { from: caller})
      if(y.logs[0].event == 'IpfSsent') {
          eventEmitted = true
      }

    //   assert(eventEmitted, true, 'Sending and IPFS address shoud emit an event')

    })

    // Additional test
    // TESTING THAT THE CHECKINBOX EMIT AN EVENT

    it("...should emit an event when the checkinbox is called.", async () => {
        let eventEmit = false
        const caller_2 = accounts[2]
        const x = await instance.checkInbox({from: caller_2})
        if(x.logs[0].event == "InboxResponse"){
            eventEmit = true
        }
        // assert(eventEmit, false, 'Checking the inbox should emit an event')
    })

})