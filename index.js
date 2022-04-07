const client = require('./twitterClient')
const {getFollowers, getProfileImageUrl} = require('./twitterController')
const { saveImage } = require('./imageController')

const generateBanner = async()=>{
    const followers = await getFollowers()

    for(const follower of followers){
        const url = await getProfileImageUrl(follower.id)
        await saveImage(follower.id, url)
    }
}

generateBanner();