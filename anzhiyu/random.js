var posts=["2024/09/04/Hexo学习之路-命令篇/","2024/12/01/hello-world/","2024/11/23/华为认证备考记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };