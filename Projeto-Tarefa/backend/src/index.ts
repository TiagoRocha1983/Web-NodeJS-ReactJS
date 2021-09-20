import "reflect-metadata";
import {creatConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

  
    const app = express();
    creatConnetion()

    app.use(bodyParser.json());
    app.use(routes)

    app.listen(3333)

  
