import { NextApiRequest, NextApiResponse } from "next";
import * as db from "../../../db/db.json";

const GetSingleNumber = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const numberId = req.query.id;
    const { phone_numbers } = db;

    if (!numberId) {
      res.status(400).end("Missing phone number id");
    }

    const single_number = phone_numbers.filter(
      (number) => number.id === numberId
    );

    if (!single_number[0]) {
      res.status(404).end("Phone number not found");
    }

    return res.status(200).json({ number: single_number[0] });
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
};

export default GetSingleNumber;
