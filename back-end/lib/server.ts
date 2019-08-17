import app from './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = 5000;

https.createServer(app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})