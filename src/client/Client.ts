import { login } from "../api/Login";
import { reportPost } from "../api/posts/reportPost";
import { publishPost } from "../api/posts/publishPost";
import { Session } from "../session/Session";
import { createPost } from "../api/posts/createPost";
class Client {
    private session: Session;
    private logginSuccessful: any;
    private loginFailed: any;
    private loginPromise:Promise<any> = new Promise<void>((resolve, reject) => {
        this.logginSuccessful = resolve
        this.loginFailed = reject
    });
    constructor() {
        this.session = new Session();
    }
    async login(username:string, password:string){
        let loginResponse = await login(username,password,this.session)
        if (loginResponse=="error") {
            this.loginFailed()
            this.loginPromise.catch(_=>{
                throw new Error("Login failed\nwrong username or password");
                
            })
        }
        this.session.globalHeaders.Authorization = "Bearer " + loginResponse
        this.logginSuccessful("done")
    }
    async publishPost( id:number ){
        await this.loginPromise;
        return publishPost(this.session, id)
    }
    async createPost(){
        await this.loginPromise;
        return createPost(this.session, {})
    }
    async reportPost(postId:string, description:string, category_id: string){
        await this.loginPromise;
        return reportPost(postId, description, category_id, this.session)
    }
}
export { Client }
