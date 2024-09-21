const express = require('express');
const connectDB = require('./config/connectDB');
const viewEngine = require('./config/viewEngine');
const initWebRouters = require("./routes/web");
const cors = require('cors');
const { uploadCloudImg } = require('./routes/uploadCloudImg');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
// uploadCloudImg()
// .then(() => console.log('Upload completed'))
// .catch((error) => console.error('Upload failed', error));

viewEngine(app);
initWebRouters(app);

// connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running`));
