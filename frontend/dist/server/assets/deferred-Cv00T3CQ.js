import { y as createServerRpc, v as createServerFn } from "./worker-entry-B6nSZCXJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const personServerFn_createServerFn_handler = createServerRpc("f76e8f8721c12c8547a3ced6a10916f5b5076c1a10dcbeaa607360ce419d0a48", (opts, signal) => personServerFn.__executeServer(opts, signal));
const personServerFn = createServerFn({
  method: "GET"
}).inputValidator((d) => d).handler(personServerFn_createServerFn_handler, ({
  data: name
}) => {
  return {
    name,
    randomNumber: Math.floor(Math.random() * 100)
  };
});
const slowServerFn_createServerFn_handler = createServerRpc("fc3988c64f434639dfd4eab3f926b87ee39cc0c14f65b4d0e852c7fd73279a3b", (opts, signal) => slowServerFn.__executeServer(opts, signal));
const slowServerFn = createServerFn({
  method: "GET"
}).inputValidator((d) => d).handler(slowServerFn_createServerFn_handler, async ({
  data: name
}) => {
  await new Promise((r) => setTimeout(r, 1e3));
  return {
    name,
    randomNumber: Math.floor(Math.random() * 100)
  };
});
export {
  personServerFn_createServerFn_handler,
  slowServerFn_createServerFn_handler
};
