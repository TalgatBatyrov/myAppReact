import React from "react";
import s from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoUrl: 'https://pbs.twimg.com/profile_images/1236759527179124738/pEx2QkKw_400x400.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 2, photoUrl: 'https://pbs.twimg.com/profile_images/1236759527179124738/pEx2QkKw_400x400.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
                { id: 3, photoUrl: 'https://pbs.twimg.com/profile_images/1236759527179124738/pEx2QkKw_400x400.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="img" className={s.photo} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;