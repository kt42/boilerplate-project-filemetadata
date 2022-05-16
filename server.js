var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

/// FdfDSFdf
// ASDFKSADFKSDKSAKDJFKASJDH222222222222222222222222222222222222222222222


app.post("/api/fileanalyse", upload.single('upfile'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.file, req.body)

   var retObj = {"name": req.file.originalname, "type":req.file.mimetype, "size":req.file.size};
   
   res.json(retObj)
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port  http://localhost:' + port)
});
