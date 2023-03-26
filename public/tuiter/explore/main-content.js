
function mainCotent() {
  return (
      `
      <div class="row">
        <div class="col-10 ">

          <div class="position-relative">
            <span class="position-absolute fas fa-search wd-search-tuiter"></span>
            <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
          </div>
        </div>
        <div class="col-2">
          <div class="fa fa-cog fa-2x" style="color: blue"></div>
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

      <ul class="list-group">
        <li class="list-group-item">
          <div class="row">
            <div class="col-10">
              <div class="text-secondary">
                Web Development
              </div>

              <div class="fw-bolder">
                <span class="text-black">ReactJS</span>
                <span class="text-secondary"> - 2h </span>
              </div>

              <div class="fw-bolder col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
                React.js is a component based front end library that makes it very
                easy to build Single Page Applications or SPAs.
              </div>

            </div>

            <div class="col-2">
              <img class="float-end" src="../../images/reactlogo.jpg" height="100px" >
            </div>

          </div>
        </li>

        <li class="list-group-item">
          <div class="row">
            <div class="col-10">
              <div class="fw-bolder">
                <span class="text-black">JavaScript</span>
                <span class="text-secondary"> - 2h </span>
              </div>

              <div class="fw-bolder col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
                JavaScript is a programming language that can run on browers
                as well as desktops
              </div>

            </div>

            <div class="col-2">
              <img class="rounded float-end" src="../../images/JavaScriptlogo.jpg" height="100px" >
            </div>

          </div>
        </li>

        <li class="list-group-item">
          <div class="row">
            <div class="col-10">
              <div class="text-secondary">
                Web Development
              </div>

              <div class="fw-bolder">
                jQuery
              </div>

              <div class="text-secondary">
                123k Tuits
              </div>

            </div>

            <div class="col-2">
              <img class="float-end" src="../../images/jquery.jpg" height="100px" >
            </div>

          </div>
        </li>

        <li class="list-group-item">
          <div class="row">
            <div class="col-10">
              <div class="text-secondary">
                Web Development
              </div>

              <div class="fw-bolder">
                <span class="text-black">NodeJS</span>
                <span class="text-secondary"> - 2h </span>
              </div>

              <div class="text-secondary">
                123k Tuits
              </div>

            </div>

            <div class="col-2">
              <img class="float-end" src="../../images/nodejs.jpg" height="100px" >
            </div>

          </div>
        </li>
      </ul>
      `
  )
}

export default mainCotent;