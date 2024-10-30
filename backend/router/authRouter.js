const express = require ("express");
const router = express.Router();
const cors = require("cors");
const {auth,registerUser,loginUser} = require("../controllers/authController");

router.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));
router.post("/", auth);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;