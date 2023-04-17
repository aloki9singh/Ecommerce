const express = require("express");
const UserModel = require("../Models/crud.model");
const router = express();

router.get("/", (req, res) => {
  res.json("welcome to CRUD application");
});

router.post("/register", async (req, res) => {
  const { name, email, age, mobile, work, add, description } = req.body;
  if (!name || !email || !age || !mobile || !work || !add || !description) {
    res.status(404).json("Please Fill the required data.");
  }

  try {
    const preuser = await UserModel.findOne({ email: email });
    console.log(preuser);
    if (preuser) {
      res.status(404).json("This user is already present");
    } else {
      const user = new UserModel({
        name,
        email,
        age,
        mobile,
        work,
        add,
        description,
      });
      await user.save();
      console.log(user);
      res.status(201).json("New User Added Successfully");
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/getdata", async (req, res) => {
  try {
    res.status(201).json(await UserModel.find());
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/getdata/:id", async (req, res) => {
  try {
    res.status(201).json(await UserModel.findOne({ _id: req.params.id }));
  } catch (error) {
    res.status(404).json(error);
  }
});
router.patch("/updateuser/:id", async (req, res) => {
  try {
    res.status(201).json(await UserModel.findByIdAndUpdate({_id:req.params.id},req.body,{
      new:true
    }))
  } catch (error) {
    res.status(404).json(error);
  }
});
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    res.status(201).json(await UserModel.findByIdAndDelete({ _id: req.params.id }));
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
