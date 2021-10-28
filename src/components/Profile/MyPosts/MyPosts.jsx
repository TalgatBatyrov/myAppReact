import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElement = props.posts.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;