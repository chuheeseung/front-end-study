import React, { Fragment } from 'react'

export default function Profile ({name, email}) {
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {email}
            </div>
        </div>
    )
}