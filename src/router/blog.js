const { getList } = require('./../controller/blog');
const { SuccessModel, ErrorModel } = require('./../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const data = getList(author, keyword);

    return new SuccessModel(data);
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '博客详情'
    };
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '创建博客'
    };
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新博客'
    };
  }

  if (method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '删除博客'
    };
  }
};

module.exports = handleBlogRouter;
