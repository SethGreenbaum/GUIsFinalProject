import React from 'react';
import "./style.css";
import PostBtnModal from "../PostBtnModal/PostBtnModal";




function PostFeed() {
    return (
           <div className="col s12 m12 l6 offset-l1">
           <div className="card-header center">
                       <h2 id="theFeedHeader">The Feed</h2>
                       <div>
           <PostBtnModal />
           </div>
                   </div>
                   <div className="row" id="feedBox">
                       <div className="col s12 m12 l12" id="singlePost">
                           <div className="card horizontal" id="feedPostStyle">
                                   <div className="card-image">
                                       <img src="https://2ftk8i42xc2w3txabo1l284c-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2020/03/nurse_Mask_GettyImages-73773048_2000x1125-860x484.jpg" alt="healthworkers"/>
                                   </div>
                                   <div className="card-stacked">
                                       <div className="card-content">
                                       <h6> Essential workers are losing their hazard pay even though the hazard isn't over</h6>
                                       <p className="summaryFeed">Placeholder for summary text</p>

                                       </div>
                                       <div className="card-action" id="userLinkID">
                                           <a href="https://www.reddit.com/r/Coronavirus/comments/glgvdt/researchers_need_the_help_of_recovered_covid19/" target="_blank" rel="noopener noreferrer">Link</a>
                                       </div>
                                       <div className="card-footer">
                                           <p id="userpostID">posted by u/BrendaKate 2 mins ago</p>
                                       </div>
                                   </div>
                           </div>
                       </div>
                       <div className="col s12 m12 l12" id="singlePost">
                           <div className="card horizontal" id="feedPostStyle">
                                   <div className="card-image">
                                       <img src="https://thehill.com/sites/default/files/styles/thumb_small_article/public/coronavirusvaccine.jpg?itok=Bf7nGMvh" alt="vaccine"/>

                                   </div>
                                   <div className="card-stacked">
                                       <div className="card-content">
                                       <h6>Public health expert: Vaccine possible this year 'if everything goes in the right direction'</h6>
                                       <p className="summaryFeed">Placeholder for summary text</p>

                                       </div>
                                       <div className="card-action" id="userLinkID">
                                           <a href="https://thehill.com/homenews/sunday-talk-shows/498191-public-health-expert-vaccine-by-years-end-possible-if-everything" target="_blank" rel="noopener noreferrer">Link</a>
                                       </div>
                                       <div className="card-footer">
                                           <p id="userpostID">posted by u/al_paca 23 mins ago</p>
                                       </div>
                                   </div>
                           </div>
                       </div>
                       <div className="col s12 m12 l12" id="singlePost">
                           <div className="card horizontal" id="feedPostStyle">
                                   <div className="card-image">
                                       <img src="https://preview.redd.it/xi37xahgvcz41.jpg?width=960&crop=smart&auto=webp&s=08ed83ea1d23a29cd516a880cd0674665d112667" alt="gtavmeme"/>

                                   </div>
                                   <div className="card-stacked">
                                       <div className="card-content">
                                       <h6>F</h6>
                                       <p className="summaryFeed">Placeholder for summary text</p>

                                       </div>
                                       <div className="card-action" id="userLinkID">
                                           {/* <a href="#"></a> */}
                                       </div>
                                       <div className="card-footer">
                                           <p id="userpostID">posted by u/johnny_chimpo 1 hour ago</p>
                                       </div>
                                   </div>
                           </div>
                       </div>
                   </div>
                   
               </div>
    );
}

console.log()

export default PostFeed;