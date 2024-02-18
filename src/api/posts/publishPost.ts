import { apiUrl } from "../../defaultGateway/global";
import { Session } from "../../session/Session";

async function publishPost(session: Session, id:number):Promise<any> {
    return await session.post(
        `${apiUrl}/listings/${id}/publish`,
        "json",
        null
    )
}
export { publishPost }