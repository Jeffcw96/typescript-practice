# Learning Journey in Typescript with RestAPI and Mongoose

## Day 1 
- Install all neccesary packages such as 
    * npm i express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
    * npm i @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D
- Insert `ts-node-dev --respawn --transpile-only src/app.ts` **dev** command under **package.json** script. Which is equivalent to behave like      nodemon in express js
- Create sample `user schema` with the aid of `interface`