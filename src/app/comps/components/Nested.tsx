"use client";
import React, { useState } from "react";
import { Collapse, Card, CardBody, ListItem, List } from "@material-tailwind/react";

interface Organization {
  orgid: string;
  orgname: string;
  superorgid: string;
}

interface OpenItems {
  [orgId: string]: boolean;
}

interface NestedProps {
  orgData: Organization[];
}

const generateNestedItems = (orgId: string, isOpen: (orgId: string) => boolean, toggleOpen: (orgId: string) => void, orgData: Organization[]): JSX.Element[] | null => {
  const items: JSX.Element[] = [];

  for (const orgItem of orgData) {
    if (orgItem.superorgid === orgId) {
      const hasChildren = orgData.some((item) => item.superorgid === orgItem.orgid);

      const itemStyle = {
        color: isOpen(orgItem.orgid) ? "blue" : "black",
        cursor: hasChildren ? "pointer" : "default"
      };

      items.push(
        <div key={orgItem.orgid}>
          <ListItem onClick={() => hasChildren && toggleOpen(orgItem.orgid)} style={itemStyle}>
            {hasChildren && (
              <span className="mr-2">
                {isOpen(orgItem.orgid) ? "-" : "+"}
              </span>
            )}
            {orgItem.orgname}
          </ListItem>
          {hasChildren && (
            <Collapse open={isOpen(orgItem.orgid)}>
              <Card>
                <CardBody className="p-0">
                  <List>
                    {generateNestedItems(orgItem.orgid, isOpen, toggleOpen, orgData)}
                  </List>
                </CardBody>
              </Card>
            </Collapse>
          )}
        </div>
      );
    }
  }

  return items.length > 0 ? items : null;
};

const Nested: React.FC<NestedProps> = ({ orgData }) => {
  const [openItems, setOpenItems] = useState<OpenItems>({});

  const toggleOpen = (orgId: string) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [orgId]: !prevOpenItems[orgId]
    }));
  };

  const isOpen = (orgId: string) => {
    return openItems[orgId] || false;
  };

  return (
    <>
      {generateNestedItems("root", isOpen, toggleOpen, orgData)}
    </>
  );
};

export default Nested;
