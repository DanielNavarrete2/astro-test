interface FooterLink {
    text: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    platform: string;
    href: string;
    icon: string;
    hoverColor: string;
}

export const FooterData:FooterSection[]=[
    {title: "Contacto",
        links: [
            {text: "+569 123 456 789", href: "#"},
            {text: "contacto@gmail.com", href: "#"},
        ],
    },

    {
      title: "Explora más música",
        links: [
      { text: "Novedades", href: "#" },
      { text: "Vinilos clásicos", href: "#" },
      { text: "Playlists recomendadas", href: "#" },
    ],
  },
]
