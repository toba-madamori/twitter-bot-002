const client = require('./twitterClient')


const getFollowers = async()=>{
    const followers = await client.v2.followers(`${process.env.TWITTER_ID}`)
    return followers.data.slice(0, 5)
}

const getProfileImageUrl = async(user_id)=>{
    const { profile_image_url } = await client.v1.user({user_id})
    return profile_image_url
}

const updateBanner = async()=>{
    await client.v1.updateAccountProfileBanner('./final.png', {
        width:1500,
        height:500
    })
}

module.exports = {
    getFollowers,
    getProfileImageUrl,
    updateBanner
}