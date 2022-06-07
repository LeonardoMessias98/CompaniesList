import { GetStaticProps } from "next";
import api from "shared/services/api";

import { ICompany } from "shared/types";
import HomePage from "../modules/Home";

interface IHomePage {
  companies: ICompany[];
}

const Home = ({ companies }: IHomePage) => {
  return <HomePage companies={companies} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const getAllCompanies = async () => {
    try {
      const response = await api.get("/companies");
      return response.data.companies;
    } catch (error) {
      return [];
    }
  };

  const companies = await getAllCompanies();

  return {
    props: {
      companies,
    },
    revalidate: 60 * 5,
  };
};

export default Home;
