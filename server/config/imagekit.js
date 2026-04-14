//we are doing this file for sending images by using imagekit
import ImageKit from "imagekit";

var imagekit=new ImageKit({
    publicKey:process.env.IMAGE_PUBLIC_KEY,
    privateKey:process.env.IMAGE_PVT_KEY,
    urlend:process.env.IMAGE_URL_ENDPOINT
})


export default imagekit;