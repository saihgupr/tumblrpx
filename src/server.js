import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  // You can also use Express
  .use(
    compression({ threshold: 0 }),
    //(req, res, next) => {
    //  if (req.path == "/") {
    //    console.log("\n\n");
    //  }
    //  console.log(req.method, req.path);
    //  next();
    //},

    sirv("static", { dev }),
    sapper.middleware(),
  )
  .listen(
    PORT,
    (err) => {
      if (err) {
        console.log("error", err);
      }
    },
  );
