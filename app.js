const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "3456b243435fdgdsdfasdfasdfasdfasf@!!##!$@%";
app.use(cors());
// http://localhost:8080/post
app.use(express.json()); //sending as json format

const mongoURL =
  "mongodb+srv://skinDB:sourav@cluster0.mr6cxdj.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => console.log(e));

// Import Schema
require("./userData");
//post request
app.post("/post", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  try {
    if (data == "sourav") {
      res.send({ status: "OK" });
    } else {
      res.send({ status: "USER NOT FOUND" });
    }
  } catch (error) {
    res.send({ status: "ERROR" });
  }
});

//listening
app.listen(8080, () => {
  console.log("Rolling");
});

// Register User

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptPassword = await bcrypt.hash(password, 15);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User Exists Already" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptPassword,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ status: "Error" });
  }
});

//Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    // const token = jwt.sign({ email: user.email }, JWT_SECRET); // it is converting it to secret code dont change it
    const token = user.fname;
    if (res.status(201)) {
      return res.json({ status: "OK", data: token });
    } else {
      return res.json({ error: "ERROR" });
    }
  }
  res.json({ status: "ERROR", error: "Invalid Password" });
});
//===================================================================//

require("./allProducts");
//Products---- POST(Register)
const Product = mongoose.model("prodInfo");

app.post("/prodRegister", async (req, res) => {
  const { name, description, image_url, price, rating, quantity } = req.body;
  try {
    let product_cr = await Product.create({
      name,
      description,
      image_url,
      rating,
      price,
      quantity,
    });
    if (product_cr) {
      return res.status(201).send(product_cr);
    }
  } catch (error) {
    res.send({ status: "Error" });
  }
});
// ===============================ADMIN CRED===================
require("./adminReg");
// ====================================
//POST REQUEST ADMIN
// http://localhost:8080/adminReg
const Admin = mongoose.model("AdminInfo_sourav");
app.post("/adminReg", async (req, res) => {
  const { admin_fname, admin_lname, admin_email, admin_password } = req.body;
  const admin_encryptPassword = await bcrypt.hash(admin_password, 15);
  try {
    const oldUser_admin = await Admin.findOne({ admin_email });
    if (oldUser_admin) {
      return res.send({ error: "Admin Exists Already" });
    }
    await Admin.create({
      admin_fname,
      admin_lname,
      admin_email,
      admin_password: admin_encryptPassword,
    });
    res.send({ status: "ADIMIN OK" });
  } catch (error) {
    res.send({ status: "Error" });
  }
});
// Login Admin
//http://localhost:8080/adminLogin 
app.post("/adminLogin", async (req, res) => {
  const { admin_email, admin_password } = req.body;
  const admin = await Admin.findOne({ admin_email });
  if (!admin) {
    return res.json({ error: "Admin User Not Found" });
  }
  if (await bcrypt.compare(admin_password, admin.admin_password)) {
    // const token = jwt.sign({ email: user.email }, JWT_SECRET); // it is converting it to secret code dont change it
    const token = admin.admin_fname;
    if (res.status(201)) {
      return res.json({ status: "ADMIN-OK", data: token });
    } else {
      return res.json({ error: "ERROR" });
    }
  }
  res.json({ status: "ERROR", error: "Invalid Password" });
});



















// Products --- GET

//http://localhost:8080/getallProducts

app.get("/getallProducts", async (req, res) => {
  try {
    let allProduct = await Product.find();
    return res.status(201).send(allProduct);
  } catch (error) {
    return res.status(404).send({ error: "Something Went Wrong!" });
  }
});

// =====================================================================================
//Cart Backend
require("./cartData");
//Add product to cart
//POST - http://localhost:8080/addtocart
const Cart = mongoose.model("cart");
app.post("/addtocart", async (req, res) => {
  const { product_id, price } = req.body;
  try {
    let cart_cr = await Cart.create({
      product_id,
      price,
    });
    if (cart_cr) {
      return res.status(201).send(cart_cr);
    }
  } catch (error) {
    res.status(400).send({ status: "ERROR", msg: error.message });
  }
});
