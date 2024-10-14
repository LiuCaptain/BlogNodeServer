const { getList, getDetail, createBlog, updateBlog, deleteBlog } = require('./../controller/blog');
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

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id;
    const data = getDetail(id);

    return new SuccessModel(data);
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/create') {
    const postData = req.body;
    const data = createBlog(postData);

    return new SuccessModel(data);
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const postData = req.body;
    const data = updateBlog(postData);

    return new SuccessModel(data);
  }

  // 删除博客
  if (method === 'DELETE' && req.path === '/api/blog/delete') {
    const postData = req.body;
    const data = deleteBlog(postData);

    return new SuccessModel(data);
  }
};

module.exports = handleBlogRouter;
