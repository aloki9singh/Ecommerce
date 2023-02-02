const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
////Handling Uncaught Exception
//We make here because it is starting so that no console before it///uncaught error like  if we print console.log(youtube)
// console.log(youtube)

process.on("uncaughtException",(err)=>{

    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exceptiion`)
    process.exit(1)
})


//config
dotenv.config({ path: "./backend/config/config.env" });
//connection
const server = app.listen(process.env.PORT, () => {
  connectDatabase();

  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
// console.log(youtube)



//unhandle promise rejection servercrash  when link error in .env /main mongo db /below code is sufficient

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)
    server.close(()=>{
        process.exit(1)
    })
})

