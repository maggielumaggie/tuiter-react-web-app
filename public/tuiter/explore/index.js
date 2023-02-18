// import navigation from "./navigation.js";
// import mainCotent from "./main-content.js";
// import right from "./right.js";
// function init() {
//   $('#explore').append(
//       `
//   <div class="container pt-1">
//   <div class="row">
//     <div class="col-2">
//       ${navigation()}
//     </div>
//     <div class="col-6">
//       ${mainCotent()}
//     </div>
//       ${right()}
//   </div>
// </div>
//       `
//   )
// }
// $(init)

import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";
import ExploreComponent from "./ExploreScreen/ExploreComponent.js";
function index() {
  $('#wd-explore').append(`
   <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">

    ${NavigationSidebar()}

   </div>
   <div class="col-10 col-lg-7 col-xl-6">

    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">

    ${WhoToFollowList()}
   </div>
  </div>

   `);
}

$(index);