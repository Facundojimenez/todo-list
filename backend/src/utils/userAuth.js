const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const { getUserByIdService,searchUserByUsernameService, addUserService} = require("../services/usersServices")

const SALT_ROUNDS = 10;

 passport.use("local-login", new LocalStrategy((username, password, done) => {
     const buscarUser = async (username) =>{
         const user = await searchUserByUsernameService(username);
         
         if(!user){ ///no se encontró el usuario
            console.log("user not found")
            done(null, false);
            return;
        }

        bcrypt.compare(password, user.password, function(err, result) {
            if(!result){ ///no coincide la contraseña
                console.log("contraSEña incorrecta")
                done(null, false)
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
    passReqToCallback: true
}, (req, username, password, done) => {
    const buscarUser = async (username) =>{
        
        const user = await searchUserByUsernameService(username);
        if(user){ ///el usuario ya existe
            done(null, false);
            return;
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
    done(null, user);
})

passport.deserializeUser(async (id, done) => {
    const user = await getUserByIdService(id);
    done(null, user);
})

 /// --- Funciones auxiliares
 const auth = (req, res, next) =>{
    
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect("/login/error")
}

const login = (req, res) => {
    // console.log(req)
    // console.log(res)
    const handleLogin = passport.authenticate("local-login", {
        successRedirect: "/api/users",
        failureRedirect: '/login/error' 
    }, () => {
        res.redirect("/api/users")
        return;
    });
    return handleLogin(req, res);
}

const signup = (req, res) => {
    const handleSignup = passport.authenticate("local-signup", {
        successRedirect: "/api/users",
        failureRedirect: "/signup/error"
    })
    return handleSignup(req, res);
}

module.exports = {
    auth,
    login,
    signup
}