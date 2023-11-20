const express = require('express')

const transactinRoutes = require('./route/transaction_data.routes')
const app = express()

// app.use(
//     cors({
//       origin: "*",
//       methods: ["READ, GET, HEAD, PUT, PATCH, POST, DELETE"],
//       preflightContinue: true,
//       optionsSuccessStatus: 204,
//     })
//   );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = require('./database');


app.get("/", (request, response) => {
    return response.send("Bem-vindo")
})

app.use('/uniliver', transactinRoutes)

const PORT = process.env.PORT || 8080;

app.listen(PORT,  () => {
    console.log('Server is running on port 443')
    sequelize.authenticate().then(async () => {
        console.log("Conetado a base de dados")
        // await sequelize.sync({ alter: true })
    })
    .catch((e) => {
        console.log(e);
    })
});