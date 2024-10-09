import { Helmet } from "react-helmet-async";

import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmount } from "./month-canceled-orders-amount";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { MonthRevenueCard } from "./month-revenue-card";
import { PopularProductsCharts } from "./popular-products-charts";
import { RevenueCharts } from "./revenue-charts";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueCharts />
          <PopularProductsCharts />
        </div>
      </div>
    </>
  );
}
