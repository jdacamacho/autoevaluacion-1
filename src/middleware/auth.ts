import { verifyToken } from "../utils/tokenManagment";

export const checkAuth = async(req, res: Response, next: () => void) => {
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await verifyToken(token);

    console.log(tokenData);
    if(){
        
    }
    next();
}