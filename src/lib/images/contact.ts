export interface Contact {
  contactId: string;
  contactHref: string;
  contactClass: string;
}

export const contacts: Contact[] = [
  {
    contactId: "li-link",
    contactHref: "https://www.linkedin.com/in/mosab-mohamed-237418157/",
    contactClass: "fa-brands fa-linkedin fa-2xl",
  },
  {
    contactId: "gh-link",
    contactHref: "https://github.com/IVIosab",
    contactClass: "fa-brands fa-github fa-2xl",
  },
  {
    contactId: "tg-link",
    contactHref: "https://t.me/IVIosab",
    contactClass: "fa-brands fa-telegram fa-2xl",
  },
  {
    contactId: "email",
    contactHref: "mailto::mosab.f.r@gmail.com",
    contactClass: "fa-solid fa-envelope fa-2xl",
  },
];
