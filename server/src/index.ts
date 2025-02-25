import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import helmet from "helmet"
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboardRoutes"
import expenseRoutes from "./routes/expenseRoutes"

dotenv.config()
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app.get("/hello",(req,res) => {
//     res.send("Hello")
//     console.log("hello")
// })

app.use("/dashboard", dashboardRoutes)
app.use("/expense", expenseRoutes);

const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})