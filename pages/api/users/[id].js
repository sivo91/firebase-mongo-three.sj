
import connectDB from "../../../utils/connectDB"
import Data from '../../../models/Data'
//import nc from 'next-connect'


connectDB()
/* 
const handler = nc()
  .get( async (req, res) => {
    try {
      const post = await Data.findOne({_id : req.query.id })
      res.send(post)
      res.status(200).json(posts)
    } catch (error) {
      return res.status(400).json({ message: 'something wrong' })
    }
  }).put( async (req, res) => {
     
    try {
      
       const post = await Data.findOne({ _id : req.query.id})
       post.title = req.body.title
       post.description = req.body.description
       post.imageurl = req.body.imageurl
       await post.save()
       res.send('success')
       window.location.href='/posts'
    } catch (error) {
      return res.status(400).json({ message: 'something wrong' })
    }
  }).delete( async(req, res) => {
    try {
      
      await Data.findByIdAndDelete({ _id : req.query.id})
      res.send('Success')
    } catch (error) {
      return res.status(400).json({ message: 'something wrong'})
    }
  })
export default handler */

export default async function handler(req, res) {

  const { method } = req;
  const { id } = req.query;

  switch (method) {
   case "GET":

      try {
        const client = await Data.findOne({ _id: req.query.id });
        res.send(client)
       
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }

      break;

    case "PUT":
      try {
        const { car, model, color } = req.body;
        if (!car && !model && color) return "inavalid data";
        await Data.updateOne({ _id: id }, {  car, model, color });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await Data.deleteOne({ _id: id });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "GET":
      try {
         await Data.findOne({ _id: id})
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }  
  }
}