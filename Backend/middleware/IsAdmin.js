const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, "shhhhh");
          console.log( "form admin",decoded.role)
      // Assuming decoded contains user information including 'role'
      if (decoded && decoded.role === 'Admin') {
      
        console.log('User is an admin');
        next();
      } else {
        res.status(403).send('Forbidden');
      }
    } catch (err) {
     
      console.error('Token verification failed:', err);
      res.status(401).send({ msg: "Token is invalid" });
    }
  } else {
    // Token not provided in the request header
    res.status(401).send({ msg: "Token is missing" });
  }
};

module.exports = isAdmin;
