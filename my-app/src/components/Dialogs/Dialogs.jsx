import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Dimych</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Valeria</div>
            </div>
            <div className={s.massages}>
                <div className={s.massage}>Hi</div>
                <div className={s.massage}>How is you learning&</div>
                <div className={s.massage}>Yo bro!</div>
            </div>
        </div>
    )
};
export default Dialogs;
