let selected = 0;

window.addEventListener('click', (e) => {
    const posts2 = document.querySelectorAll('.post');
    posts2.forEach((post, index) => {
        const hideBtn = post.querySelector('.postHideBtn');
        if (hideBtn === null) { }
        else {
            if (hideBtn.contains(e.target)) {
                console.log(index + ' hide');
                posts[index].hidden = true;
                populatePostHTMl();
            }
        }

        const undoBtn = post.querySelector('.undoBtn');
        if (undoBtn === null) { }
        else {
            if (undoBtn.contains(e.target)) {
                console.log(index + ' unhide');
                posts[index].hidden = false;
                populatePostHTMl();
            }
        }
        
        const selectedPostContainer = document.querySelector('.selectedPostContainer');
        const commentBtns = post.querySelectorAll('.commentBtn');
        commentBtns.forEach(element => {
            if (element.contains(e.target)) {
                if(selected === 0){
                    populateSelected(index);
                    selectedPostContainer.style.display = 'block';
                    selected = 1;
                }
                else{
                    selectedPostContainer.style.display = 'none';
                    selected = 0 ;
                }
            }
        });


        const selectedPostCloseBtn = post.querySelectorAll('.selectedPostCloseBtn');
        selectedPostCloseBtn.forEach(element => {
            if (element.contains(e.target)) {
                selectedPostContainer.style.display = 'none';
                selected = 0;
            }
        });

        if (selectedPostContainer === (e.target)) {
            if (selected === 1) {

                selectedPostContainer.style.display = 'none';
                selected = 0 ;
            }
        }
    });
})

function populateSelected(index) {
    let selectedPost = posts[index];
    console.log(selectedPost)
    let selected =
        `<div class="selectedPost">
    <div class="post">
    ${selectedPost.hidden === false ?
            // if not hidden
            `<div class="postProfileContainer">
      <div class="profileContainer">
      <a href="index.html" class="profileBox">
      <img loading="lazy" class="roundImg postProfilePic" src=${selectedPost.profile} alt="image">
            ${selectedPost.status !== "on" ?
                //if online
                `<div class="status"></div>` :
                //if offline
                `<div class="status online"></div>`
            }
          </a>
    
            ${selectedPost.groupName !== "" ?               /// if groupName is not absent
                `<div class="profile">
                    <div class="postGroupName"><a href="index.html">${selectedPost.groupName}</a></div>
                    <div class="postProfileBox">
                      <a href="index.html" class="nicerLinks postProfileName">${selectedPost.name}</a>
                      <div class="postTime">| ${selectedPost.time} ago</div>
                    </div>
                   
                </div>` :                            // if groupName is absent
                `<div class="profile">                   
              <div class="postProfileBox">
                <a href="index.html" class="nicerLinks postProfileName">${selectedPost.name}</a>
                <div class="postTime">| ${selectedPost.time} ago</div>
              </div>
            </div>`}
        </div>
    
      <div class="postEdit">
        <i class="fa-solid fa-ellipsis fa-xl"></i>
        <i class="fa-solid fa-xmark fa-xl selectedPostCloseBtn"></i>
        </div>
        </div>
        
        <div class="postCaption">${selectedPost.caption}</div>
        <div class="postImgContainer">
          <img class="postImg" src=${selectedPost.post} alt="image"></img>
        </div>
        <div class="postActivity">
          <div class="reactionBtnContainer">
          <button class="postReactionBtn roundIconsSmaller">
          <i class="fa-solid fa-heart love" style="color: #ff4a4a;"></i>
          </button>
          <button class="postReactionBtn roundIconsSmaller">
            <i class="fa-solid fa-thumbs-up like" style="color: #0080ff;"></i>
          </button>
          <button class="postReactionBtn roundIconsSmaller">
            <i class="fa-solid fa-face-laugh laugh" style="color: #ffff00;"></i>
          </button>
          <button class="postReactionBtn roundIconsSmaller">
            <i class="fa-solid fa-face-angry hate" style="color: #ff0202;"></i>
          </button>
          <div class="reactionNo">10</div>
        </div>
      <button class="othersShare postActivityBtn">2 shares</button>
    </div>
    <div class="myActivity">
      <button class="likeBtn activityBtn hoverEffect"><i class="fa-solid fa-thumbs-up fa-2xl like" style="color: #0080ff;"></i>Like</button>
      <button class="commentBtn activityBtn hoverEffect"><i class="fa-solid fa-comment fa-xl"></i> Comment</button>
      <button class="shareBtn activityBtn hoverEffect"><i class="fa-solid fa-share fa-xl"></i> Share</button>
      </div>`:
            // if hidden

            `<div class="hiddenPostBox">
      <div class="hiddenInfoContainer">
        <i class="fa-solid fa-eye-slash" style="color: #ffffff;"></i>
        <b>Hidden</b>
      </div>
      <button class="undoBtn hoverEffect">Undo</button>
    </div>`

        }</div>

    <div class="commentSection">
        <div class="comment">
        <div class="commentProfile">
            <img src="images/member-2.png" class="roundImg" alt="">
            <b>Ram Prasad</b>
        </div>
        
        <div class="commentTextContainer">
            <div class="line"></div>
            <small class="commentText">Very Good</small>
        </div>
        
        </div>
        <div class="comment">
        <div class="commentProfile">
            <img src="images/member-2.png"  class="roundImg" alt="">
            <b>Ram Prasad</b>
        </div>
        
        <div class="commentTextContainer">
            <div class="line"></div>
            <smal class="commentText">Very Good post  hahah had er hsdf er sdf er  sf des ere sr  sodiaufer </small>
        </div>
        </div>
    </div>`;
    const selectedPostContainer = document.querySelector('.selectedPostContainer');
    selectedPostContainer.innerHTML = selected;
}