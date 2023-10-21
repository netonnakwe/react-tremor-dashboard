import React from 'react'
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
  {
    firstName: "Ifeoluwa",
    lastName: "Folami",
    department: "Society of Electrical and Electronic Engineering Students (SEEES)",
    status: "female",
  },
  {
    firstName: "EwaOluwa",
    lastName: "Morenikeji",
    department:
      "Nigerian Institute of Civil Engineers - Students Affiliate (NICESA)",
    status: "female",
  },
  {
    firstName: "Samuel",
    lastName: "Itama",
    department: "Nigerian Institute of Mechanical Engineers (NiMechE)",
    status: "male",
  },
  {
    firstName: "Kehinde",
    lastName: "Yusuf",
    department: "Wood Products Engineering Students Association (WOPESA)",
    status: "female",
  },
  {
    firstName: "Olayinka",
    lastName: "Oyedola",
    department: "Nigerian Association of Food Technology Students (NASFTS)",
    status: "male",
  },
  {
    firstName: "Agbenu",
    lastName: "Obande",
    department: "Society of Petroleum Engineers (SPE)",
    status: "female",
  },
  {
    firstName: "Olufemi",
    lastName: "Adewoyin",
    department: "Industrial Engineering Students Association (IESA)",
    status: "male",
  },
  {
    firstName: "Habib",
    lastName: "Rasheed",
    department: "Agricultural and Environmental Engineering Students Association (AEESA)",
    status: "male",
  },
];

const TableComponent = () => {
  return (
    <Card className='mt-4'>
    <Title>List of Departmental Presidents</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>First Name</TableHeaderCell>
          <TableHeaderCell>Last Name</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.firstName}>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>
              <Text>{item.lastName}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.department}</Text>
            </TableCell>
            <TableCell>
              <Badge color={item.status === 'male' ? ("blue") : ("pink")} icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}

export default TableComponent