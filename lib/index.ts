interface SocialInfoType {
  github: string;
  facebook: string;
  linkedin: string;
  whatsApp: string;
  phone: string;
  email: string;
}

export const navOptions: string[] = ["home", "about", "works", "contact"];

export const socialInfo: SocialInfoType = {
  github: "https://github.com/Md-Asikuzzaman",
  facebook: "https://www.facebook.com/asikuzzaman.en",
  linkedin: "https://www.linkedin.com/in/md-asikuzzaman",
  whatsApp: "https://wa.me/+8801995580669",
  phone: "tel:+8801995-580669",
  email: "mailto:mdasikuzzaman.en@gmail.com",
};

export const defaultImgURL: string = `https://devasik.vercel.app/_next/image?url=%2Fimages%2Fdev.jpg&w=1920&q=75`;

export const appVersion: string = "v2.7.4";
