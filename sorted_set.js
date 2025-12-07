import client from "./client.js";

async function init() {
  //CLI  ,
  //     > ZADD racer_scores 10 "Norem"
  // (integer) 1
  // > ZADD racer_scores 12 "Castilla"
  // (integer) 1
  // > ZADD racer_scores 8 "Sam-Bodden" 10 "Royce" 6 "Ford" 14 "Prickett"
  // (integer) 4      ,
  //   const res1 = await client.zadd("racer_scores", { score: 10, value: "Norem" });
  //   console.log(res1); // >>> 1
  //   const res2 = await client.zadd("racer_scores", {
  //     score: 12,
  //     value: "Castilla",
  //   });
  //   console.log(res2);
  //   const res3 = await client.zadd("racer_scores", [
  //     { score: 8, value: "Sam-Bodden" },
  //     { score: 10, value: "Royce" },
  //     { score: 6, value: "Ford" },
  //     { score: 14, value: "Prickett" },
  //     { score: 12, value: "Castilla" },
  //   ]);
  //   console.log(res3);
  //   const res4 = await client.zrange("racer_scores", 0, -1);
  //   console.log(res4); // [ 'Ford', 'Sam-Bodden', 'Royce', 'Prickett' ]

  //   const res8 = await client.zrem("racer_scores", "Castilla");
  //   console.log(res8); //0

  //   const res9 = await client.zremrangebyscore("racer_scores", "-inf", 9);
  //   console.log(res9); //2

  const res10 = await client.zrange("racer_scores", 0, -1);
  console.log(res10); // [ 'Royce', 'Prickett' ]

  const res11 = await client.zrank("racer_scores", "Royce");
  console.log(res11); // >>> 0

  const res12 = await client.zrevrank("racer_scores", "Royce");
  console.log(res12); // >>> 1
}
init();
