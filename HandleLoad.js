const fs = require('fs');
// const FileType = require('file-type');
// const { Readable } = require('stream');
const CryptoJS = require("crypto-js");
const fetch = require('node-fetch');


function DecryptURL(url) {
  const DecodeURI = decodeURIComponent(url)
  // const bytes = CryptoJS.AES.decrypt(DecodeURI, keys.secret);
  // const originalText = bytes.toString(CryptoJS.enc.Utf8);
  // console.log(originalText)
  return DecodeURI
}

async function GetFile(url) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  // console.log(buffer)
  // const file_type = await FileType.fromBuffer(buffer)
  return buffer;
}


module.exports = {
  HandleDownload: async function(req,res) {
    try {
      // console.log(typeof originalText)
      const Decoded = DecryptURL(req.params.EncryptedFileURL)
      const File_data = await GetFile(Decoded);

      res.end(File_data);
      // res.send({ message: "Test getting file" })
    } catch(err) {
      console.log({err: err})
    }
  }
}
