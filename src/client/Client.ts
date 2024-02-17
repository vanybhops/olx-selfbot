import { login } from "../api/Login";
import { reportPost } from "../api/reportPost";
import { uploadPost } from "../api/uploadPost";
import { Session } from "../session/Session";
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
    async uploadPost(){
        /*placeholder*/
    }
    async reportPost(postId:string, description:string, category_id: string){
        reportPost(postId, description, category_id, this.session)
    }
}
export { Client }