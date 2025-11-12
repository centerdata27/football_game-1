import cors from "cors";
import express from "express"
import gameRoutes from "./routes/gameRoutes.js"
import teamRoutes from "./routes/teamRoutes.js"

const app = express ();
const PORT = 4000;

//Middleware
app.use(cors()); //allow our middleware to use cors
app.use(express.json()); //parse incoming JSON bodies

//Route
app.use("/api/game", gameRoutes)
app.use("/api/teams", teamRoutes)




//Start Server
app.listen(PORT, ()=> console.log(`Server is Running on Port ${PORT}`))