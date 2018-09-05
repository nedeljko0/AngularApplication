export interface File {
  name: string;
  modified: string;
  size: number;
}

export interface FileL {
  name: string;
  modified: string;
  size: number;
}

export interface Files {
  objects: File;
}
