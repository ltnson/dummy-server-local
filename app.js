// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const app = express();

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/image");
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + "-" + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const cors = require("cors");
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());
// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
// );

// console.log(1231123);
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
// app.post("/upload", (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "Không có tệp ảnh in body" });
//   }
//   const tempPath = req.file.path;
//   const targetPath = path.join(__dirname, "public/image", req.file.filename);
//   fs.rename(tempPath, targetPath, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Lỗi khi lưu ảnh" });
//     }
//     const imageUrl = `http://localhost:3001/${tempPath.slice(7)}`;
//     res.status(200).json({ url: imageUrl });
//   });
// });

// app.listen(3001, () => {
//   console.log("Server test");
// });
