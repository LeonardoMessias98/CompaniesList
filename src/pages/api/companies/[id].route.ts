import { NextApiRequest, NextApiResponse } from "next";
import * as db from "../../../db/db.json";

const GetSingleCompany = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const companyId = req.query.id;
    const { companies, phone_numbers } = db;

    if (!companyId) {
      res.status(400).end("Missing company id");
    }

    const company = companies.filter(
      (company) => company.id === Number(companyId)
    );

    if (!company[0]) {
      res.status(404).end("Company not found");
    }

    const company_numbers = phone_numbers.filter(
      (phone) => phone.company_id === company[0].id
    );

    return res.status(200).json({ company_numbers, company: company[0] });
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
};

export default GetSingleCompany;
