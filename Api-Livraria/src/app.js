import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/Index.js"

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('conexão com o banco realizado com sucesso')
})

const app = express()
app.use(express.json())
routes(app)

export default app