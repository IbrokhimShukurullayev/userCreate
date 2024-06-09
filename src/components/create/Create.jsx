import React from 'react';
import "./create.scss";

import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";

const Create = () => {
    const handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let user = Object.fromEntries(formData.entries());

        let {fname, lname, username, email, address, gender, comment} = user;

        let newUser = {
            username,
            email,
            address,
            gender,
            comment,
            name: {
                fname,
                lname,
            },
        };

        console.log(newUser);

        e.target.reset();
    };

    return (
        <div className='container'>
            <h2>Create</h2>
            <div className="user">
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <input type="text" name='fname' placeholder='First Name' />
                        <input type="text" name='lname' placeholder='Last Name' />
                        <input type="text" name='username' placeholder='Username' />
                        <input type="email" name='email' placeholder='Email' />
                        <input type="text" name='address' placeholder='Address' />
                        <select name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <textarea name="comment" rows="10" placeholder='Comment'></textarea><br />
                    <button>Create user</button>
                </form>
                <div className='user__right'>
                    <div className="users__card">
                        <img src={male} alt="Male Avatar" />
                        <h2>Ibrohim</h2>
                        <h2>Shukurullayev</h2>
                        <p>Frontend</p>
                        <p>22 years old</p>
                        <div className="user__buttons">
                            <button>Remove</button>
                            <button className="user__edit">Edit</button>
                        </div>
                    </div>
                    <div className="users__card">
                        <img src={male} alt="Male Avatar" />
                        <h2>Ibrohim</h2>
                        <h2>Shukurullayev</h2>
                        <p>Frontend</p>
                        <p>22 years old</p>
                        <div className="user__buttons">
                            <button>Remove</button>
                            <button className="user__edit">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
