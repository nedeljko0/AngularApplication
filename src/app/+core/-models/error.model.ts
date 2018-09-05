export interface ErrorMessage {
  headers:Headers;
  status:number;
  statusText:string;
  url:string;
  ok:boolean;
  name:string;
  message:string;
  error:Message
}

export interface Message {
  message:string;
}

export interface Headers {
  normalizedNames:Empty;
  lazyUpdate:number;
}

export interface Empty {

}




