import app from "./app";
import config from "./config";
import { createTables, initDB } from "./db";

const main =async () =>{

try{
    await initDB()
    await createTables();
    app.listen(config.port, ()=>{
        console.log(`Server is running on port : ${config.port}`,)
    })
}catch(error){
    console.log(error);
    process.exit(1);
}

}

void main()