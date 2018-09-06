export interface File {
  name: string;
  modified: string;
  size: number;
}

export interface FileL {
  name: string;
  size: number;
  last_modified: string;
}

export interface Files {
  objects: File;
}
