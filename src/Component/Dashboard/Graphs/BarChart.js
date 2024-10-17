import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FilterSVG from "../../../Assets/SVG/GraphFilter.svg";

export default function ChartsOverviewDemo() {
  const [timeFrame, setTimeFrame] = useState("monthly");

  const handleChange = (event) => {
    setTimeFrame(event.target.value);
  };

  // Define your data arrays
  const monthlyData = [
    {
      data: [44, 24, 34, 74, 62, 34, 56, 63, 83, 54, 46, 69],
      label: "Monthly Sales",
    },
  ];
  const weeklyData = [
    {
      data: [10, 15, 20, 25, 30, 35, 70, 75, 65, 45, 60, 70],
      label: "Weekly Sales",
    },
  ];

  const data = timeFrame === "monthly" ? monthlyData : weeklyData;

  return (
    <div className="">
      <Stack>
        <div className="flex justify-between items-center text-[#333333] font-[600] text-[1rem] font-mona leading-[1.32rem]">
          <div>Patients Analysis</div>
          <FormControl>
            <img src={FilterSVG} className="w-[1.125rem] h-[0.781rem] m-4" />
          </FormControl>
        </div>
        <BarChart
          series={data.map((dataset) => ({
            data: dataset.data,
            stack: "",
            color: dataset.label.includes("Sales") ? "#4169E1" : "",
          }))}
          height={400}
          xAxis={[
            {
              data:
                timeFrame === "monthly"
                  ? [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "July",
                      "Aug",
                      "Sept",
                      "Oct",
                      "Nov",
                      "Dec",
                    ]
                  : [
                      "Week 1",
                      "Week 2",
                      "Week 3",
                      "Week 4",
                      "Week 5",
                      "Week 6",
                      "Week 7",
                      "Week 8",
                      "Week 9",
                      "Week 10",
                      "Week 11",
                      "Week 12",
                    ],
              scaleType: "band",
              categoryGapRatio: 0.7,
            },
          ]}
          borderRadius={18}
          margin={{ top: 5, right: -10, bottom: 40, left: -10 }}
        />
      </Stack>
    </div>
  );
}
