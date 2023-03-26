const NavigationSidebar = (active) => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
      <i= class="fab fa-twitter"></i></a>
       
     <a class="d-flex list-group-item" href="/"> 
       <div class="fa fa-home"></div>
       <div class="ps-2 d-none d-xl-block d-xxl-block">Home</div>
     </a>
       
     <a class="d-flex list-group-item btn-primary" href="/">
      <div class="fab fa-internet-explorer" style="color: white"></div>
      <div class="ps-2 d-none d-xl-block d-xxl-block" style="color: white">Explore</div>
     </a>
     
     <a class="d-flex list-group-item" href="/">
      <div class="fa fa-bell"></div>
      <div class="ps-2 d-none d-xl-block d-xxl-block">Notifications</div>
     </a>
     
     <a class="d-flex list-group-item" href="/">
       <div class="fa fa-envelope"></div>
       <div class="ps-2 d-none d-xl-block d-xxl-block">Messages</div>
     </a>
     
     <a class="d-flex list-group-item" href="/">
       <div class="fa fa-bookmark"></div>
       <div class="ps-2 d-none d-xl-block d-xxl-block">Bookmarks</div>
     </a>
     
     <a class="d-flex list-group-item" href="/">
      <div class="fa fa-list"></div>
       <div class="ps-2 d-none d-xl-block d-xxl-block">Lists</div>
    </a>
     
     <a class="d-flex list-group-item" href="/">
      <div class="far fa-user"></div>
      <div class="ps-2 d-none d-xl-block d-xxl-block">Profile</div>
    </a>

    <a class="d-flex list-group-item" href="/">
      <div class="fas fa-plus"></div>
       <div class="ps-2 d-none d-xl-block d-xxl-block">More</div>
    </a>
       
          
   </div>
   
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;