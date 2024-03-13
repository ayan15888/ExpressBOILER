const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ayan:ayan@cluster0.7eifvyq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("pagal insaan database connect nhi huwa " + err);
  });



app.get("/", (req, res) => {
  res.send("Home Page");
  console.log("Hello World from 3000");
});

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (err) {
    console.log("Error in get request");
    res.status(500).json({ message: err.message });
  }
});
app.get("/api/product/:Id", async (req, res) => {
  try {
    const { Id } = req.params;
    const product = await Product.findById(Id);
    res.status(200).json(product);
  } catch (err) {
    console.log("Error in get request");
    res.status(500).json({ message: err.message });
  }
});
app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log("Error in post request");
    res.status(500).json({ message: err.message });
  }
});



//update an API

app.put('/api/product/:Id' , async (req,res) => {
    try{
        const {Id} = req.params;
      const product=  await Product.findByIdAndUpdate(Id,req.body)

      if(!product){
            return res.status(404).json({message: "Product not found"})
      }
      const updatedProduct =await Product.findById(Id)
      res.status(200).json(product)
    } catch(err){
            res.status(500).json({message: err.message})
    }
})

