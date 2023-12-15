import express, {Request, Response, Application} from "express"
import "dotenv/config";
import cors from 'cors'
import bodyParser from "body-parser";

import {userRoutes} from "./src/api_v1/routes/user-routes";
import { authUserRequest } from "./src/api_v1/routes/auth-user-reqs-routes";

const app:Application = express();
app.use(cors());
app.use(bodyParser.json())


const PORT  = process.env.PORT || 5176;

app.get("/", (req:Request, res:Response) => {
    res.send("running");
})


app.use('/user', userRoutes);

//authenticated user reqs
app.use("/auth-user", authUserRequest);


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
 
})