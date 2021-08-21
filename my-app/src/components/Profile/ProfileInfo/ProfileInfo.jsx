import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"
                    alt="content"
                />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;


