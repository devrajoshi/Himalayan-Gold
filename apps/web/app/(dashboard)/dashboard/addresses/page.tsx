import { Edit2, Phone, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/content.json";

export default function AddressesPage() {
  const addresses = [
    {
      id: "1",
      name: "Alexander Sterling",
      label: "Home",
      street: "42 Alpine Ridge Way",
      suite: "Suite 405",
      city: "Aspen, CO 81611",
      phone: "(555) 123-4567",
      isDefault: true,
    },
    {
      id: "2",
      name: "Sterling Residence",
      label: "Work",
      street: "782 Pinecone Terrace",
      city: "Boulder, CO 80302",
      phone: "(555) 987-6543",
      isDefault: false,
    },
  ];

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-4xl font-bold text-forest dark:text-white mb-2">
          {content.dashboard.nav.addresses}
        </h1>
        <p className="text-muted-foreground font-medium">
          Manage your shipping and billing destinations.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add New Button */}
        <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/40 rounded-2xl bg-background/50 hover:bg-background hover:border-primary transition-all group min-h-[280px]">
          <Plus className="text-primary w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
          <span className="font-display text-xl font-bold text-forest dark:text-white">
            Add New Address
          </span>
        </button>

        {/* Address Cards */}
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-background border border-primary/30 p-8 rounded-2xl shadow-sm relative flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-xl font-bold text-forest dark:text-white">
                  {address.name}
                </h3>
                {address.isDefault && (
                  <span className="bg-primary text-forest text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Default
                  </span>
                )}
              </div>
              <div className="space-y-1 text-muted-foreground text-sm mb-6">
                <p>{address.street}</p>
                {address.suite && <p>{address.suite}</p>}
                <p>{address.city}</p>
                <p className="pt-2 flex items-center gap-2">
                  <Phone size={12} className="text-primary" />
                  {address.phone}
                </p>
              </div>
            </div>
            <div className="flex gap-6 border-t border-muted pt-6">
              <button className="text-sm font-bold text-primary hover:text-forest dark:hover:text-white transition-colors flex items-center gap-2">
                <Edit2 size={14} /> Edit
              </button>
              {!address.isDefault && (
                <button className="text-sm font-bold text-primary hover:text-red-600 transition-colors flex items-center gap-2">
                  <Trash2 size={14} /> Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Form Section */}
      <section className="bg-background rounded-3xl p-10 shadow-sm border border-muted max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-forest dark:text-white mb-8">
          Add a New Destination
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full">
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Street Address
              </label>
              <input
                className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder="123 Himalayan Path"
                type="text"
              />
            </div>
            <div className="col-span-full">
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Apartment/Suite (Optional)
              </label>
              <input
                className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder="Suite, floor, etc."
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                City
              </label>
              <input
                className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder="Kathmandu"
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Postal Code
              </label>
              <input
                className="w-full bg-background border-muted rounded-xl focus:ring-1 focus:ring-primary focus:border-primary p-4 outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder="44600"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="rounded border-muted text-forest focus:ring-primary w-5 h-5 cursor-pointer"
              id="default-addr"
              type="checkbox"
            />
            <label
              className="text-sm text-muted-foreground font-medium cursor-pointer"
              htmlFor="default-addr"
            >
              Set as default shipping address
            </label>
          </div>
          <div className="pt-4">
            <Button className="bg-forest text-primary font-bold py-7 px-10 rounded-xl hover:bg-forest/90 transition-all shadow-lg hover:shadow-primary/10">
              Add Address
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
