require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Configuração do CORS (sem cookies)
app.use(
  cors({
    origin: ["https://bubble.io", "https://seu-app.bubbleapps.io"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(morgan("dev"));

// Rotas
const authRoutes = require("./routes/v1/auth.routes");
app.use("/api/auth", authRoutes);

// Rota de saúde
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Servidor está funcionando corretamente." });
});

// Middleware de erro
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

// Inicialização
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
