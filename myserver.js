const express = require("express");
const userRouter = require("./routes/users");

const app = express();

app.set('view engine', 'ejs');
app.use(showurl);


app.get('/', (req, res) => {
   console.log("Here");
   res.render('index');
})


app.use('/users', userRouter)
function showurl (req, res, next) {
   console.log(req.originalUrl)
   next()
}


app.listen(3000);