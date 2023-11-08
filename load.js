let stories = [
  { profile: "https://source.unsplash.com/40x40/?human", status: "on", name: "1", story: "https://source.unsplash.com/160x260/?beach" },
  { profile: "https://source.unsplash.com/40x40/?ghost", status: "off", name: "2", story: "https://source.unsplash.com/160x260/?technology" },
  { profile: "https://source.unsplash.com/40x40/?cat", status: "on", name: "3", story: "https://source.unsplash.com/160x260/?party" },
  { profile: "https://source.unsplash.com/40x40/?beer", status: "off", name: "4", story: "https://source.unsplash.com/160x260/?forest" },
  { profile: "https://source.unsplash.com/40x40/?god", status: "on", name: "5", story: "https://source.unsplash.com/160x260/?math" }
];

let posts = [
  { hidden: false, profile: "https://source.unsplash.com/40x40/?marvel", status: "on", groupName: "", name: "1 Anthony", time: '7 hrs', caption: "Good Times", post: "https://source.unsplash.com/600x600/?art",reactions:12 , shares:3,react:false },
  { hidden: false, profile: "https://source.unsplash.com/40x40/?ancient", status: "off", groupName: "", name: "2 Jonson", time: '2hrs', caption: "Good Times", post: "https://source.unsplash.com/730x120/?ocean",reactions:1 , shares:0,react:false },
  { hidden: false, profile: "https://source.unsplash.com/40x40/?alien", status: "off", groupName: "103", name: "3 Richy", time: '1 day', caption: "Good Times", post: "https://source.unsplash.com/1200x720/?hiking" ,reactions:189 , shares:83,react:false},
  { hidden: false, profile: "https://source.unsplash.com/40x40/?mafia", status: "on", groupName: "104", name: "4 Micheal", time: '1 month', caption: "Good Times", post: "https://source.unsplash.com/1200x1200/?pets" ,reactions:9 , shares:23,react:false},
  { hidden: false, profile: "https://source.unsplash.com/40x40/?pink", status: "on", groupName: "105", name: "5 Albert", time: '2 hrs', caption: "Good Times", post: "https://source.unsplash.com/1200x1200/?clothes" ,reactions:54 , shares:35,react:false},
];

const reelBox = document.querySelector(".reelBox");
const otherPostBox = document.querySelector(".otherPostBox");

function populateReelHTMl() {
  let reelHTMl = '';
  stories.forEach(element => {
    reelHTMl += `   
        <a href="index.html" class="reel">
            <img loading="lazy" class="reelPhoto " src=${element.story} alt="img">
            <div class="reelProfilebox">
                <div class="otherProfilePic">
                    <img loading="lazy" src=${element.profile} class="othersPic" alt="p1">
                    ${element.status !== "on" ?
        //if online
        `<div class="status"></div>` :
        //if offline
        `<div class="status online"></div>`
      }
                </div>
            </div>
            <div class="othersName">${element.name}</div>
        </a>`
  });
  reelBox.innerHTML += reelHTMl;
}

function populatePostHTMl() {
  let postHTMl = '';
  posts.forEach(element => {
    postHTMl += `
    <div class="post">
    ${element.hidden === false ?
        // if not hidden
        `<div class="postProfileContainer">
      <div class="profileContainer">
      <a href="index.html" class="profileBox">
      <img loading="lazy" class="roundImg postProfilePic" src=${element.profile} alt="image">
            ${element.status !== "on" ?
          //if online
          `<div class="status"></div>` :
          //if offline
          `<div class="status online"></div>`
        }
          </a>
    
            ${element.groupName !== "" ?               /// if groupName is not absent
          `<div class="profile">
                    <div class="postGroupName"><a href="index.html">${element.groupName}</a></div>
                    <div class="postProfileBox">
                      <a href="index.html" class="nicerLinks postProfileName">${element.name}</a>
                      <div class="postTime">| ${element.time} ago</div>
                    </div>
                   
                </div>` :                            // if groupName is absent
          `<div class="profile">                   
              <div class="postProfileBox">
                <a href="index.html" class="nicerLinks postProfileName">${element.name}</a>
                <div class="postTime">| ${element.time} ago</div>
              </div>
            </div>`}
        </div>
    
      <div class="postEdit">
        <i class="fa-solid fa-ellipsis fa-xl"></i>
        <i class="fa-solid fa-xmark fa-xl postHideBtn"></i>
        </div>
        </div>
        
        <div class="postCaption">${element.caption}</div>
        <div class="postImgContainer">
          <img class="postImg" src=${element.post} alt="image"></img>
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
          <div class="reactionNo">${element.reactions}</div>
        </div>
      <button class="othersShare postActivityBtn">${element.shares} shares</button>
    </div>
    <div class="myActivity">
      <button class="likeBtn activityBtn hoverEffect"><i class="fa-solid fa-thumbs-up fa-2xl like"></i>Like</button>
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

      }</div>`;

  });
  otherPostBox.innerHTML = postHTMl;
}

populateReelHTMl();
populatePostHTMl();