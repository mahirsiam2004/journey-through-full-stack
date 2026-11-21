import path from "node:path";
import fs from "fs"

 
 const filepath = path.join(process.cwd(),"./src/database/db.json")
 
 export const productService =()=>{
    console.log(process.cwd())

    const result = fs.readFileSync(filepath)
    console.log(result)
 }