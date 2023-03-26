function navigation() {
  return (`
  <div class="list-group">
        <div class="list-group-item fab fa-twitter col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12"></div>


        <div class="d-flex list-group-item col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
          <div class="fa fa-home"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block">Home</div>
        </div>

        <div class="d-flex col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12" style="background-color: blue">
          <div class="fab fa-internet-explorer" style="color: white"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block" style="color: white">Explore</div>
        </div>

        <div class="d-flex list-group-item col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
          <div class="fa fa-bell"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block">Notifications</div>
        </div>

        <div class="d-flex list-group-item col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
          <div class="fa fa-envelope"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block">Messages</div>
        </div>

        <div class="d-flex list-group-item col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
          <div class="fa fa-bookmark"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block">Bookmarks</div>
        </div>

        <div class="d-flex list-group-item col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
          <div class="fa fa-list"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block">Lists</div>
        </div>

        <div class="d-flex list-group-item col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
          <div class="far fa-user"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block">Profile</div>
        </div>


        <div class="d-flex list-group-item col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
          <div class="fas fa-plus"></div>
          <div class="ps-2 d-none d-xl-block d-xxl-block">More</div>
        </div>

      </div>

      <div class="col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
        <button class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
      </div>
  `)
}

export default navigation;