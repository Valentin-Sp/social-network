import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://lh3.googleusercontent.com/proxy/ILR55UQm_J8ou4GMiL-Jq4oA2ZnhsCkKeeQykkAFH5ii0LLmG-c7undIbsIxyzOo-a1tQCgkwmOVsBv6RR56QHWzI5mbXi42egkQ-sv8Qe6QufpaMfY52sVv7xyLKTmg2XKVnvJkTK-R8tlenvOcLSpBJM-1Q_N3gg9ybTMIrA',
                    followed: false,
                    fullName: 'Maks',
                    status: 'I like it',
                    location: {city: 'Ternopil', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://lh3.googleusercontent.com/proxy/ILR55UQm_J8ou4GMiL-Jq4oA2ZnhsCkKeeQykkAFH5ii0LLmG-c7undIbsIxyzOo-a1tQCgkwmOVsBv6RR56QHWzI5mbXi42egkQ-sv8Qe6QufpaMfY52sVv7xyLKTmg2XKVnvJkTK-R8tlenvOcLSpBJM-1Q_N3gg9ybTMIrA',
                    followed: true,
                    fullName: 'Anton',
                    status: 'I like it to',
                    location: {city: 'Warsaw', country: 'Poland'}
                },
                {
                    id: 3,
                    photoUrl: 'https://lh3.googleusercontent.com/proxy/ILR55UQm_J8ou4GMiL-Jq4oA2ZnhsCkKeeQykkAFH5ii0LLmG-c7undIbsIxyzOo-a1tQCgkwmOVsBv6RR56QHWzI5mbXi42egkQ-sv8Qe6QufpaMfY52sVv7xyLKTmg2XKVnvJkTK-R8tlenvOcLSpBJM-1Q_N3gg9ybTMIrA',
                    followed: false,
                    fullName: 'Sergei',
                    status: 'I like this',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u =>
                <div key={u.id}>
             <span>
                    <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
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
}
export default Users;
