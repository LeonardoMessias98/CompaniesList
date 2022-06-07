import { NextApiRequest, NextApiResponse } from "next";
import * as db from "../../../db/db.json";

const GetCompany = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return res.status(200).json({ companies: db.companies });
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
};

export default GetCompany;
