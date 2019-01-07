import express from 'express';
import path from 'path';

let app = express();

app.get('/zohoverify/verifyforzoho.html', (req, res) => {
	res.sendFile(path.join(__dirname, './verifyforzoho.html'));
});

app.listen(3000, () => console.log('Running on a localhost:3000'));