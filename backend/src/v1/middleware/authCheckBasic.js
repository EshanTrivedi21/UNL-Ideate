const jwt = require('jsonwebtoken');
let User = require("../../models/User.model");
async function authCheckBasic(req, res, next) {
  const token = req.cookies['token'];
  if (!token) {
    res.user=null
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    let user = await User.findOne({ _id: decoded.user_id });
    if (!user) return res.status(401).json({ err: "Invalid Token" });
    decoded['Username'] = user.Username;
    decoded['Phone'] = user.Phone;
    decoded['eContacts'] = user.eContacts;
    decoded['reward'] = user.reward;
    req.user = decoded;
  } catch (err) {
    res.user=null
  }
  return next();
}
module.exports = authCheckBasic;