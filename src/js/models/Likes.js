export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(recipe) {
    // push to likes array
    const like = { recipe };
    this.likes.push(like);
    this.persistData();
  }
  removeLike(recipe) {
    // find matching id index and remove from likes array
    const index = this.likes.findIndex(e => e.recipe.id === recipe.recipe.id);
    this.likes.splice(index, 1);
    this.persistData();
  }
  isLiked(recipe) {
    // check if passed recipe is in likes array
    const like = this.likes.find(e => e.recipe.id === recipe.id);
    // console.log(like);
    if (like) {
      return true;
    }
    return false;
  }

  persistData() {
    localStorage.setItem("likes", JSON.stringify(this.likes));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem("likes"));
    if (storage) this.likes = storage;
  }
}
