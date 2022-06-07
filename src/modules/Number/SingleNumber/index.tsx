import { useRouter } from "next/router";
import React from "react";
import { IPhoneNumber } from "shared/types";
import { Container } from "./styles";

interface ISingleNumber {
  number: IPhoneNumber;
}

const SingleNumber = ({ number }: ISingleNumber) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Container>
      <button onClick={handleGoBack}>Go Back</button>

      <div className="number">
        <b>Number:</b>
        {number.id}
      </div>

      <div className="type">
        <b>Type:</b>
        {number.type}
      </div>
    </Container>
  );
};
export default SingleNumber;
