const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { getUserByIdService,searchUserByUsernameService, addUserService} = require("../services/usersServices")


 passport.use("local-login", new LocalStrategy((username, password, done) => {
    const buscarUser = async (username) =>{
        const user = await searchUserByUsernameService(username);
        
        if(!user){ ///no se encontró el usuario
            done(null, false);
            return;
        }

        bcrypt.compare(password, user.password, function(err, result) {
            if(!result){ ///no coincide la contraseña
                done(null, false)
                return;
            }

            done(null, user);
        });

    }

    buscarUser(user);
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

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            const newUser = {
                ...user,
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

    res.redirect("/login")
}

const login = () => {
    passport.authenticate('local', {
         failureRedirect: '/login' 
    });
}

const signup = () => {
    passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/signup/error"
    })
}

module.exports = {
    auth,
    login,
    signup
}