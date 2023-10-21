import React, {useState} from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import { ArrowRightIcon, ChartPieIcon, ViewListIcon } from "@heroicons/react/solid";

const stocks = [
    {
        name: "Civil Engineering",
        value: 3500,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Electrical and Electronics Engineering",
        value: 3720,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Industrial and Production Engineering",
        value: 3450,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Petroleum Engineering",
        value: 7000,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Food Technology",
        value: 3000,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Mechanical Engineering",
        value: 3200,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Wood Prodcts Engineering",
        value: 3200,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Agricultural and Environmental Engineering",
        value: 3310,
        performance: "o.5%",
        deltaType: "moderateIncrease",
    },
]

const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};


const SalesItem = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  return <Card className="max-w-full mx-auto">
    <Flex className="space-x-8 flex-col lg:flex-row">
        <Title>Overview</Title>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <TabList>
                <Tab icon={ChartPieIcon}>Chart</Tab>
                <Tab icon={ViewListIcon}>List</Tab>
            </TabList>
        </TabGroup>
    </Flex>
    <Text className="mt-8">Treasury Values</Text>
    <Metric>$ 30,380</Metric>
    <Divider/>
    <Text className="mt-8">
        <Bold>Treasury Allocation</Bold>
    </Text>
    <Text>1 Faculty - 8 Holdings</Text>
    {selectedIndex === 0 ? (
    <DonutChart data={stocks} valueFormatter={dataFormatter} showAnimation={false} index="name" className="mt-6" />
    ) : (
        <>
        <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
                <Bold>Departments</Bold>
            </Text>
            <Text>Since transaction</Text>
        </Flex>
        <List className="mt-4">
            {stocks.map((stock) => (
                <ListItem key={stock.name}>
                    <Text>{stock.name}</Text>
                    <Flex className="space-x-2" justifyContent="end">
                        <Text>
                            $ {Intl.NumberFormat("us").format(stock.value).toString()}
                        </Text>
                    </Flex>
                </ListItem>
            ))}
        </List>
        </>
        )}
        <Flex className="mt-6 pt-4 border-t">
            <Button size="xs" variant="light" icon={ArrowRightIcon} iconPosition="right">View more</Button>
        </Flex>
  </Card>;
};

export default SalesItem;
