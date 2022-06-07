import { NextApiRequest, NextApiResponse } from "next";
import * as db from "../../../db/db.json";

const GetNumbers = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return res.status(200).json({ phone_numbers: db.phone_numbers });
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
};

export default GetNumbers;
