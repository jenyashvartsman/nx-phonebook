import express from 'express';
import cors from 'cors';
import { getAllContacts } from './repository/contacts.repository';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cors());

// contacts api
app.get('/api/contacts', (_req, res) => res.json(getAllContacts()));

// 404
app.use((_req, res) => res.status(404).json(404));

app.listen(port, host, () => console.log(`[ ready ] http://${host}:${port}`));
