import { apiUrl } from "../defaultGateway/global";
import { Session } from "../session/Session";

async function csrf(session:Session) {
    await session.get( `${apiUrl}/sanctum/csrf-cookie` )
    let token = session.cookies["XSRF-TOKEN"]
    session.globalHeaders['X-Xsrf-Token'] = token
}
export {csrf}