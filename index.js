const client = require('./twitterClient')
const {getFollowers, getProfileImageUrl, updateBanner} = require('./twitterController')
const { saveImage, createBanner } = require('./imageController')
const CronJob = require('cron').CronJob

const job = new CronJob('* * * * *', async()=>{
    await generateBanner()
})

const generateBanner = async()=>{
    const followers = await getFollowers()

    for(const follower of followers){
        const url = await getProfileImageUrl(follower.id)
        await saveImage(follower.id, url)
    }
    await createBanner()
    await updateBanner()
}

job.start()