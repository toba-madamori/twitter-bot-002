const client = require('./twitterClient')
const {getFollowers, getProfileImageUrl} = require('./twitterController')

const generateBanner = async()=>{
    const followers = await getFollowers()
}