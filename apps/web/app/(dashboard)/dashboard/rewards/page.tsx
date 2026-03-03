import content from "@/content.json";
import { Gift, Star, Clock, ArrowUpRight, Trophy, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RewardsPage() {
    const rewardsHistory = [
        { activity: "Purchase: Royal Sidr Reserve", date: "Oct 24, 2023", points: "+150", type: "earn" },
        { activity: "Review: Wildflower Blossom", date: "Oct 20, 2023", points: "+50", type: "earn" },
        { activity: "Redeemed: $10 Voucher", date: "Oct 15, 2023", points: "-500", type: "spend" },
        { activity: "Purchase: Spring Meadows", date: "Sep 12, 2023", points: "+200", type: "earn" },
    ];

    const availableRewards = [
        { title: "$10 Discount", cost: "500 pts", description: "Use on any order over $50" },
        { title: "Free Shipping", cost: "300 pts", description: "Standard shipping on your next order" },
        { title: "Medicinal Spoon", cost: "800 pts", description: "Handcrafted wooden honey spoon" },
    ];

    return (
        <div className="space-y-12">
            <header>
                <h1 className="font-display text-4xl font-bold text-forest dark:text-white mb-2">
                    {content.dashboard.nav.rewards}
                </h1>
                <p className="text-muted-foreground font-medium">Track your points, unlock tiers, and redeem exclusive rewards.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Points & Tier Card */}
                <div className="lg:col-span-2 bg-forest rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8">
                        <Trophy className="text-primary w-24 h-24 opacity-10" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                Gold Member
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div>
                                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-1">Available Balance</p>
                                <h2 className="text-6xl font-display font-bold text-primary flex items-center gap-4">
                                    2,450 <Coins className="w-12 h-12" />
                                </h2>
                            </div>
                            <div className="space-y-4 md:w-64">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>Next Tier: Platinum</span>
                                    <span className="text-primary">75%</span>
                                </div>
                                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[75%] shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>
                                </div>
                                <p className="text-xs text-white/50 text-right">550 points remaining</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-background border-2 border-primary/30 rounded-3xl p-8 shadow-sm">
                    <h3 className="font-display text-xl font-bold text-forest dark:text-white mb-6">How it works</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="bg-primary/10 p-2 rounded-lg h-fit">
                                <Star className="text-primary w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Earn on Every Sip</p>
                                <p className="text-xs text-muted-foreground">1 point for every $1 spent in our store.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-primary/10 p-2 rounded-lg h-fit">
                                <Gift className="text-primary w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Exclusive Rewards</p>
                                <p className="text-xs text-muted-foreground">Unlock limited edition harvests and gifts.</p>
                            </div>
                        </li>
                    </ul>
                    <Button variant="outline" className="w-full mt-8 border-primary text-primary hover:bg-primary/10">Full Program Details</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Redemption Options */}
                <section className="lg:col-span-2 space-y-8">
                    <h2 className="font-display text-2xl font-bold text-forest dark:text-white">Redeem Your Gold</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {availableRewards.map((reward, i) => (
                            <div key={i} className="bg-background rounded-2xl p-6 border border-muted shadow-sm hover:border-primary/50 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                                        <Gift className="text-primary w-6 h-6" />
                                    </div>
                                    <span className="text-lg font-bold text-forest dark:text-primary">{reward.cost}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6">{reward.description}</p>
                                <Button className="w-full bg-forest text-primary font-bold">Redeem Now</Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Points History */}
                <aside className="space-y-8">
                    <div className="bg-background rounded-3xl p-8 border border-muted shadow-sm overflow-hidden">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-display text-xl font-bold text-forest dark:text-white flex items-center gap-2">
                                <Clock className="text-primary w-5 h-5" /> History
                            </h2>
                            <button className="text-xs font-bold text-primary hover:underline">View All</button>
                        </div>
                        <div className="space-y-6">
                            {rewardsHistory.map((item, i) => (
                                <div key={i} className="flex justify-between items-start pb-4 border-b border-muted last:border-0 last:pb-0">
                                    <div>
                                        <p className="text-sm font-bold truncate max-w-[150px]">{item.activity}</p>
                                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{item.date}</p>
                                    </div>
                                    <span className={cn(
                                        "text-sm font-bold",
                                        item.type === "earn" ? "text-green-600" : "text-red-500"
                                    )}>
                                        {item.points}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-forest relative overflow-hidden">
                        <ArrowUpRight className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20" />
                        <h4 className="font-display text-xl font-bold mb-2">Refer a Friend</h4>
                        <p className="text-sm font-medium mb-6">Earn 500 bonus points for every friend who makes their first purchase.</p>
                        <Button className="w-full bg-forest text-primary font-bold rounded-xl border-none">Get Invite Link</Button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
