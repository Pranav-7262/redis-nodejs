import client from "./client.js";

async function init() {
  //   await client.lpush("messages", 1);
  //   await client.lpush("messages", 2);
  //   await client.lpush("messages", 3);
  //   await client.lpush("messages", 4);
  //   await client.lpush("messages", 5);
  //   const result = await client.llen("messages");   //Gets a length of list "messages"
  //   const result = await client.lpop("messages"); // stack approach LIFO (lpop)
  //   const result = await client.rpop("messages");
  //  console.log("popped element is  :", result);
  //   const res48 = await client.lpush("bikes:repairs", [
  //     // bikes:repairs is a list name
  //     "bike:1",
  //     "bike:2",
  //     "bike:3",
  //     "bike:4",
  //     "bike:5",
  //   ]);
  //   console.log(res48); // 5 count inserted
  //   const result = await client.lrange("messages", 0, -1); // print all elements of list
  //   console.log(result);
  //   const res49 = await client.ltrim("bikes:repairs", 0, 2);
  //   console.log(res49); //OK
  //   const res50 = await client.lrange("bikes:repairs", 0, -1);
  //   console.log(res50); // [ 'bike:5', 'bike:4', 'bike:3' ]
  //   const res35 = await client.del("bikes:repairs"); // removes bikes:repairs list
  //   console.log(res35); // 1 delete cnt
}
init();
