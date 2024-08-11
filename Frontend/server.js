const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(bodyParser.json());
server.use(cors());

const dbPath = path.join(__dirname, 'db.json');

const readDb = () => JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
const writeDb = (db) => fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

server.post('/users', (req, res) => {
  const { firstName, lastName, mobile, email, password } = req.body;
  const db = readDb();

  // Check for duplicate email
  const emailExists = db.users.some(user => user.email === email);
  if (emailExists) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Check for duplicate mobile number
  const mobileExists = db.users.some(user => user.mobile === mobile);
  if (mobileExists) {
    return res.status(400).json({ message: 'Mobile number already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  db.users.push({ firstName, lastName, mobile, email, password: hashedPassword });

  writeDb(db);

  res.status(200).json({ message: 'Registration successful' });
});

server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running on port 8080');
});