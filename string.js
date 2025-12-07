//Redis String data type ---->
import client from "./client.js";

async function init() {
  //Setters
  //   await client.mset("msg:5", "hey from me", "msg:6", "how are u");
  //   const result = await client.mget("msg:5", "msg:6"); // gets from cmd
  //  await client.set("user:7", "thala");
  //Getters
  //
  //   await client.expire("user:7", 10); // expires after 10 sec ..
  const result = await client.get("user:7");
  console.log("result :", result);
}
init();
