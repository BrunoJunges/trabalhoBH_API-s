console.clear()
import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const port : string | undefined = process.env.IP_SERVIDOR;

if (!port) {
    throw new Error("port não definida");
}else {

    app.listen(port, () => console.log('rodando na port ' + port));


}


