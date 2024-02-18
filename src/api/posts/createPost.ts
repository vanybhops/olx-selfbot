import { apiUrl } from "../../defaultGateway/global";
import { Session } from "../../session/Session";

async function createPost(session: Session, body:any): Promise<any> {

    return await session.post(
        `${apiUrl}/listings`,
        {
            "content-type": "application/json",
        },
        "json",
        body
    )
}
export { createPost }