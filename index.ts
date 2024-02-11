import { username, password } from "./config";
import { Client } from "./src/client/Client";
(async () => {
    let client = new Client();
    client.login(username, password)
    await client.uploadPost()
})()