const {Router} = require("express");
const {getAllUsers, getUserById, searchUserByUsername, addUser} = require("../controllers/usersControllers")
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const { getUserByIdService,searchUserByUsernameService, addUserService} = require("../services/usersServices")
const router = Router();

const SALT_ROUNDS = 10;


//--------------- PASS PORT ---

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
    done(null, user);
})

const auth = (req, res, next) =>{
    
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect("/login/error")
}

// ------ ROUTES ----

router.get("/" , auth, getAllUsers);
router.get("/search", searchUserByUsername);
router.get("/:id", getUserById);
router.post("/", addUser);


router.post("/login", passport.authenticate("local-login", { failureRedirect: "/loginTest/failed", failureMessage: true}), (req, res) => {
    res.status(200).json({
        message: "Se ha iniciado sesion correctamente",
        user: req.user
    })
});

router.post("/signup", passport.authenticate("local-signup", { failureRedirect: "/signupTest/failed", failureMessage: true}), (req, res) =>{
    res.status(200).json({
        message: "Se ha registrado correctamente",
        user: req.user
    })
});



router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
             return next(err);
        }
        res.status(200).json({
            message: "Se ha cerrado la sesion correctamente"
        })
    });
  });

module.exports = router;