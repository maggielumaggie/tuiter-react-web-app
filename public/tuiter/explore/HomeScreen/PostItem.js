import homePosts from "./homePosts.js";

const PostItem = () => {
  return (`
  ${homePosts.map(homepost => (`
  <li class="list-group-item position-relative">
          <div class="row">
            <div class="col-1">
              <img class="float-left position-absolute top-3 left-3" src="${homepost.profile}" height="50px" >
            </div>  
            
            <div class="col-11">
              <div>
                <div class="fw-bolder text-white d-inline">
                  ${homepost.user}
                </div>
                
                <div class="text-secondary d-inline">
                  ${homepost.userName}
                </div>
                
              </div>

              <div class="text-white">
                ${homepost.tuit}
              </div>

              
              <img class="top-3 left-3" src="${homepost.image}" height="200px">
              
              <div class="text-white">
                ${homepost.title}
              </div>
              
              <div class="text-secondary">
                ${homepost.content}
              </div>
              

            </div>

            

          </div>
        </li>
  `))}
  
  `);
}

export default PostItem;