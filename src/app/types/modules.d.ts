declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// для png, jpg, svg и тп тоже надо declare свой писать