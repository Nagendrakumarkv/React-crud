const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Fetching users failed!",
    });
  }
};

exports.addUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
  });
  try {
    console.log(user);
    user.save();
    res.send("User added successfully");
  } catch (err) {
    console.log("error");
    res.status(500).json({
      message: "user added failed!",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    res.send(singleUser);
  } catch (err) {
    // res.send(500).json({
    //   error: err,
    //   message: "Fetching product failed!",
    // });
  }
};

exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.send("User deleted successfully");
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "Couldn't delete product!",
      });
    });
};

exports.updateUser = async (req, res) => {
  const user = {
    _id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
  };

  User.updateOne({ _id: req.params.id }, user)
    .then((result) => {
      res.send("User Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "Couldn't udpate user",
      });
    });
};
