import React from 'react'
import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
    {
      city: "Oyo",
      rating: "2 open PR",
    },
    {
      city: "Lagos",
      rating: "1 open PR",
    },
    {
      city: "Abuja",
      rating: "0 open PR",
    },
    {
      city: "Ondo",
      rating: "1 open PR",
    },
    {
      city: "Ekiti",
      rating: "0 open PR",
    },
    {
      city: "Abuja",
      rating: "0 open PR",
    },
  ];

const ScoreList = () => {
  return (
    <Card className="max-w-full">
      <Title>Techites Hometowns</Title>
      <List>
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default ScoreList