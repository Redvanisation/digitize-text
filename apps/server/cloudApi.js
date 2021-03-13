const vision = require('@google-cloud/vision');

async function quickstart(req, res) {
  const { image } = req.body;

  try {

    // console.log(image)

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
      // content: req.body.image,
      credentials: {
        client_email: process.env.CLIENT_EMAIL,          
        private_key: process.env.PRIVATE_KEY
      }
    });
  
    // Performs label detection on the image file
    // const [result] = await client.documentTextDetection(req.body.image);
    const [result] = await client.documentTextDetection(image);

    if (result && result.fullTextAnnotation) {
      const textObject = result.fullTextAnnotation;

      console.log(result);
      res.status(200).json(textObject);

    } else {
      console.log('Nothing!');
      res.json('Please upload an image with text!');
    }

  } catch (err){
    // console.log('Error handling the request!');
    console.log(err);
    res.status(400).json('Error handling the request!');
  }
}

module.exports = {
  quickstart
};
