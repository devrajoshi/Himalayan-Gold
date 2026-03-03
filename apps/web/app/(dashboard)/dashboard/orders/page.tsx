import { Filter, Search } from "lucide-react";
import content from "@/content.json";
import { cn } from "@/lib/utils";

export default function OrderHistoryPage() {
  const orders = [
    {
      id: "#HG-98421",
      date: "Oct 24, 2023",
      status: "Delivered",
      total: "$142.00",
      items: 3,
    },
    {
      id: "#HG-97210",
      date: "Sep 12, 2023",
      status: "Shipped",
      total: "$89.00",
      items: 1,
    },
    {
      id: "#HG-96554",
      date: "Aug 05, 2023",
      status: "Delivered",
      total: "$214.50",
      items: 4,
    },
    {
      id: "#HG-95432",
      date: "Jul 18, 2023",
      status: "Cancelled",
      total: "$42.00",
      items: 1,
    },
    {
      id: "#HG-94321",
      date: "Jun 30, 2023",
      status: "Delivered",
      total: "$128.00",
      items: 2,
    },
  ];

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-bold text-forest dark:text-white mb-2">
            {content.dashboard.nav.orders}
          </h1>
          <p className="text-muted-foreground font-medium">
            Review your past purchases and track current shipments.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 bg-background border border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm w-64"
            />
          </div>
          <button className="p-2 border border-muted rounded-xl hover:bg-muted/50 transition-colors text-muted-foreground">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </header>

      <section className="bg-background rounded-3xl shadow-sm border border-muted overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-muted/50 text-xs font-bold uppercase text-muted-foreground tracking-widest">
              <tr>
                <th className="px-8 py-4">{content.dashboard.orders.columns.id}</th>
                <th className="px-8 py-4">{content.dashboard.orders.columns.date}</th>
                <th className="px-8 py-4">Items</th>
                <th className="px-8 py-4">{content.dashboard.orders.columns.status}</th>
                <th className="px-8 py-4">{content.dashboard.orders.columns.total}</th>
                <th className="px-8 py-4 text-right">{content.dashboard.orders.columns.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-muted/30 transition-colors cursor-pointer group"
                >
                  <td className="px-8 py-6 font-semibold text-foreground">{order.id}</td>
                  <td className="px-8 py-6 text-muted-foreground">{order.date}</td>
                  <td className="px-8 py-6 text-muted-foreground">
                    {order.items} {order.items === 1 ? "Item" : "Items"}
                  </td>
                  <td className="px-8 py-6">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        order.status === "Delivered" &&
                          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                        order.status === "Shipped" &&
                          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                        order.status === "Cancelled" &&
                          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                      )}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-bold text-foreground">{order.total}</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-primary font-semibold group-hover:underline">
                      {content.dashboard.orders.columns.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-muted flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 5 of 12 orders</p>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 border border-muted rounded-lg text-sm disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-forest text-primary rounded-lg text-sm font-bold">
              1
            </button>
            <button className="px-4 py-2 border border-muted rounded-lg text-sm hover:bg-muted/50 transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-muted rounded-lg text-sm hover:bg-muted/50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
