import whos from "./whos.js";
const WhoToFollowListItem = () =>{
  return (`
        ${whos.map(who => (`
        <div class="list-group-item position-relative">
          <div class="row">
            <div class="col-2">
              <img class="float-end position-absolute bottom-3 right-3" src="${who.avatarIcon}" height="50px" >
            </div>
            <div class="col-6">
              <div class="fw-bolder">
                ${who.userName}
              </div>
              <div class="text-secondary">
                ${who.handle}
              </div>
            </div>
            <div class="col-4">
              <button class="btn btn-primary w-80 mt-1 rounded-pill">Follow</button>
            </div>
          </div>
        </div>
      `))
    }

  `)
}

export default WhoToFollowListItem;