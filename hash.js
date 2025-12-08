import client from "./client.js";

async function init() {
  // hset human man:poor lady:rich  fro CLI

  //NODE -->

  //   const res1 = await client.hset("bike:1", {
  //     model: "Deimos",
  //     brand: "Ergonom",
  //     type: "Enduro bikes",
  //     price: 4972,
  //   });
  //   console.log(res1); // 4

  //   const res2 = await client.hget("bike:1", "model");
  //   console.log(res2); // 'Deimos'

  //   const res3 = await client.hget("bike:1", "price");
  //   console.log(res3); // '4972'

  //   const res4 = await client.hgetall("bike:1");
  //   console.log(res4);
  //    {
  //   model: 'Deimos',
  //   brand: 'Ergonom',
  //   type: 'Enduro bikes',
  //   price: '4972'
  // }

  //CLI ---->
  //   127.0.0.1:6379> hset car model 2035 color pink
  // (integer) 2
  // 127.0.0.1:6379> hget car model
  // "2035"

  //   const res5 = await client.hmget("bike:1", ["model", "price"]); // multiGET
  //   console.log(res5); // ['Deimos', '4972']

  const res6 = await client.hincrby("bike:1", "price", 100);
  console.log(res6); // 5072
  const res7 = await client.hincrby("bike:1", "price", -100);
  console.log(res7); // 4972
  // const res8 = await client.hincrby("bike:1", "price", 100);
  // console.log(res8);
}
init();
