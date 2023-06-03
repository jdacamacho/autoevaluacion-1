import bcryptjs from 'bcryptjs';
import {connection} from '../../database/db';
import { tokenSign } from '../../utils/tokenManagment';
import { comparePassword, encryptPassword } from '../../utils/passwordHandler';

export const showLogin = (req, res)=>{
    res.render('login');
} 

export const login = async(req, res)=>{
    console.log(req);
    const username = req.body.username;
    const password = req.body.password;
    let passwordHash = await encryptPassword(password);

    try{
        connection.query('SELECT * FROM user WHERE username = ?',[username], 
            async(err, result)=>{
                console.log("RESULTADO\n" + result)
                console.log("\nERR\n" + result)
                if(result && !comparePassword(passwordHash, result[0].password) ){
                    
                    req.session.loggedin = true;
                    req.session.username = result[0].username;
                    return res.json({
                            data: result,
                            status: "SUCCESS"
                    })
                }
                return res.json({
                    data: err || result,
                    status: "ERROR"
                })
        })

    }catch(err){
        return res.json({
            data: err,
            status: "ERROR"
        })
    }
}