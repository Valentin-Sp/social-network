import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"
                    alt="content"
                />
            </div>
            <div className={s.descriprionBlock}>
                Ava + descriprion
            </div>
        </div>
    );
};

export default ProfileInfo;


