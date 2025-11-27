declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}


declare module '*.svg' {
  const content: string; 
  export default content;
}