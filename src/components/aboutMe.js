import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class aboutMe extends Component {
  render() {
    var delayed;
    return (
      <div className="about" ref={this.aboutRef}>
        <h1>About</h1>
        <Bar
          data={{
            labels: ["Html", "CSS", "JS", "React", "Node"],
            datasets: [
              //   {
              //     data: [12, 19, 3, 5, 2, 3],
              //     backgroundColor: [
              //       "rgba(255, 99, 132, 0.2)",
              //       "rgba(54, 162, 235, 0.2)",
              //       "rgba(255, 206, 86, 0.2)",
              //       "rgba(75, 192, 192, 0.2)",
              //       "rgba(153, 102, 255, 0.2)",
              //       "rgba(255, 159, 64, 0.2)",
              //     ],
              //     borderColor: [
              //       "rgba(255, 99, 132, 1)",
              //       "rgba(54, 162, 235, 1)",
              //       "rgba(255, 206, 86, 1)",
              //       "rgba(75, 192, 192, 1)",
              //       "rgba(153, 102, 255, 1)",
              //       "rgba(255, 159, 64, 1)",
              //     ],
              //     borderWidth: 1,
              //   },
              {
                label: "Quantity",
                data: [47, 52, 67, 58, 9, 50],
                backgroundColor: "orange",
                borderColor: "red",
              },
            ],
          }}
          height={200}
          width={1000}
          options={{
            // maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            indexAxis: "y",
            animation: {
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (
                  context.type === "data" &&
                  context.mode === "default" &&
                  !delayed
                ) {
                  delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
              },
            },
          }}
        />
      </div>
    );
  }
}
