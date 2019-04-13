exports.index = function(req, res) {
  if (!req.files || Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  file.mv(`${__dirname}/../public/uploads/${file.name}`, function(err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    }

    res.json({filename: file.name, path: `/uploads/${file.name}`});
  });
}