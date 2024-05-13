import express from "express";
import path from "path";
import { Express, Request, Response } from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const route= express();

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname,'../src/public');

route.use(express.static(publicDirectoryPath));


route.listen(port, () => {    
    console.log(`Server running on http://localhost:${port}`);
});

route.get('/', (req: Request, res: Response) => {
    const loginPage = path.join(publicDirectoryPath,'components','index.html');
    res.sendFile(loginPage);
});

