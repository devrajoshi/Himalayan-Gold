export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    fullDescription: string;
    image: string;
    tag?: string;
    altitude: string;
    region: string;
    harvestSeason: string;
    mgo?: string;
    purityDetails: {
        title: string;
        description: string;
        icon: string;
    }[];
    reviews: {
        name: string;
        rating: number;
        comment: string;
    }[];
    story: {
        title: string;
        content: string[];
        image: string;
    };
}

export const products: Product[] = [
    {
        id: "2",
        name: "Royal Sidr Reserve",
        price: 89.00,
        description: "Limited Edition, Deep Amber Hue",
        fullDescription: "A liquid treasure born from the ancient Sidr trees of the Himalayan valleys. This rare harvest boasts a deep, soulful amber hue and a velvety texture that carries the potent medicinal essence of the mountains.",
        tag: "Medicinal Grade",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnrbtWCwAGWwf6JFKN5wu4eVwgUC_7LSLD9A-l3wKuBk5TKFC3iRcMCT_W7NS9bzBMWie6fJ6gPTLeb7IhCh5t7qVlVYXetyomXjp4TdV44I-eLp6iDg67ni3M-SiMm84O-iitV6J_b93_SBQ3y6CRZsUSK-r1pIaO7UkJd7ceoW3iMZLwZk9IOD0yEfqG_Exzt79lNPWDVo9vLxhKUMoOYfPRmNf1IaB7xkfLY2RoAAkPu1ofblOfgK1F1M8dEieaQeaLMdHidW0",
        altitude: "4,500m Above Sea Level",
        region: "Ladakh, Upper Himalayas",
        harvestSeason: "Autumn (Late September)",
        mgo: "500+",
        purityDetails: [
            {
                title: "Lab Tested",
                description: "Every batch is rigorously tested for purity and MGO levels in independent laboratories.",
                icon: "science",
            },
            {
                title: "Wild Harvested",
                description: "Collected by traditional climbers from wild hives nestled in remote high-altitude cliffs.",
                icon: "eco",
            },
            {
                title: "High Pollen Count",
                description: "Rich in bioactive compounds and diverse floral pollen from the sacred Sidr groves.",
                icon: "nature",
            },
        ],
        reviews: [
            {
                name: "Elena R.",
                rating: 5,
                comment: "I've tried honey from all over the world, but the Himalayan Gold Sidr reserve is on another level. The complexity of flavors is astounding and it feels incredibly healing.",
            },
            {
                name: "Marcus Thorne",
                rating: 5,
                comment: "Absolutely worth every penny. You can really feel the difference in quality compared to supermarket raw honey. A true premium experience.",
            },
        ],
        story: {
            title: "The Legacy of Sidr",
            content: [
                "The Himalayan Sidr tree (Ziziphus spina-christi) is more than just a source of nectar; it is a legendary plant revered for millennia for its therapeutic properties. At altitudes of 4500 meters, these ancient trees bloom for only a few short weeks, offering up a nectar that is exceptionally concentrated and potent.",
                "Our harvesters navigate treacherous mountain paths to reach the remote groves where the air is thin and pure. The result is a honey that transcends simple sweetness\u2014a complex, earthy, and slightly medicinal elixir that reflects the very spirit of the Himalayas.",
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKb1MKujYxlnbqrKQFq-aFVgb_iKE6wZRt4GiO3gU0mLRZOMPM_d5BvlqHvpXPo92QlcmJtplwF2fvD106QnCpwfjrjFd42LXRT7ZfBswWKGo2hRexpftf_-Fb8hvBb38sSqZFV4lXRuifV_SXcqFGVtd2taerE-aP0SIPqRppsIkyi5PmpwkU1em3A4t3n1d3ss7J6EngQTadZr3yuOK3lTIiaUUcEm5y1ntBaf6OvYrEBP5xVS0ED3ehfUBh5xent-ydQfwI3fY",
        },
    },
    {
        id: "1",
        name: "Wildflower Blossom",
        price: 34.00,
        description: "4500m Altitude, High Pollen Count",
        fullDescription: "A delicate symphony of floral notes captured from the untamed wildflowers of the lower Himalayan slopes. This honey is light, aromatic, and bursting with the vitality of the spring bloom.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2Aof232WBcT9vUxgGGELeYnhWZPpL5SXIMlo55N95DRtVDEiz-iwdQ41cdcnEtZ00rTqD9XKBX0aWIqBpQpQ1uYviKbfcZ3wcq6eAWR8r60QBd5Ww5Sr-7gZB9dnyhqkLv_nnnPpxiHOuHZa7m7a3bJaudZGx0J1-loArJjd9fWGdJf-m1jdAwTv3KGRgVqBH3hCz7uAAK2SFGSagDhdrWPdnJGH72gCgob9Tv6rj_TIAtNivxCjh06wgERkvQaVJ9JLh-rsyw8A",
        altitude: "3,200m",
        region: "Kashmir Valley",
        harvestSeason: "Spring (May)",
        purityDetails: [
            {
                title: "100% Raw",
                description: "Never heated or ultra-filtered, preserving natural pollens and enzymes.",
                icon: "nature",
            },
            {
                title: "Cold Pressed",
                description: "Extracted without excessive heat to maintain the delicate floral aromatics.",
                icon: "opacity",
            },
        ],
        reviews: [
            {
                name: "Sarah L.",
                rating: 4.5,
                comment: "Perfect for my morning tea. So fresh and floral!",
            }
        ],
        story: {
            title: "Meadows of Gold",
            content: ["Collected from the lush meadows of the Kashmir valley during the peak of spring."],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnrbtWCwAGWwf6JFKN5wu4eVwgUC_7LSLD9A-l3wKuBk5TKFC3iRcMCT_W7NS9bzBMWie6fJ6gPTLeb7IhCh5t7qVlVYXetyomXjp4TdV44I-eLp6iDg67ni3M-SiMm84O-iitV6J_b93_SBQ3y6CRZsUSK-r1pIaO7UkJd7ceoW3iMZLwZk9IOD0yEfqG_Exzt79lNPWDVo9vLxhKUMoOYfPRmNf1IaB7xkfLY2RoAAkPu1ofblOfgK1F1M8dEieaQeaLMdHidW0"
        },
    }
];

export function getProductById(id: string): Product | undefined {
    return products.find(p => p.id === id) || products[0]; // Default to first for demo
}
