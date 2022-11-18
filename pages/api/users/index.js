
import connectDB from "../../../utils/connectDB"
import Data from '../../../models/Data'
import nc from 'next-connect'


connectDB()

/* const handler = nc()
 .get( async (req, res) => {
    try {
      const posts = await Data.find({})
      res.status(200).json(posts)
    } catch (error) {
      return res.status(400).json({ message: 'something wrong' })
    }
  })
  .post( async (req,res) => {
        const {title, description, imageurl} = req.body
        try {
          const newpost = new Data({ title, description, imageurl })
          await newpost.save()
          res.send('success')
          
        } catch (error) {
            console.log(error)
            return res.status(404).json({ message: 'something wrong'})
        }
      })
export default handler */


export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":

      try {
        const clients = await Data.find({});
        res.status(200).json({success: true, data:clients });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }

      break;

    case "POST":
      try {
        const { car, model, color } = req.body;

        if (!car && !model && !color) throw "invalid data";
        const client = await Data.create({ car, model, color });

        res.status(201).json({success:true, data:client});
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}