export interface Rgb {
  r: number;
  g: number;
  b: number;
}

export interface Color {
  code: string;
  name: string;
  rgb: Rgb;
  hex: string;
  positionInBook: number;
}

export interface GetBook {
  id: string;
  title: string;
  colors: Color[];
}

export interface Data {
  getBook: GetBook;
}

export interface ColorTCXModel {
  data: Data;
}

export declare type Colors = Color[];
