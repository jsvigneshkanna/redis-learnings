# redis-learnings

<figure>
    <img src="https://ps.w.org/redis-cache/assets/banner-1544x500.png?rev=2315420"
         alt="Albuquerque, New Mexico">
</figure>
Learning Redis in-memory cache from different resources. Comes lets all learn together 💃

> “I have not failed. I’ve just found 10,000 ways that won’t work.” – Thomas Edison

## What is Redis

- Redis is an in-memory database
- Redis stands for **Re**mote **Di**ctionary **S**erver
- It uses key-value pair storage (JSON)
- It can be used as primary database and also cache
- It runs on RAM so the speed of fetching and reading data is very fast (50X faster than other DB that runs in hard disk)

---

## Features

### Faster Response:

    1. As Redis is stores data in RAM, it delivers sub-millisecond response times enabling millions of requests per second
    2. That is why many real-time applications are implemented on top of the Redis.

### Scalability:

    1. It offers single node and multi cluster topology
    2. Redis is single-threaded, so uses one thread uses I/O ops
    3. It uses master slave architecture
    4. It can be scaled horizontally and also vertically

<figure>
    <img src="https://miro.medium.com/max/875/1*vQu1EJwBV23rSv5_l5orBw.png"
        alt="Albuquerque, New Mexico">
    <figcaption>Source: https://www.slideshare.net/RedHatDevelopers/redis-vs-infinispan-devnation-tech-talk</figcaption>
</figure>

<figure>
    <img src="https://miro.medium.com/max/875/1*CRfl7mLhU_LHu_keAljklQ.png"
        alt="Albuquerque, New Mexico">
    <figcaption>Source https://www.slideshare.net/RedHatDevelopers/redis-vs-infinispan-devnation-tech-talk</figcaption>
</figure>

### Persistence/ Durability:

    1. As Redis is in-memory storage, it uses backup technique to store the data in hard-disk to use it in future if node is failed
    2. It use RDB & AOF backup mechanism

    RDB (Redis Backup):
        - Performs point-in-time snapshots of data at specified interval
        - This is not recommended as we dont have some part of persisted data when node failed as we store till last snapshots
    AOF (Append Only File):
        - This will append all the write operations of the redis server
        - This is recommended as we store all the operations and no data is lost

### Rich Data-structure:

    - Redis is helpful as we can store different type of data in key-value pairs
    - Its not associated with the technology limitations

    Data structures:
        1. String
        2. Hash
        3. List
        4. Set
        5. Sorted Set
        6. Bitmaps
        7. Streams
        8. Documents

---

## Use Case

1. Caching:

   - Caching is storing data for temporary period (non-volatile). As Redis is in-memory storage, data persist till RAM is in use
   - It faster to fetch and write data in RAM
   - Web browser engine uses cache to load website faster by fetching domain from cache rather than fetching details from central server

2. Messaging:
   - It can be used in messaging/ chat application
   - It can be used to store last 10 messages using Redis LIST
   - Some of the user details be hashed and can be used in in-memory till chat longs in system

## Application Usage

- Redis can be used in Mac and linux by downloading redis from cmd prompt
- In Windows, we need to install redis from WSL
- Alternatively we can use cloud Redis using RedisLabs or Upstash

1. Nodejs (ioredis/ redis)
2. Python (redis)
3. Java (jedis)

---

## Codings

### Nodejs steps

1.  Packages used:
    - express
    - ioredis
    - redis
2.  Clone this package.json and run cmd "npm install" to install above packages
3.  For cloud Redis use below links [Upstash](https://console.upstash.com/), [RedisLabs](https://app.redislabs.com/#/login)
4.  For localhost Redis download and install Redis and Redis cli
5.  In server.js use below code to connect to redis (localhost/ cloud)

```js
import express from "express";
import redis from "redis";
import redis from "redis";
const client = redis.createClient({
   host: <HOSTNAME>,
   port: <PORT>,
   password: <PWD>,
 });
await client.connect();
client.on("connect", () => {
   console.log("connected");
});
client.set("foo", "bar");
const value = client.get("foo);
```

---

## Reference

1. [Fireship 3 mins YT ⭐](https://www.youtube.com/watch?v=G1rOthIU-uo)
2. [Redis Free Cloud solution](https://redis.com/try-free/)
3. [Implementing Redis with Nodejs WDS YT ⭐](https://www.youtube.com/watch?v=jgpVdJB2sKQ&t=914s)
4. [Hussein Nasser 50 mins YT](https://www.youtube.com/watch?v=V7FPk4J10KI)
5. [Techworld with Nana 24 mins YT](https://www.youtube.com/watch?v=OqCK95AS-YE)
6. [Redis tech Docs](https://docs.redis.com/latest/rs/technology-behind-redis-enterprise/)
