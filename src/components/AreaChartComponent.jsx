import React from 'react'
import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
    {
      date: "Sep 18",
      Male: 2890,
      "Female": 2338,
    },
    {
      date: "Sep 19",
      Male: 2756,
      "Female": 2103,
    },
    {
      date: "Sep 20",
      Male: 3322,
      "Female": 2194,
    },
    {
      date: "Sep 21",
      Male: 3470,
      "Female": 2108,
    },
    {
      date: "Sep 22",
      Male: 3575,
      "Female": 2012,
    },
    {
      date: "Sep 23",
      Male: 3729,
      "Female": 2526,
    },
  ];

const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const AreaChartComponent = () => {
  return (
    <Card className="mt-4">
          <Title>Average income/allowance over the years (USD)</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="date"
            categories={["Male", "Female"]}
            colors={["indigo", "cyan"]}
            valueFormatter={valueFormatter}
          />
        </Card>
  )
}

export default AreaChartComponent