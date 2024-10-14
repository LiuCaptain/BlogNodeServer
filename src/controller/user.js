const userLogin = (postData = {}) => {
  const username = postData.username;
  const password = postData.password;
  if (username === 'zhangsan' && password === '123') {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  userLogin
};
