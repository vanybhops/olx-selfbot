import { username, password } from "./config";
import { Client } from "./src/client/Client";
(async () => {
    let client = new Client();
    client.login(username, password)
    console.log(await client.reportPost("1337", "nig","1336"))
})()