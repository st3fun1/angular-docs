export interface CodeDemoOptions {
  name: string;
  option: string;
}

export interface CodeDemo extends CodeDemoOptions {
  functionCode: Function;
}
