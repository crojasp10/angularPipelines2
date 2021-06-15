
export class vehiculo{
  constructor(
  public marca: string,
  public modelo: string,
  public year: number,
  public precio: number,
  public puertas: number,
  public color: string,
  public transmision: string,
  ){}
}

export class moto{
  constructor(
  public marca: string,
  public modelo: string,
  public year: number,
  public cc: number,
  public precio: number,
  public color: string,
  ){}
}