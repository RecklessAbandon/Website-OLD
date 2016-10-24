import 'meteor/ryw:blog';

import './blog.html';

Blog.config({
  title: 'The Heart of Teens | Blog',
  rss: {
    title: 'The Heart of Teens Blog'
  },
  blogIndexTemplate: 'newBlog',
  blogShowTemplate: 'newBlogShow',
  blogLatestTemplate: 'newBlogLatest'
});
