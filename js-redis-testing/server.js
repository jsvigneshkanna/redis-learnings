import express from "express";
import redis from "redis";
import dotenv from "dotenv";
dotenv.config();

// REDIS package usage

// console.log(process.env.REDISLAB_HOSTNAME, process.env.REDISLAB_PORT, process.env.REDISLAB_PASSWORD);
// const client = redis.createClient({
//   host: process.env.REDISLAB_HOSTNAME,
//   port: process.env.REDISLAB_PORT,
//   password: process.env.REDISLAB_PASSWORD,
// });
// await client.connect();
// client.on("connect", () => {
//   console.log("connected");
// });

// IOREDIS package usage
import Redis from "ioredis";
const url = "redis://:" + process.env.UPSTASH_PASSWORD + "@" + process.env.UPSTASH_HOST + ":" + UPSTASH_PORT;
let client = new Redis(url);
client.set("foo", "bar");
console.log("####", await client.get("foo"));
