const express = require('express');
const passport = require('passport');
const morgan  = require('morgan');
const engine = require('ejs-mate');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require("helmet");
//incializando
const app = express();
require('./database');
require('./passport/local-auth');
app.use(flash());

//settings
app.set('views', path.join(__dirname,'view'));
app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('port',process.env.PORT || 3000);
app.use(helmet());


//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret : 'mySecretSession',
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    app.locals.SignupMessage =  req.flash('SignupMessage');
    app.locals.SigninMessage =  req.flash('SigninMessage');
    app.locals.user = req.user;
    console.log(app.locals);
    next();
  });


app.use('/', require('./routes/index'));

//static files
app.use(express.static(__dirname + '/view'))



//Inciando el servidor
app.listen(app.get('port'), ()=>{
    console.log("puerto 3000");
})