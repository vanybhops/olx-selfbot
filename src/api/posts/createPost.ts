import { apiUrl } from "../../defaultGateway/global";
import { Session } from "../../session/Session";

async function createPost(session: Session, body:any): Promise<any> {

    return await session.post(
        `${apiUrl}/listings`,
        "json",
        body,
        {
            "content-type": "application/json",
        }
    )
}
export { createPost }