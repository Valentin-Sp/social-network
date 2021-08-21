import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"
                    alt="content"
                />
            </div>
            <div className={s.descriprionBlock}>
                <img src={props.profile.photos.large}/>
                Ava + descriprion
            </div>
        </div>
    );
};

export default ProfileInfo;


