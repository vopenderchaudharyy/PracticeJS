const accountId = 144553
let accountEmail = "vopender@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


//account = 2// not allowed

accountEmail = "vopender@.com"
accountPassword = "132123232"
accountCity = "satna"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])