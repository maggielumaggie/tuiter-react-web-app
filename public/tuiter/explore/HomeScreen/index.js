import homePosts from "./homePosts.js";
import PostItem from "./PostItem.js";

function index() {
  $('#wd-homescreen').append(`
  <ul class="list-group">
  ${PostItem(homePosts)}
  </ul>
  `);
}
$(index);

export default index;