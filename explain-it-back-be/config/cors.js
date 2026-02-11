import cors from "cors";

const allowedOrigins = [
  "http://localhost:3000",      // local dev
  "http://localhost:5173",      // Vite
  process.env.CLIENT_URL,     // production frontend
  "https://www.yourdomain.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // allow cookies / auth headers
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};

export default cors(corsOptions);
