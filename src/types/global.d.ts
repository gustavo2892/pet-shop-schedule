// CSS Modules
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// CSS / SCSS imports as side-effects (global styles)
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// Common static assets (opcional — evita erros ao importar imagens/fonts)
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.webp";
declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";
declare module "*.ttf";
