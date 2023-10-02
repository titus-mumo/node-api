const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const initialize = (passport) => {
    const authenticateUser = async(email, password, done) => {
        const user = getUserByEmail(email)
        if(user == null){
            return done(null, false, {message:"No user with that email"})
        }
        try{
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            }else{
                return done(null, false, {message:'Wrong password'})
            }
        }catch(e){
            return done(e)
        }
    }
    passport.use(new LocalStrategy({email:email}), authenticateUser)
}