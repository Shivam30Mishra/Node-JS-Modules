const fs   = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

// const readStream  = fs.createReadStream("file.txt");
// const writeStream = fs.createWriteStream("destination.txt.gz");
// readStream.pipe(writeStream);

// zipping the file in piping
// readStream.pipe(gzip).pipe(writeStream);

// unzipping the folder 
const readStream  = fs.createReadStream("destination.txt.gz");
const writeStream = fs.createWriteStream("uncompressed.txt");
readStream.pipe(gunzip).pipe(writeStream);

