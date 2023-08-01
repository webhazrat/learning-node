//const userHandler from "./routeHandler/userHandler";

const app = express();
app.use(express.json());

app.use("/register", userHandler);

// userHanlder
// const router from express.Router();

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
