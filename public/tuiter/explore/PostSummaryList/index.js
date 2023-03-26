import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
  return (`
  <ul class="list-group">
  ${PostSummaryItem(posts)}
  </ul>
  `)
}

export default PostSummaryList