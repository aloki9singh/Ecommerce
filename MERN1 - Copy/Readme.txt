   ## To open in VS code : -

          Step1 :-    cmd enter
          Step2 :-     code .  enter

       ## Backend

          server.js
          app.js

          npm init
          set entrypoint any thing--/backend/server.js

          npm i express mongoose dotenv nodemon

          setting up PORT
          .env config (see way)

          const dotenv = require("dotenv")

dotenv.config({path:"./backend/config/config.env"})
      app.js

            const express = require("express");
            const app = express();
            const Products=require("./Routes/productRoute")
            app.use(express.json())


            app.use("api/v1",Products)
            module.exports = app


-------------
Controllers and routes
Controllers  --->ProductController----

               
            const GetAllProducts= (req,res)=>{

               res.status(200).json({message:"Route is working Fine"})
            }




            module.exports=GetAllProducts


Routes----->ProductRoute.js

                        const express = require ("express")
                        const GetAllProducts = require("../controllers/productController")

                        const router = express.Router()


                        router.route("/products").get(GetAllProducts)

                        module.exports=router




Models
ProductModel
images have public id and url
cloudnary



Note:--- trim :true in schema tells---
116


It's basically there to ensure the strings you save through the schema are properly trimmed.
 If you add { type: String, trim: true } to a field in your schema, then trying to save strings 
 like "  hello", or "hello ", or "  hello ", would end up being saved as "hello" in Mongo - i.e.
  white spaces will be removed from both sides of the string.



-------------------
category:{
     type:String,
     required:[true,"Please Enter Category"]
     enum can be use here to specify definate category or particular category.
  }



Timestamp, chapters and topic covered from video :
00:00:00 Intro
00:01:24 Demo
00:22:49 Starting with backend
00:37:46 Making Product API
01:02:34 Backend Error Handling
01:24:21 Adding Search, Filter & Pagination to backend
apifetures in utils

01:52:18 Backend User & Password Authentication
npm i bcryptjs jsonwebtoken validator nodemailer cookie-parser body-parser

03:25:16 Backend User Routes
04:08:27 Making Order API
04:42:57 Starting Frontend
05:17:58 Redux Implementation 
06:37:06 Adding All Filters in frontend
07:25:49 Login & Registration Component 
08:05:32 Loading & Updating User
09:11:45 Change, Forgot & Reset Password
09:48:20 Creating Cart Component
10:35:37 Receiving Payment & Creating Order
11:38:01 User's Order & Review
12:33:14 Creating Admin Routes
15:17:31 Finalizing Before Deployment
15:27:02 Deploying on Heroku

Source:- 
COMPLETE MERN STACK COUSE IN HINDI//
MERN STACK ECOMMERCE WEBSITE REACT, REDUX, EXPRESS, NODE, MONGODB IN HINDI COMPLETE PROJECT
          

  
