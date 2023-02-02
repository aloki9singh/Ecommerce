// const Product = require("../models/productModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorhandler");

//create product  --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//getall prod
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  //   const products = await Product.find();
  const products = await apiFeature.query;

  res.status(200).json({ success: true, products, productCount });
});
//get  product detail
exports.getProductDetail = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    // return res.status(500).json({
    //   success: false,
    //   message: "Product not found",
    // });
    return next(new ErrorHandler("Product not found", 404));
  }
  //   product.remove()

  res.status(200).json({
    success: true,
    product,
  });
});

//update Product --Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    // return res.status(500).json({
    //   success: false,
    //   message: "Product not found",
    // });
    return next(new ErrorHandler("Product not found", 500));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    // return res.status(500).json({
    //   success: false,
    //   message: "Product not found",
    // });
    return next(new ErrorHandler("Product not found", 500));
  }
  //   product.remove()
  product = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Product Delete Success",
  });
});
