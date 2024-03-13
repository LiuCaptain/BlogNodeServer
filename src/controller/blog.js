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
  console.log('id', id);
  return {
    id: 1,
    title: '标题1',
    content: '内容1'
  };
};

module.exports = {
  getList,
  getDetail
};
