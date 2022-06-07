import React from "react";

import List, { ListItem } from "shared/components/atoms/List";
import { ICompany, IPhoneNumber } from "shared/types";
import { Container } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

interface ISingleCompany {
  company: ICompany;
  phoneNumbers: IPhoneNumber[];
}

const SingleCompany = ({ company, phoneNumbers }: ISingleCompany) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Container>
      <button onClick={handleGoBack}>Go Back</button>

      <h1>{company.name}</h1>

      {phoneNumbers?.length > 0 && (
        <List>
          <ListItem>
            <div className="number">Number</div>
            <div className="type">Type</div>
          </ListItem>

          {phoneNumbers.map((phone) => (
            <ListItem key={String(phone.id)}>
              <div className="number">
                <Link href={`/numbers/${phone.id}`}>
                  <a>{phone.id}</a>
                </Link>
              </div>
              <div className="type">{phone.type}</div>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default SingleCompany;
