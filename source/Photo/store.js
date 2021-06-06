import create from "zustand";
import $ from "./style.module.css";
import Konva from "konva";

export const [useStore, api] = create((set, store) => ({
  stage: null,

  addImage: function (src) {
    var img = document.createElement("img");
    img.src = src;

    const image = new Konva.Image({
      image: img,
      x: 0,
      y: 0,
      width: 500,
      height: 500,
    });

    return image;
  },

  onLoad: function (src) {
    var stage = new Konva.Stage({
      container: `${$.photoEdit}`,
      width: 500,
      height: 500,
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    Konva.Image.fromURL(src, function (darthNode) {
      darthNode.setAttrs({
        x: 0,
        y: 0,
        width: 500,
        height: 500,
      });
      layer.add(darthNode);
      layer.draw();
    });
  },
}));
