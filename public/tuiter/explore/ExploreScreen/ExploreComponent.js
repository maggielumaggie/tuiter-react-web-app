import postSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
<div class="row">
        <div class="col-10 ">

          <div class="position-relative">
            <span class="position-absolute fas fa-search wd-search-tuiter"></span>
            <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
          </div>
        </div>
        <div class="col-2">
          <div class="fa fa-cog fa-2x" style="color: deepskyblue"></div>
        </div>
      </div>

      <ul class="nav nav-tabs mt-1 mb-1">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
        </li>
      </ul>

      <div class="position-relative">
        <img src="../../images/starship.jpg" width="100%">
        <h2 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h2>
      </div>
<!--            <div class="row">-->
<!--                       &lt;!&ndash; search field and cog &ndash;&gt;-->
<!--           </div>-->
<!--           <ul class="nav mb-2 nav-tabs">-->
<!--                      &lt;!&ndash; tabs &ndash;&gt;-->
<!--           </ul>-->
           ${postSummaryList()}
    `);
}
export default ExploreComponent;
