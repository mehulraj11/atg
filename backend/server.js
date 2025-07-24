const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute")
const connectDB = require("./config/connectDB")
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();


const allowedOrigins = [
    "http://localhost:5173",
    "https://blog-mhvats.onrender.com/"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));
app.use(express.json())
app.use(morgan("dev"))


app.get("/", (req, res) => res.send("hello"));
app.use("/api/auth", authRoute)

app.listen(PORT, () => {
    console.log("server runnning");

})