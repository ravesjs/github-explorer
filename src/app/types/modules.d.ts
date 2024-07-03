declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

// для png, jpg, svg и тп тоже надо declare свой писать