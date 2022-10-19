import { app } from "./server";
const PORT = 4001;

app.listen(PORT, () => {
  console.log(`[START] - 🚀 Listen in http://localhost:${PORT}`);
});
