export class CaracteristicsBuilder {
  characteristics;

  constructor() {
    this.characteristics = {};
    this.setSkinType('Fur');
    this.setHairType(this.characteristics.skinType, null);
    console.log(this.characteristics);
  }

  setSkinType(skinType: string): string {
    return this.characteristics.skinType = skinType;
  }

  setHairType(skinType: string, hairType: string): string {
    return hairType ? this.characteristics.hairType = hairType : this.characteristics.hairType = `No ${skinType}`;
  }
}
