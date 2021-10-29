import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElement = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;