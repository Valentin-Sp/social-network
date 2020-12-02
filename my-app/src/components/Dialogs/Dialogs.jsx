import React from "react";
import s from "./Dialogs.module.css";
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let NewChatsElement = React.createRef();

    let AddChat = () => {
        let text = NewChatsElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea ref={NewChatsElement}></textarea>
                </div>
                <div>
                    <button onClick={AddChat}>Add Chat</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;
