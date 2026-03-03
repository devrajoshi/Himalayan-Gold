import { Mail, Phone, Save, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/content.json";

export default function DetailsPage() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-4xl font-bold text-forest dark:text-white mb-2">
          {content.dashboard.nav.details}
        </h1>
        <p className="text-muted-foreground font-medium">
          Update your personal information and manage your security settings.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Personal Information */}
        <section className="lg:col-span-2 space-y-8">
          <div className="bg-background rounded-3xl p-10 shadow-sm border border-muted">
            <h2 className="font-display text-2xl font-bold text-forest dark:text-white mb-8 flex items-center gap-3">
              <User className="text-primary" /> Personal Information
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all"
                    type="text"
                    defaultValue="Alexander"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all"
                    type="text"
                    defaultValue="Sterling"
                  />
                </div>
                <div className="col-span-full">
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 pl-12 outline-none transition-all"
                      type="email"
                      defaultValue="alexander.sterling@example.com"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 pl-12 outline-none transition-all"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button className="bg-forest text-primary font-bold py-6 px-10 rounded-xl hover:bg-forest/90 transition-all gap-2">
                  <Save size={18} /> Save Changes
                </Button>
              </div>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-background rounded-3xl p-10 shadow-sm border border-muted">
            <h2 className="font-display text-2xl font-bold text-forest dark:text-white mb-8 flex items-center gap-3">
              <ShieldCheck className="text-primary" /> Security
            </h2>
            <form className="space-y-6">
              <div className="space-y-6 max-w-md">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Current Password
                  </label>
                  <input
                    className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    New Password
                  </label>
                  <input
                    className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Confirm New Password
                  </label>
                  <input
                    className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-forest text-forest dark:text-primary dark:border-primary font-bold py-6 px-10 rounded-xl hover:bg-forest/10 transition-all"
                >
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Sidebar Info */}
        <aside className="space-y-8">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="font-display text-xl font-bold text-forest dark:text-white mb-4">
              Profile Privacy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your personal data is encrypted and used only for order processing and loyalty
              rewards. We never share your information with third parties.
            </p>
            <ul className="space-y-3 text-sm font-medium text-forest dark:text-primary">
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} /> GDPR Compliant
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} /> 256-bit Encryption
              </li>
            </ul>
          </div>

          <div className="bg-background rounded-3xl p-8 border border-muted shadow-sm text-center">
            <div className="w-24 h-24 bg-forest rounded-full mx-auto mb-6 flex items-center justify-center text-primary text-3xl font-display font-bold border-4 border-primary/20">
              AS
            </div>
            <h4 className="font-display text-xl font-bold text-forest dark:text-white">
              Alexander Sterling
            </h4>
            <p className="text-sm text-muted-foreground mb-6">Member since October 2022</p>
            <Button
              variant="outline"
              className="w-full border-muted text-muted-foreground hover:bg-muted/50 rounded-xl"
            >
              Change Avatar
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
