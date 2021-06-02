import React from 'react'
import './css/profile.css'
function Profile() {
    return (
        <div className="profile">
            <h3>PROFILE</h3>
            <p onFocus={e=>e.target.innerText=""} contentEditable={true} suppressContentEditableWarning={true}>write here about yourself</p>
        </div>
    )
}

export default Profile
