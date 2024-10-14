const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1'
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2'
    }
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题1',
    content: '内容1'
  };
};

const createBlog = (postData = {}) => {
  return { id: 1 };
};

const updateBlog = (postData = {}) => {
  return { id: 2 };
};

const deleteBlog = (postData) => {
  return { id: 3 };
};

module.exports = {
  getList,
  getDetail,
  createBlog,
  updateBlog,
  deleteBlog
};
