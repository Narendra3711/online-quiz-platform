// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const protect = async (req, res, next) => {
//   let token;

//   // 1. Check token in header
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Bearer TOKEN
//       token = req.headers.authorization.split(" ")[1];

//       // 2. Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // 3. Get user from token
//       req.user = await User.findById(decoded.id).select("-password");
//       if (!req.user) {
//   return res.status(401).json({ success: false, message: "User not found" });
// }


//       next(); // allow request
//     } catch (error) {
//       return res.status(401).json({
//         success: false,
//         message: "Not authorized, token failed",
//       });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Not authorized, no token",
//     });
//   }
// };

// module.exports = protect;
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  console.log("HEADERS:", req.headers.authorization); // debug

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "secret");

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error("JWT ERROR:", error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = protect;