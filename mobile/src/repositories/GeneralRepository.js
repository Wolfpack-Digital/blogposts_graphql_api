class GeneralRepository {
  getUsers() {
    return fetch('http://localhost:3001/users')
      .then(resp => resp.json());
  }

  getUsersBlogs(id) {
    return fetch(`http://localhost:3001/blogposts`)
      .then(resp => resp.json())
      .then(data => data.map(item => ({...item, key: item.id.toString() })));
  }

  getBlog(id) {
    return fetch(`http://localhost:3001/blogposts/${id}`)
      .then(resp => resp.json());
  }

  getCommentsByBlogPost(id) {
    return fetch(`http://localhost:3001/blogposts/${id}/comments`)
      .then(resp => resp.json());
  }

  addComment(body) {
    return fetch(`http://localhost:3001/comments`, {
      method: 'POST',
      body: JSON.stringify(body)
  }).then(resp => resp.json());
  }
}

export default new GeneralRepository();
