import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Post 1' />
                <Post message='Post 2' />
            </div>
        </div>
    )
}

export default MyPosts;