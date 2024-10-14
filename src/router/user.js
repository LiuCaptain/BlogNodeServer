const { SuccessModel } = require('./../model/resModel');
const { userLogin } = require('./../controller/user');

const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    const postData = req.body;
    const data = userLogin(postData);
    return new SuccessModel(data);
  }
};

module.exports = handleUserRouter;
