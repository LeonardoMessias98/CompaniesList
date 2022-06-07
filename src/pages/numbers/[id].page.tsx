import React from "react";
import SingleNumberModule from "modules/Number/SingleNumber";
import { GetStaticProps } from "next";
import api from "shared/services/api";
import { IPhoneNumber } from "shared/types";

interface ISingleNumber {
  number: IPhoneNumber;
}

const SingleNumber = ({ number }: ISingleNumber) => {
  return number && <SingleNumberModule number={number} />;
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const getSingleNumber = async () => {
    try {
      const response = await api.get(`/numbers/${id}`);

      return response.data.number;
    } catch (error) {}
    return [];
  };

  const number = await getSingleNumber();

  if (!number) return { notFound: true };

  return {
    props: { number },
    revalidate: 60 * 5,
  };
};

export default SingleNumber;
