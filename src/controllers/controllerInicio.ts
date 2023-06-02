import { render } from "ejs";

export const showPrincipal = (req, res) =>{
    if(req.session.loggedin){
        render('index',{
            login: true,
            username: req.session.username
        })
    }
    else{
        render('index',{
            login: false,
            username: 'Debe iniciar sesion.'
        })
    }
}

export const endSetion = (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    })
}

export const controller = {
    showPrincipal,
    endSetion
}