import { apiUrl } from "../../defaultGateway/global";
import { Session } from "../../session/Session";
async function postImage(imageUrl: string, id: number, session: Session): Promise<Response> {
    const response = await session.get(imageUrl, {}, null);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    const formData = new FormData();
    formData.append('images[]', blob, 'image.jpg');
    formData.append("primary", "0");
    return session.post(
        `${apiUrl}/listings/${id}/image-upload`,
        "json",
        formData,
    )
}
export { postImage }