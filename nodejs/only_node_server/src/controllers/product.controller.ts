import type { IncomingMessage, ServerResponse } from "http";
import { url } from "inspector";
import { productService } from "../services/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/products" && method === "GET") {
    const products = [
      {
        id: 1,
        name: "Product-1",
        price: 30,
      },
      {
        id: 2,
        name: "Product-2",
        price: 40,
      },
    ];
    productService();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products retrived successfully",
        data: products,
      }),
    );
  }
};

export default productController;
