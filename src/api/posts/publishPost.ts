import { apiUrl } from "../../defaultGateway/global";
import { Session } from "../../session/Session";

async function uploadPost(session: Session, id:number):Promise<any> {
    return await session.post(
        `${apiUrl}/listings/${id}/publish`,
        "json",
        null
    )
}
export { uploadPost }