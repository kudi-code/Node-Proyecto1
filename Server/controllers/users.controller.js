const { User } = require('../models/users.model');

const signup = async (req, res) => {
  //SELECT * FROM users
  try {
    const {name, password} = req.body
    const newUser= await User.create({name, password})

    res.status(201).json({
      status: "sucess!",
      newUser
    });

  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const {name, password} = req.body
    res.status(201).json({
      
    });
  } catch (error) {
    console.log(error);
  }
};

const history = async (req, res) => {
  console.log("parching")

  try {
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  login,
  history
};
