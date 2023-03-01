import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js"
function WhoToFollowList() {
  return (`
      <ul class="list-group">
        <div class="list-group-item fw-bolder"> Who to follow</div>
        ${WhoToFollowListItem(whos)}
      </ul>
`);}

export default WhoToFollowList;