import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import {updateStatus} from "../../../redux/profile-reducer";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"*/}
            {/*        alt="content"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;


