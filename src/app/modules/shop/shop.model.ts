import { Schema, model } from "mongoose";
import { IShop, IShopModel } from "./shop.interface";

const shopSchema = new Schema<IShop>(
  {
    name: String,
    price: String,
    model: String,
    display: {
      size: String,
      type: String,
      resolution: String,
      features: String,
    },
    processor: {
      chipset: String,
      cpuType: String,
      cpuSpeed: String,
      gpu: String,
    },
    memory: {
      ram: String,
      internalStorage: String,
      cardSlot: String,
    },
    camera: {
      rear: {
        resolution: String,
        features: String,
        videoRecording: String,
      },
      front: {
        resolution: String,
        videoRecording: String,
      },
    },
    audio: {
      speaker: String,
    },
    networkConnectivity: {
      sim: String,
      network: String,
      wifi: String,
      bluetooth: String,
      gps: String,
      nfc: String,
      usb: String,
      audioJack: String,
    },
    os: {
      operatingSystem: String,
      upgradable: String,
      features: [String],
    },
    features: {
      fingerprint: String,
      sensors: [String],
      other: String,
    },
    battery: {
      type: String,
      capacity: String,
    },
    physicalSpecification: {
      dimension: String,
      weight: String,
      bodyMaterial: String,
      colors: [String],
    },
    warrantyInformation: {
      warranty: String,
    },
  },
  { timestamps: true }
);

const ShopModel = model<IShop, IShopModel>("Shop", shopSchema);

export default ShopModel;
