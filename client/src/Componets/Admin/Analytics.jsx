import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics/overview")
      .then((res) => res.json())
      .then((data) => setAnalytics(data))
      .catch((err) => console.error(err));
  }, []);

  if (!analytics) return <p>Loading analytics...</p>;

  const chartData = {
    labels: ["Users", "Stores", "Coupons", "Redeemed Coupons"],
    datasets: [
      {
        label: "System Stats",
        data: [
          analytics.totalUsers,
          analytics.totalStores,
          analytics.totalCoupons,
          analytics.totalRedeemed,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>📊 Coupon System Overview</h2>
      <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
    </div>
  );
};

export default Analytics;
