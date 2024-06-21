import jwt from 'jsonwebtoken'
const secret = "highonmemes123"

function setUser(user)
    {
        return jwt.sign(user , secret)
    }