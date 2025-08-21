const multer = require('multer');

//Almacenamiento en memoria
const atorage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;