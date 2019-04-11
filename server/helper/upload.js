const formidable = require('formidable');
const util = require('util');
const fs = require('fs');
const public = process.env.PUBLIC_FOLDER || '/public';
const uploadDir = `.${public}/images`;
const numberSlice = public.length;

const uploadFile = async function (req, res) {
  try {
    const form = new formidable.IncomingForm();
    const fields = [];
    const files = [];
    form.uploadDir = uploadDir;
    if (req.url == '/'){
     form.parse(req).on('field', function(field, value) {
          fields.push(value);
        })
        .on('file', function(field, file) {
          const type = file.type.split('/')[1];
          const newPath = file.path + "." + type;
          fs.renameSync(file.path, newPath);
          const link = newPath.slice(numberSlice);
          files.push(link);
        })
        .on('end', function() {
          if (files && files.length) {
            ResponeSuccess(req, res, {files});
          }
        });
    }else {
      ResponeError(req, res, null, ErrorCode.URL_PATH_INVALID);
    }
  }catch (error) {
    ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  uploadFile
};
  
