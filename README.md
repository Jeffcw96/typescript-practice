# Learning Journey in Typescript with RestAPI and Mongoose

## Day 1 
- Install all neccesary packages such as 
    * npm i express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
    * npm i @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D
- Insert `ts-node-dev --respawn --transpile-only src/app.ts` **dev** command under **package.json** script. Which is equivalent to behave like      nodemon in express js
- Create sample `user schema` with the aid of `interface`

## Day 2
- Create 1 new api with create new user
- Apply **ZOD** to apply schema validation on req.body input
- `Omit< your interface >, 'field that you wanted to exclude'>`
```ts
    interface MyInterface{
        property1: string,
        property2: string,
        property3: string,
    }

    const newObjectOne : Omit<MyInterface, 'property1'> = {
        // only allow to access property2 and property3
    }

    const newObjectTwo : Omit<MyInterface, 'property1' | 'property2'> = {
        // only allow to access property2 and property3
    }

```

