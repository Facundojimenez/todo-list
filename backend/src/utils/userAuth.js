const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const { getUserByIdService,searchUserByUsernameService, addUserService} = require("../services/usersServices")

const SALT_ROUNDS = 10;

passport.use("local-login", new LocalStrategy((username, password, done) => {
     const buscarUser = async (username) =>{
         const user = await searchUserByUsernameService(username);
         
         if(!user){ ///no se encontró el usuario
            return done({message: "USER_NOT_FOUND"}, null);
        }

        bcrypt.compare(password, user.password, function(err, result) {
            if(!result){ ///no coincide la contraseña
                done({ message: "WRONG_PASSWORD_OR_USER"}, false)
                return;
            }

            done(null, user);
        });

    }

    buscarUser(username);
}))

passport.use("local-signup", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session: true,
    passReqToCallback: true
}, (req, username, password, done) => {
    const buscarUser = async (username) =>{
        
        const user = await searchUserByUsernameService(username);
        if(user){ ///el usuario ya existe
            return done("USER_EXISTS", null)
        }

        bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
            const newUser = {
                ...req.body,
                password: hash
            }
            const createdUser = await addUserService(newUser);
    
            done(null, createdUser)
        });
    }

    buscarUser(username)
}))

passport.serializeUser((user, done) => {
    console.log("serialize: ")
    done(null, user);
})

passport.deserializeUser(async (id, done) => {
    const user = await getUserByIdService(id);
    
    console.log("deserialize: ")
    console.log(user)
    done(null, user);
})

 /// --- Funciones auxiliares
 const auth = (req, res, next) =>{
    
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect("/login/error")
}

const login = (req, res, next)  => {

    const handleLogin = passport.authenticate("local-login", (err, user) => {

        console.log(user)
        if(err){
            next()
            return res.status(400).json({
                message: `No se pudo iniciar sesión: ${err.message}`
            })
        }

        if(!user){
            return res.status(500).json({
                message: "No se pudo iniciar sesion: ERROR INESPERADO"
            })
        }

        res.status(200).json({
            message: "Se ha iniciado sesion correctamente"
        })


    });

    // console.log(res)

    return handleLogin(req, res, next);
}

const signup = (req, res) => {
    const handleSignup = passport.authenticate("local-signup", (err, user) => {
        if(err){
            return res.status(400).json({
                message: `No se pudo crear el usuario: ${err.message}`
            })
        }

        if(!user){
            return res.status(500).json({
                message: "No se pudo crear el usuario: ERROR INESPERADO"
            })
        }

        res.status(200).json({
            message: "Usuario creado exitosamente"
        })

        req.login(user)
    })
    return handleSignup(req, res);
}

module.exports = {
    auth,
    login,
    signup
}