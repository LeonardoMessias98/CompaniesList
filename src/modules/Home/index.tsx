import React from "react";
import Link from "next/link";

import { ICompany } from "shared/types";
import { Container } from "./styles";
import List, { ListItem } from "shared/components/atoms/List";

interface IHomePage {
  companies: ICompany[];
}

const HomePage = ({ companies }: IHomePage) => {
  return (
    <Container>
      <h1>Companies</h1>

      {companies.length > 0 && (
        <List>
          <ListItem>
            <div className="name">Company name</div>
            <div className="vatin">Vatin</div>
          </ListItem>

          {companies.map((company) => (
            <ListItem key={String(company.id)}>
              <div className="name">
                <Link href={`/companies/${company.id}`}>
                  <a>{company.name}</a>
                </Link>
              </div>
              <div className="vatin">{company.vatin}</div>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default HomePage;
