import {connection} from '../../database/db';
import bcryptjs from 'bcryptjs';
import { docenteType, userRol } from '../../models/enums';
import { User } from '../../models/User';

// USUARIO QUEMADO
export const userEjemplo: User = {
    username: "cadmesa",
    password: "Abc.123",
    name: "Carlos David",
    lastname: "Mesa Martínez",
    roles: [userRol.DECANO, userRol.DOCENTE],
    id: 123,
    gender: 'Hombre',
    studies: ''
};

export const showRegister = (req, res)=>{
    res.render('register');
} 

export const register = async(req, res)=>{
    try{
        
    }catch(err){

    }
    // const {username, email, id, password}: any = req.body;
    // let passwordHash = await bcryptjs.hash(password,8);
    // connection.query('INSERT INTO user SET ?', {identification: id,username:username,email:email,password:passwordHash}, async(err, result)=>{
    //     if(err){
    //         res.render('register',{
    //             alert: true,
    //             alertTitle: "Error",
    //             alertMessage: "Verifique los datos ingresados",
    //             alertIcon: 'error',
    //             showConfirmButton:false,
    //             timer:false,
    //             ruta:''
    //         })
    //     }
    //     else{
    //         res.render('register',{
    //             alert: true,
    //             alertTitle: "Registrado",
    //             alertMessage: "¡Registro exitoso!",
    //             alertIcon: 'success',
    //             showConfirmButton:false,
    //             timer:1500,
    //             ruta:''
    //         })
    //     }
    // })
}
