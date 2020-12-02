import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.massage} likesCount={p.likesCount}/>)

    let NewPostElement = React.createRef();

     let AddPost = () => {
         let text = NewPostElement.current.value;
         alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={NewPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ AddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
