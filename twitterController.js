const client = require('./twitterClient')


const getFollowers = async()=>{
    const followers = await client.v2.followers(`${process.env.TWITTER_ID}`)
    console.log(followers);
}

module.exports = {getFollowers}