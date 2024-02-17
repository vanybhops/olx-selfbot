import { apiUrl } from "../defaultGateway/global";
import { Session } from "../session/Session";
import { csrf } from "./csrf";

async function login(username:string, password:string, session:Session):Promise<string> {
    await csrf(session)
    let paresdLoginBody = JSON.stringify({
        "username":username,
        "password":password,
        "device_name":"web"
    })
    let data = await session.post(`${apiUrl}/auth/login`,{"Content-Type":"application/json"},"json",paresdLoginBody)
    return data?.token||"error";
}
export { login }