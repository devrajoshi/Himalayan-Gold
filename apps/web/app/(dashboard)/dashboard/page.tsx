import { Crown, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import content from "@/content.json";

export default function DashboardOverview() {
  const stats = [
    {
      label: content.dashboard.stats.orders,
      value: "12",
      icon: ShoppingCart,
    },
    {
      label: content.dashboard.stats.points,
      value: "2,450",
      icon: Star,
    },
    {
      label: content.dashboard.stats.tier,
      value: "Gold",
      icon: Crown,
      featured: true,
    },
  ];

  const recentOrders = [
    {
      id: "#HG-98421",
      date: "Oct 24, 2023",
      status: "Delivered",
      total: "$142.00",
    },
    {
      id: "#HG-97210",
      date: "Sep 12, 2023",
      status: "Shipped",
      total: "$89.00",
    },
    {
      id: "#HG-96554",
      date: "Aug 05, 2023",
      status: "Delivered",
      total: "$214.50",
    },
  ];

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-4xl font-bold text-forest dark:text-white mb-2">
          {content.dashboard.welcome.replace("{name}", "Alexander")}
        </h1>
        <p className="text-muted-foreground font-medium">{content.dashboard.subtitle}</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className={cn(
                "p-6 rounded-2xl shadow-sm border-2 transition-all",
                stat.featured
                  ? "bg-gradient-to-br from-background to-primary/10 border-primary shadow-md"
                  : "bg-background border-primary/20",
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="text-primary w-8 h-8" />
              </div>
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-display font-bold text-forest dark:text-white">
                {stat.value}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <section className="lg:col-span-2 bg-background rounded-3xl shadow-sm border border-muted overflow-hidden">
          <div className="p-8 border-b border-muted flex justify-between items-center">
            <h2 className="font-display text-2xl font-bold text-forest dark:text-white">
              {content.dashboard.orders.title}
            </h2>
            <Link
              href="/dashboard/orders"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-muted/50 text-xs font-bold uppercase text-muted-foreground tracking-widest">
                <tr>
                  <th className="px-8 py-4">{content.dashboard.orders.columns.id}</th>
                  <th className="px-8 py-4">{content.dashboard.orders.columns.date}</th>
                  <th className="px-8 py-4">{content.dashboard.orders.columns.status}</th>
                  <th className="px-8 py-4">{content.dashboard.orders.columns.total}</th>
                  <th className="px-8 py-4 text-right">
                    {content.dashboard.orders.columns.action}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-muted/30 transition-colors cursor-pointer group"
                  >
                    <td className="px-8 py-6 font-semibold text-foreground">{order.id}</td>
                    <td className="px-8 py-6 text-muted-foreground">{order.date}</td>
                    <td className="px-8 py-6">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
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
        </section>

        {/* Sidebar Widgets */}
        <aside className="space-y-8">
          <div className="bg-forest rounded-3xl p-8 text-white relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-primary text-forest text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                {content.dashboard.harvest.tag}
              </span>
            </div>
            <h4 className="font-display text-2xl font-bold mb-4">
              {content.dashboard.harvest.title}
            </h4>
            <div className="mb-6 overflow-hidden rounded-2xl">
              <img
                alt="Upcoming Harvest"
                className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrbtWCwAGWwf6JFKN5wu4eVwgUC_7LSLD9A-l3wKuBk5TKFC3iRcMCT_W7NS9bzBMWie6fJ6gPTLeb7IhCh5t7qVlVYXetyomXjp4TdV44I-eLp6iDg67ni3M-SiMm84O-iitV6J_b93_SBQ3y6CRZsUSK-r1pIaO7UkJd7ceoW3iMZLwZk9IOD0yEfqG_Exzt79lNPWDVo9vLxhKUMoOYfPRmNf1IaB7xkfLY2RoAAkPu1ofblOfgK1F1M8dEieaQeaLMdHidW0"
              />
            </div>
            <h5 className="text-xl font-bold text-primary mb-2">Wild Rhododendron</h5>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              A rare, limited spring harvest from the Annapurna region. Pre-order starts in 14 days.
            </p>
            <button className="w-full border-2 border-primary text-primary py-3 rounded-xl font-bold hover:bg-primary hover:text-forest transition-all">
              {content.dashboard.harvest.cta}
            </button>
          </div>

          <div className="bg-background rounded-3xl p-8 border border-muted shadow-sm">
            <h4 className="font-display text-xl font-bold text-forest dark:text-white mb-4">
              Reward Progress
            </h4>
            <div className="w-full bg-muted h-2 rounded-full mb-2">
              <div className="bg-primary h-full rounded-full w-[75%] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              550 points until your next Platinum tier unlock.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
