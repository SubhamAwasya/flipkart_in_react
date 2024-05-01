import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//  my
import User from "../models/User.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.js";

export const signup = async (req, res, next) => {
  console.log("=== Sign Up ================================================");
  const { username, email, password } = req.body;

  try {
    //checking that user is already registerd on database
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      res.status(409).send({ message: "You Already registerd" });
      throw Error(": User with email already exists");
    }

    //genrating hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // creating user
    const newUser = new User({
      username,
      email,
      password: hash,
      refreshToken: null,
    });

    const createdUser = await newUser.save();
    if (!createdUser) {
      res
        .status(500)
        .send({ message: "Somthing went wrong User not created!" });
    }
    res.status(200).send({ message: "User has been created!" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  console.log("=== Log In ================================================");
  console.log("email ", req.body.email);
  console.log("pass ", req.body.password);
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).send({ message: "User not found!" });
      throw Error("User not found!");
    }

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) {
      res.status(400).send({ message: "Wrong credentials!" });
      throw Error("Wrong credentials!");
    }

    // const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET);
    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    const { password, ...others } = user._doc;

    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
      })
      .status(200)
      .send({ message: "Logged in succesfully!", user: others });
  } catch (err) {
    next(err);
  }
};

export const logOut = async (req, res, next) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: null,
      },
    },
    {
      new: true,
    }
  );
  const options = { httpOnly: true };
  res
    .status(200)
    .clearCookie("access_token", options)
    .send({ message: "Loged out succesfully" });
};
