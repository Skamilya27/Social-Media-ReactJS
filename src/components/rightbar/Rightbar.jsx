import React from 'react';
import "./Rightbar.css";

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Robin Singh</b> and <b>3 other friends</b> have their birthday today</span>
        </div>
        <img src="/assets/ads.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/person/2.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">David Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/person/2.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">David Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/person/2.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">David Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/person/2.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">David Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/person/2.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">David Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/person/2.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">David Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
