// declare module "*.svg?inline" {
//   const content: any;
//   export default content;
// }
declare module "*.svg" {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
declare module "*.module.css";
