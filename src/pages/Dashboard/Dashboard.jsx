import {
  Card,
  Title,
  BarChart,
  ColGrid,
  Block,
  Metric,
  Text,
} from "@tremor/react";

const chartdata = [
  {
    class: "Nursery",
    "Number of boys": 21,
    "Number of girls": 18,
  },
  {
    class: "LKG",
    "Number of boys": 14,
    "Number of girls": 11,
  },
  {
    class: "UKG",
    "Number of boys": 9,
    "Number of girls": 15,
  },
  {
    class: "Class 1",
    "Number of boys": 19,
    "Number of girls": 24,
  },
  {
    class: "Class 2",
    "Number of boys": 26,
    "Number of girls": 8,
  },
  {
    class: "Class 3",
    "Number of boys": 10,
    "Number of girls": 12,
  },
  {
    class: "Class 4",
    "Number of boys": 14,
    "Number of girls": 12,
  },
  {
    class: "Class 5",
    "Number of boys": 15,
    "Number of girls": 9,
  },
];

const kpiData = [
  {
    title: "Student Strength",
    metric: "114",
  },
  {
    title: "No. of Girls",
    metric: "54",
  },
  {
    title: "No. of Boys",
    metric: "60",
  },
];

function Dashboard() {
  return (
    <div className="h-full w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
      <header className="ie-na-header flex w-full justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Hello Admin!</h3>
      </header>

      <div className="ie-na-content mt-5">
        <ColGrid numColsSm={2} numColsLg={3} gapX="gap-x-6" gapY="gap-y-6">
          {kpiData.map((item) => (
            <Card key={item.title} shadow={false}>
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
            </Card>
          ))}
        </ColGrid>

        <Block marginTop="mt-6">
          <Card shadow={false}>
            <Title>Class-wise student distribution</Title>
            <BarChart
              data={chartdata}
              dataKey="class"
              categories={["Number of boys", "Number of girls"]}
              colors={["blue", "fuchsia"]}
              marginTop="mt-6"
              stack={true}
              yAxisWidth="w-6"
            />
          </Card>
        </Block>
      </div>
    </div>
  );
}

export default Dashboard;
