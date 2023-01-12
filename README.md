# Realtime-Chatroom-NestJs

## Description

This is `realtime-chatroom-nestjs` written in `Typescript` and using `NestJS` framework.

## Quick Kick Start for One Step

```bash
# Run Kick Start Script ( "Wait for database connection" will take 1-3 minuites )
$ npm run kickstart
```

## Initial Setup

```bash
# install dependencies
$ npm install

# create .env file
$ npm run env:config set local

# docker-compose up
$ docker-compose -f docker-compose.local.yaml up -d

# run migration
$ npm run migration run local
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## How it works

1. `docker-compose` will create `mysql` container and `redis` container.

2. `TypeORM` will create `chat` table.

3. `NestJS` will create a `webSocket` server for chatrooms,
   and a `http` server for `Swagger` and `Test`.

4. `MySQL` will save chat history.( Maybe create `DB-0` DB for `userID` Or `roomID % n = 0`,
   `DB-1` DB for `userID` Or `roomID % n = 0 `, etc. )

5. `Redis` will cache for chatroom message in `MySQL`.

6. `WebSocket` will help message transfer & create message in `MySQL`.

## How to use

1. `Swagger` is for testing `API` connection. [Take me to Swagger !](http://localhost:3000/api)

2. `Test` is for testing `WebSocket` connection. [Take me to Test !](http://localhost:3000)

## Further features

1. Authentication

2. Multiple users in one room

3. More Database

4. Unit Test & E2E Test

5. More fancy views
