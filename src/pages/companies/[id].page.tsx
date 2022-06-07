import React from "react";
import { GetStaticProps } from "next";

import SingleCompanyModule from "modules/Companies/SingleCompany";
import { ICompany, IPhoneNumber } from "shared/types";
import api from "shared/services/api";

interface ISingleCompany {
  company: {
    company: ICompany;
    company_numbers: IPhoneNumber[];
  };
}

const SingleCompany = ({ company }: ISingleCompany) => {
  return (
    company && (
      <SingleCompanyModule
        company={company?.company}
        phoneNumbers={company?.company_numbers}
      />
    )
  );
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const getSingleCompany = async () => {
    try {
      const response = await api.get(`/companies/${id}`);

      return response.data;
    } catch (error) {}
    return null;
  };

  const company = await getSingleCompany();

  if (!company) return { notFound: true };

  return {
    props: { company },
    revalidate: 60 * 5,
  };
};

export default SingleCompany;
