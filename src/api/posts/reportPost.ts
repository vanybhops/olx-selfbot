import { apiUrl } from "../../defaultGateway/global";
import { Session } from "../../session/Session";

async function reportPost(postId: string, description: string, category_id: string, session: Session): Promise<any> {

    return await session.post(`
        ${apiUrl}/listings/${postId}/submit-report`,
        "json",
        JSON.stringify({
            "reason": "Pogrešna kategorija",
            "explanation": description,
            "category_id": category_id
        }),
        { "Content-Type": "application/json" },
    )

}
export { reportPost }

