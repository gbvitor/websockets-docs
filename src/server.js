import express from "express";
import path from "path";
import url from "url";
const app = express();

app.listen(3000, () => {
    const currentDir = url.fileURLToPath(import.meta.url);
    const publicDir = path.join(currentDir, "../..", "public");
    app.use(express.static(publicDir));
    console.log(`Server is running in http://localhost:3000`);
});
