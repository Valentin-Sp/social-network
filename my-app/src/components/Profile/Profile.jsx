import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"
                    alt="content"
                />
            </div>
            <div className={s.Profile}>Ava + descriprion</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;


