//import userHandler from "./routeHandler/userHandler";

const app = express();
app.use(express.json());

app.use("/register", userHandler);

// userHanlder
// import router from express.Router();

// routes
router.post("/", (req, res) => {});
router.post("/", checkLogin, (req, res) => {});

//export default router;

// middleware
const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = verify;
    req.username = username;
    req.userId = userId;
    next();
  } catch {
    next("Authentication failed!");
  }
};

//export default checkLogin;


// error handling
1. By default synchronous error handle by express. This default express middleware implemented automatically placed bottom at the code.
2. We can add a middleware as default error handler middleware with (err, req, res, next) params. And set it bottom at the code.
3. We can send custom error by throw and sent it to error handler middleware by next(errors)
4. Asynchronous error handle with try, catch. If we require to send custom error we can throw errors to catch block.
