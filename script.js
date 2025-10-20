// 找到按钮元素
const submitBtn = document.getElementById('submitBtn');

// 给按钮添加点击事件
submitBtn.addEventListener('click', function() {
  // 获取输入的名字和消息
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // 判断是否填写了内容
  if (name && message) {
    alert(`感谢 ${name} 的留言：\n${message}\n我会尽快回复你！`);
    // 清空输入框
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('请填写你的名字和想对我说的话哦！');
  }
});