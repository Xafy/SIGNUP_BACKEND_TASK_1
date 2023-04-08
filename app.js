const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express()

const corsOptions = {
    credentials: true,
    origin: [
        "http://localhost:8081",
        "http://localhost:4200"
    ]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.get('/', (req, res)=>{ res.json({message: "Test App"})});
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});

const db = require("./models/index");

db.sequelize.authenticate({force: true})
            .then(()=>console.log("sequlize connected successfuly"))
            .catch(err=>console.log('Unable to connect to the database:', err))

db.sequelize.sync({force: true})
            .then(()=>console.log("synced successfuly"))
            .catch(err=>console.log('Unable sync:', err));