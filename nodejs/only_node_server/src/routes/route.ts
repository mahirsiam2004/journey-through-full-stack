import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    console.log("this is root layout ");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is root route");
  } else if (url?.startsWith("/products")) {
    productController(req, res);
  } else {
    // console.log("this route is not developed")
    res.writeHead(404, { "Content-Type": "application/json" });
    // res.end("This is not root route")
    res.end(JSON.stringify({ message: "This is root route" }));
  }
};

export default routeHandler;
