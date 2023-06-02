import bcryptjs from 'bcryptjs';
import {connection} from '../../database/db';
import { tokenSign } from '../../utils/tokenManagment';

export const showLogin = (req, res)=>{
    res.render('login');
} 

export const login = async(req, res)=>{
    try {
        const jsonSign = await tokenSign(req.body)
    } catch (err) {
        
    }

    // const username = req.body.username;
    // const password = req.body.password;
    // let passwordHash = await bcryptjs.hash(password,8);

    // if(username && password){
    //     connection.query('SELECT * FROM user WHERE username = ?',[username], async(err, result)=>{
    //         if(result.length == 0 || !(await bcryptjs.compare(password, result[0].password))){
    //             res.render('login',{
    //                 alert:true,
    //                 alertTitle: "Error",
    //                 alertMessage:"Usuario y/o contraseñia incorrectas",
    //                 alertIcon:"error",
    //                 showConfirmButton:true,
    //                 timer:false,
    //                 ruta:'login'
    //             })
    //         }
    //         else{
    //             req.session.loggedin = true;
    //             req.session.username = result[0].username;
    //             res.render('login',{
    //                 alert:true,
    //                 alertTitle: "Conexion exitosa",
    //                 alertMessage:"!lOGIN CORRECTO!",
    //                 alertIcon:"success",
    //                 showConfirmButton: false,
    //                 timer:1500,
    //                 ruta:''
    //             })
    //         }
    //     })
    // }
    // else{
    //     res.render('login',{
    //         alert:true,
    //         alertTitle: "Advertencia",
    //         alertMessage:"LLene los campos solicitados",
    //         alertIcon:"warning",
    //         showConfirmButton: true,
    //         timer:false,
    //         ruta:'login'
    //     })
    // }
}