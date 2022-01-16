export class Supplier {
        id: number
        supplier_id: number
        sName: string
        sLocation: string
        logo: string

        constructor(i: number,supplier_id:number,sName: string,sLocation: string,logo: string){
            this.id = i,
            this.supplier_id = supplier_id,
            this.sName = sName,
            this.sLocation = sLocation,
            this.logo = logo
        }

}