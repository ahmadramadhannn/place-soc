import { z as defaultSerializeError, n as jsxRuntimeExports, a as reactExports } from "./worker-entry-B6nSZCXJ.js";
import { a as Route } from "./router-CvQXpfce.js";
import "node:events";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
const TSR_DEFERRED_PROMISE = /* @__PURE__ */ Symbol.for("TSR_DEFERRED_PROMISE");
function defer(_promise, options) {
  const promise = _promise;
  if (promise[TSR_DEFERRED_PROMISE]) {
    return promise;
  }
  promise[TSR_DEFERRED_PROMISE] = { status: "pending" };
  promise.then((data) => {
    promise[TSR_DEFERRED_PROMISE].status = "success";
    promise[TSR_DEFERRED_PROMISE].data = data;
  }).catch((error) => {
    promise[TSR_DEFERRED_PROMISE].status = "error";
    promise[TSR_DEFERRED_PROMISE].error = {
      data: defaultSerializeError(error),
      __isServerError: true
    };
  });
  return promise;
}
function useAwaited({ promise: _promise }) {
  if (reactExports.use) {
    const data = reactExports.use(_promise);
    return data;
  }
  const promise = defer(_promise);
  if (promise[TSR_DEFERRED_PROMISE].status === "pending") {
    throw promise;
  }
  if (promise[TSR_DEFERRED_PROMISE].status === "error") {
    throw promise[TSR_DEFERRED_PROMISE].error;
  }
  return promise[TSR_DEFERRED_PROMISE].data;
}
function Await(props) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsx(AwaitInner, { ...props });
  if (props.fallback) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: props.fallback, children: inner });
  }
  return inner;
}
function AwaitInner(props) {
  const data = useAwaited(props);
  return props.children(data);
}
function Deferred() {
  const [count, setCount] = reactExports.useState(0);
  const {
    deferredStuff,
    deferredPerson,
    person
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "regular-person", children: [
      person.name,
      " - ",
      person.randomNumber
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading person..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Await, { promise: deferredPerson, children: (data) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "deferred-person", children: [
      data.name,
      " - ",
      data.randomNumber
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading stuff..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Await, { promise: deferredStuff, children: (data) => /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { "data-testid": "deferred-stuff", children: data }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCount(count + 1), children: "Increment" }) })
  ] });
}
export {
  Deferred as component
};
