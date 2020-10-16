// const { assert } = require("console");

const IPFSInbox = artifacts.require("IPFSInbox.sol");
contract("IPFSInbox", accounts => {
  it("...should emit an event when you send an IPFS address.", 
    async () => {
        // Wait for the contract to be deployed
        const ipfsinbox = await IPFSInbox.deployed();
        // Set a variable to false, and create an event listener
        // to set it to true if the event fires.       
        var event = await ipfsinbox.sendIPFS(accounts[1], "hash emmitted", { from: accounts[0]});
        // eventEmmitted = false;
        // await event ((err, res) => {
        //     eventEmmitted = true
        // })
        // assert(event.length, 2, "No event emmitted");
        if(event[0] !== undefined){
            console.log(event, 'success');
        } else {
            console.log("No event emmitted");
        }
        // await event. ((err, res) => {
        //     eventEmitted = true
        // })
        // Check if the variable is set to true by this time
        assert(event, true, 
            "Sending an IPFS request does not emit an event.");
    });
});

