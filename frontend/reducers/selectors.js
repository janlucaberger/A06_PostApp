

export const getAllPosts = state => {
  let posts = [];

  if(Object.keys(state.posts).length >= 1){
    for(let key in state.posts){
      posts.push(state.posts[key])
    }
  }
  //return an array with the latest posts first
  return posts.reverse()
}
