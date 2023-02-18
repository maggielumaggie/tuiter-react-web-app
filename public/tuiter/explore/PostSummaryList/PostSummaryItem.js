import posts from "./posts.js";
const PostSummaryItem = () => {
  return (`
  ${posts.map(post => (`
  <li class="list-group-item">
          <div class="row">
            <div class="col-10">
              <div class="text-secondary">
                ${post.topic}
              </div>

              <div class="fw-bolder">
                <span class="text-white">${post.userName}</span>
                <span class="text-secondary">${post.time} </span>
              </div>

              <div class="fw-bolder col-sm-4 col-md-6 col-lg-8 col-xl-10 col-xxl-12">
                ${post.title}
              </div>

            </div>

            <div class="col-2">
              <img class="float-end" src="${post.image}" height="100px" >
            </div>

          </div>
        </li>
  `))}
  
  `);
}

export default PostSummaryItem;