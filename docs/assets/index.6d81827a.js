var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { R as React, r as react, c as create, a as cuid_1, K as Konva, b as ReactDOM } from "./vendor.0e646860.js";
const panel = "_panel_1b7pa_1";
const stack = "_stack_1b7pa_6";
const stack_views = "_stack_views_1b7pa_13";
const active = "_active_1b7pa_18";
const inactive = "_inactive_1b7pa_20";
const view = "_view_1b7pa_33";
var $$9 = {
  panel,
  stack,
  stack_views,
  active,
  inactive,
  view
};
function View(attrs) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `mvc_sb-view ${attrs.className} ${$$9.view}`,
    style: attrs.style
  }, attrs.children);
}
function Stack(attrs) {
  const views = [];
  React.Children.forEach(attrs.children, (node) => {
    if (!node || !node.type || !node.type.prototype)
      return;
    if (node.type.prototype.constructor === View)
      views.push(node);
  });
  const size = views.length;
  const names = views.map((node) => node.props.name);
  const viewIndex = names.indexOf(attrs.visible);
  const current = viewIndex >= 0 ? viewIndex : 0;
  const style = {
    width: `${size * 100}%`,
    marginLeft: `-${current * 100}%`
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `mvc_sb-stack mvc_sb-stack-${attrs.visible} ${$$9.stack}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: `mvc_sb-stack-container ${$$9.stack_views}`,
    style
  }, views.map((node, index) => {
    const style2 = {
      width: `${100 / size}%`,
      height: current === index ? "auto" : "0px"
    };
    const active2 = current === index ? "active mvc_sb-view-active" : "inactive mvc_sb-view-inactive";
    return React.cloneElement(node, {
      style: style2,
      key: index,
      className: active2
    });
  })));
}
Panel.Stack = Stack;
Panel.View = View;
function Panel(attrs) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `mvc_sb-panel ${$$9.panel} ${attrs.className}`
  }, attrs.children);
}
const sidebar = "_sidebar_1gtwd_2";
var $$8 = {
  sidebar
};
var Sidebar$3 = ({ view: view2, children }) => {
  const backButton = (back) => {
    if (back) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "col-auto"
      }, /* @__PURE__ */ React.createElement("button", {
        className: "btn btn-sm btn-white",
        onClick: () => back()
      }, "Back"));
    }
    return null;
  };
  return /* @__PURE__ */ React.createElement("nav", {
    className: `navbar navbar-vertical fixed-left navbar-expand-md navbar-light ${$$8.sidebar}`
  }, /* @__PURE__ */ React.createElement(Panel.Stack, {
    visible: view2
  }, children.map((child, index) => /* @__PURE__ */ React.createElement(Panel.View, {
    key: index,
    name: child.props.name
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "header-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row align-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("h6", {
    className: "header-pretitle"
  }, "Media Editor"), /* @__PURE__ */ React.createElement("h1", {
    className: "header-title"
  }, child.props.title)), backButton(child.props.back)))), child))));
};
const imageContainer = "_imageContainer_8paqc_1";
const editor = "_editor_8paqc_9";
var $$7 = {
  imageContainer,
  editor
};
var Editor$3 = ({ view: view2, children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `main-content ${$$7.editor}`
  }, /* @__PURE__ */ React.createElement(Panel.Stack, {
    visible: view2
  }, children.map((child, index) => /* @__PURE__ */ React.createElement(Panel.View, {
    key: index,
    name: child.props.name
  }, child))));
};
var PassProps = (props) => {
  const newProps = __spreadValues({}, props);
  delete newProps.children;
  return react.exports.Children.map(props.children, (child) => {
    newProps.className += " " + child.props.className || "";
    return react.exports.cloneElement(child, __spreadValues({}, newProps));
  });
};
const zone = "_zone_mcqpi_1";
const leftPlaceholder = "_leftPlaceholder_mcqpi_6";
const frame = "_frame_mcqpi_15";
const rightPlaceholder = "_rightPlaceholder_mcqpi_22";
var $$6 = {
  zone,
  leftPlaceholder,
  frame,
  rightPlaceholder
};
const [useStore$2, api$2] = create((set, store) => ({
  currentHover: null,
  placeholderPosition: true
}));
var Element = (props) => {
  const [isCurrent, setIsCurrent] = react.exports.useState(false);
  const img = new Image();
  if (props.data.type === "video") {
    img.src = `${""}/assets/images/film.svg`;
  } else if (props.data.type === "audio") {
    img.src = `${""}/assets/images/music.svg`;
  } else {
    img.src = `${""}/assets/images/image.svg`;
  }
  function dragStart(ev) {
    var _a;
    ev.dataTransfer.setData("data", JSON.stringify({
      id: props.id,
      source: props.source,
      index: props.index,
      data: props.data
    }));
    var ua = (_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.toLowerCase();
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        img.width = "5";
        ev.dataTransfer.setDragImage(img, 5, 5);
      }
    }
    api$2.setState({ currentAttr: __spreadValues({}, props) });
    setIsCurrent(true);
  }
  function onDragEnd(ev) {
    setIsCurrent(false);
    api$2.setState({ currentAttr: null });
  }
  return /* @__PURE__ */ React.createElement(PassProps, {
    draggable: true,
    onDragStart: dragStart,
    onDragEnd,
    attr: props.attr
  }, props.children);
};
let interval = null;
var Zone = (props) => {
  const { currentHover, placeholderPosition } = useStore$2();
  const isHover = currentHover === props.component;
  const [forFrame, setForFrame] = react.exports.useState(false);
  function canDrop() {
    const currentAddr = api$2.getState().currentAttr;
    if (currentAddr.source === "image" && props.droppableid === "audio") {
      setForFrame(false);
      return false;
    }
    if (currentAddr.source === "video" && props.droppableid === "audio") {
      setForFrame(false);
      return false;
    }
    if (currentAddr.source === "transition" && props.droppableid === "audio") {
      setForFrame(false);
      return false;
    }
    if (currentAddr.source === "effect" && props.droppableid === "audio") {
      setForFrame(false);
      return false;
    }
    if (currentAddr.source === "audio" && props.droppableid === "video") {
      setForFrame(false);
      return false;
    }
    if (currentAddr.source === "transition" && props.component.includes("frame")) {
      setForFrame(true);
    }
    if (currentAddr.source === "effect" && props.component.includes("frame")) {
      setForFrame(true);
    }
    return true;
  }
  function onDragEnter(event2) {
    if (interval) {
      clearTimeout(interval);
    }
    if (!canDrop()) {
      return false;
    }
    api$2.setState({ currentHover: props.component });
    event2.persist();
  }
  function onDragLeave(event2) {
    if (interval) {
      clearTimeout(interval);
    }
    interval = setTimeout(() => {
      api$2.setState({ currentHover: null });
    }, 800);
  }
  const onDragOver = react.exports.useCallback(() => {
    event.preventDefault();
    if (!canDrop()) {
      return false;
    }
    const isEmpty = props.component.split("-")[0] === "null";
    if (!isEmpty) {
      const hoverElementPos = event.target.getBoundingClientRect().x;
      const hoverElemHeight = parseInt(event.target.clientWidth / 2);
      const mousePos = event.clientX;
      const isLeft = mousePos < hoverElementPos + hoverElemHeight;
      if (isLeft) {
        api$2.setState({ placeholderPosition: true });
      } else {
        api$2.setState({ placeholderPosition: false });
      }
    }
    if (interval) {
      clearTimeout(interval);
    }
    if (!isHover) {
      api$2.setState({ currentHover: props.component });
    }
  }, [event]);
  function onDrop(event2) {
    event2.preventDefault();
    event2.stopPropagation();
    api$2.setState({ currentHover: null });
    const { data, source, index } = JSON.parse(event2.dataTransfer.getData("data"));
    if (props.onDragEnd) {
      props.onDragEnd({
        element: __spreadProps(__spreadValues({}, data), { source, index }),
        to: props,
        left: placeholderPosition
      });
    }
  }
  return /* @__PURE__ */ React.createElement(PassProps, {
    className: `${$$6.zone} ${isHover && (placeholderPosition ? $$6.leftPlaceholder : $$6.rightPlaceholder) || ""} ${forFrame ? $$6.frame : ""}`,
    onDragEnter: (e) => onDragEnter(e),
    onDragLeave: (e) => onDragLeave(),
    onDragOver: (e) => onDragOver(e),
    onDrop: (e) => onDrop(e)
  }, props.children);
};
const [useStore$1, api$1] = create((set, store) => ({
  scenes: [],
  getVideoData(src) {
    return new Promise((resolve, reject) => {
      const node = document.createElement("video");
      node.src = src;
      node.ondurationchange = (element) => {
        console.log([node]);
        return resolve({ duration: element.path[0].duration });
      };
    });
  },
  async setScenes(scene) {
    const { scenes: scenes2, getVideoData } = store();
    if (scene.type === "video") {
      const data = await getVideoData(scene.src);
      scene.loop = data.duration;
    } else {
      scene.loop = 5;
    }
    scene.id = cuid_1();
    scenes2.push(scene);
    set({ scenes: scenes2 });
  },
  moveScenes(scene, left, to) {
    const { scenes: scenes2 } = store();
    const oldScene = scenes2[scene.index];
    scenes2.splice(scene.index, 1);
    scenes2.splice(to.index, 0, oldScene);
    set({ scenes: scenes2 });
  }
}));
function secondsMs(seconds2) {
  return new Date(seconds2 * 1e3).toISOString().substr(14, 5);
}
const videoTimeline = "_videoTimeline_1od8p_1";
const mediasContainer = "_mediasContainer_1od8p_7";
const title = "_title_1od8p_11";
const scenes$1 = "_scenes_1od8p_17";
const mediaScene = "_mediaScene_1od8p_25";
const scenesContainer = "_scenesContainer_1od8p_35";
const info = "_info_1od8p_41";
const expand = "_expand_1od8p_48";
const remove = "_remove_1od8p_49";
var $$5 = {
  videoTimeline,
  mediasContainer,
  title,
  scenes: scenes$1,
  mediaScene,
  scenesContainer,
  info,
  expand,
  remove
};
var Media$1 = (props) => {
  const { scenes: scenes2, setScenes, moveScenes } = useStore$1();
  function updateScenes(e) {
    if (e.element.source === "timeline") {
      moveScenes(e.element, e.left, e.to);
    } else {
      setScenes(e.element);
    }
  }
  function renderMedia() {
    let secondsFrom = 0;
    let secondsTo = 0;
    return scenes2.map((scene, index) => {
      const lastScene = scenes2[index - 1];
      secondsFrom += lastScene && Math.floor(lastScene.loop) || 0;
      secondsTo = secondsFrom + Math.floor(scene.loop - 1);
      if (scenes2.length - 1 === parseInt(index)) {
        secondsTo = secondsFrom + Math.floor(scene.loop);
      }
      return /* @__PURE__ */ React.createElement("div", {
        className: $$5.scene,
        key: scene.id
      }, /* @__PURE__ */ React.createElement(Zone, {
        component: `frame-${scene.id}`,
        droppableid: `video-${scene.id}`,
        index,
        onDragEnd: (element) => updateScenes(element)
      }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
        className: $$5.info
      }, /* @__PURE__ */ React.createElement("span", null, secondsMs(secondsFrom)), /* @__PURE__ */ React.createElement("span", null, secondsMs(secondsTo))), /* @__PURE__ */ React.createElement(Element, {
        data: scene,
        source: "timeline",
        index
      }, /* @__PURE__ */ React.createElement("div", {
        className: $$5.mediaScene,
        style: {
          backgroundImage: `url(${scene.type === "video" && scene.poster || scene.src})`,
          minWidth: `${scene.loop * 15}px`
        }
      }, /* @__PURE__ */ React.createElement("div", {
        className: $$5.expand,
        onClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: `${""}/video-player/arrows-alt-h.svg`
      })))))));
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: $$5.mediasContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: $$5.title
  }, "Media:"), /* @__PURE__ */ React.createElement("div", {
    className: $$5.scenesContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: $$5.scenes
  }, renderMedia(), /* @__PURE__ */ React.createElement(Zone, {
    component: "frame",
    droppableid: "video",
    index: null,
    onDragEnd: (e) => updateScenes(e)
  }, /* @__PURE__ */ React.createElement("div", null)))));
};
var Audio = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: $$5.mediasContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: $$5.title
  }, "Audio:"), /* @__PURE__ */ React.createElement("div", {
    className: $$5.scenesContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: $$5.scenes
  })));
};
var Timeline = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: $$5.videoTimeline
  }, /* @__PURE__ */ React.createElement(Media$1, null), /* @__PURE__ */ React.createElement(Audio, null));
};
const videoPlayer$1 = "_videoPlayer_1jcnm_1";
const video = "_video_1jcnm_1";
const videoContainer = "_videoContainer_1jcnm_13";
var $$4 = {
  videoPlayer: videoPlayer$1,
  video,
  videoContainer
};
const play = "_play_cl6yw_44";
const pause = "_pause_cl6yw_1";
const buttons = "_buttons_cl6yw_6";
const stage = "_stage_cl6yw_12";
const seconds = "_seconds_cl6yw_16";
const actions = "_actions_cl6yw_22";
const videoPlayer = "_videoPlayer_cl6yw_33";
const timeBar = "_timeBar_cl6yw_37";
const secondsRange = "_secondsRange_cl6yw_40";
const playPause = "_playPause_cl6yw_44";
var $$3 = {
  play,
  pause,
  buttons,
  stage,
  seconds,
  actions,
  videoPlayer,
  timeBar,
  secondsRange,
  playPause
};
let secondsClean = 0;
var useVideoPlayer = (scenes2) => {
  const [stage2, setStage] = react.exports.useState(null);
  const [seconds2, setSeconds] = react.exports.useState(secondsClean);
  const [scenesTime, setScenesTime] = react.exports.useState([]);
  const [isPlaying, setIsPlaying] = react.exports.useState(false);
  const [animation, setAnimation] = react.exports.useState(null);
  const onLoad = () => {
    const stage22 = new Konva.Stage({
      container: `.${$$3.stage}`,
      width: 500,
      height: 500
    });
    const layer = new Konva.Layer({ name: "background" });
    stage22.add(layer);
    const rect = new Konva.Rect({
      fill: "#000",
      width: 500,
      height: 500
    });
    layer.add(rect);
    setStage(stage22);
    stage22.draw();
  };
  const addVideoScene = (scene) => {
    var video2 = document.createElement("video");
    video2.src = scene.src;
    const image = new Konva.Image({
      image: video2,
      name: "element",
      x: 0,
      y: 0,
      width: 500,
      height: 500
    });
    return image;
  };
  const addImageScene = (scene) => {
    var img = document.createElement("img");
    img.src = scene.src;
    const image = new Konva.Image({
      image: img,
      name: "element",
      x: 0,
      y: 0,
      width: 500,
      height: 500
    });
    return image;
  };
  react.exports.useEffect(() => {
    onLoad();
  }, []);
  react.exports.useEffect(() => {
    if (!stage2 && !scenes2.length)
      return;
    const sceneTime = scenes2.map((item, index) => {
      return scenes2.reduce((total, scene, key) => total + (key <= index && scene.loop) || 0, 0);
    });
    setScenesTime(sceneTime);
    if (stage2.find(".video-player")[0]) {
      stage2.find(".video-player")[0].destroy();
    }
    const layer = new Konva.Layer({ name: "video-player" });
    stage2.add(layer);
    for (const scene of scenes2) {
      const group = new Konva.Group({ name: scene.id });
      layer.add(group);
      let image;
      if (scene.type === "image") {
        image = addImageScene(scene);
      } else {
        image = addVideoScene(scene);
      }
      group.add(image);
      layer.draw();
    }
    layer.find("Group");
    const anim = new Konva.Animation((frame2) => {
      if (!scenes2.length)
        return;
      frame2.time / 1e3;
      secondsClean += frame2.timeDiff / 1e3;
      setSeconds(secondsClean);
      const works = animateCanvas(sceneTime);
      if (!works) {
        const firstScene = stage2.find(`.${scenes2[0].id}`)[0];
        firstScene.zIndex(scenes2.length - 1);
        if (scenes2[0].type === "video") {
          const video2 = firstScene.find("Image")[0].attrs.image;
          video2.currentTime = 0;
          video2.pause();
          setTimeout(() => stage2.draw(), 50);
        }
        anim.stop();
        setIsPlaying(false);
      }
    }, stage2);
    setAnimation(anim);
  }, [scenes2]);
  function togglePlaying() {
    if (!animation.isRunning()) {
      setIsPlaying(true);
      animation.start();
    } else {
      setIsPlaying(false);
      animation.stop();
    }
  }
  const animateCanvas = (scenesDelimitation, change = false) => {
    stage2.find(".background")[0].zIndex(0);
    const sceneIndex = scenesDelimitation.findIndex((item) => item >= secondsClean);
    const lastDuration = scenesDelimitation[sceneIndex - 1] || 0;
    if (sceneIndex === -1) {
      stage2.find(".background")[0].zIndex(1);
      setSeconds(0);
      secondsClean = 0;
      return false;
    }
    const lastScene = scenes2[sceneIndex - 1];
    const scene = scenes2[sceneIndex];
    const group = stage2.find(`.${scene.id}`)[0];
    group.zIndex(scenes2.length - 1);
    if (lastScene && lastScene.type === "video") {
      const lastGroup = stage2.find(`.${lastScene.id}`)[0];
      lastGroup.find("Image")[0].attrs.image.pause();
    }
    if (scene.type === "video") {
      const currentTime = secondsClean - lastDuration;
      const video2 = group.find("Image")[0].attrs.image;
      if (video2.paused) {
        video2.play();
      }
      if (change) {
        video2.currentTime = currentTime;
      }
    }
    return true;
  };
  const onChange = (value) => {
    setSeconds(value);
    secondsClean = value;
    animateCanvas(scenesTime, true);
    stage2.draw();
  };
  return [seconds2, onChange, isPlaying, togglePlaying];
};
var Player = (props) => {
  const [seconds2, onChange, isPlaying, togglePlaying] = useVideoPlayer(props.scenes);
  const totalSeconds = props.scenes.reduce((total, item) => total + item.loop, 0);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: $$3.videoPlayer
  }, /* @__PURE__ */ React.createElement("div", {
    className: $$3.stage
  }), /* @__PURE__ */ React.createElement("div", {
    className: $$3.actions
  }, /* @__PURE__ */ React.createElement("div", {
    className: $$3.buttons
  }, /* @__PURE__ */ React.createElement("div", {
    id: $$3.play,
    className: "cvs-action cvs-play",
    onClick: togglePlaying
  }, /* @__PURE__ */ React.createElement("img", {
    className: $$3.playPause,
    src: `video-player/${!isPlaying && "play" || "pause"}.svg`
  }))), /* @__PURE__ */ React.createElement("div", {
    className: $$3.timeBar
  }, /* @__PURE__ */ React.createElement("div", {
    className: $$3.seconds
  }, /* @__PURE__ */ React.createElement("span", null, secondsMs(seconds2)), /* @__PURE__ */ React.createElement("span", null, secondsMs(totalSeconds))), /* @__PURE__ */ React.createElement("input", {
    className: $$3.secondsRange,
    type: "range",
    value: seconds2,
    onChange: (e) => {
      onChange(parseFloat(e.target.value));
    },
    min: 0,
    step: 0.01,
    max: totalSeconds
  })))));
};
var CanvasVideoPlayer = (props) => {
  return /* @__PURE__ */ React.createElement(Player, {
    scenes: props.scenes
  });
};
var Editor$2 = (props) => {
  const { scenes: scenes2 } = useStore$1();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: $$4.videoContainer
  }, /* @__PURE__ */ React.createElement(CanvasVideoPlayer, {
    scenes: [...scenes2]
  })), /* @__PURE__ */ React.createElement(Timeline, null));
};
const tabs = "_tabs_1mkq5_1";
var $$2 = {
  tabs
};
function Buttons({ view: view2, setView, children }) {
  return children.map((child, index) => {
    return /* @__PURE__ */ React.createElement("button", {
      key: index,
      type: "button",
      className: `btn btn-sm ${view2 === index && "btn-dark" || "btn-light"}`,
      onClick: () => setView(index)
    }, child.props.title);
  });
}
function Content({ view: view2, children }) {
  return /* @__PURE__ */ React.createElement(Panel.Stack, {
    visible: view2
  }, children.map((child, index) => /* @__PURE__ */ React.createElement(Panel.View, {
    key: index,
    name: index
  }, child)));
}
var Tabs = ({ children }) => {
  const [view2, setView] = react.exports.useState(0);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: `btn-group mr-2 mb-3 ${$$2.tabs}`,
    role: "group",
    "aria-label": "First group"
  }, /* @__PURE__ */ React.createElement(Buttons, {
    view: view2,
    setView
  }, children)), /* @__PURE__ */ React.createElement(Content, {
    view: view2
  }, children));
};
var Advanced = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, "Advanced");
};
var Settings = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, "Settings");
};
const mediaContainer = "_mediaContainer_mc55r_1";
const singleMedia = "_singleMedia_mc55r_6";
const addAudio = "_addAudio_mc55r_10";
const addButton = "_addButton_mc55r_20";
var $$1 = {
  mediaContainer,
  singleMedia,
  addAudio,
  addButton
};
var Media = ({ media: media2 }) => {
  const [mediaType, setMediaType] = react.exports.useState("images");
  const render = {};
  const renderEmptyCards = (nrCards) => {
    const cards = [];
    for (let i = nrCards % 3; i <= 3; i++) {
      cards.push(/* @__PURE__ */ React.createElement("div", {
        key: `fake${i}`,
        className: `avatar avatar-lg avatar-4by3`
      }));
    }
    return cards;
  };
  render.images = () => {
    const mediaImages = media2.images.map((image, index) => /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: `${$$1.singleMedia} avatar avatar-lg avatar-4by3`
    }, /* @__PURE__ */ React.createElement(Element, {
      data: {
        type: "image",
        src: image.src
      },
      source: "sidebar",
      index
    }, /* @__PURE__ */ React.createElement("img", {
      src: image.thumb,
      className: "avatar-img rounded"
    }))));
    mediaImages.push(/* @__PURE__ */ React.createElement("div", {
      key: "add-image",
      className: `${$$1.singleMedia} ${$$1.addButton} avatar avatar-lg avatar-4by3`
    }, /* @__PURE__ */ React.createElement("img", {
      style: { objectFit: "contain" },
      src: `${""}/assets/images/plus-solid.svg`,
      className: "avatar-img rounded"
    })));
    const emptyCards = renderEmptyCards(media2.images.length + 1);
    mediaImages.push(...emptyCards);
    return mediaImages;
  };
  render.videos = () => {
    const mediaVideos = media2.videos.map((video2, index) => /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: `${$$1.singleMedia} avatar avatar-lg avatar-4by3`
    }, /* @__PURE__ */ React.createElement(Element, {
      data: {
        type: "video",
        src: video2.src,
        poster: video2.poster
      },
      source: "sidebar",
      index
    }, /* @__PURE__ */ React.createElement("video", {
      controls: true,
      src: video2.src,
      poster: video2.poster,
      className: "avatar-img rounded"
    }))));
    mediaVideos.push(/* @__PURE__ */ React.createElement("div", {
      key: "add-video",
      className: `${$$1.singleMedia} ${$$1.addButton} avatar avatar-lg avatar-4by3`
    }, /* @__PURE__ */ React.createElement("img", {
      style: { objectFit: "contain" },
      src: `${""}/assets/images/plus-solid.svg`,
      className: "avatar-img rounded"
    })));
    const emptyCards = renderEmptyCards(media2.videos.length + 1);
    mediaVideos.push(...emptyCards);
    return mediaVideos;
  };
  render.audios = () => {
    const mediaAudios = media2.audios.map((audio, index) => /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: `${$$1.singleMedia}`
    }, /* @__PURE__ */ React.createElement("audio", {
      controls: true,
      src: audio.src
    })));
    mediaAudios.push(/* @__PURE__ */ React.createElement("div", {
      key: "add-audio",
      className: `${$$1.addAudio} ${$$1.addButton}`
    }, /* @__PURE__ */ React.createElement("img", {
      style: { objectFit: "contain" },
      src: `${""}/assets/images/plus-solid.svg`,
      className: "avatar-img rounded"
    })));
    return mediaAudios;
  };
  const selectMedia = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "form-group"
    }, /* @__PURE__ */ React.createElement("label", {
      htmlFor: "selectMediaType"
    }, "Select media type"), /* @__PURE__ */ React.createElement("select", {
      className: "custom-select",
      id: "selectMediaType",
      value: mediaType,
      onChange: (e) => setMediaType(e.target.value)
    }, /* @__PURE__ */ React.createElement("option", {
      value: "images"
    }, "Photo"), /* @__PURE__ */ React.createElement("option", {
      value: "videos"
    }, "Video"), /* @__PURE__ */ React.createElement("option", {
      value: "audios"
    }, "Audio")));
  };
  return /* @__PURE__ */ React.createElement("div", null, selectMedia(), /* @__PURE__ */ React.createElement("div", {
    className: $$1.mediaContainer
  }, render[mediaType]()));
};
const media = {
  images: [
    {
      src: "assets/images/media-editor/img1.jpg",
      thumb: "assets/images/media-editor/img1-thumb.jpg"
    },
    {
      src: "assets/images/media-editor/img2.jpg",
      thumb: "assets/images/media-editor/img2-thumb.jpg"
    },
    {
      src: "assets/images/media-editor/img3.webp",
      thumb: "assets/images/media-editor/img3-thumb.jpg"
    },
    {
      src: "assets/images/media-editor/img4.jpg",
      thumb: "assets/images/media-editor/img4-thumb.jpg"
    },
    {
      src: "assets/images/media-editor/img5.webp",
      thumb: "assets/images/media-editor/img5-thumb.jpg"
    }
  ],
  videos: [
    {
      src: "assets/images/media-editor/video3.mp4",
      poster: "assets/images/media-editor/video3.png"
    },
    {
      src: "assets/images/media-editor/video4.mp4",
      poster: "assets/images/media-editor/video4.png"
    }
  ],
  audios: [
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
    }
  ]
};
const scenes = [
  {
    src: "assets/images/media-editor/video2.mp4",
    id: "test2",
    type: "video",
    loop: 15
  },
  {
    src: "assets/images/media-editor/img1.jpg",
    id: "test1",
    type: "image",
    loop: 2
  },
  {
    src: "assets/images/media-editor/video4.mp4",
    id: "test3",
    type: "video",
    loop: 1
  }
];
var config = {
  media,
  scenes
};
var Views = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Tabs, null, /* @__PURE__ */ React.createElement(Media, {
    media: config.media,
    title: "Media"
  }), /* @__PURE__ */ React.createElement(Settings, {
    title: "Settings"
  }), /* @__PURE__ */ React.createElement(Advanced, {
    title: "Advanced"
  })));
};
const dashboardSidebar = "_dashboardSidebar_109b2_1";
var $ = {
  dashboardSidebar
};
var Sidebar$2 = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: $.dashboardSidebar
  }, /* @__PURE__ */ React.createElement(Views, null), /* @__PURE__ */ React.createElement("div", {
    className: "btn-group btn-group-sm mr-2 mb-3"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-light"
  }, "Get Link"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-light"
  }, "Preview")));
};
var Dashboard = { Sidebar: Sidebar$2, Editor: Editor$2 };
var Sidebar$1 = (props) => {
  return /* @__PURE__ */ React.createElement(react.exports.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarVertical"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "navbar-nav mb-md-3"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link",
    href: "getting-started.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fe fe-clipboard"
  }), " Getting started")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link",
    href: "components.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fe fe-book-open"
  }), " Components", " ", /* @__PURE__ */ React.createElement("span", {
    className: "badge badge-primary ml-auto"
  }, "23"))), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link",
    href: "changelog.html"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fe fe-git-branch"
  }), " Changelog")))));
};
var Editor$1 = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, "Photo");
};
var Photo = { Editor: Editor$1, Sidebar: Sidebar$1 };
var Editor = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, "Video");
};
var Sidebar = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, "Video");
};
var Video = { Sidebar, Editor };
const [useStore, api] = create((set) => ({
  view: "dashboard"
}));
var App = (props) => {
  const { view: view2 } = useStore();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Sidebar$3, {
    view: view2
  }, /* @__PURE__ */ React.createElement(Dashboard.Sidebar, {
    title: "Dashboard",
    name: "dashboard"
  }), /* @__PURE__ */ React.createElement(Photo.Sidebar, {
    title: "Photo",
    name: "photo",
    back: () => {
      api.setState({ view: view2 === "photo" && "video" || "photo" });
    }
  }), /* @__PURE__ */ React.createElement(Video.Sidebar, {
    title: "Video",
    name: "video",
    back: () => {
      api.setState({ view: view2 === "photo" && "video" || "photo" });
    }
  })), /* @__PURE__ */ React.createElement(Editor$3, {
    view: api.getState().view
  }, /* @__PURE__ */ React.createElement(Dashboard.Editor, {
    name: "dashboard"
  }), /* @__PURE__ */ React.createElement(Photo.Editor, {
    name: "photo"
  }), /* @__PURE__ */ React.createElement(Video.Editor, {
    name: "video"
  })));
};
document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("root");
  ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), root);
});
var theme_min = `/*!
 * Bootstrap v4.5.2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --blue: #2c7be5;
  --indigo: #727cf5;
  --purple: #6b5eae;
  --pink: #ff679b;
  --red: #e63757;
  --orange: #fd7e14;
  --yellow: #f6c343;
  --green: #00d97e;
  --teal: #02a8b5;
  --cyan: #39afd1;
  --white: #ffffff;
  --gray: #95aac9;
  --gray-dark: #3b506c;
  --primary: #2c7be5;
  --secondary: #6e84a3;
  --success: #00d97e;
  --info: #39afd1;
  --warning: #f6c343;
  --danger: #e63757;
  --light: #edf2f9;
  --dark: #12263f;
  --white: #ffffff;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Cerebri Sans", sans-serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
*,
::after,
::before {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(18, 38, 63, 0);
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
body {
  margin: 0;
  font-family: "Cerebri Sans", sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #12263f;
  text-align: left;
  background-color: #f9fbfd;
}
[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 1.125rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
abbr[data-original-title],
abbr[title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
dl,
ol,
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
ol ol,
ol ul,
ul ol,
ul ul {
  margin-bottom: 0;
}
dt {
  font-weight: 600;
}
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
blockquote {
  margin: 0 0 1rem;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
a {
  color: #2c7be5;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #1657af;
  text-decoration: none;
}
a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
code,
kbd,
pre,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 1em;
}
pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}
figure {
  margin: 0 0 1rem;
}
img {
  vertical-align: middle;
  border-style: none;
}
svg {
  overflow: hidden;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
}
caption {
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #95aac9;
  text-align: left;
  caption-side: bottom;
}
th {
  text-align: inherit;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
button {
  border-radius: 0;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[role="button"] {
  cursor: pointer;
}
select {
  word-wrap: normal;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
textarea {
  overflow: auto;
  resize: vertical;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
output {
  display: inline-block;
}
summary {
  display: list-item;
  cursor: pointer;
}
template {
  display: none;
}
[hidden] {
  display: none !important;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1.125rem;
  font-weight: 500;
  line-height: 1.1;
}
.h1,
h1 {
  font-size: 1.625rem;
}
.h2,
h2 {
  font-size: 1.25rem;
}
.h3,
h3 {
  font-size: 1.0625rem;
}
.h4,
h4 {
  font-size: 0.9375rem;
}
.h5,
h5 {
  font-size: 0.8125rem;
}
.h6,
h6 {
  font-size: 0.625rem;
}
.lead {
  font-size: 1.17188rem;
  font-weight: 300;
}
.display-1 {
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.1;
}
.display-2 {
  font-size: 3.25rem;
  font-weight: 600;
  line-height: 1.1;
}
.display-3 {
  font-size: 2.625rem;
  font-weight: 600;
  line-height: 1.1;
}
.display-4 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.1;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid #e3ebf6;
}
.small,
small {
  font-size: 0.8125rem;
  font-weight: 400;
}
.mark,
mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
}
.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 6px;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
.blockquote {
  margin-bottom: 1.5rem;
  font-size: 1.17188rem;
}
.blockquote-footer {
  display: block;
  font-size: 0.8125rem;
  color: #95aac9;
}
.blockquote-footer::before {
  content: "\\2014\\00A0";
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #f9fbfd;
  border: 1px solid #e3ebf6;
  border-radius: 0.375rem;
  max-width: 100%;
  height: auto;
}
.figure {
  display: inline-block;
}
.figure-img {
  margin-bottom: 0.75rem;
  line-height: 1;
}
.figure-caption {
  font-size: 0.8125rem;
  color: #95aac9;
}
code {
  font-size: 87.5%;
  color: #2c7be5;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}
kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #283e59;
  border-radius: 0.25rem;
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 600;
}
pre {
  display: block;
  font-size: 87.5%;
  color: #283e59;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%;
}
.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%;
}
.row-cols-3 > * {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}
.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%;
}
.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%;
}
.row-cols-6 > * {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}
.col-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
}
.col-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}
.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}
.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}
.col-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
}
.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.col-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
}
.col-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}
.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}
.col-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
}
.col-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
.order-first {
  order: -1;
}
.order-last {
  order: 13;
}
.order-0 {
  order: 0;
}
.order-1 {
  order: 1;
}
.order-2 {
  order: 2;
}
.order-3 {
  order: 3;
}
.order-4 {
  order: 4;
}
.order-5 {
  order: 5;
}
.order-6 {
  order: 6;
}
.order-7 {
  order: 7;
}
.order-8 {
  order: 8;
}
.order-9 {
  order: 9;
}
.order-10 {
  order: 10;
}
.order-11 {
  order: 11;
}
.order-12 {
  order: 12;
}
.offset-1 {
  margin-left: 8.33333%;
}
.offset-2 {
  margin-left: 16.66667%;
}
.offset-3 {
  margin-left: 25%;
}
.offset-4 {
  margin-left: 33.33333%;
}
.offset-5 {
  margin-left: 41.66667%;
}
.offset-6 {
  margin-left: 50%;
}
.offset-7 {
  margin-left: 58.33333%;
}
.offset-8 {
  margin-left: 66.66667%;
}
.offset-9 {
  margin-left: 75%;
}
.offset-10 {
  margin-left: 83.33333%;
}
.offset-11 {
  margin-left: 91.66667%;
}
@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-sm-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-sm-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-sm-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-first {
    order: -1;
  }
  .order-sm-last {
    order: 13;
  }
  .order-sm-0 {
    order: 0;
  }
  .order-sm-1 {
    order: 1;
  }
  .order-sm-2 {
    order: 2;
  }
  .order-sm-3 {
    order: 3;
  }
  .order-sm-4 {
    order: 4;
  }
  .order-sm-5 {
    order: 5;
  }
  .order-sm-6 {
    order: 6;
  }
  .order-sm-7 {
    order: 7;
  }
  .order-sm-8 {
    order: 8;
  }
  .order-sm-9 {
    order: 9;
  }
  .order-sm-10 {
    order: 10;
  }
  .order-sm-11 {
    order: 11;
  }
  .order-sm-12 {
    order: 12;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333%;
  }
  .offset-sm-2 {
    margin-left: 16.66667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333%;
  }
  .offset-sm-5 {
    margin-left: 41.66667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333%;
  }
  .offset-sm-8 {
    margin-left: 66.66667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333%;
  }
  .offset-sm-11 {
    margin-left: 91.66667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-md-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-md-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-md-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-md-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-first {
    order: -1;
  }
  .order-md-last {
    order: 13;
  }
  .order-md-0 {
    order: 0;
  }
  .order-md-1 {
    order: 1;
  }
  .order-md-2 {
    order: 2;
  }
  .order-md-3 {
    order: 3;
  }
  .order-md-4 {
    order: 4;
  }
  .order-md-5 {
    order: 5;
  }
  .order-md-6 {
    order: 6;
  }
  .order-md-7 {
    order: 7;
  }
  .order-md-8 {
    order: 8;
  }
  .order-md-9 {
    order: 9;
  }
  .order-md-10 {
    order: 10;
  }
  .order-md-11 {
    order: 11;
  }
  .order-md-12 {
    order: 12;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333%;
  }
  .offset-md-2 {
    margin-left: 16.66667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333%;
  }
  .offset-md-5 {
    margin-left: 41.66667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333%;
  }
  .offset-md-8 {
    margin-left: 66.66667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333%;
  }
  .offset-md-11 {
    margin-left: 91.66667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-lg-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-lg-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-lg-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-first {
    order: -1;
  }
  .order-lg-last {
    order: 13;
  }
  .order-lg-0 {
    order: 0;
  }
  .order-lg-1 {
    order: 1;
  }
  .order-lg-2 {
    order: 2;
  }
  .order-lg-3 {
    order: 3;
  }
  .order-lg-4 {
    order: 4;
  }
  .order-lg-5 {
    order: 5;
  }
  .order-lg-6 {
    order: 6;
  }
  .order-lg-7 {
    order: 7;
  }
  .order-lg-8 {
    order: 8;
  }
  .order-lg-9 {
    order: 9;
  }
  .order-lg-10 {
    order: 10;
  }
  .order-lg-11 {
    order: 11;
  }
  .order-lg-12 {
    order: 12;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333%;
  }
  .offset-lg-2 {
    margin-left: 16.66667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333%;
  }
  .offset-lg-5 {
    margin-left: 41.66667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333%;
  }
  .offset-lg-8 {
    margin-left: 66.66667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333%;
  }
  .offset-lg-11 {
    margin-left: 91.66667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-xl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-xl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-xl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-xl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-xl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xl-first {
    order: -1;
  }
  .order-xl-last {
    order: 13;
  }
  .order-xl-0 {
    order: 0;
  }
  .order-xl-1 {
    order: 1;
  }
  .order-xl-2 {
    order: 2;
  }
  .order-xl-3 {
    order: 3;
  }
  .order-xl-4 {
    order: 4;
  }
  .order-xl-5 {
    order: 5;
  }
  .order-xl-6 {
    order: 6;
  }
  .order-xl-7 {
    order: 7;
  }
  .order-xl-8 {
    order: 8;
  }
  .order-xl-9 {
    order: 9;
  }
  .order-xl-10 {
    order: 10;
  }
  .order-xl-11 {
    order: 11;
  }
  .order-xl-12 {
    order: 12;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333%;
  }
  .offset-xl-2 {
    margin-left: 16.66667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333%;
  }
  .offset-xl-5 {
    margin-left: 41.66667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333%;
  }
  .offset-xl-8 {
    margin-left: 66.66667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333%;
  }
  .offset-xl-11 {
    margin-left: 91.66667%;
  }
}
.table {
  width: 100%;
  margin-bottom: 1.5rem;
  color: #12263f;
}
.table td,
.table th {
  padding: 1rem;
  vertical-align: top;
  border-top: 1px solid #edf2f9;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #edf2f9;
}
.table tbody + tbody {
  border-top: 2px solid #edf2f9;
}
.table-sm td,
.table-sm th {
  padding: 1rem;
}
.table-bordered {
  border: 1px solid #edf2f9;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #edf2f9;
}
.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 2px;
}
.table-borderless tbody + tbody,
.table-borderless td,
.table-borderless th,
.table-borderless thead th {
  border: 0;
}
.table-striped tbody tr:nth-of-type(even) {
  background-color: #f9fbfd;
}
.table-hover tbody tr:hover {
  color: #12263f;
  background-color: #f9fbfd;
}
.table-primary,
.table-primary > td,
.table-primary > th {
  background-color: #c4daf8;
}
.table-primary tbody + tbody,
.table-primary td,
.table-primary th,
.table-primary thead th {
  border-color: #91baf1;
}
.table-hover .table-primary:hover {
  background-color: #adccf5;
}
.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
  background-color: #adccf5;
}
.table-secondary,
.table-secondary > td,
.table-secondary > th {
  background-color: #d6dde5;
}
.table-secondary tbody + tbody,
.table-secondary td,
.table-secondary th,
.table-secondary thead th {
  border-color: #b4bfcf;
}
.table-hover .table-secondary:hover {
  background-color: #c6d0db;
}
.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
  background-color: #c6d0db;
}
.table-success,
.table-success > td,
.table-success > th {
  background-color: #b8f4db;
}
.table-success tbody + tbody,
.table-success td,
.table-success th,
.table-success thead th {
  border-color: #7aebbc;
}
.table-hover .table-success:hover {
  background-color: #a2f1d0;
}
.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #a2f1d0;
}
.table-info,
.table-info > td,
.table-info > th {
  background-color: #c8e9f2;
}
.table-info tbody + tbody,
.table-info td,
.table-info th,
.table-info thead th {
  border-color: #98d5e7;
}
.table-hover .table-info:hover {
  background-color: #b3e1ed;
}
.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #b3e1ed;
}
.table-warning,
.table-warning > td,
.table-warning > th {
  background-color: #fceeca;
}
.table-warning tbody + tbody,
.table-warning td,
.table-warning th,
.table-warning thead th {
  border-color: #fae09d;
}
.table-hover .table-warning:hover {
  background-color: #fbe6b2;
}
.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #fbe6b2;
}
.table-danger,
.table-danger > td,
.table-danger > th {
  background-color: #f8c7d0;
}
.table-danger tbody + tbody,
.table-danger td,
.table-danger th,
.table-danger thead th {
  border-color: #f297a8;
}
.table-hover .table-danger:hover {
  background-color: #f5b0bd;
}
.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #f5b0bd;
}
.table-light,
.table-light > td,
.table-light > th {
  background-color: #fafbfd;
}
.table-light tbody + tbody,
.table-light td,
.table-light th,
.table-light thead th {
  border-color: #f6f8fc;
}
.table-hover .table-light:hover {
  background-color: #e8ecf6;
}
.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
  background-color: #e8ecf6;
}
.table-dark,
.table-dark > td,
.table-dark > th {
  background-color: #bdc2c9;
}
.table-dark tbody + tbody,
.table-dark td,
.table-dark th,
.table-dark thead th {
  border-color: #848e9b;
}
.table-hover .table-dark:hover {
  background-color: #afb5be;
}
.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
  background-color: #afb5be;
}
.table-white,
.table-white > td,
.table-white > th {
  background-color: #fff;
}
.table-white tbody + tbody,
.table-white td,
.table-white th,
.table-white thead th {
  border-color: #fff;
}
.table-hover .table-white:hover {
  background-color: #f2f2f2;
}
.table-hover .table-white:hover > td,
.table-hover .table-white:hover > th {
  background-color: #f2f2f2;
}
.table-active,
.table-active > td,
.table-active > th {
  background-color: #f9fbfd;
}
.table-hover .table-active:hover {
  background-color: #e6eef7;
}
.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: #e6eef7;
}
.table .thead-dark th {
  color: #fff;
  background-color: #3b506c;
  border-color: #496285;
}
.table .thead-light th {
  color: #95aac9;
  background-color: #f9fbfd;
  border-color: #edf2f9;
}
.table-dark {
  color: #fff;
  background-color: #3b506c;
}
.table-dark td,
.table-dark th,
.table-dark thead th {
  border-color: #496285;
}
.table-dark.table-bordered {
  border: 0;
}
.table-dark.table-striped tbody tr:nth-of-type(even) {
  background-color: rgba(255, 255, 255, 0.05);
}
.table-dark.table-hover tbody tr:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.075);
}
@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-sm > .table-bordered {
    border: 0;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-md > .table-bordered {
    border: 0;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-lg > .table-bordered {
    border: 0;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .table-responsive-xl > .table-bordered {
    border: 0;
  }
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.table-responsive > .table-bordered {
  border: 0;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 0.75rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #12263f;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d2ddec;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #12263f;
}
.form-control:focus {
  color: #12263f;
  background-color: #fff;
  border-color: #2c7be5;
  outline: 0;
  box-shadow: transparent;
}
.form-control::-webkit-input-placeholder {
  color: #b1c2d9;
  opacity: 1;
}
.form-control::-moz-placeholder {
  color: #b1c2d9;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #b1c2d9;
  opacity: 1;
}
.form-control::-ms-input-placeholder {
  color: #b1c2d9;
  opacity: 1;
}
.form-control::placeholder {
  color: #b1c2d9;
  opacity: 1;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: #fff;
  opacity: 1;
}
input[type="date"].form-control,
input[type="datetime-local"].form-control,
input[type="month"].form-control,
input[type="time"].form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select.form-control:focus::-ms-value {
  color: #12263f;
  background-color: #fff;
}
.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}
.col-form-label {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}
.col-form-label-lg {
  padding-top: calc(0.75rem + 1px);
  padding-bottom: calc(0.75rem + 1px);
  font-size: 0.9375rem;
  line-height: 1.5;
}
.col-form-label-sm {
  padding-top: calc(0.125rem + 1px);
  padding-bottom: calc(0.125rem + 1px);
  font-size: 0.8125rem;
  line-height: 1.75;
}
.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #12263f;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-lg,
.form-control-plaintext.form-control-sm {
  padding-right: 0;
  padding-left: 0;
}
.form-control-sm {
  height: calc(1.75em + 0.25rem + 2px);
  padding: 0.125rem 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  border-radius: 0.25rem;
}
.form-control-lg {
  height: calc(1.5em + 1.5rem + 2px);
  padding: 0.75rem 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  border-radius: 0.5rem;
}
select.form-control[multiple],
select.form-control[size] {
  height: auto;
}
textarea.form-control {
  height: auto;
}
.form-group {
  margin-bottom: 1.375rem;
}
.form-text {
  display: block;
  margin-top: 0.25rem;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.form-row > .col,
.form-row > [class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}
.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}
.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}
.form-check-input:disabled ~ .form-check-label,
.form-check-input[disabled] ~ .form-check-label {
  color: #95aac9;
}
.form-check-label {
  margin-bottom: 0;
}
.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}
.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}
.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.8125rem;
  color: #00d97e;
}
.valid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #fff;
  background-color: #00d97e;
  border-radius: 0.375rem;
}
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip,
.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip {
  display: block;
}
.form-control.is-valid,
.was-validated .form-control:valid {
  border-color: #00d97e;
}
.form-control.is-valid:focus,
.was-validated .form-control:valid:focus {
  border-color: #00d97e;
  box-shadow: 0 0 0 0.15rem rgba(0, 217, 126, 0.25);
}
.custom-select.is-valid,
.was-validated .custom-select:valid {
  border-color: #00d97e;
}
.custom-select.is-valid:focus,
.was-validated .custom-select:valid:focus {
  border-color: #00d97e;
  box-shadow: 0 0 0 0.15rem rgba(0, 217, 126, 0.25);
}
.form-check-input.is-valid ~ .form-check-label,
.was-validated .form-check-input:valid ~ .form-check-label {
  color: #00d97e;
}
.form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip,
.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip {
  display: block;
}
.custom-control-input.is-valid ~ .custom-control-label,
.was-validated .custom-control-input:valid ~ .custom-control-label {
  color: #00d97e;
}
.custom-control-input.is-valid ~ .custom-control-label::before,
.was-validated .custom-control-input:valid ~ .custom-control-label::before {
  border-color: #00d97e;
}
.custom-control-input.is-valid:checked ~ .custom-control-label::before,
.was-validated
  .custom-control-input:valid:checked
  ~ .custom-control-label::before {
  border-color: #0dff9a;
  background-color: #0dff9a;
}
.custom-control-input.is-valid:focus ~ .custom-control-label::before,
.was-validated
  .custom-control-input:valid:focus
  ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.15rem rgba(0, 217, 126, 0.25);
}
.custom-control-input.is-valid:focus:not(:checked)
  ~ .custom-control-label::before,
.was-validated
  .custom-control-input:valid:focus:not(:checked)
  ~ .custom-control-label::before {
  border-color: #00d97e;
}
.custom-file-input.is-valid ~ .custom-file-label,
.was-validated .custom-file-input:valid ~ .custom-file-label {
  border-color: #00d97e;
}
.custom-file-input.is-valid:focus ~ .custom-file-label,
.was-validated .custom-file-input:valid:focus ~ .custom-file-label {
  border-color: #00d97e;
  box-shadow: 0 0 0 0.15rem rgba(0, 217, 126, 0.25);
}
.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.8125rem;
  color: #e63757;
}
.invalid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #fff;
  background-color: #e63757;
  border-radius: 0.375rem;
}
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip,
.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip {
  display: block;
}
.form-control.is-invalid,
.was-validated .form-control:invalid {
  border-color: #e63757;
}
.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
  border-color: #e63757;
  box-shadow: 0 0 0 0.15rem rgba(230, 55, 87, 0.25);
}
.custom-select.is-invalid,
.was-validated .custom-select:invalid {
  border-color: #e63757;
}
.custom-select.is-invalid:focus,
.was-validated .custom-select:invalid:focus {
  border-color: #e63757;
  box-shadow: 0 0 0 0.15rem rgba(230, 55, 87, 0.25);
}
.form-check-input.is-invalid ~ .form-check-label,
.was-validated .form-check-input:invalid ~ .form-check-label {
  color: #e63757;
}
.form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip,
.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip {
  display: block;
}
.custom-control-input.is-invalid ~ .custom-control-label,
.was-validated .custom-control-input:invalid ~ .custom-control-label {
  color: #e63757;
}
.custom-control-input.is-invalid ~ .custom-control-label::before,
.was-validated .custom-control-input:invalid ~ .custom-control-label::before {
  border-color: #e63757;
}
.custom-control-input.is-invalid:checked ~ .custom-control-label::before,
.was-validated
  .custom-control-input:invalid:checked
  ~ .custom-control-label::before {
  border-color: #ec647d;
  background-color: #ec647d;
}
.custom-control-input.is-invalid:focus ~ .custom-control-label::before,
.was-validated
  .custom-control-input:invalid:focus
  ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.15rem rgba(230, 55, 87, 0.25);
}
.custom-control-input.is-invalid:focus:not(:checked)
  ~ .custom-control-label::before,
.was-validated
  .custom-control-input:invalid:focus:not(:checked)
  ~ .custom-control-label::before {
  border-color: #e63757;
}
.custom-file-input.is-invalid ~ .custom-file-label,
.was-validated .custom-file-input:invalid ~ .custom-file-label {
  border-color: #e63757;
}
.custom-file-input.is-invalid:focus ~ .custom-file-label,
.was-validated .custom-file-input:invalid:focus ~ .custom-file-label {
  border-color: #e63757;
  box-shadow: 0 0 0 0.15rem rgba(230, 55, 87, 0.25);
}
.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.form-inline .form-check {
  width: 100%;
}
@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-plaintext {
    display: inline-block;
  }
  .form-inline .custom-select,
  .form-inline .input-group {
    width: auto;
  }
  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }
  .form-inline .form-check-input {
    position: relative;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }
  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }
  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #12263f;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #12263f;
  text-decoration: none;
}
.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(44, 123, 229, 0.25);
}
.btn.disabled,
.btn:disabled {
  opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}
.btn-primary {
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.btn-primary:hover {
  color: #fff;
  background-color: #1a68d1;
  border-color: #1862c6;
}
.btn-primary.focus,
.btn-primary:focus {
  color: #fff;
  background-color: #1a68d1;
  border-color: #1862c6;
  box-shadow: 0 0 0 0.15rem rgba(76, 143, 233, 0.5);
}
.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #1862c6;
  border-color: #175dba;
}
.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(76, 143, 233, 0.5);
}
.btn-secondary {
  color: #fff;
  background-color: #6e84a3;
  border-color: #6e84a3;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5b7190;
  border-color: #566b88;
}
.btn-secondary.focus,
.btn-secondary:focus {
  color: #fff;
  background-color: #5b7190;
  border-color: #566b88;
  box-shadow: 0 0 0 0.15rem rgba(132, 150, 177, 0.5);
}
.btn-secondary.disabled,
.btn-secondary:disabled {
  color: #fff;
  background-color: #6e84a3;
  border-color: #6e84a3;
}
.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #566b88;
  border-color: #516580;
}
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(132, 150, 177, 0.5);
}
.btn-success {
  color: #fff;
  background-color: #00d97e;
  border-color: #00d97e;
}
.btn-success:hover {
  color: #fff;
  background-color: #00b368;
  border-color: #00a660;
}
.btn-success.focus,
.btn-success:focus {
  color: #fff;
  background-color: #00b368;
  border-color: #00a660;
  box-shadow: 0 0 0 0.15rem rgba(38, 223, 145, 0.5);
}
.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #00d97e;
  border-color: #00d97e;
}
.btn-success:not(:disabled):not(.disabled).active,
.btn-success:not(:disabled):not(.disabled):active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #00a660;
  border-color: #009959;
}
.btn-success:not(:disabled):not(.disabled).active:focus,
.btn-success:not(:disabled):not(.disabled):active:focus,
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(38, 223, 145, 0.5);
}
.btn-info {
  color: #fff;
  background-color: #39afd1;
  border-color: #39afd1;
}
.btn-info:hover {
  color: #fff;
  background-color: #2b99b9;
  border-color: #2991ae;
}
.btn-info.focus,
.btn-info:focus {
  color: #fff;
  background-color: #2b99b9;
  border-color: #2991ae;
  box-shadow: 0 0 0 0.15rem rgba(87, 187, 216, 0.5);
}
.btn-info.disabled,
.btn-info:disabled {
  color: #fff;
  background-color: #39afd1;
  border-color: #39afd1;
}
.btn-info:not(:disabled):not(.disabled).active,
.btn-info:not(:disabled):not(.disabled):active,
.show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #2991ae;
  border-color: #2688a4;
}
.btn-info:not(:disabled):not(.disabled).active:focus,
.btn-info:not(:disabled):not(.disabled):active:focus,
.show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(87, 187, 216, 0.5);
}
.btn-warning {
  color: #283e59;
  background-color: #f6c343;
  border-color: #f6c343;
}
.btn-warning:hover {
  color: #283e59;
  background-color: #f4b71e;
  border-color: #f4b312;
}
.btn-warning.focus,
.btn-warning:focus {
  color: #283e59;
  background-color: #f4b71e;
  border-color: #f4b312;
  box-shadow: 0 0 0 0.15rem rgba(215, 175, 70, 0.5);
}
.btn-warning.disabled,
.btn-warning:disabled {
  color: #283e59;
  background-color: #f6c343;
  border-color: #f6c343;
}
.btn-warning:not(:disabled):not(.disabled).active,
.btn-warning:not(:disabled):not(.disabled):active,
.show > .btn-warning.dropdown-toggle {
  color: #283e59;
  background-color: #f4b312;
  border-color: #eead0b;
}
.btn-warning:not(:disabled):not(.disabled).active:focus,
.btn-warning:not(:disabled):not(.disabled):active:focus,
.show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(215, 175, 70, 0.5);
}
.btn-danger {
  color: #fff;
  background-color: #e63757;
  border-color: #e63757;
}
.btn-danger:hover {
  color: #fff;
  background-color: #db1b3f;
  border-color: #d01a3b;
}
.btn-danger.focus,
.btn-danger:focus {
  color: #fff;
  background-color: #db1b3f;
  border-color: #d01a3b;
  box-shadow: 0 0 0 0.15rem rgba(234, 85, 112, 0.5);
}
.btn-danger.disabled,
.btn-danger:disabled {
  color: #fff;
  background-color: #e63757;
  border-color: #e63757;
}
.btn-danger:not(:disabled):not(.disabled).active,
.btn-danger:not(:disabled):not(.disabled):active,
.show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #d01a3b;
  border-color: #c51938;
}
.btn-danger:not(:disabled):not(.disabled).active:focus,
.btn-danger:not(:disabled):not(.disabled):active:focus,
.show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(234, 85, 112, 0.5);
}
.btn-light {
  color: #283e59;
  background-color: #edf2f9;
  border-color: #edf2f9;
}
.btn-light:hover {
  color: #283e59;
  background-color: #d0ddef;
  border-color: #c7d6ec;
}
.btn-light.focus,
.btn-light:focus {
  color: #283e59;
  background-color: #d0ddef;
  border-color: #c7d6ec;
  box-shadow: 0 0 0 0.15rem rgba(207, 215, 225, 0.5);
}
.btn-light.disabled,
.btn-light:disabled {
  color: #283e59;
  background-color: #edf2f9;
  border-color: #edf2f9;
}
.btn-light:not(:disabled):not(.disabled).active,
.btn-light:not(:disabled):not(.disabled):active,
.show > .btn-light.dropdown-toggle {
  color: #283e59;
  background-color: #c7d6ec;
  border-color: #bdcfe9;
}
.btn-light:not(:disabled):not(.disabled).active:focus,
.btn-light:not(:disabled):not(.disabled):active:focus,
.show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(207, 215, 225, 0.5);
}
.btn-dark {
  color: #fff;
  background-color: #12263f;
  border-color: #12263f;
}
.btn-dark:hover {
  color: #fff;
  background-color: #0a1421;
  border-color: #070e17;
}
.btn-dark.focus,
.btn-dark:focus {
  color: #fff;
  background-color: #0a1421;
  border-color: #070e17;
  box-shadow: 0 0 0 0.15rem rgba(54, 71, 92, 0.5);
}
.btn-dark.disabled,
.btn-dark:disabled {
  color: #fff;
  background-color: #12263f;
  border-color: #12263f;
}
.btn-dark:not(:disabled):not(.disabled).active,
.btn-dark:not(:disabled):not(.disabled):active,
.show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #070e17;
  border-color: #04080d;
}
.btn-dark:not(:disabled):not(.disabled).active:focus,
.btn-dark:not(:disabled):not(.disabled):active:focus,
.show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(54, 71, 92, 0.5);
}
.btn-white {
  color: #283e59;
  background-color: #fff;
  border-color: #fff;
}
.btn-white:hover {
  color: #283e59;
  background-color: #ececec;
  border-color: #e6e6e6;
}
.btn-white.focus,
.btn-white:focus {
  color: #283e59;
  background-color: #ececec;
  border-color: #e6e6e6;
  box-shadow: 0 0 0 0.15rem rgba(223, 226, 230, 0.5);
}
.btn-white.disabled,
.btn-white:disabled {
  color: #283e59;
  background-color: #fff;
  border-color: #fff;
}
.btn-white:not(:disabled):not(.disabled).active,
.btn-white:not(:disabled):not(.disabled):active,
.show > .btn-white.dropdown-toggle {
  color: #283e59;
  background-color: #e6e6e6;
  border-color: #dfdfdf;
}
.btn-white:not(:disabled):not(.disabled).active:focus,
.btn-white:not(:disabled):not(.disabled):active:focus,
.show > .btn-white.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(223, 226, 230, 0.5);
}
.btn-outline-primary {
  color: #2c7be5;
  border-color: #2c7be5;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.btn-outline-primary.focus,
.btn-outline-primary:focus {
  box-shadow: 0 0 0 0.15rem rgba(44, 123, 229, 0.5);
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #2c7be5;
  background-color: transparent;
}
.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(44, 123, 229, 0.5);
}
.btn-outline-secondary {
  color: #6e84a3;
  border-color: #6e84a3;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6e84a3;
  border-color: #6e84a3;
}
.btn-outline-secondary.focus,
.btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.15rem rgba(110, 132, 163, 0.5);
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #6e84a3;
  background-color: transparent;
}
.btn-outline-secondary:not(:disabled):not(.disabled).active,
.btn-outline-secondary:not(:disabled):not(.disabled):active,
.show > .btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #6e84a3;
  border-color: #6e84a3;
}
.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(110, 132, 163, 0.5);
}
.btn-outline-success {
  color: #00d97e;
  border-color: #00d97e;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #00d97e;
  border-color: #00d97e;
}
.btn-outline-success.focus,
.btn-outline-success:focus {
  box-shadow: 0 0 0 0.15rem rgba(0, 217, 126, 0.5);
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
  color: #00d97e;
  background-color: transparent;
}
.btn-outline-success:not(:disabled):not(.disabled).active,
.btn-outline-success:not(:disabled):not(.disabled):active,
.show > .btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #00d97e;
  border-color: #00d97e;
}
.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(0, 217, 126, 0.5);
}
.btn-outline-info {
  color: #39afd1;
  border-color: #39afd1;
}
.btn-outline-info:hover {
  color: #fff;
  background-color: #39afd1;
  border-color: #39afd1;
}
.btn-outline-info.focus,
.btn-outline-info:focus {
  box-shadow: 0 0 0 0.15rem rgba(57, 175, 209, 0.5);
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
  color: #39afd1;
  background-color: transparent;
}
.btn-outline-info:not(:disabled):not(.disabled).active,
.btn-outline-info:not(:disabled):not(.disabled):active,
.show > .btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #39afd1;
  border-color: #39afd1;
}
.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(57, 175, 209, 0.5);
}
.btn-outline-warning {
  color: #f6c343;
  border-color: #f6c343;
}
.btn-outline-warning:hover {
  color: #283e59;
  background-color: #f6c343;
  border-color: #f6c343;
}
.btn-outline-warning.focus,
.btn-outline-warning:focus {
  box-shadow: 0 0 0 0.15rem rgba(246, 195, 67, 0.5);
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
  color: #f6c343;
  background-color: transparent;
}
.btn-outline-warning:not(:disabled):not(.disabled).active,
.btn-outline-warning:not(:disabled):not(.disabled):active,
.show > .btn-outline-warning.dropdown-toggle {
  color: #283e59;
  background-color: #f6c343;
  border-color: #f6c343;
}
.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(246, 195, 67, 0.5);
}
.btn-outline-danger {
  color: #e63757;
  border-color: #e63757;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #e63757;
  border-color: #e63757;
}
.btn-outline-danger.focus,
.btn-outline-danger:focus {
  box-shadow: 0 0 0 0.15rem rgba(230, 55, 87, 0.5);
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
  color: #e63757;
  background-color: transparent;
}
.btn-outline-danger:not(:disabled):not(.disabled).active,
.btn-outline-danger:not(:disabled):not(.disabled):active,
.show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #e63757;
  border-color: #e63757;
}
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(230, 55, 87, 0.5);
}
.btn-outline-light {
  color: #edf2f9;
  border-color: #edf2f9;
}
.btn-outline-light:hover {
  color: #283e59;
  background-color: #edf2f9;
  border-color: #edf2f9;
}
.btn-outline-light.focus,
.btn-outline-light:focus {
  box-shadow: 0 0 0 0.15rem rgba(237, 242, 249, 0.5);
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
  color: #edf2f9;
  background-color: transparent;
}
.btn-outline-light:not(:disabled):not(.disabled).active,
.btn-outline-light:not(:disabled):not(.disabled):active,
.show > .btn-outline-light.dropdown-toggle {
  color: #283e59;
  background-color: #edf2f9;
  border-color: #edf2f9;
}
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(237, 242, 249, 0.5);
}
.btn-outline-dark {
  color: #12263f;
  border-color: #12263f;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #12263f;
  border-color: #12263f;
}
.btn-outline-dark.focus,
.btn-outline-dark:focus {
  box-shadow: 0 0 0 0.15rem rgba(18, 38, 63, 0.5);
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
  color: #12263f;
  background-color: transparent;
}
.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #12263f;
  border-color: #12263f;
}
.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(18, 38, 63, 0.5);
}
.btn-outline-white {
  color: #fff;
  border-color: #fff;
}
.btn-outline-white:hover {
  color: #283e59;
  background-color: #fff;
  border-color: #fff;
}
.btn-outline-white.focus,
.btn-outline-white:focus {
  box-shadow: 0 0 0 0.15rem rgba(255, 255, 255, 0.5);
}
.btn-outline-white.disabled,
.btn-outline-white:disabled {
  color: #fff;
  background-color: transparent;
}
.btn-outline-white:not(:disabled):not(.disabled).active,
.btn-outline-white:not(:disabled):not(.disabled):active,
.show > .btn-outline-white.dropdown-toggle {
  color: #283e59;
  background-color: #fff;
  border-color: #fff;
}
.btn-outline-white:not(:disabled):not(.disabled).active:focus,
.btn-outline-white:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-white.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(255, 255, 255, 0.5);
}
.btn-link {
  font-weight: 400;
  color: #2c7be5;
  text-decoration: none;
}
.btn-link:hover {
  color: #1657af;
  text-decoration: none;
}
.btn-link.focus,
.btn-link:focus {
  text-decoration: none;
}
.btn-link.disabled,
.btn-link:disabled {
  color: #b1c2d9;
  pointer-events: none;
}
.btn-group-lg > .btn,
.btn-lg {
  padding: 0.75rem 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  border-radius: 0.5rem;
}
.btn-group-sm > .btn,
.btn-sm {
  padding: 0.125rem 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  border-radius: 0.25rem;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 0.5rem;
}
input[type="button"].btn-block,
input[type="reset"].btn-block,
input[type="submit"].btn-block {
  width: 100%;
}
.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}
.collapse:not(.show) {
  display: none;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.dropdown,
.dropleft,
.dropright,
.dropup {
  position: relative;
}
.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.2125em;
  vertical-align: 0.2125em;
  content: "";
  border-top: 0.25em solid;
  border-right: 0.25em solid transparent;
  border-bottom: 0;
  border-left: 0.25em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0 0 0;
  font-size: 0.9375rem;
  color: #12263f;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(18, 38, 63, 0.1);
  border-radius: 0.375rem;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
@media (min-width: 576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.2125em;
  vertical-align: 0.2125em;
  content: "";
  border-top: 0;
  border-right: 0.25em solid transparent;
  border-bottom: 0.25em solid;
  border-left: 0.25em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0;
}
.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.2125em;
  vertical-align: 0.2125em;
  content: "";
  border-top: 0.25em solid transparent;
  border-right: 0;
  border-bottom: 0.25em solid transparent;
  border-left: 0.25em solid;
}
.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropright .dropdown-toggle::after {
  vertical-align: 0;
}
.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0;
}
.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.2125em;
  vertical-align: 0.2125em;
  content: "";
}
.dropleft .dropdown-toggle::after {
  display: none;
}
.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.2125em;
  vertical-align: 0.2125em;
  content: "";
  border-top: 0.25em solid transparent;
  border-right: 0.25em solid;
  border-bottom: 0.25em solid transparent;
}
.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="top"] {
  right: auto;
  bottom: auto;
}
.dropdown-divider {
  height: 0;
  margin: 0.75rem 0;
  overflow: hidden;
  border-top: 1px solid #edf2f9;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.375rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #6e84a3;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: #12263f;
  text-decoration: none;
  background-color: transparent;
}
.dropdown-item.active,
.dropdown-item:active {
  color: #12263f;
  text-decoration: none;
  background-color: transparent;
}
.dropdown-item.disabled,
.dropdown-item:disabled {
  color: #95aac9;
  pointer-events: none;
  background-color: transparent;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.8125rem;
  color: inherit;
  white-space: nowrap;
}
.dropdown-item-text {
  display: block;
  padding: 0.375rem 1.5rem;
  color: #6e84a3;
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group-vertical > .btn,
.btn-group > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group-vertical > .btn:hover,
.btn-group > .btn:hover {
  z-index: 1;
}
.btn-group-vertical > .btn.active,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn:focus,
.btn-group > .btn.active,
.btn-group > .btn:active,
.btn-group > .btn:focus {
  z-index: 1;
}
.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}
.btn-group > .btn-group:not(:first-child),
.btn-group > .btn:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn-group:not(:last-child) > .btn,
.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:not(:first-child) > .btn,
.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}
.btn-group-sm > .btn + .dropdown-toggle-split,
.btn-sm + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}
.btn-group-lg > .btn + .dropdown-toggle-split,
.btn-lg + .dropdown-toggle-split {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
}
.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn-group:not(:first-child),
.btn-group-vertical > .btn:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn-group:not(:last-child) > .btn,
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:not(:first-child) > .btn,
.btn-group-vertical > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0;
}
.btn-group-toggle > .btn input[type="checkbox"],
.btn-group-toggle > .btn input[type="radio"],
.btn-group-toggle > .btn-group > .btn input[type="checkbox"],
.btn-group-toggle > .btn-group > .btn input[type="radio"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .custom-file,
.input-group > .custom-select,
.input-group > .form-control,
.input-group > .form-control-plaintext {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
}
.input-group > .custom-file + .custom-file,
.input-group > .custom-file + .custom-select,
.input-group > .custom-file + .form-control,
.input-group > .custom-select + .custom-file,
.input-group > .custom-select + .custom-select,
.input-group > .custom-select + .form-control,
.input-group > .form-control + .custom-file,
.input-group > .form-control + .custom-select,
.input-group > .form-control + .form-control,
.input-group > .form-control-plaintext + .custom-file,
.input-group > .form-control-plaintext + .custom-select,
.input-group > .form-control-plaintext + .form-control {
  margin-left: -1px;
}
.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label,
.input-group > .custom-select:focus,
.input-group > .form-control:focus {
  z-index: 3;
}
.input-group > .custom-file .custom-file-input:focus {
  z-index: 4;
}
.input-group > .custom-select:not(:last-child),
.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .custom-select:not(:first-child),
.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .custom-file {
  display: flex;
  align-items: center;
}
.input-group > .custom-file:not(:last-child) .custom-file-label,
.input-group > .custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group-append,
.input-group-prepend {
  display: flex;
}
.input-group-append .btn,
.input-group-prepend .btn {
  position: relative;
  z-index: 2;
}
.input-group-append .btn:focus,
.input-group-prepend .btn:focus {
  z-index: 3;
}
.input-group-append .btn + .btn,
.input-group-append .btn + .input-group-text,
.input-group-append .input-group-text + .btn,
.input-group-append .input-group-text + .input-group-text,
.input-group-prepend .btn + .btn,
.input-group-prepend .btn + .input-group-text,
.input-group-prepend .input-group-text + .btn,
.input-group-prepend .input-group-text + .input-group-text {
  margin-left: -1px;
}
.input-group-prepend {
  margin-right: -1px;
}
.input-group-append {
  margin-left: -1px;
}
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #95aac9;
  text-align: center;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #d2ddec;
  border-radius: 0.375rem;
}
.input-group-text input[type="checkbox"],
.input-group-text input[type="radio"] {
  margin-top: 0;
}
.input-group-lg > .custom-select,
.input-group-lg > .form-control:not(textarea) {
  height: calc(1.5em + 1.5rem + 2px);
}
.input-group-lg > .custom-select,
.input-group-lg > .form-control,
.input-group-lg > .input-group-append > .btn,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-prepend > .input-group-text {
  padding: 0.75rem 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  border-radius: 0.5rem;
}
.input-group-sm > .custom-select,
.input-group-sm > .form-control:not(textarea) {
  height: calc(1.75em + 0.25rem + 2px);
}
.input-group-sm > .custom-select,
.input-group-sm > .form-control,
.input-group-sm > .input-group-append > .btn,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-prepend > .input-group-text {
  padding: 0.125rem 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  border-radius: 0.25rem;
}
.input-group-lg > .custom-select,
.input-group-sm > .custom-select {
  padding-right: 2rem;
}
.input-group
  > .input-group-append:last-child
  > .btn:not(:last-child):not(.dropdown-toggle),
.input-group
  > .input-group-append:last-child
  > .input-group-text:not(:last-child),
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group
  > .input-group-prepend:first-child
  > .input-group-text:not(:first-child),
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.40625rem;
  padding-left: 1.5rem;
}
.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}
.custom-control-input {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.20313rem;
  opacity: 0;
}
.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #2c7be5;
  background-color: #2c7be5;
}
.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: transparent;
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #2c7be5;
}
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  color: #fff;
  background-color: #cbdef9;
  border-color: #cbdef9;
}
.custom-control-input:disabled ~ .custom-control-label,
.custom-control-input[disabled] ~ .custom-control-label {
  color: #95aac9;
}
.custom-control-input:disabled ~ .custom-control-label::before,
.custom-control-input[disabled] ~ .custom-control-label::before {
  background-color: #fff;
}
.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
  cursor: pointer;
}
.custom-control-label::before {
  position: absolute;
  top: 0.20313rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #e3ebf6;
  border: #b1c2d9 solid 0;
}
.custom-control-label::after {
  position: absolute;
  top: 0.20313rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: no-repeat 50%/50% 50%;
}
.custom-checkbox .custom-control-label::before {
  border-radius: 0.375rem;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23FFFFFF' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}
.custom-checkbox
  .custom-control-input:indeterminate
  ~ .custom-control-label::before {
  border-color: #2c7be5;
  background-color: #2c7be5;
}
.custom-checkbox
  .custom-control-input:indeterminate
  ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23FFFFFF' d='M0 2h4'/%3e%3c/svg%3e");
}
.custom-checkbox
  .custom-control-input:disabled:checked
  ~ .custom-control-label::before {
  background-color: rgba(44, 123, 229, 0.5);
}
.custom-checkbox
  .custom-control-input:disabled:indeterminate
  ~ .custom-control-label::before {
  background-color: rgba(44, 123, 229, 0.5);
}
.custom-radio .custom-control-label::before {
  border-radius: 50%;
}
.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23FFFFFF'/%3e%3c/svg%3e");
}
.custom-radio
  .custom-control-input:disabled:checked
  ~ .custom-control-label::before {
  background-color: rgba(44, 123, 229, 0.5);
}
.custom-switch {
  padding-left: 3.5rem;
}
.custom-switch .custom-control-label::before {
  left: -3.5rem;
  width: 3rem;
  pointer-events: all;
  border-radius: 0.5625rem;
}
.custom-switch .custom-control-label::after {
  top: 0.20313rem;
  left: -3.5rem;
  width: 1.125rem;
  height: 1.125rem;
  background-color: #b1c2d9;
  border-radius: 0.5625rem;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .custom-switch .custom-control-label::after {
    transition: none;
  }
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #e3ebf6;
  transform: translateX(2rem);
}
.custom-switch
  .custom-control-input:disabled:checked
  ~ .custom-control-label::before {
  background-color: rgba(44, 123, 229, 0.5);
}
.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #12263f;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml,%3csvg viewBox='0 0 9 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1L4.25 4.25L7.5 1' stroke='%2395AAC9' stroke-width='1.08333' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")
    no-repeat right 0.75rem center/.75em 0.75em;
  border: 1px solid #d2ddec;
  border-radius: 0.375rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-select:focus {
  border-color: #2c7be5;
  outline: 0;
  box-shadow: transparent;
}
.custom-select:focus::-ms-value {
  color: #12263f;
  background-color: #fff;
}
.custom-select[multiple],
.custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.75rem;
  background-image: none;
}
.custom-select:disabled {
  color: #95aac9;
  background-color: #edf2f9;
}
.custom-select::-ms-expand {
  display: none;
}
.custom-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #12263f;
}
.custom-select-sm {
  height: calc(1.75em + 0.25rem + 2px);
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  font-size: 0.8125rem;
}
.custom-select-lg {
  height: calc(1.5em + 1.5rem + 2px);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  font-size: 0.9375rem;
}
.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 1rem + 2px);
  margin-bottom: 0;
}
.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 1rem + 2px);
  margin: 0;
  opacity: 0;
}
.custom-file-input:focus ~ .custom-file-label {
  border-color: #2c7be5;
  box-shadow: transparent;
}
.custom-file-input:disabled ~ .custom-file-label,
.custom-file-input[disabled] ~ .custom-file-label {
  background-color: #fff;
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Browse";
}
.custom-file-input ~ .custom-file-label[data-browse]::after {
  content: attr(data-browse);
}
.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #12263f;
  background-color: #fff;
  border: 1px solid #d2ddec;
  border-radius: 0.375rem;
}
.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 1rem);
  padding: 0.5rem 0.75rem;
  line-height: 1.5;
  color: #12263f;
  content: "Browse";
  background-color: #fff;
  border-left: inherit;
  border-radius: 0 0.375rem 0.375rem 0;
}
.custom-range {
  width: 100%;
  height: 1.3rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-range:focus {
  outline: 0;
}
.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #f9fbfd, transparent;
}
.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #f9fbfd, transparent;
}
.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #f9fbfd, transparent;
}
.custom-range::-moz-focus-outer {
  border: 0;
}
.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #2c7be5;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .custom-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.custom-range::-webkit-slider-thumb:active {
  background-color: #cbdef9;
}
.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e3ebf6;
  border-color: transparent;
  border-radius: 1rem;
}
.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #2c7be5;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.custom-range::-moz-range-thumb:active {
  background-color: #cbdef9;
}
.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e3ebf6;
  border-color: transparent;
  border-radius: 1rem;
}
.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0.15rem;
  margin-left: 0.15rem;
  background-color: #2c7be5;
  border: 0;
  border-radius: 1rem;
  -ms-transition: background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
    -ms-transition: none;
    transition: none;
  }
}
.custom-range::-ms-thumb:active {
  background-color: #cbdef9;
}
.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
}
.custom-range::-ms-fill-lower {
  background-color: #e3ebf6;
  border-radius: 1rem;
}
.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #e3ebf6;
  border-radius: 1rem;
}
.custom-range:disabled::-webkit-slider-thumb {
  background-color: #b1c2d9;
}
.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}
.custom-range:disabled::-moz-range-thumb {
  background-color: #b1c2d9;
}
.custom-range:disabled::-moz-range-track {
  cursor: default;
}
.custom-range:disabled::-ms-thumb {
  background-color: #b1c2d9;
}
.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .custom-control-label::before,
  .custom-file-label,
  .custom-select {
    transition: none;
  }
}
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.nav-link:focus,
.nav-link:hover {
  text-decoration: none;
}
.nav-link.disabled {
  color: #95aac9;
  pointer-events: none;
  cursor: default;
}
.nav-tabs {
  border-bottom: 1px solid #e3ebf6;
}
.nav-tabs .nav-item {
  margin-bottom: -1px;
}
.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  border-color: transparent transparent transparent;
}
.nav-tabs .nav-link.disabled {
  color: #95aac9;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #12263f;
  background-color: transparent;
  border-color: transparent transparent #2c7be5;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.nav-pills .nav-link {
  border-radius: 0.375rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #2c7be5;
}
.nav-fill .nav-item,
.nav-fill > .nav-link {
  flex: 1 1 auto;
  text-align: center;
}
.nav-justified .nav-item,
.nav-justified > .nav-link {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
}
.navbar .container,
.navbar .container-fluid,
.navbar .container-lg,
.navbar .container-md,
.navbar .container-sm,
.navbar .container-xl {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 1rem;
  font-size: 1.0625rem;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand:focus,
.navbar-brand:hover {
  text-decoration: none;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}
.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.navbar-toggler {
  padding: 0.25rem 0;
  font-size: 1.0625rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}
.navbar-toggler:focus,
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}
@media (max-width: 575.98px) {
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid,
  .navbar-expand-sm > .container-lg,
  .navbar-expand-sm > .container-md,
  .navbar-expand-sm > .container-sm,
  .navbar-expand-sm > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid,
  .navbar-expand-sm > .container-lg,
  .navbar-expand-sm > .container-md,
  .navbar-expand-sm > .container-sm,
  .navbar-expand-sm > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (max-width: 767.98px) {
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid,
  .navbar-expand-md > .container-lg,
  .navbar-expand-md > .container-md,
  .navbar-expand-md > .container-sm,
  .navbar-expand-md > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid,
  .navbar-expand-md > .container-lg,
  .navbar-expand-md > .container-md,
  .navbar-expand-md > .container-sm,
  .navbar-expand-md > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (max-width: 991.98px) {
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid,
  .navbar-expand-lg > .container-lg,
  .navbar-expand-lg > .container-md,
  .navbar-expand-lg > .container-sm,
  .navbar-expand-lg > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid,
  .navbar-expand-lg > .container-lg,
  .navbar-expand-lg > .container-md,
  .navbar-expand-lg > .container-sm,
  .navbar-expand-lg > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (max-width: 1199.98px) {
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid,
  .navbar-expand-xl > .container-lg,
  .navbar-expand-xl > .container-md,
  .navbar-expand-xl > .container-sm,
  .navbar-expand-xl > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid,
  .navbar-expand-xl > .container-lg,
  .navbar-expand-xl > .container-md,
  .navbar-expand-xl > .container-sm,
  .navbar-expand-xl > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.navbar-expand > .container,
.navbar-expand > .container-fluid,
.navbar-expand > .container-lg,
.navbar-expand > .container-md,
.navbar-expand > .container-sm,
.navbar-expand > .container-xl {
  padding-right: 0;
  padding-left: 0;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand > .container,
.navbar-expand > .container-fluid,
.navbar-expand > .container-lg,
.navbar-expand > .container-md,
.navbar-expand > .container-sm,
.navbar-expand > .container-xl {
  flex-wrap: nowrap;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-light .navbar-brand {
  color: #12263f;
}
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
  color: #12263f;
}
.navbar-light .navbar-nav .nav-link {
  color: #6e84a3;
}
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #12263f;
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(18, 38, 63, 0.3);
}
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link {
  color: #12263f;
}
.navbar-light .navbar-toggler {
  color: #6e84a3;
  border-color: transparent;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='%236E84A3' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: #6e84a3;
}
.navbar-light .navbar-text a {
  color: #12263f;
}
.navbar-light .navbar-text a:focus,
.navbar-light .navbar-text a:hover {
  color: #12263f;
}
.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:focus,
.navbar-dark .navbar-brand:hover {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: #6e84a3;
}
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .show > .nav-link {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: #6e84a3;
  border-color: transparent;
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='%236E84A3' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: #6e84a3;
}
.navbar-dark .navbar-text a {
  color: #fff;
}
.navbar-dark .navbar-text a:focus,
.navbar-dark .navbar-text a:hover {
  color: #fff;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #edf2f9;
  border-radius: 0.5rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.5rem - 1px);
  border-bottom-left-radius: calc(0.5rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.5rem;
}
.card-title {
  margin-bottom: 1rem;
}
.card-subtitle {
  margin-top: -0.5rem;
  margin-bottom: 0;
}
.card-text:last-child {
  margin-bottom: 0;
}
.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1.5rem;
}
.card-header {
  padding: 1rem 1.5rem;
  margin-bottom: 0;
  background-color: transparent;
  border-bottom: 1px solid #edf2f9;
}
.card-header:first-child {
  border-radius: calc(0.5rem - 1px) calc(0.5rem - 1px) 0 0;
}
.card-footer {
  padding: 1rem 1.5rem;
  background-color: transparent;
  border-top: 1px solid #edf2f9;
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.5rem - 1px) calc(0.5rem - 1px);
}
.card-header-tabs {
  margin-right: -0.75rem;
  margin-bottom: -1rem;
  margin-left: -0.75rem;
  border-bottom: 0;
}
.card-header-pills {
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}
.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: calc(0.5rem - 1px);
}
.card-img,
.card-img-bottom,
.card-img-top {
  flex-shrink: 0;
  width: 100%;
}
.card-img,
.card-img-top {
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
}
.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.5rem - 1px);
  border-bottom-left-radius: calc(0.5rem - 1px);
}
.card-deck .card {
  margin-bottom: 12px;
}
@media (min-width: 576px) {
  .card-deck {
    display: flex;
    flex-flow: row wrap;
    margin-right: -12px;
    margin-left: -12px;
  }
  .card-deck .card {
    flex: 1 0 0%;
    margin-right: 12px;
    margin-bottom: 0;
    margin-left: 12px;
  }
}
.card-group > .card {
  margin-bottom: 12px;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-header,
  .card-group > .card:not(:last-child) .card-img-top {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-footer,
  .card-group > .card:not(:last-child) .card-img-bottom {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-header,
  .card-group > .card:not(:first-child) .card-img-top {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-footer,
  .card-group > .card:not(:first-child) .card-img-bottom {
    border-bottom-left-radius: 0;
  }
}
.card-columns .card {
  margin-bottom: 1rem;
}
@media (min-width: 576px) {
  .card-columns {
    -moz-column-count: 3;
    column-count: 3;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}
.accordion {
  overflow-anchor: none;
}
.accordion > .card {
  overflow: hidden;
}
.accordion > .card:not(:last-of-type) {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.accordion > .card:not(:first-of-type) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.accordion > .card > .card-header {
  border-radius: 0;
  margin-bottom: -1px;
}
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 0;
  margin-bottom: 0;
  list-style: none;
  background-color: transparent;
  border-radius: 0.375rem;
}
.breadcrumb-item {
  display: flex;
}
.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #d2ddec;
  content: "";
}
.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}
.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}
.breadcrumb-item.active {
  color: #95aac9;
}
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.375rem;
}
.page,
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #12263f;
  background-color: #fff;
  border: 1px solid #e3ebf6;
}
.page-link:hover,
.page:hover {
  z-index: 2;
  color: #12263f;
  text-decoration: none;
  background-color: #f9fbfd;
  border-color: #e3ebf6;
}
.page-link:focus,
.page:focus {
  z-index: 3;
  outline: 0;
  box-shadow: none;
}
.page-item:first-child .page,
.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.page-item:last-child .page,
.page-item:last-child .page-link {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
.page-item.active .page,
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.page-item.disabled .page,
.page-item.disabled .page-link {
  color: #95aac9;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #e3ebf6;
}
.pagination-lg .page,
.pagination-lg .page-link {
  padding: 0.75rem 1.25rem;
  font-size: 1.0625rem;
  line-height: 1.5;
}
.pagination-lg .page-item:first-child .page,
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.pagination-lg .page-item:last-child .page,
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.pagination-sm .page,
.pagination-sm .page-link {
  padding: 0.125rem 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.75;
}
.pagination-sm .page-item:first-child .page,
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.pagination-sm .page-item:last-child .page,
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.badge {
  display: inline-block;
  padding: 0.33em 0.5em;
  font-size: 76%;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}
a.badge:focus,
a.badge:hover {
  text-decoration: none;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}
.badge-primary {
  color: #fff;
  background-color: #2c7be5;
}
a.badge-primary:focus,
a.badge-primary:hover {
  color: #fff;
  background-color: #1862c6;
}
a.badge-primary.focus,
a.badge-primary:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(44, 123, 229, 0.5);
}
.badge-secondary {
  color: #fff;
  background-color: #6e84a3;
}
a.badge-secondary:focus,
a.badge-secondary:hover {
  color: #fff;
  background-color: #566b88;
}
a.badge-secondary.focus,
a.badge-secondary:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(110, 132, 163, 0.5);
}
.badge-success {
  color: #fff;
  background-color: #00d97e;
}
a.badge-success:focus,
a.badge-success:hover {
  color: #fff;
  background-color: #00a660;
}
a.badge-success.focus,
a.badge-success:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(0, 217, 126, 0.5);
}
.badge-info {
  color: #fff;
  background-color: #39afd1;
}
a.badge-info:focus,
a.badge-info:hover {
  color: #fff;
  background-color: #2991ae;
}
a.badge-info.focus,
a.badge-info:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(57, 175, 209, 0.5);
}
.badge-warning {
  color: #283e59;
  background-color: #f6c343;
}
a.badge-warning:focus,
a.badge-warning:hover {
  color: #283e59;
  background-color: #f4b312;
}
a.badge-warning.focus,
a.badge-warning:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(246, 195, 67, 0.5);
}
.badge-danger {
  color: #fff;
  background-color: #e63757;
}
a.badge-danger:focus,
a.badge-danger:hover {
  color: #fff;
  background-color: #d01a3b;
}
a.badge-danger.focus,
a.badge-danger:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(230, 55, 87, 0.5);
}
.badge-light {
  color: #283e59;
  background-color: #edf2f9;
}
a.badge-light:focus,
a.badge-light:hover {
  color: #283e59;
  background-color: #c7d6ec;
}
a.badge-light.focus,
a.badge-light:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(237, 242, 249, 0.5);
}
.badge-dark {
  color: #fff;
  background-color: #12263f;
}
a.badge-dark:focus,
a.badge-dark:hover {
  color: #fff;
  background-color: #070e17;
}
a.badge-dark.focus,
a.badge-dark:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(18, 38, 63, 0.5);
}
.badge-white {
  color: #283e59;
  background-color: #fff;
}
a.badge-white:focus,
a.badge-white:hover {
  color: #283e59;
  background-color: #e6e6e6;
}
a.badge-white.focus,
a.badge-white:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(255, 255, 255, 0.5);
}
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #edf2f9;
  border-radius: 0.5rem;
}
@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}
.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1.5rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}
.alert-heading {
  color: inherit;
}
.alert-link {
  font-weight: 400;
}
.alert-dismissible {
  padding-right: 3.90625rem;
}
.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  color: inherit;
}
.alert-primary {
  color: #205295;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.alert-primary hr {
  border-top-color: #1b6edc;
}
.alert-primary .alert-link {
  color: #173b6b;
}
.alert-secondary {
  color: #425773;
  background-color: #6e84a3;
  border-color: #6e84a3;
}
.alert-secondary hr {
  border-top-color: #607797;
}
.alert-secondary .alert-link {
  color: #2f3e53;
}
.alert-success {
  color: #098360;
  background-color: #00d97e;
  border-color: #00d97e;
}
.alert-success hr {
  border-top-color: #00c06f;
}
.alert-success .alert-link {
  color: #06533d;
}
.alert-info {
  color: #266d8b;
  background-color: #39afd1;
  border-color: #39afd1;
}
.alert-info hr {
  border-top-color: #2da2c3;
}
.alert-info .alert-link {
  color: #1b4e63;
}
.alert-warning {
  color: #897841;
  background-color: #f6c343;
  border-color: #f6c343;
}
.alert-warning hr {
  border-top-color: #f5bb2b;
}
.alert-warning .alert-link {
  color: #665a31;
}
.alert-danger {
  color: #802f4b;
  background-color: #e63757;
  border-color: #e63757;
}
.alert-danger hr {
  border-top-color: #e32044;
}
.alert-danger .alert-link {
  color: #5b2135;
}
.alert-light {
  color: #8490a0;
  background-color: #edf2f9;
  border-color: #edf2f9;
}
.alert-light hr {
  border-top-color: #dae4f3;
}
.alert-light .alert-link {
  color: #697688;
}
.alert-dark {
  color: #12263f;
  background-color: #12263f;
  border-color: #12263f;
}
.alert-dark hr {
  border-top-color: #0c1a2b;
}
.alert-dark .alert-link {
  color: #070e17;
}
.alert-white {
  color: #8d97a3;
  background-color: #fff;
  border-color: #fff;
}
.alert-white hr {
  border-top-color: #f2f2f2;
}
.alert-white .alert-link {
  color: #717d8c;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: 0.70313rem;
  background-color: #edf2f9;
  border-radius: 200px;
}
.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #2c7be5;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}
.progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}
.progress-bar-animated {
  -webkit-animation: progress-bar-stripes 1s linear infinite;
  animation: progress-bar-stripes 1s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}
.media {
  display: flex;
  align-items: flex-start;
}
.media-body {
  flex: 1;
}
.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.375rem;
}
.list-group-item-action {
  width: 100%;
  color: #12263f;
  text-align: inherit;
}
.list-group-item-action:focus,
.list-group-item-action:hover {
  z-index: 1;
  color: #12263f;
  text-decoration: none;
  background-color: #f9fbfd;
}
.list-group-item-action:active {
  color: #12263f;
  background-color: #edf2f9;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 1rem 1.25rem;
  background-color: transparent;
  border: 1px solid #edf2f9;
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled,
.list-group-item:disabled {
  color: #95aac9;
  pointer-events: none;
  background-color: transparent;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}
.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.375rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}
@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.375rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}
.list-group-item-primary {
  color: #205295;
  background-color: #c4daf8;
}
.list-group-item-primary.list-group-item-action:focus,
.list-group-item-primary.list-group-item-action:hover {
  color: #205295;
  background-color: #adccf5;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #205295;
  border-color: #205295;
}
.list-group-item-secondary {
  color: #425773;
  background-color: #d6dde5;
}
.list-group-item-secondary.list-group-item-action:focus,
.list-group-item-secondary.list-group-item-action:hover {
  color: #425773;
  background-color: #c6d0db;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #425773;
  border-color: #425773;
}
.list-group-item-success {
  color: #098360;
  background-color: #b8f4db;
}
.list-group-item-success.list-group-item-action:focus,
.list-group-item-success.list-group-item-action:hover {
  color: #098360;
  background-color: #a2f1d0;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #098360;
  border-color: #098360;
}
.list-group-item-info {
  color: #266d8b;
  background-color: #c8e9f2;
}
.list-group-item-info.list-group-item-action:focus,
.list-group-item-info.list-group-item-action:hover {
  color: #266d8b;
  background-color: #b3e1ed;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #266d8b;
  border-color: #266d8b;
}
.list-group-item-warning {
  color: #897841;
  background-color: #fceeca;
}
.list-group-item-warning.list-group-item-action:focus,
.list-group-item-warning.list-group-item-action:hover {
  color: #897841;
  background-color: #fbe6b2;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #897841;
  border-color: #897841;
}
.list-group-item-danger {
  color: #802f4b;
  background-color: #f8c7d0;
}
.list-group-item-danger.list-group-item-action:focus,
.list-group-item-danger.list-group-item-action:hover {
  color: #802f4b;
  background-color: #f5b0bd;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #802f4b;
  border-color: #802f4b;
}
.list-group-item-light {
  color: #8490a0;
  background-color: #fafbfd;
}
.list-group-item-light.list-group-item-action:focus,
.list-group-item-light.list-group-item-action:hover {
  color: #8490a0;
  background-color: #e8ecf6;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #8490a0;
  border-color: #8490a0;
}
.list-group-item-dark {
  color: #12263f;
  background-color: #bdc2c9;
}
.list-group-item-dark.list-group-item-action:focus,
.list-group-item-dark.list-group-item-action:hover {
  color: #12263f;
  background-color: #afb5be;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #12263f;
  border-color: #12263f;
}
.list-group-item-white {
  color: #8d97a3;
  background-color: #fff;
}
.list-group-item-white.list-group-item-action:focus,
.list-group-item-white.list-group-item-action:hover {
  color: #8d97a3;
  background-color: #f2f2f2;
}
.list-group-item-white.list-group-item-action.active {
  color: #fff;
  background-color: #8d97a3;
  border-color: #8d97a3;
}
.close {
  float: right;
  font-size: 1.40625rem;
  font-weight: 600;
  line-height: 1;
  color: #95aac9;
  text-shadow: none;
  opacity: 0.5;
}
.close:hover {
  color: #95aac9;
  text-decoration: none;
}
.close:not(:disabled):not(.disabled):focus,
.close:not(:disabled):not(.disabled):hover {
  opacity: 0.75;
}
button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}
a.close.disabled {
  pointer-events: none;
}
.toast {
  flex-basis: 300px;
  max-width: 300px;
  font-size: 0.9375rem;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e3ebf6;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.1);
  opacity: 0;
  border-radius: 0.375rem;
}
.toast:not(:last-child) {
  margin-bottom: 1rem;
}
.toast.showing {
  opacity: 1;
}
.toast.show {
  display: block;
  opacity: 1;
}
.toast.hide {
  display: none;
}
.toast-header {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #12263f;
  background-color: #fff;
  background-clip: padding-box;
  border-bottom: 1px solid #e3ebf6;
  border-top-left-radius: calc(0.375rem - 1px);
  border-top-right-radius: calc(0.375rem - 1px);
}
.toast-body {
  padding: 1rem;
}
.modal-open {
  overflow: hidden;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}
.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}
.modal-dialog-scrollable .modal-footer,
.modal-dialog-scrollable .modal-header {
  flex-shrink: 0;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}
.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}
.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}
.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}
.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #12263f;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e3ebf6;
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
}
.modal-header .close {
  padding: 1rem 1.5rem;
  margin: -1rem -1rem -1rem auto;
}
.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1.5rem;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem;
  border-top: 1px solid #e3ebf6;
  border-bottom-right-radius: calc(0.5rem - 1px);
  border-bottom-left-radius: calc(0.5rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 600px;
    margin: 1.75rem auto;
  }
  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }
  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }
  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }
  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: "Cerebri Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.8125rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 1;
}
.tooltip .arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}
.bs-tooltip-auto[x-placement^="top"],
.bs-tooltip-top {
  padding: 0.4rem 0;
}
.bs-tooltip-auto[x-placement^="top"] .arrow,
.bs-tooltip-top .arrow {
  bottom: 0;
}
.bs-tooltip-auto[x-placement^="top"] .arrow::before,
.bs-tooltip-top .arrow::before {
  top: 0;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #e3ebf6;
}
.bs-tooltip-auto[x-placement^="right"],
.bs-tooltip-right {
  padding: 0 0.4rem;
}
.bs-tooltip-auto[x-placement^="right"] .arrow,
.bs-tooltip-right .arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-auto[x-placement^="right"] .arrow::before,
.bs-tooltip-right .arrow::before {
  right: 0;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #e3ebf6;
}
.bs-tooltip-auto[x-placement^="bottom"],
.bs-tooltip-bottom {
  padding: 0.4rem 0;
}
.bs-tooltip-auto[x-placement^="bottom"] .arrow,
.bs-tooltip-bottom .arrow {
  top: 0;
}
.bs-tooltip-auto[x-placement^="bottom"] .arrow::before,
.bs-tooltip-bottom .arrow::before {
  bottom: 0;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #e3ebf6;
}
.bs-tooltip-auto[x-placement^="left"],
.bs-tooltip-left {
  padding: 0 0.4rem;
}
.bs-tooltip-auto[x-placement^="left"] .arrow,
.bs-tooltip-left .arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-auto[x-placement^="left"] .arrow::before,
.bs-tooltip-left .arrow::before {
  left: 0;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #e3ebf6;
}
.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #12263f;
  text-align: center;
  background-color: #e3ebf6;
  border-radius: 0.375rem;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 10rem;
  font-family: "Cerebri Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.8125rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(18, 38, 63, 0.2);
  border-radius: 0.5rem;
}
.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.5rem;
}
.popover .arrow::after,
.popover .arrow::before {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}
.bs-popover-auto[x-placement^="top"],
.bs-popover-top {
  margin-bottom: 0.5rem;
}
.bs-popover-auto[x-placement^="top"] > .arrow,
.bs-popover-top > .arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-auto[x-placement^="top"] > .arrow::before,
.bs-popover-top > .arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(18, 38, 63, 0.25);
}
.bs-popover-auto[x-placement^="top"] > .arrow::after,
.bs-popover-top > .arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}
.bs-popover-auto[x-placement^="right"],
.bs-popover-right {
  margin-left: 0.5rem;
}
.bs-popover-auto[x-placement^="right"] > .arrow,
.bs-popover-right > .arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.5rem 0;
}
.bs-popover-auto[x-placement^="right"] > .arrow::before,
.bs-popover-right > .arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(18, 38, 63, 0.25);
}
.bs-popover-auto[x-placement^="right"] > .arrow::after,
.bs-popover-right > .arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}
.bs-popover-auto[x-placement^="bottom"],
.bs-popover-bottom {
  margin-top: 0.5rem;
}
.bs-popover-auto[x-placement^="bottom"] > .arrow,
.bs-popover-bottom > .arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-auto[x-placement^="bottom"] > .arrow::before,
.bs-popover-bottom > .arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(18, 38, 63, 0.25);
}
.bs-popover-auto[x-placement^="bottom"] > .arrow::after,
.bs-popover-bottom > .arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-auto[x-placement^="bottom"] .popover-header::before,
.bs-popover-bottom .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #fff;
}
.bs-popover-auto[x-placement^="left"],
.bs-popover-left {
  margin-right: 0.5rem;
}
.bs-popover-auto[x-placement^="left"] > .arrow,
.bs-popover-left > .arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.5rem 0;
}
.bs-popover-auto[x-placement^="left"] > .arrow::before,
.bs-popover-left > .arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(18, 38, 63, 0.25);
}
.bs-popover-auto[x-placement^="left"] > .arrow::after,
.bs-popover-left > .arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}
.popover-header {
  padding: 0 0;
  margin-bottom: 0;
  font-size: 0.9375rem;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
}
.popover-header:empty {
  display: none;
}
.popover-body {
  padding: 0 0;
  color: #95aac9;
}
.carousel {
  position: relative;
}
.carousel.pointer-event {
  touch-action: pan-y;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}
.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}
.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
  display: block;
}
.active.carousel-item-right,
.carousel-item-next:not(.carousel-item-left) {
  transform: translateX(100%);
}
.active.carousel-item-left,
.carousel-item-prev:not(.carousel-item-right) {
  transform: translateX(-100%);
}
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right,
.carousel-fade .carousel-item.active {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-right {
    transition: none;
  }
}
.carousel-control-next,
.carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-next,
  .carousel-control-prev {
    transition: none;
  }
}
.carousel-control-next:focus,
.carousel-control-next:hover,
.carousel-control-prev:focus,
.carousel-control-prev:hover {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}
.carousel-control-prev {
  left: 0;
}
.carousel-control-next {
  right: 0;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50%/100% 100%;
}
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFFFFF' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFFFFF' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
}
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}
@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: spinner-grow 0.75s linear infinite;
  animation: spinner-grow 0.75s linear infinite;
}
.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}
.align-baseline {
  vertical-align: baseline !important;
}
.align-top {
  vertical-align: top !important;
}
.align-middle {
  vertical-align: middle !important;
}
.align-bottom {
  vertical-align: bottom !important;
}
.align-text-bottom {
  vertical-align: text-bottom !important;
}
.align-text-top {
  vertical-align: text-top !important;
}
.bg-primary {
  background-color: #2c7be5 !important;
}
a.bg-primary:focus,
a.bg-primary:hover,
button.bg-primary:focus,
button.bg-primary:hover {
  background-color: #1862c6 !important;
}
.bg-secondary {
  background-color: #6e84a3 !important;
}
a.bg-secondary:focus,
a.bg-secondary:hover,
button.bg-secondary:focus,
button.bg-secondary:hover {
  background-color: #566b88 !important;
}
.bg-success {
  background-color: #00d97e !important;
}
a.bg-success:focus,
a.bg-success:hover,
button.bg-success:focus,
button.bg-success:hover {
  background-color: #00a660 !important;
}
.bg-info {
  background-color: #39afd1 !important;
}
a.bg-info:focus,
a.bg-info:hover,
button.bg-info:focus,
button.bg-info:hover {
  background-color: #2991ae !important;
}
.bg-warning {
  background-color: #f6c343 !important;
}
a.bg-warning:focus,
a.bg-warning:hover,
button.bg-warning:focus,
button.bg-warning:hover {
  background-color: #f4b312 !important;
}
.bg-danger {
  background-color: #e63757 !important;
}
a.bg-danger:focus,
a.bg-danger:hover,
button.bg-danger:focus,
button.bg-danger:hover {
  background-color: #d01a3b !important;
}
.bg-light {
  background-color: #edf2f9 !important;
}
a.bg-light:focus,
a.bg-light:hover,
button.bg-light:focus,
button.bg-light:hover {
  background-color: #c7d6ec !important;
}
.bg-dark {
  background-color: #12263f !important;
}
a.bg-dark:focus,
a.bg-dark:hover,
button.bg-dark:focus,
button.bg-dark:hover {
  background-color: #070e17 !important;
}
.bg-white {
  background-color: #fff !important;
}
a.bg-white:focus,
a.bg-white:hover,
button.bg-white:focus,
button.bg-white:hover {
  background-color: #e6e6e6 !important;
}
.bg-white {
  background-color: #fff !important;
}
.bg-transparent {
  background-color: transparent !important;
}
.border {
  border: 1px solid #e3ebf6 !important;
}
.border-top {
  border-top: 1px solid #e3ebf6 !important;
}
.border-right {
  border-right: 1px solid #e3ebf6 !important;
}
.border-bottom {
  border-bottom: 1px solid #e3ebf6 !important;
}
.border-left {
  border-left: 1px solid #e3ebf6 !important;
}
.border-0 {
  border: 0 !important;
}
.border-top-0 {
  border-top: 0 !important;
}
.border-right-0 {
  border-right: 0 !important;
}
.border-bottom-0 {
  border-bottom: 0 !important;
}
.border-left-0 {
  border-left: 0 !important;
}
.border-primary {
  border-color: #2c7be5 !important;
}
.border-secondary {
  border-color: #6e84a3 !important;
}
.border-success {
  border-color: #00d97e !important;
}
.border-info {
  border-color: #39afd1 !important;
}
.border-warning {
  border-color: #f6c343 !important;
}
.border-danger {
  border-color: #e63757 !important;
}
.border-light {
  border-color: #edf2f9 !important;
}
.border-dark {
  border-color: #12263f !important;
}
.border-white {
  border-color: #fff !important;
}
.border-white {
  border-color: #fff !important;
}
.rounded-sm {
  border-radius: 0.25rem !important;
}
.rounded {
  border-radius: 0.375rem !important;
}
.rounded-top {
  border-top-left-radius: 0.375rem !important;
  border-top-right-radius: 0.375rem !important;
}
.rounded-right {
  border-top-right-radius: 0.375rem !important;
  border-bottom-right-radius: 0.375rem !important;
}
.rounded-bottom {
  border-bottom-right-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
}
.rounded-left {
  border-top-left-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
}
.rounded-lg {
  border-radius: 0.5rem !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
.rounded-pill {
  border-radius: 50rem !important;
}
.rounded-0 {
  border-radius: 0 !important;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.d-none {
  display: none !important;
}
.d-inline {
  display: inline !important;
}
.d-inline-block {
  display: inline-block !important;
}
.d-block {
  display: block !important;
}
.d-table {
  display: table !important;
}
.d-table-row {
  display: table-row !important;
}
.d-table-cell {
  display: table-cell !important;
}
.d-flex {
  display: flex !important;
}
.d-inline-flex {
  display: inline-flex !important;
}
@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}
@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
}
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
.embed-responsive::before {
  display: block;
  content: "";
}
.embed-responsive .embed-responsive-item,
.embed-responsive embed,
.embed-responsive iframe,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.embed-responsive-21by9::before {
  padding-top: 42.85714%;
}
.embed-responsive-16by9::before {
  padding-top: 56.25%;
}
.embed-responsive-4by3::before {
  padding-top: 75%;
}
.embed-responsive-1by1::before {
  padding-top: 100%;
}
.flex-row {
  flex-direction: row !important;
}
.flex-column {
  flex-direction: column !important;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-column-reverse {
  flex-direction: column-reverse !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.flex-fill {
  flex: 1 1 auto !important;
}
.flex-grow-0 {
  flex-grow: 0 !important;
}
.flex-grow-1 {
  flex-grow: 1 !important;
}
.flex-shrink-0 {
  flex-shrink: 0 !important;
}
.flex-shrink-1 {
  flex-shrink: 1 !important;
}
.justify-content-start {
  justify-content: flex-start !important;
}
.justify-content-end {
  justify-content: flex-end !important;
}
.justify-content-center {
  justify-content: center !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.justify-content-around {
  justify-content: space-around !important;
}
.align-items-start {
  align-items: flex-start !important;
}
.align-items-end {
  align-items: flex-end !important;
}
.align-items-center {
  align-items: center !important;
}
.align-items-baseline {
  align-items: baseline !important;
}
.align-items-stretch {
  align-items: stretch !important;
}
.align-content-start {
  align-content: flex-start !important;
}
.align-content-end {
  align-content: flex-end !important;
}
.align-content-center {
  align-content: center !important;
}
.align-content-between {
  align-content: space-between !important;
}
.align-content-around {
  align-content: space-around !important;
}
.align-content-stretch {
  align-content: stretch !important;
}
.align-self-auto {
  align-self: auto !important;
}
.align-self-start {
  align-self: flex-start !important;
}
.align-self-end {
  align-self: flex-end !important;
}
.align-self-center {
  align-self: center !important;
}
.align-self-baseline {
  align-self: baseline !important;
}
.align-self-stretch {
  align-self: stretch !important;
}
@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}
@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}
.float-left {
  float: left !important;
}
.float-right {
  float: right !important;
}
.float-none {
  float: none !important;
}
@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
}
@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
}
@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
}
.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  -ms-user-select: all !important;
  user-select: all !important;
}
.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  -ms-user-select: auto !important;
  user-select: auto !important;
}
.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
.overflow-auto {
  overflow: auto !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.position-static {
  position: static !important;
}
.position-relative {
  position: relative !important;
}
.position-absolute {
  position: absolute !important;
}
.position-fixed {
  position: fixed !important;
}
.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(18, 38, 63, 0.075) !important;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(18, 38, 63, 0.15) !important;
}
.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(18, 38, 63, 0.175) !important;
}
.shadow-none {
  box-shadow: none !important;
}
.w-25 {
  width: 25% !important;
}
.w-50 {
  width: 50% !important;
}
.w-75 {
  width: 75% !important;
}
.w-100 {
  width: 100% !important;
}
.w-auto {
  width: auto !important;
}
.w-15 {
  width: 15% !important;
}
.h-25 {
  height: 25% !important;
}
.h-50 {
  height: 50% !important;
}
.h-75 {
  height: 75% !important;
}
.h-100 {
  height: 100% !important;
}
.h-auto {
  height: auto !important;
}
.h-15 {
  height: 15% !important;
}
.mw-100 {
  max-width: 100% !important;
}
.mh-100 {
  max-height: 100% !important;
}
.min-vw-100 {
  min-width: 100vw !important;
}
.min-vh-100 {
  min-height: 100vh !important;
}
.vw-100 {
  width: 100vw !important;
}
.vh-100 {
  height: 100vh !important;
}
.m-0 {
  margin: 0 !important;
}
.mt-0,
.my-0 {
  margin-top: 0 !important;
}
.mr-0,
.mx-0 {
  margin-right: 0 !important;
}
.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}
.ml-0,
.mx-0 {
  margin-left: 0 !important;
}
.m-1 {
  margin: 0.1875rem !important;
}
.mt-1,
.my-1 {
  margin-top: 0.1875rem !important;
}
.mr-1,
.mx-1 {
  margin-right: 0.1875rem !important;
}
.mb-1,
.my-1 {
  margin-bottom: 0.1875rem !important;
}
.ml-1,
.mx-1 {
  margin-left: 0.1875rem !important;
}
.m-2 {
  margin: 0.375rem !important;
}
.mt-2,
.my-2 {
  margin-top: 0.375rem !important;
}
.mr-2,
.mx-2 {
  margin-right: 0.375rem !important;
}
.mb-2,
.my-2 {
  margin-bottom: 0.375rem !important;
}
.ml-2,
.mx-2 {
  margin-left: 0.375rem !important;
}
.m-3 {
  margin: 0.75rem !important;
}
.mt-3,
.my-3 {
  margin-top: 0.75rem !important;
}
.mr-3,
.mx-3 {
  margin-right: 0.75rem !important;
}
.mb-3,
.my-3 {
  margin-bottom: 0.75rem !important;
}
.ml-3,
.mx-3 {
  margin-left: 0.75rem !important;
}
.m-4 {
  margin: 1.5rem !important;
}
.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}
.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}
.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}
.m-5 {
  margin: 2.25rem !important;
}
.mt-5,
.my-5 {
  margin-top: 2.25rem !important;
}
.mr-5,
.mx-5 {
  margin-right: 2.25rem !important;
}
.mb-5,
.my-5 {
  margin-bottom: 2.25rem !important;
}
.ml-5,
.mx-5 {
  margin-left: 2.25rem !important;
}
.m-6 {
  margin: 4.5rem !important;
}
.mt-6,
.my-6 {
  margin-top: 4.5rem !important;
}
.mr-6,
.mx-6 {
  margin-right: 4.5rem !important;
}
.mb-6,
.my-6 {
  margin-bottom: 4.5rem !important;
}
.ml-6,
.mx-6 {
  margin-left: 4.5rem !important;
}
.m-7 {
  margin: 6.75rem !important;
}
.mt-7,
.my-7 {
  margin-top: 6.75rem !important;
}
.mr-7,
.mx-7 {
  margin-right: 6.75rem !important;
}
.mb-7,
.my-7 {
  margin-bottom: 6.75rem !important;
}
.ml-7,
.mx-7 {
  margin-left: 6.75rem !important;
}
.m-8 {
  margin: 13.5rem !important;
}
.mt-8,
.my-8 {
  margin-top: 13.5rem !important;
}
.mr-8,
.mx-8 {
  margin-right: 13.5rem !important;
}
.mb-8,
.my-8 {
  margin-bottom: 13.5rem !important;
}
.ml-8,
.mx-8 {
  margin-left: 13.5rem !important;
}
.p-0 {
  padding: 0 !important;
}
.pt-0,
.py-0 {
  padding-top: 0 !important;
}
.pr-0,
.px-0 {
  padding-right: 0 !important;
}
.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}
.pl-0,
.px-0 {
  padding-left: 0 !important;
}
.p-1 {
  padding: 0.1875rem !important;
}
.pt-1,
.py-1 {
  padding-top: 0.1875rem !important;
}
.pr-1,
.px-1 {
  padding-right: 0.1875rem !important;
}
.pb-1,
.py-1 {
  padding-bottom: 0.1875rem !important;
}
.pl-1,
.px-1 {
  padding-left: 0.1875rem !important;
}
.p-2 {
  padding: 0.375rem !important;
}
.pt-2,
.py-2 {
  padding-top: 0.375rem !important;
}
.pr-2,
.px-2 {
  padding-right: 0.375rem !important;
}
.pb-2,
.py-2 {
  padding-bottom: 0.375rem !important;
}
.pl-2,
.px-2 {
  padding-left: 0.375rem !important;
}
.p-3 {
  padding: 0.75rem !important;
}
.pt-3,
.py-3 {
  padding-top: 0.75rem !important;
}
.pr-3,
.px-3 {
  padding-right: 0.75rem !important;
}
.pb-3,
.py-3 {
  padding-bottom: 0.75rem !important;
}
.pl-3,
.px-3 {
  padding-left: 0.75rem !important;
}
.p-4 {
  padding: 1.5rem !important;
}
.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}
.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}
.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}
.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}
.p-5 {
  padding: 2.25rem !important;
}
.pt-5,
.py-5 {
  padding-top: 2.25rem !important;
}
.pr-5,
.px-5 {
  padding-right: 2.25rem !important;
}
.pb-5,
.py-5 {
  padding-bottom: 2.25rem !important;
}
.pl-5,
.px-5 {
  padding-left: 2.25rem !important;
}
.p-6 {
  padding: 4.5rem !important;
}
.pt-6,
.py-6 {
  padding-top: 4.5rem !important;
}
.pr-6,
.px-6 {
  padding-right: 4.5rem !important;
}
.pb-6,
.py-6 {
  padding-bottom: 4.5rem !important;
}
.pl-6,
.px-6 {
  padding-left: 4.5rem !important;
}
.p-7 {
  padding: 6.75rem !important;
}
.pt-7,
.py-7 {
  padding-top: 6.75rem !important;
}
.pr-7,
.px-7 {
  padding-right: 6.75rem !important;
}
.pb-7,
.py-7 {
  padding-bottom: 6.75rem !important;
}
.pl-7,
.px-7 {
  padding-left: 6.75rem !important;
}
.p-8 {
  padding: 13.5rem !important;
}
.pt-8,
.py-8 {
  padding-top: 13.5rem !important;
}
.pr-8,
.px-8 {
  padding-right: 13.5rem !important;
}
.pb-8,
.py-8 {
  padding-bottom: 13.5rem !important;
}
.pl-8,
.px-8 {
  padding-left: 13.5rem !important;
}
.m-n1 {
  margin: -0.1875rem !important;
}
.mt-n1,
.my-n1 {
  margin-top: -0.1875rem !important;
}
.mr-n1,
.mx-n1 {
  margin-right: -0.1875rem !important;
}
.mb-n1,
.my-n1 {
  margin-bottom: -0.1875rem !important;
}
.ml-n1,
.mx-n1 {
  margin-left: -0.1875rem !important;
}
.m-n2 {
  margin: -0.375rem !important;
}
.mt-n2,
.my-n2 {
  margin-top: -0.375rem !important;
}
.mr-n2,
.mx-n2 {
  margin-right: -0.375rem !important;
}
.mb-n2,
.my-n2 {
  margin-bottom: -0.375rem !important;
}
.ml-n2,
.mx-n2 {
  margin-left: -0.375rem !important;
}
.m-n3 {
  margin: -0.75rem !important;
}
.mt-n3,
.my-n3 {
  margin-top: -0.75rem !important;
}
.mr-n3,
.mx-n3 {
  margin-right: -0.75rem !important;
}
.mb-n3,
.my-n3 {
  margin-bottom: -0.75rem !important;
}
.ml-n3,
.mx-n3 {
  margin-left: -0.75rem !important;
}
.m-n4 {
  margin: -1.5rem !important;
}
.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}
.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}
.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}
.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}
.m-n5 {
  margin: -2.25rem !important;
}
.mt-n5,
.my-n5 {
  margin-top: -2.25rem !important;
}
.mr-n5,
.mx-n5 {
  margin-right: -2.25rem !important;
}
.mb-n5,
.my-n5 {
  margin-bottom: -2.25rem !important;
}
.ml-n5,
.mx-n5 {
  margin-left: -2.25rem !important;
}
.m-n6 {
  margin: -4.5rem !important;
}
.mt-n6,
.my-n6 {
  margin-top: -4.5rem !important;
}
.mr-n6,
.mx-n6 {
  margin-right: -4.5rem !important;
}
.mb-n6,
.my-n6 {
  margin-bottom: -4.5rem !important;
}
.ml-n6,
.mx-n6 {
  margin-left: -4.5rem !important;
}
.m-n7 {
  margin: -6.75rem !important;
}
.mt-n7,
.my-n7 {
  margin-top: -6.75rem !important;
}
.mr-n7,
.mx-n7 {
  margin-right: -6.75rem !important;
}
.mb-n7,
.my-n7 {
  margin-bottom: -6.75rem !important;
}
.ml-n7,
.mx-n7 {
  margin-left: -6.75rem !important;
}
.m-n8 {
  margin: -13.5rem !important;
}
.mt-n8,
.my-n8 {
  margin-top: -13.5rem !important;
}
.mr-n8,
.mx-n8 {
  margin-right: -13.5rem !important;
}
.mb-n8,
.my-n8 {
  margin-bottom: -13.5rem !important;
}
.ml-n8,
.mx-n8 {
  margin-left: -13.5rem !important;
}
.m-auto {
  margin: auto !important;
}
.mt-auto,
.my-auto {
  margin-top: auto !important;
}
.mr-auto,
.mx-auto {
  margin-right: auto !important;
}
.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}
.ml-auto,
.mx-auto {
  margin-left: auto !important;
}
@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.1875rem !important;
  }
  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.1875rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.1875rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.1875rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.1875rem !important;
  }
  .m-sm-2 {
    margin: 0.375rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.375rem !important;
  }
  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.375rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.375rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.375rem !important;
  }
  .m-sm-3 {
    margin: 0.75rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 0.75rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 0.75rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 0.75rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 2.25rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 2.25rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 2.25rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 2.25rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 2.25rem !important;
  }
  .m-sm-6 {
    margin: 4.5rem !important;
  }
  .mt-sm-6,
  .my-sm-6 {
    margin-top: 4.5rem !important;
  }
  .mr-sm-6,
  .mx-sm-6 {
    margin-right: 4.5rem !important;
  }
  .mb-sm-6,
  .my-sm-6 {
    margin-bottom: 4.5rem !important;
  }
  .ml-sm-6,
  .mx-sm-6 {
    margin-left: 4.5rem !important;
  }
  .m-sm-7 {
    margin: 6.75rem !important;
  }
  .mt-sm-7,
  .my-sm-7 {
    margin-top: 6.75rem !important;
  }
  .mr-sm-7,
  .mx-sm-7 {
    margin-right: 6.75rem !important;
  }
  .mb-sm-7,
  .my-sm-7 {
    margin-bottom: 6.75rem !important;
  }
  .ml-sm-7,
  .mx-sm-7 {
    margin-left: 6.75rem !important;
  }
  .m-sm-8 {
    margin: 13.5rem !important;
  }
  .mt-sm-8,
  .my-sm-8 {
    margin-top: 13.5rem !important;
  }
  .mr-sm-8,
  .mx-sm-8 {
    margin-right: 13.5rem !important;
  }
  .mb-sm-8,
  .my-sm-8 {
    margin-bottom: 13.5rem !important;
  }
  .ml-sm-8,
  .mx-sm-8 {
    margin-left: 13.5rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important;
  }
  .p-sm-1 {
    padding: 0.1875rem !important;
  }
  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.1875rem !important;
  }
  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.1875rem !important;
  }
  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.1875rem !important;
  }
  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.1875rem !important;
  }
  .p-sm-2 {
    padding: 0.375rem !important;
  }
  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.375rem !important;
  }
  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.375rem !important;
  }
  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.375rem !important;
  }
  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.375rem !important;
  }
  .p-sm-3 {
    padding: 0.75rem !important;
  }
  .pt-sm-3,
  .py-sm-3 {
    padding-top: 0.75rem !important;
  }
  .pr-sm-3,
  .px-sm-3 {
    padding-right: 0.75rem !important;
  }
  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-sm-3,
  .px-sm-3 {
    padding-left: 0.75rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 2.25rem !important;
  }
  .pt-sm-5,
  .py-sm-5 {
    padding-top: 2.25rem !important;
  }
  .pr-sm-5,
  .px-sm-5 {
    padding-right: 2.25rem !important;
  }
  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 2.25rem !important;
  }
  .pl-sm-5,
  .px-sm-5 {
    padding-left: 2.25rem !important;
  }
  .p-sm-6 {
    padding: 4.5rem !important;
  }
  .pt-sm-6,
  .py-sm-6 {
    padding-top: 4.5rem !important;
  }
  .pr-sm-6,
  .px-sm-6 {
    padding-right: 4.5rem !important;
  }
  .pb-sm-6,
  .py-sm-6 {
    padding-bottom: 4.5rem !important;
  }
  .pl-sm-6,
  .px-sm-6 {
    padding-left: 4.5rem !important;
  }
  .p-sm-7 {
    padding: 6.75rem !important;
  }
  .pt-sm-7,
  .py-sm-7 {
    padding-top: 6.75rem !important;
  }
  .pr-sm-7,
  .px-sm-7 {
    padding-right: 6.75rem !important;
  }
  .pb-sm-7,
  .py-sm-7 {
    padding-bottom: 6.75rem !important;
  }
  .pl-sm-7,
  .px-sm-7 {
    padding-left: 6.75rem !important;
  }
  .p-sm-8 {
    padding: 13.5rem !important;
  }
  .pt-sm-8,
  .py-sm-8 {
    padding-top: 13.5rem !important;
  }
  .pr-sm-8,
  .px-sm-8 {
    padding-right: 13.5rem !important;
  }
  .pb-sm-8,
  .py-sm-8 {
    padding-bottom: 13.5rem !important;
  }
  .pl-sm-8,
  .px-sm-8 {
    padding-left: 13.5rem !important;
  }
  .m-sm-n1 {
    margin: -0.1875rem !important;
  }
  .mt-sm-n1,
  .my-sm-n1 {
    margin-top: -0.1875rem !important;
  }
  .mr-sm-n1,
  .mx-sm-n1 {
    margin-right: -0.1875rem !important;
  }
  .mb-sm-n1,
  .my-sm-n1 {
    margin-bottom: -0.1875rem !important;
  }
  .ml-sm-n1,
  .mx-sm-n1 {
    margin-left: -0.1875rem !important;
  }
  .m-sm-n2 {
    margin: -0.375rem !important;
  }
  .mt-sm-n2,
  .my-sm-n2 {
    margin-top: -0.375rem !important;
  }
  .mr-sm-n2,
  .mx-sm-n2 {
    margin-right: -0.375rem !important;
  }
  .mb-sm-n2,
  .my-sm-n2 {
    margin-bottom: -0.375rem !important;
  }
  .ml-sm-n2,
  .mx-sm-n2 {
    margin-left: -0.375rem !important;
  }
  .m-sm-n3 {
    margin: -0.75rem !important;
  }
  .mt-sm-n3,
  .my-sm-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-sm-n3,
  .mx-sm-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-sm-n3,
  .my-sm-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-sm-n3,
  .mx-sm-n3 {
    margin-left: -0.75rem !important;
  }
  .m-sm-n4 {
    margin: -1.5rem !important;
  }
  .mt-sm-n4,
  .my-sm-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-sm-n4,
  .mx-sm-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-sm-n4,
  .my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-sm-n4,
  .mx-sm-n4 {
    margin-left: -1.5rem !important;
  }
  .m-sm-n5 {
    margin: -2.25rem !important;
  }
  .mt-sm-n5,
  .my-sm-n5 {
    margin-top: -2.25rem !important;
  }
  .mr-sm-n5,
  .mx-sm-n5 {
    margin-right: -2.25rem !important;
  }
  .mb-sm-n5,
  .my-sm-n5 {
    margin-bottom: -2.25rem !important;
  }
  .ml-sm-n5,
  .mx-sm-n5 {
    margin-left: -2.25rem !important;
  }
  .m-sm-n6 {
    margin: -4.5rem !important;
  }
  .mt-sm-n6,
  .my-sm-n6 {
    margin-top: -4.5rem !important;
  }
  .mr-sm-n6,
  .mx-sm-n6 {
    margin-right: -4.5rem !important;
  }
  .mb-sm-n6,
  .my-sm-n6 {
    margin-bottom: -4.5rem !important;
  }
  .ml-sm-n6,
  .mx-sm-n6 {
    margin-left: -4.5rem !important;
  }
  .m-sm-n7 {
    margin: -6.75rem !important;
  }
  .mt-sm-n7,
  .my-sm-n7 {
    margin-top: -6.75rem !important;
  }
  .mr-sm-n7,
  .mx-sm-n7 {
    margin-right: -6.75rem !important;
  }
  .mb-sm-n7,
  .my-sm-n7 {
    margin-bottom: -6.75rem !important;
  }
  .ml-sm-n7,
  .mx-sm-n7 {
    margin-left: -6.75rem !important;
  }
  .m-sm-n8 {
    margin: -13.5rem !important;
  }
  .mt-sm-n8,
  .my-sm-n8 {
    margin-top: -13.5rem !important;
  }
  .mr-sm-n8,
  .mx-sm-n8 {
    margin-right: -13.5rem !important;
  }
  .mb-sm-n8,
  .my-sm-n8 {
    margin-bottom: -13.5rem !important;
  }
  .ml-sm-n8,
  .mx-sm-n8 {
    margin-left: -13.5rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.1875rem !important;
  }
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.1875rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.1875rem !important;
  }
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.1875rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.1875rem !important;
  }
  .m-md-2 {
    margin: 0.375rem !important;
  }
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.375rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.375rem !important;
  }
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.375rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.375rem !important;
  }
  .m-md-3 {
    margin: 0.75rem !important;
  }
  .mt-md-3,
  .my-md-3 {
    margin-top: 0.75rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
    margin-right: 0.75rem !important;
  }
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
    margin-left: 0.75rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }
  .m-md-5 {
    margin: 2.25rem !important;
  }
  .mt-md-5,
  .my-md-5 {
    margin-top: 2.25rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
    margin-right: 2.25rem !important;
  }
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 2.25rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
    margin-left: 2.25rem !important;
  }
  .m-md-6 {
    margin: 4.5rem !important;
  }
  .mt-md-6,
  .my-md-6 {
    margin-top: 4.5rem !important;
  }
  .mr-md-6,
  .mx-md-6 {
    margin-right: 4.5rem !important;
  }
  .mb-md-6,
  .my-md-6 {
    margin-bottom: 4.5rem !important;
  }
  .ml-md-6,
  .mx-md-6 {
    margin-left: 4.5rem !important;
  }
  .m-md-7 {
    margin: 6.75rem !important;
  }
  .mt-md-7,
  .my-md-7 {
    margin-top: 6.75rem !important;
  }
  .mr-md-7,
  .mx-md-7 {
    margin-right: 6.75rem !important;
  }
  .mb-md-7,
  .my-md-7 {
    margin-bottom: 6.75rem !important;
  }
  .ml-md-7,
  .mx-md-7 {
    margin-left: 6.75rem !important;
  }
  .m-md-8 {
    margin: 13.5rem !important;
  }
  .mt-md-8,
  .my-md-8 {
    margin-top: 13.5rem !important;
  }
  .mr-md-8,
  .mx-md-8 {
    margin-right: 13.5rem !important;
  }
  .mb-md-8,
  .my-md-8 {
    margin-bottom: 13.5rem !important;
  }
  .ml-md-8,
  .mx-md-8 {
    margin-left: 13.5rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important;
  }
  .p-md-1 {
    padding: 0.1875rem !important;
  }
  .pt-md-1,
  .py-md-1 {
    padding-top: 0.1875rem !important;
  }
  .pr-md-1,
  .px-md-1 {
    padding-right: 0.1875rem !important;
  }
  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.1875rem !important;
  }
  .pl-md-1,
  .px-md-1 {
    padding-left: 0.1875rem !important;
  }
  .p-md-2 {
    padding: 0.375rem !important;
  }
  .pt-md-2,
  .py-md-2 {
    padding-top: 0.375rem !important;
  }
  .pr-md-2,
  .px-md-2 {
    padding-right: 0.375rem !important;
  }
  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.375rem !important;
  }
  .pl-md-2,
  .px-md-2 {
    padding-left: 0.375rem !important;
  }
  .p-md-3 {
    padding: 0.75rem !important;
  }
  .pt-md-3,
  .py-md-3 {
    padding-top: 0.75rem !important;
  }
  .pr-md-3,
  .px-md-3 {
    padding-right: 0.75rem !important;
  }
  .pb-md-3,
  .py-md-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-md-3,
  .px-md-3 {
    padding-left: 0.75rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important;
  }
  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important;
  }
  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important;
  }
  .p-md-5 {
    padding: 2.25rem !important;
  }
  .pt-md-5,
  .py-md-5 {
    padding-top: 2.25rem !important;
  }
  .pr-md-5,
  .px-md-5 {
    padding-right: 2.25rem !important;
  }
  .pb-md-5,
  .py-md-5 {
    padding-bottom: 2.25rem !important;
  }
  .pl-md-5,
  .px-md-5 {
    padding-left: 2.25rem !important;
  }
  .p-md-6 {
    padding: 4.5rem !important;
  }
  .pt-md-6,
  .py-md-6 {
    padding-top: 4.5rem !important;
  }
  .pr-md-6,
  .px-md-6 {
    padding-right: 4.5rem !important;
  }
  .pb-md-6,
  .py-md-6 {
    padding-bottom: 4.5rem !important;
  }
  .pl-md-6,
  .px-md-6 {
    padding-left: 4.5rem !important;
  }
  .p-md-7 {
    padding: 6.75rem !important;
  }
  .pt-md-7,
  .py-md-7 {
    padding-top: 6.75rem !important;
  }
  .pr-md-7,
  .px-md-7 {
    padding-right: 6.75rem !important;
  }
  .pb-md-7,
  .py-md-7 {
    padding-bottom: 6.75rem !important;
  }
  .pl-md-7,
  .px-md-7 {
    padding-left: 6.75rem !important;
  }
  .p-md-8 {
    padding: 13.5rem !important;
  }
  .pt-md-8,
  .py-md-8 {
    padding-top: 13.5rem !important;
  }
  .pr-md-8,
  .px-md-8 {
    padding-right: 13.5rem !important;
  }
  .pb-md-8,
  .py-md-8 {
    padding-bottom: 13.5rem !important;
  }
  .pl-md-8,
  .px-md-8 {
    padding-left: 13.5rem !important;
  }
  .m-md-n1 {
    margin: -0.1875rem !important;
  }
  .mt-md-n1,
  .my-md-n1 {
    margin-top: -0.1875rem !important;
  }
  .mr-md-n1,
  .mx-md-n1 {
    margin-right: -0.1875rem !important;
  }
  .mb-md-n1,
  .my-md-n1 {
    margin-bottom: -0.1875rem !important;
  }
  .ml-md-n1,
  .mx-md-n1 {
    margin-left: -0.1875rem !important;
  }
  .m-md-n2 {
    margin: -0.375rem !important;
  }
  .mt-md-n2,
  .my-md-n2 {
    margin-top: -0.375rem !important;
  }
  .mr-md-n2,
  .mx-md-n2 {
    margin-right: -0.375rem !important;
  }
  .mb-md-n2,
  .my-md-n2 {
    margin-bottom: -0.375rem !important;
  }
  .ml-md-n2,
  .mx-md-n2 {
    margin-left: -0.375rem !important;
  }
  .m-md-n3 {
    margin: -0.75rem !important;
  }
  .mt-md-n3,
  .my-md-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-md-n3,
  .mx-md-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-md-n3,
  .my-md-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-md-n3,
  .mx-md-n3 {
    margin-left: -0.75rem !important;
  }
  .m-md-n4 {
    margin: -1.5rem !important;
  }
  .mt-md-n4,
  .my-md-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-md-n4,
  .mx-md-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-md-n4,
  .my-md-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-md-n4,
  .mx-md-n4 {
    margin-left: -1.5rem !important;
  }
  .m-md-n5 {
    margin: -2.25rem !important;
  }
  .mt-md-n5,
  .my-md-n5 {
    margin-top: -2.25rem !important;
  }
  .mr-md-n5,
  .mx-md-n5 {
    margin-right: -2.25rem !important;
  }
  .mb-md-n5,
  .my-md-n5 {
    margin-bottom: -2.25rem !important;
  }
  .ml-md-n5,
  .mx-md-n5 {
    margin-left: -2.25rem !important;
  }
  .m-md-n6 {
    margin: -4.5rem !important;
  }
  .mt-md-n6,
  .my-md-n6 {
    margin-top: -4.5rem !important;
  }
  .mr-md-n6,
  .mx-md-n6 {
    margin-right: -4.5rem !important;
  }
  .mb-md-n6,
  .my-md-n6 {
    margin-bottom: -4.5rem !important;
  }
  .ml-md-n6,
  .mx-md-n6 {
    margin-left: -4.5rem !important;
  }
  .m-md-n7 {
    margin: -6.75rem !important;
  }
  .mt-md-n7,
  .my-md-n7 {
    margin-top: -6.75rem !important;
  }
  .mr-md-n7,
  .mx-md-n7 {
    margin-right: -6.75rem !important;
  }
  .mb-md-n7,
  .my-md-n7 {
    margin-bottom: -6.75rem !important;
  }
  .ml-md-n7,
  .mx-md-n7 {
    margin-left: -6.75rem !important;
  }
  .m-md-n8 {
    margin: -13.5rem !important;
  }
  .mt-md-n8,
  .my-md-n8 {
    margin-top: -13.5rem !important;
  }
  .mr-md-n8,
  .mx-md-n8 {
    margin-right: -13.5rem !important;
  }
  .mb-md-n8,
  .my-md-n8 {
    margin-bottom: -13.5rem !important;
  }
  .ml-md-n8,
  .mx-md-n8 {
    margin-left: -13.5rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.1875rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.1875rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.1875rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.1875rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.1875rem !important;
  }
  .m-lg-2 {
    margin: 0.375rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.375rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.375rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.375rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.375rem !important;
  }
  .m-lg-3 {
    margin: 0.75rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 0.75rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 0.75rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 0.75rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 2.25rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 2.25rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 2.25rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 2.25rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 2.25rem !important;
  }
  .m-lg-6 {
    margin: 4.5rem !important;
  }
  .mt-lg-6,
  .my-lg-6 {
    margin-top: 4.5rem !important;
  }
  .mr-lg-6,
  .mx-lg-6 {
    margin-right: 4.5rem !important;
  }
  .mb-lg-6,
  .my-lg-6 {
    margin-bottom: 4.5rem !important;
  }
  .ml-lg-6,
  .mx-lg-6 {
    margin-left: 4.5rem !important;
  }
  .m-lg-7 {
    margin: 6.75rem !important;
  }
  .mt-lg-7,
  .my-lg-7 {
    margin-top: 6.75rem !important;
  }
  .mr-lg-7,
  .mx-lg-7 {
    margin-right: 6.75rem !important;
  }
  .mb-lg-7,
  .my-lg-7 {
    margin-bottom: 6.75rem !important;
  }
  .ml-lg-7,
  .mx-lg-7 {
    margin-left: 6.75rem !important;
  }
  .m-lg-8 {
    margin: 13.5rem !important;
  }
  .mt-lg-8,
  .my-lg-8 {
    margin-top: 13.5rem !important;
  }
  .mr-lg-8,
  .mx-lg-8 {
    margin-right: 13.5rem !important;
  }
  .mb-lg-8,
  .my-lg-8 {
    margin-bottom: 13.5rem !important;
  }
  .ml-lg-8,
  .mx-lg-8 {
    margin-left: 13.5rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.1875rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.1875rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.1875rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.1875rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.1875rem !important;
  }
  .p-lg-2 {
    padding: 0.375rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.375rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.375rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.375rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.375rem !important;
  }
  .p-lg-3 {
    padding: 0.75rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 0.75rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 0.75rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 0.75rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 2.25rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 2.25rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 2.25rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 2.25rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 2.25rem !important;
  }
  .p-lg-6 {
    padding: 4.5rem !important;
  }
  .pt-lg-6,
  .py-lg-6 {
    padding-top: 4.5rem !important;
  }
  .pr-lg-6,
  .px-lg-6 {
    padding-right: 4.5rem !important;
  }
  .pb-lg-6,
  .py-lg-6 {
    padding-bottom: 4.5rem !important;
  }
  .pl-lg-6,
  .px-lg-6 {
    padding-left: 4.5rem !important;
  }
  .p-lg-7 {
    padding: 6.75rem !important;
  }
  .pt-lg-7,
  .py-lg-7 {
    padding-top: 6.75rem !important;
  }
  .pr-lg-7,
  .px-lg-7 {
    padding-right: 6.75rem !important;
  }
  .pb-lg-7,
  .py-lg-7 {
    padding-bottom: 6.75rem !important;
  }
  .pl-lg-7,
  .px-lg-7 {
    padding-left: 6.75rem !important;
  }
  .p-lg-8 {
    padding: 13.5rem !important;
  }
  .pt-lg-8,
  .py-lg-8 {
    padding-top: 13.5rem !important;
  }
  .pr-lg-8,
  .px-lg-8 {
    padding-right: 13.5rem !important;
  }
  .pb-lg-8,
  .py-lg-8 {
    padding-bottom: 13.5rem !important;
  }
  .pl-lg-8,
  .px-lg-8 {
    padding-left: 13.5rem !important;
  }
  .m-lg-n1 {
    margin: -0.1875rem !important;
  }
  .mt-lg-n1,
  .my-lg-n1 {
    margin-top: -0.1875rem !important;
  }
  .mr-lg-n1,
  .mx-lg-n1 {
    margin-right: -0.1875rem !important;
  }
  .mb-lg-n1,
  .my-lg-n1 {
    margin-bottom: -0.1875rem !important;
  }
  .ml-lg-n1,
  .mx-lg-n1 {
    margin-left: -0.1875rem !important;
  }
  .m-lg-n2 {
    margin: -0.375rem !important;
  }
  .mt-lg-n2,
  .my-lg-n2 {
    margin-top: -0.375rem !important;
  }
  .mr-lg-n2,
  .mx-lg-n2 {
    margin-right: -0.375rem !important;
  }
  .mb-lg-n2,
  .my-lg-n2 {
    margin-bottom: -0.375rem !important;
  }
  .ml-lg-n2,
  .mx-lg-n2 {
    margin-left: -0.375rem !important;
  }
  .m-lg-n3 {
    margin: -0.75rem !important;
  }
  .mt-lg-n3,
  .my-lg-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-lg-n3,
  .mx-lg-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-lg-n3,
  .my-lg-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-lg-n3,
  .mx-lg-n3 {
    margin-left: -0.75rem !important;
  }
  .m-lg-n4 {
    margin: -1.5rem !important;
  }
  .mt-lg-n4,
  .my-lg-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-lg-n4,
  .mx-lg-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-lg-n4,
  .my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1.5rem !important;
  }
  .m-lg-n5 {
    margin: -2.25rem !important;
  }
  .mt-lg-n5,
  .my-lg-n5 {
    margin-top: -2.25rem !important;
  }
  .mr-lg-n5,
  .mx-lg-n5 {
    margin-right: -2.25rem !important;
  }
  .mb-lg-n5,
  .my-lg-n5 {
    margin-bottom: -2.25rem !important;
  }
  .ml-lg-n5,
  .mx-lg-n5 {
    margin-left: -2.25rem !important;
  }
  .m-lg-n6 {
    margin: -4.5rem !important;
  }
  .mt-lg-n6,
  .my-lg-n6 {
    margin-top: -4.5rem !important;
  }
  .mr-lg-n6,
  .mx-lg-n6 {
    margin-right: -4.5rem !important;
  }
  .mb-lg-n6,
  .my-lg-n6 {
    margin-bottom: -4.5rem !important;
  }
  .ml-lg-n6,
  .mx-lg-n6 {
    margin-left: -4.5rem !important;
  }
  .m-lg-n7 {
    margin: -6.75rem !important;
  }
  .mt-lg-n7,
  .my-lg-n7 {
    margin-top: -6.75rem !important;
  }
  .mr-lg-n7,
  .mx-lg-n7 {
    margin-right: -6.75rem !important;
  }
  .mb-lg-n7,
  .my-lg-n7 {
    margin-bottom: -6.75rem !important;
  }
  .ml-lg-n7,
  .mx-lg-n7 {
    margin-left: -6.75rem !important;
  }
  .m-lg-n8 {
    margin: -13.5rem !important;
  }
  .mt-lg-n8,
  .my-lg-n8 {
    margin-top: -13.5rem !important;
  }
  .mr-lg-n8,
  .mx-lg-n8 {
    margin-right: -13.5rem !important;
  }
  .mb-lg-n8,
  .my-lg-n8 {
    margin-bottom: -13.5rem !important;
  }
  .ml-lg-n8,
  .mx-lg-n8 {
    margin-left: -13.5rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.1875rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.1875rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.1875rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.1875rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.1875rem !important;
  }
  .m-xl-2 {
    margin: 0.375rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.375rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.375rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.375rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.375rem !important;
  }
  .m-xl-3 {
    margin: 0.75rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 0.75rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 0.75rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 0.75rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 0.75rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 2.25rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 2.25rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 2.25rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 2.25rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 2.25rem !important;
  }
  .m-xl-6 {
    margin: 4.5rem !important;
  }
  .mt-xl-6,
  .my-xl-6 {
    margin-top: 4.5rem !important;
  }
  .mr-xl-6,
  .mx-xl-6 {
    margin-right: 4.5rem !important;
  }
  .mb-xl-6,
  .my-xl-6 {
    margin-bottom: 4.5rem !important;
  }
  .ml-xl-6,
  .mx-xl-6 {
    margin-left: 4.5rem !important;
  }
  .m-xl-7 {
    margin: 6.75rem !important;
  }
  .mt-xl-7,
  .my-xl-7 {
    margin-top: 6.75rem !important;
  }
  .mr-xl-7,
  .mx-xl-7 {
    margin-right: 6.75rem !important;
  }
  .mb-xl-7,
  .my-xl-7 {
    margin-bottom: 6.75rem !important;
  }
  .ml-xl-7,
  .mx-xl-7 {
    margin-left: 6.75rem !important;
  }
  .m-xl-8 {
    margin: 13.5rem !important;
  }
  .mt-xl-8,
  .my-xl-8 {
    margin-top: 13.5rem !important;
  }
  .mr-xl-8,
  .mx-xl-8 {
    margin-right: 13.5rem !important;
  }
  .mb-xl-8,
  .my-xl-8 {
    margin-bottom: 13.5rem !important;
  }
  .ml-xl-8,
  .mx-xl-8 {
    margin-left: 13.5rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.1875rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.1875rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.1875rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.1875rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.1875rem !important;
  }
  .p-xl-2 {
    padding: 0.375rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.375rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.375rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.375rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.375rem !important;
  }
  .p-xl-3 {
    padding: 0.75rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 0.75rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 0.75rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 0.75rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 0.75rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 2.25rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 2.25rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 2.25rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 2.25rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 2.25rem !important;
  }
  .p-xl-6 {
    padding: 4.5rem !important;
  }
  .pt-xl-6,
  .py-xl-6 {
    padding-top: 4.5rem !important;
  }
  .pr-xl-6,
  .px-xl-6 {
    padding-right: 4.5rem !important;
  }
  .pb-xl-6,
  .py-xl-6 {
    padding-bottom: 4.5rem !important;
  }
  .pl-xl-6,
  .px-xl-6 {
    padding-left: 4.5rem !important;
  }
  .p-xl-7 {
    padding: 6.75rem !important;
  }
  .pt-xl-7,
  .py-xl-7 {
    padding-top: 6.75rem !important;
  }
  .pr-xl-7,
  .px-xl-7 {
    padding-right: 6.75rem !important;
  }
  .pb-xl-7,
  .py-xl-7 {
    padding-bottom: 6.75rem !important;
  }
  .pl-xl-7,
  .px-xl-7 {
    padding-left: 6.75rem !important;
  }
  .p-xl-8 {
    padding: 13.5rem !important;
  }
  .pt-xl-8,
  .py-xl-8 {
    padding-top: 13.5rem !important;
  }
  .pr-xl-8,
  .px-xl-8 {
    padding-right: 13.5rem !important;
  }
  .pb-xl-8,
  .py-xl-8 {
    padding-bottom: 13.5rem !important;
  }
  .pl-xl-8,
  .px-xl-8 {
    padding-left: 13.5rem !important;
  }
  .m-xl-n1 {
    margin: -0.1875rem !important;
  }
  .mt-xl-n1,
  .my-xl-n1 {
    margin-top: -0.1875rem !important;
  }
  .mr-xl-n1,
  .mx-xl-n1 {
    margin-right: -0.1875rem !important;
  }
  .mb-xl-n1,
  .my-xl-n1 {
    margin-bottom: -0.1875rem !important;
  }
  .ml-xl-n1,
  .mx-xl-n1 {
    margin-left: -0.1875rem !important;
  }
  .m-xl-n2 {
    margin: -0.375rem !important;
  }
  .mt-xl-n2,
  .my-xl-n2 {
    margin-top: -0.375rem !important;
  }
  .mr-xl-n2,
  .mx-xl-n2 {
    margin-right: -0.375rem !important;
  }
  .mb-xl-n2,
  .my-xl-n2 {
    margin-bottom: -0.375rem !important;
  }
  .ml-xl-n2,
  .mx-xl-n2 {
    margin-left: -0.375rem !important;
  }
  .m-xl-n3 {
    margin: -0.75rem !important;
  }
  .mt-xl-n3,
  .my-xl-n3 {
    margin-top: -0.75rem !important;
  }
  .mr-xl-n3,
  .mx-xl-n3 {
    margin-right: -0.75rem !important;
  }
  .mb-xl-n3,
  .my-xl-n3 {
    margin-bottom: -0.75rem !important;
  }
  .ml-xl-n3,
  .mx-xl-n3 {
    margin-left: -0.75rem !important;
  }
  .m-xl-n4 {
    margin: -1.5rem !important;
  }
  .mt-xl-n4,
  .my-xl-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-xl-n4,
  .mx-xl-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-xl-n4,
  .my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-xl-n4,
  .mx-xl-n4 {
    margin-left: -1.5rem !important;
  }
  .m-xl-n5 {
    margin: -2.25rem !important;
  }
  .mt-xl-n5,
  .my-xl-n5 {
    margin-top: -2.25rem !important;
  }
  .mr-xl-n5,
  .mx-xl-n5 {
    margin-right: -2.25rem !important;
  }
  .mb-xl-n5,
  .my-xl-n5 {
    margin-bottom: -2.25rem !important;
  }
  .ml-xl-n5,
  .mx-xl-n5 {
    margin-left: -2.25rem !important;
  }
  .m-xl-n6 {
    margin: -4.5rem !important;
  }
  .mt-xl-n6,
  .my-xl-n6 {
    margin-top: -4.5rem !important;
  }
  .mr-xl-n6,
  .mx-xl-n6 {
    margin-right: -4.5rem !important;
  }
  .mb-xl-n6,
  .my-xl-n6 {
    margin-bottom: -4.5rem !important;
  }
  .ml-xl-n6,
  .mx-xl-n6 {
    margin-left: -4.5rem !important;
  }
  .m-xl-n7 {
    margin: -6.75rem !important;
  }
  .mt-xl-n7,
  .my-xl-n7 {
    margin-top: -6.75rem !important;
  }
  .mr-xl-n7,
  .mx-xl-n7 {
    margin-right: -6.75rem !important;
  }
  .mb-xl-n7,
  .my-xl-n7 {
    margin-bottom: -6.75rem !important;
  }
  .ml-xl-n7,
  .mx-xl-n7 {
    margin-left: -6.75rem !important;
  }
  .m-xl-n8 {
    margin: -13.5rem !important;
  }
  .mt-xl-n8,
  .my-xl-n8 {
    margin-top: -13.5rem !important;
  }
  .mr-xl-n8,
  .mx-xl-n8 {
    margin-right: -13.5rem !important;
  }
  .mb-xl-n8,
  .my-xl-n8 {
    margin-bottom: -13.5rem !important;
  }
  .ml-xl-n8,
  .mx-xl-n8 {
    margin-left: -13.5rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}
.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace !important;
}
.text-justify {
  text-align: justify !important;
}
.text-wrap {
  white-space: normal !important;
}
.text-nowrap {
  white-space: nowrap !important;
}
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}
.text-lowercase {
  text-transform: lowercase !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.text-capitalize {
  text-transform: capitalize !important;
}
.font-weight-light {
  font-weight: 400 !important;
}
.font-weight-lighter {
  font-weight: lighter !important;
}
.font-weight-normal {
  font-weight: 400 !important;
}
.font-weight-bold {
  font-weight: 600 !important;
}
.font-weight-bolder {
  font-weight: bolder !important;
}
.font-italic {
  font-style: italic !important;
}
.text-white {
  color: #fff !important;
}
.text-primary {
  color: #2c7be5 !important;
}
a.text-primary:focus,
a.text-primary:hover {
  color: #1657af !important;
}
.text-secondary {
  color: #6e84a3 !important;
}
a.text-secondary:focus,
a.text-secondary:hover {
  color: #4c5f78 !important;
}
.text-success {
  color: #00d97e !important;
}
a.text-success:focus,
a.text-success:hover {
  color: #008d52 !important;
}
.text-info {
  color: #39afd1 !important;
}
a.text-info:focus,
a.text-info:hover {
  color: #247f9a !important;
}
.text-warning {
  color: #f6c343 !important;
}
a.text-warning:focus,
a.text-warning:hover {
  color: #e2a40b !important;
}
.text-danger {
  color: #e63757 !important;
}
a.text-danger:focus,
a.text-danger:hover {
  color: #b91735 !important;
}
.text-light {
  color: #edf2f9 !important;
}
a.text-light:focus,
a.text-light:hover {
  color: #b4c9e6 !important;
}
.text-dark {
  color: #12263f !important;
}
a.text-dark:focus,
a.text-dark:hover {
  color: #010204 !important;
}
.text-white {
  color: #fff !important;
}
a.text-white:focus,
a.text-white:hover {
  color: #d9d9d9 !important;
}
.text-body {
  color: #12263f !important;
}
.text-muted {
  color: #95aac9 !important;
}
.text-black-50 {
  color: rgba(18, 38, 63, 0.5) !important;
}
.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.text-decoration-none {
  text-decoration: none !important;
}
.text-break {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}
.text-reset {
  color: inherit !important;
}
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
@media print {
  *,
  ::after,
  ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  abbr[title]::after {
    content: " (" attr(title) ")";
  }
  pre {
    white-space: pre-wrap !important;
  }
  blockquote,
  pre {
    border: 1px solid #b1c2d9;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  img,
  tr {
    page-break-inside: avoid;
  }
  h2,
  h3,
  p {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }
  .container {
    min-width: 992px !important;
  }
  .navbar {
    display: none;
  }
  .badge {
    border: 1px solid #12263f;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered td,
  .table-bordered th {
    border: 1px solid #e3ebf6 !important;
  }
  .table-dark {
    color: inherit;
  }
  .table-dark tbody + tbody,
  .table-dark td,
  .table-dark th,
  .table-dark thead th {
    border-color: #edf2f9;
  }
  .table .thead-dark th {
    color: inherit;
    border-color: #edf2f9;
  }
}
.alert-link {
  text-decoration: underline;
}
.alert-primary {
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.alert-primary hr {
  border-top-color: #1b6edc;
}
.alert-primary .alert-link {
  color: #e6e6e6;
}
.alert-primary .alert-link,
.alert-primary .close {
  color: #fff;
}
.alert-secondary {
  color: #fff;
  background-color: #6e84a3;
  border-color: #6e84a3;
}
.alert-secondary hr {
  border-top-color: #607797;
}
.alert-secondary .alert-link {
  color: #e6e6e6;
}
.alert-secondary .alert-link,
.alert-secondary .close {
  color: #fff;
}
.alert-success {
  color: #fff;
  background-color: #00d97e;
  border-color: #00d97e;
}
.alert-success hr {
  border-top-color: #00c06f;
}
.alert-success .alert-link {
  color: #e6e6e6;
}
.alert-success .alert-link,
.alert-success .close {
  color: #fff;
}
.alert-info {
  color: #fff;
  background-color: #39afd1;
  border-color: #39afd1;
}
.alert-info hr {
  border-top-color: #2da2c3;
}
.alert-info .alert-link {
  color: #e6e6e6;
}
.alert-info .alert-link,
.alert-info .close {
  color: #fff;
}
.alert-warning {
  color: #283e59;
  background-color: #f6c343;
  border-color: #f6c343;
}
.alert-warning hr {
  border-top-color: #f5bb2b;
}
.alert-warning .alert-link {
  color: #182536;
}
.alert-warning .alert-link,
.alert-warning .close {
  color: #283e59;
}
.alert-danger {
  color: #fff;
  background-color: #e63757;
  border-color: #e63757;
}
.alert-danger hr {
  border-top-color: #e32044;
}
.alert-danger .alert-link {
  color: #e6e6e6;
}
.alert-danger .alert-link,
.alert-danger .close {
  color: #fff;
}
.alert-light {
  color: #283e59;
  background-color: #edf2f9;
  border-color: #edf2f9;
}
.alert-light hr {
  border-top-color: #dae4f3;
}
.alert-light .alert-link {
  color: #182536;
}
.alert-light .alert-link,
.alert-light .close {
  color: #283e59;
}
.alert-dark {
  color: #fff;
  background-color: #12263f;
  border-color: #12263f;
}
.alert-dark hr {
  border-top-color: #0c1a2b;
}
.alert-dark .alert-link {
  color: #e6e6e6;
}
.alert-dark .alert-link,
.alert-dark .close {
  color: #fff;
}
.alert-white {
  color: #283e59;
  background-color: #fff;
  border-color: #fff;
}
.alert-white hr {
  border-top-color: #f2f2f2;
}
.alert-white .alert-link {
  color: #182536;
}
.alert-white .alert-link,
.alert-white .close {
  color: #283e59;
}
.badge {
  vertical-align: middle;
}
.btn .badge {
  top: -2px;
}
.badge-soft-primary {
  color: #2c7be5;
  background-color: #d5e5fa;
}
.badge-soft-primary[href]:focus,
.badge-soft-primary[href]:hover {
  color: #2c7be5;
  text-decoration: none;
  background-color: #bed7f7;
}
.badge-soft-secondary {
  color: #6e84a3;
  background-color: #e2e6ed;
}
.badge-soft-secondary[href]:focus,
.badge-soft-secondary[href]:hover {
  color: #6e84a3;
  text-decoration: none;
  background-color: #d2d8e3;
}
.badge-soft-success {
  color: #00d97e;
  background-color: #ccf7e5;
}
.badge-soft-success[href]:focus,
.badge-soft-success[href]:hover {
  color: #00d97e;
  text-decoration: none;
  background-color: #b6f4da;
}
.badge-soft-info {
  color: #39afd1;
  background-color: #d7eff6;
}
.badge-soft-info[href]:focus,
.badge-soft-info[href]:hover {
  color: #39afd1;
  text-decoration: none;
  background-color: #c2e7f1;
}
.badge-soft-warning {
  color: #f6c343;
  background-color: #fdf3d9;
}
.badge-soft-warning[href]:focus,
.badge-soft-warning[href]:hover {
  color: #f6c343;
  text-decoration: none;
  background-color: #fcebc1;
}
.badge-soft-danger {
  color: #e63757;
  background-color: #fad7dd;
}
.badge-soft-danger[href]:focus,
.badge-soft-danger[href]:hover {
  color: #e63757;
  text-decoration: none;
  background-color: #f7c0ca;
}
.badge-soft-light {
  color: #edf2f9;
  background-color: #fbfcfe;
}
.badge-soft-light[href]:focus,
.badge-soft-light[href]:hover {
  color: #edf2f9;
  text-decoration: none;
  background-color: #e7edf9;
}
.badge-soft-dark {
  color: #12263f;
  background-color: #d0d4d9;
}
.badge-soft-dark[href]:focus,
.badge-soft-dark[href]:hover {
  color: #12263f;
  text-decoration: none;
  background-color: #c2c7ce;
}
.badge-soft-white {
  color: #fff;
  background-color: #fff;
}
.badge-soft-white[href]:focus,
.badge-soft-white[href]:hover {
  color: #fff;
  text-decoration: none;
  background-color: #f2f2f2;
}
.breadcrumb-item + .breadcrumb-item::before {
  width: 0.3rem;
  height: 0.6rem;
  margin-right: 0.5rem;
  -webkit-mask: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxMCAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+ICAgICAgICA8ZyBpZD0iY2hldnJvbi1yaWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSI+ICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTaGFwZSIgcG9pbnRzPSIwIDEyIDYgNiAwIDAiPjwvcG9seWxpbmU+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=)
    no-repeat 50% 50%;
  mask: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxMCAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+ICAgICAgICA8ZyBpZD0iY2hldnJvbi1yaWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSI+ICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTaGFwZSIgcG9pbnRzPSIwIDEyIDYgNiAwIDAiPjwvcG9seWxpbmU+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=)
    no-repeat 50% 50%;
  -webkit-mask-size: contain;
  mask-size: contain;
  background: #d2ddec;
}
.breadcrumb-sm {
  font-size: 0.8125rem;
}
.breadcrumb-overflow {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.breadcrumb-overflow::-webkit-scrollbar {
  display: none;
}
.breadcrumb-overflow .breadcrumb-item {
  white-space: nowrap;
}
.btn-white {
  border-color: #e3ebf6;
}
.btn-white:focus,
.btn-white:hover {
  background-color: #f9fbfd;
  border-color: #d2ddec;
}
.btn-group-toggle .btn-white:not(:disabled):not(.disabled).active,
.btn-group-toggle .btn-white:not(:disabled):not(.disabled):active {
  background-color: #fff;
  border-color: #2c7be5;
  color: #2c7be5;
}
.btn-group-toggle .btn-white.focus,
.btn-group-toggle .btn-white:focus {
  box-shadow: none;
}
.btn-white-20 {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: transparent;
  color: #fff;
}
.btn-white-20:focus,
.btn-white-20:hover {
  background-color: rgba(255, 255, 255, 0.12);
  border-color: transparent;
  color: #fff;
}
.btn-outline-secondary:not(:hover):not([aria-expanded="true"]):not([aria-pressed="true"]) {
  border-color: #d2ddec;
}
.btn-rounded-circle {
  width: calc(1em * 1.5 + 1rem + 1px * 2);
  padding-left: 0;
  padding-right: 0;
  border-radius: 50%;
}
.btn-group-lg > .btn-rounded-circle.btn,
.btn-rounded-circle.btn-lg {
  width: calc(1em * 1.5 + 1.5rem + 1px * 2);
}
.btn-group-sm > .btn-rounded-circle.btn,
.btn-rounded-circle.btn-sm {
  width: calc(1em * 1.75 + 0.25rem + 1px * 2);
}
.btn-group .btn + .btn {
  margin-left: 0;
}
.card {
  margin-bottom: 1.5rem;
  border-color: #edf2f9;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
}
.card > * {
  flex-shrink: 0;
}
.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.card-header > :first-child {
  flex: 1;
}
.card-header + .card-footer {
  border-top-width: 0;
}
.card-title {
  margin-bottom: 0.5rem;
}
.card-header-title {
  margin-bottom: 0;
}
.card-header-tabs {
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: 0;
  margin-right: 0;
}
.card-header-tabs .nav-link {
  padding-top: calc((60px - 1em * 1.5) / 2) !important;
  padding-bottom: calc((60px - 1em * 1.5) / 2) !important;
}
.card-table {
  margin-bottom: 0;
}
.card-table thead th {
  border-top-width: 0;
}
.card-table tbody td:first-child,
.card-table thead th:first-child {
  padding-left: 1.5rem !important;
}
.card-table tbody td:last-child,
.card-table thead th:last-child {
  padding-right: 1.5rem !important;
}
.card
  > .card-table:first-child
  > tbody:first-child
  > tr:first-child
  > td:first-child,
.card
  > .card-table:first-child
  > tbody:first-child
  > tr:first-child
  > th:first-child,
.card
  > .card-table:first-child
  > tfoot:first-child
  > tr:first-child
  > td:first-child,
.card
  > .card-table:first-child
  > tfoot:first-child
  > tr:first-child
  > th:first-child,
.card
  > .card-table:first-child
  > thead:first-child
  > tr:first-child
  > td:first-child,
.card
  > .card-table:first-child
  > thead:first-child
  > tr:first-child
  > th:first-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tbody:first-child
  > tr:first-child
  > td:first-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tbody:first-child
  > tr:first-child
  > th:first-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tfoot:first-child
  > tr:first-child
  > td:first-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tfoot:first-child
  > tr:first-child
  > th:first-child,
.card
  > .table-responsive:first-child
  > .card-table
  > thead:first-child
  > tr:first-child
  > td:first-child,
.card
  > .table-responsive:first-child
  > .card-table
  > thead:first-child
  > tr:first-child
  > th:first-child {
  border-top-left-radius: 0.5rem;
}
.card
  > .card-table:first-child
  > tbody:first-child
  > tr:first-child
  > td:last-child,
.card
  > .card-table:first-child
  > tbody:first-child
  > tr:first-child
  > th:last-child,
.card
  > .card-table:first-child
  > tfoot:first-child
  > tr:first-child
  > td:last-child,
.card
  > .card-table:first-child
  > tfoot:first-child
  > tr:first-child
  > th:last-child,
.card
  > .card-table:first-child
  > thead:first-child
  > tr:first-child
  > td:last-child,
.card
  > .card-table:first-child
  > thead:first-child
  > tr:first-child
  > th:last-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tbody:first-child
  > tr:first-child
  > td:last-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tbody:first-child
  > tr:first-child
  > th:last-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tfoot:first-child
  > tr:first-child
  > td:last-child,
.card
  > .table-responsive:first-child
  > .card-table
  > tfoot:first-child
  > tr:first-child
  > th:last-child,
.card
  > .table-responsive:first-child
  > .card-table
  > thead:first-child
  > tr:first-child
  > td:last-child,
.card
  > .table-responsive:first-child
  > .card-table
  > thead:first-child
  > tr:first-child
  > th:last-child {
  border-top-right-radius: 0.5rem;
}
.card-avatar {
  display: block !important;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}
.card-avatar-top {
  margin-top: -3rem;
}
.card-avatar-top.avatar-xs {
  margin-top: -2.3125rem;
}
.card-avatar-top.avatar-sm {
  margin-top: -2.75rem;
}
.card-avatar-top.avatar-lg {
  margin-top: -3.5rem;
}
.card-avatar-top.avatar-xl {
  margin-top: -4.0625rem;
}
.card-avatar-top.avatar-xxl {
  margin-top: -5.5rem;
}
.card-dropdown {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}
.card-inactive {
  border-color: #e3ebf6;
  border-style: dashed;
  background-color: transparent;
  box-shadow: none;
}
.card-flush {
  background: 0 0;
  border: none;
  box-shadow: none;
}
.card-sm .card-body,
.card-sm .card-footer-boxed {
  padding: 1rem;
}
.card-header-flush {
  border-bottom: 0;
}
.card-header-flush + .card-body {
  padding-top: 0;
}
.card-fill {
  height: calc(100% - 1.5rem);
}
.card-fill .card-body {
  flex-grow: 0;
  margin-top: auto;
  margin-bottom: auto;
}
.card-fill-xs {
  height: calc(100% - 1.5rem);
}
.card-fill-xs .card-body {
  flex-grow: 0;
  margin-top: auto;
  margin-bottom: auto;
}
@media (min-width: 576px) {
  .card-fill-sm {
    height: calc(100% - 1.5rem);
  }
  .card-fill-sm .card-body {
    flex-grow: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media (min-width: 768px) {
  .card-fill-md {
    height: calc(100% - 1.5rem);
  }
  .card-fill-md .card-body {
    flex-grow: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media (min-width: 992px) {
  .card-fill-lg {
    height: calc(100% - 1.5rem);
  }
  .card-fill-lg .card-body {
    flex-grow: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media (min-width: 1200px) {
  .card-fill-xl {
    height: calc(100% - 1.5rem);
  }
  .card-fill-xl .card-body {
    flex-grow: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}
.card-adjust {
  height: 0;
  min-height: 100%;
}
.card-adjust .card {
  height: calc(100% - 1.5rem);
}
.card-adjust .card-body {
  height: calc(100% - 60px);
  overflow-y: auto;
}
.card-adjust-xs {
  height: 0;
  min-height: 100%;
}
.card-adjust-xs .card {
  height: calc(100% - 1.5rem);
}
.card-adjust-xs .card-body {
  height: calc(100% - 60px);
  overflow-y: auto;
}
@media (min-width: 576px) {
  .card-adjust-sm {
    height: 0;
    min-height: 100%;
  }
  .card-adjust-sm .card {
    height: calc(100% - 1.5rem);
  }
  .card-adjust-sm .card-body {
    height: calc(100% - 60px);
    overflow-y: auto;
  }
}
@media (min-width: 768px) {
  .card-adjust-md {
    height: 0;
    min-height: 100%;
  }
  .card-adjust-md .card {
    height: calc(100% - 1.5rem);
  }
  .card-adjust-md .card-body {
    height: calc(100% - 60px);
    overflow-y: auto;
  }
}
@media (min-width: 992px) {
  .card-adjust-lg {
    height: 0;
    min-height: 100%;
  }
  .card-adjust-lg .card {
    height: calc(100% - 1.5rem);
  }
  .card-adjust-lg .card-body {
    height: calc(100% - 60px);
    overflow-y: auto;
  }
}
@media (min-width: 1200px) {
  .card-adjust-xl {
    height: 0;
    min-height: 100%;
  }
  .card-adjust-xl .card {
    height: calc(100% - 1.5rem);
  }
  .card-adjust-xl .card-body {
    height: calc(100% - 60px);
    overflow-y: auto;
  }
}
.card-footer-boxed {
  padding-right: 0;
  padding-bottom: 1.5rem;
  padding-left: 0;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.card-pagination.pagination-tabs {
  margin-top: -1rem;
  margin-bottom: -1rem;
  border: 0;
}
.card-pagination.pagination-tabs .page,
.card-pagination.pagination-tabs .page-link {
  border-top-width: 0 !important;
}
.card-pagination.pagination-tabs .active .page,
.card-pagination.pagination-tabs .active .page-link {
  border-width: 0 0 1px 0 !important;
}
.card-divider {
  border-color: #edf2f9;
}
.close-sm {
  font-size: 0.9375rem;
}
.highlight {
  padding: 0;
}
.custom-switch {
  min-height: 1.5rem;
}
.custom-switch .custom-control-label::before {
  top: 0;
  height: 1.5rem;
  border-radius: 0.75rem;
}
.custom-switch .custom-control-label::after {
  top: 0.1875rem;
  left: -3.3125rem;
  background-color: #fff;
}
.custom-switch .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #fff;
  transform: translateX(1.5rem);
}
.custom-select-sm {
  line-height: 1.75;
}
.custom-control-circle {
  padding-left: 1.875rem;
}
.custom-control-circle .custom-control-label::after,
.custom-control-circle .custom-control-label::before {
  top: 0.01563rem;
  left: -1.875rem;
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
}
.custom-control-circle
  .custom-control-input:checked
  ~ .custom-control-label::after,
.custom-control-circle .custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.3333 1L3.99996 8.33333L0.666626 5' stroke='%23FFFFFF' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
  background-size: 0.75rem 0.5625rem;
}
.dropdown-toggle::after {
  width: auto;
  height: auto;
  border: none !important;
  vertical-align: middle;
  font-family: Feather;
}
.dropdown-toggle::after {
  content: "\\e92e";
}
.dropup > .dropdown-toggle::after {
  content: "\\e931";
}
.dropright > .dropdown-toggle::after {
  content: "\\e930";
}
.dropleft > .dropdown-toggle::before {
  content: "\\e92f";
  width: auto;
  height: auto;
  border: none !important;
  vertical-align: middle;
  font-family: Feather;
}
.dropdown-item.dropdown-toggle {
  display: flex;
  justify-content: space-between;
}
.dropdown-menu {
  -webkit-animation: dropdownMenu 0.15s;
  animation: dropdownMenu 0.15s;
}
@-webkit-keyframes dropdownMenu {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes dropdownMenu {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.dropdown-ellipses {
  font-size: 1.0625rem;
  color: #d2ddec;
}
.dropdown-ellipses::after {
  display: none;
}
.dropdown-menu-card {
  min-width: 350px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #fff;
  border-color: rgba(18, 38, 63, 0.1);
}
.dropdown-menu-card .card-header {
  min-height: 3.125rem;
}
.dropdown-menu-card .card-body {
  max-height: 350px;
  overflow-y: auto;
}
.dropdown-menu-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.8125rem;
}
.dropdown-menu-sm .dropdown-item {
  padding: 0.1875rem 0.75rem;
}
.form-text {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.form-control.is-invalid:focus,
.form-control.is-valid:focus,
.was-validated .form-control:invalid:focus,
.was-validated .form-control:valid:focus {
  box-shadow: none;
}
.form-control-flush {
  padding-left: 0;
  border-color: transparent !important;
  background-color: transparent !important;
  resize: none;
}
.form-control:not(.custom-select) {
  padding-right: 0;
}
.form-control-auto {
  height: auto;
  padding-top: 0;
  padding-bottom: 0;
}
.form-control-rounded {
  border-radius: 20rem;
}
.input-group.input-group-merge > .form-control {
  border-radius: 0.375rem;
}
.input-group.input-group-merge > .form-control:focus {
  box-shadow: none;
}
.input-group.input-group-merge
  > .form-control:focus
  ~ [class*="input-group"]
  > .input-group-text {
  border-color: #2c7be5;
}
.input-group.input-group-merge
  > .form-control.is-valid
  ~ [class*="input-group"]
  > .input-group-text {
  border-color: #00d97e;
}
.input-group.input-group-merge
  > .form-control.is-invalid
  ~ [class*="input-group"]
  > .input-group-text {
  border-color: #e63757;
}
.input-group.input-group-merge > .form-control-prepended {
  padding-left: 0.375rem;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-left-width: 0;
}
.input-group.input-group-merge > .form-control-appended {
  padding-right: 0.375rem;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-right-width: 0;
}
.input-group.input-group-merge > .input-group-prepend {
  order: -1;
}
.input-group.input-group-merge > .input-group-prepend > .input-group-text {
  padding-right: 0.375rem;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  border-right-width: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.input-group.input-group-merge > .input-group-append > .input-group-text {
  padding-left: 0.375rem;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border-left-width: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.input-group-lg.input-group-merge > .form-control {
  border-radius: 0.5rem;
}
.input-group-lg.input-group-merge > .form-control-prepended {
  padding-left: 0.625rem;
}
.input-group-lg.input-group-merge > .form-control-appended {
  padding-right: 0.625rem;
}
.input-group-lg.input-group-merge > .input-group-prepend > .input-group-text {
  padding-right: 0.625rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.input-group-lg.input-group-merge > .input-group-append > .input-group-text {
  padding-left: 0.625rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.input-group-sm.input-group-merge > .form-control {
  border-radius: 0.25rem;
}
.input-group-sm.input-group-merge > .form-control-prepended {
  padding-left: 0.25rem;
}
.input-group-sm.input-group-merge > .form-control-appended {
  padding-right: 0.25rem;
}
.input-group-sm.input-group-merge > .input-group-prepend > .input-group-text {
  padding-right: 0.25rem;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.input-group-sm.input-group-merge > .input-group-append > .input-group-text {
  padding-left: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.input-group-rounded.input-group-merge > .form-control {
  border-radius: 20rem;
}
.input-group-rounded.input-group-merge
  > .input-group-prepend
  > .input-group-text {
  border-top-left-radius: 20rem;
  border-bottom-left-radius: 20rem;
}
.input-group-rounded.input-group-merge
  > .input-group-append
  > .input-group-text {
  border-top-right-radius: 20rem;
  border-bottom-right-radius: 20rem;
}
.input-group-flush > .form-control {
  padding-top: 0;
  padding-bottom: 0;
  border-color: transparent !important;
  background-color: transparent !important;
}
.input-group-flush > .input-group-append > .input-group-text,
.input-group-flush > .input-group-prepend > .input-group-text {
  padding: 0;
  border-width: 0;
  background-color: transparent;
}
.form-control.h1,
.form-control.h2,
.form-control.h3,
.form-control.h4,
.form-control.h5 {
  margin-bottom: 0;
  font-weight: 500;
  letter-spacing: -0.02em;
}
.form-control.h1 {
  font-size: 1.625rem;
}
.form-control.h2 {
  font-size: 1.25rem;
}
.form-control.h3 {
  font-size: 1.0625rem;
}
.form-control.h4 {
  font-size: 0.9375rem;
}
.form-control.h5 {
  font-size: 0.8125rem;
}
.jumbotron {
  padding: 1rem;
}
@media (min-width: 576px) {
  .jumbotron {
    padding: 2rem;
  }
}
.list-group-item-primary {
  color: #fff;
  background-color: #2c7be5;
}
.list-group-item-primary.list-group-item-action:focus,
.list-group-item-primary.list-group-item-action:hover {
  color: #fff;
  background-color: #1b6edc;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #fff;
  border-color: #fff;
}
.list-group-item-secondary {
  color: #fff;
  background-color: #6e84a3;
}
.list-group-item-secondary.list-group-item-action:focus,
.list-group-item-secondary.list-group-item-action:hover {
  color: #fff;
  background-color: #607797;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #fff;
  border-color: #fff;
}
.list-group-item-success {
  color: #fff;
  background-color: #00d97e;
}
.list-group-item-success.list-group-item-action:focus,
.list-group-item-success.list-group-item-action:hover {
  color: #fff;
  background-color: #00c06f;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #fff;
  border-color: #fff;
}
.list-group-item-info {
  color: #fff;
  background-color: #39afd1;
}
.list-group-item-info.list-group-item-action:focus,
.list-group-item-info.list-group-item-action:hover {
  color: #fff;
  background-color: #2da2c3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #fff;
  border-color: #fff;
}
.list-group-item-warning {
  color: #283e59;
  background-color: #f6c343;
}
.list-group-item-warning.list-group-item-action:focus,
.list-group-item-warning.list-group-item-action:hover {
  color: #283e59;
  background-color: #f5bb2b;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #283e59;
  border-color: #283e59;
}
.list-group-item-danger {
  color: #fff;
  background-color: #e63757;
}
.list-group-item-danger.list-group-item-action:focus,
.list-group-item-danger.list-group-item-action:hover {
  color: #fff;
  background-color: #e32044;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #fff;
  border-color: #fff;
}
.list-group-item-light {
  color: #283e59;
  background-color: #edf2f9;
}
.list-group-item-light.list-group-item-action:focus,
.list-group-item-light.list-group-item-action:hover {
  color: #283e59;
  background-color: #dae4f3;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #283e59;
  border-color: #283e59;
}
.list-group-item-dark {
  color: #fff;
  background-color: #12263f;
}
.list-group-item-dark.list-group-item-action:focus,
.list-group-item-dark.list-group-item-action:hover {
  color: #fff;
  background-color: #0c1a2b;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #fff;
  border-color: #fff;
}
.list-group-item-white {
  color: #283e59;
  background-color: #fff;
}
.list-group-item-white.list-group-item-action:focus,
.list-group-item-white.list-group-item-action:hover {
  color: #283e59;
  background-color: #f2f2f2;
}
.list-group-item-white.list-group-item-action.active {
  color: #fff;
  background-color: #283e59;
  border-color: #283e59;
}
.list-group-lg .list-group-item {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.list-group-flush > .list-group-item {
  padding-left: 0;
  padding-right: 0;
}
.list-group-focus .list-group-item:focus .text-focus {
  color: #2c7be5 !important;
}
.list-group-activity .list-group-item {
  border: 0;
}
.list-group-activity .list-group-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  height: 100%;
  border-left: 1px solid #e3ebf6;
}
.modal.fade .modal-dialog {
  transform: translate(0, -150px);
}
.modal.show .modal-dialog {
  transform: translate(0, 0);
}
.modal-header .close {
  margin: -1.5rem -1.5rem -1.5rem auto;
}
.modal-dialog-vertical {
  height: 100%;
  max-width: 350px;
  margin: 0;
}
.modal-dialog-vertical .modal-content {
  height: inherit;
  border-width: 0 1px 0 0;
  border-radius: 0;
}
.modal-dialog-vertical .modal-header {
  border-radius: inherit;
}
.modal-dialog-vertical .modal-body {
  height: inherit;
  overflow-y: auto;
}
.modal.fade .modal-dialog-vertical {
  transform: translateX(-100%);
}
.modal.show .modal-dialog-vertical {
  transform: translateX(0);
}
.modal.fixed-right {
  padding-right: 0 !important;
}
.modal.fixed-right .modal-dialog-vertical {
  margin-left: auto;
}
.modal.fixed-right.fade .modal-dialog-vertical {
  transform: translateX(100%);
}
.modal.fixed-right.show .modal-dialog-vertical {
  transform: translateX(0);
}
.modal-card {
  margin-bottom: 0;
}
.modal-card .card-body {
  max-height: 350px;
  overflow-y: auto;
}
.modal-header-tabs {
  margin-top: -1rem;
  margin-bottom: calc(-1rem - 1px);
}
.nav-tabs .nav-item {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.nav-tabs .nav-link {
  padding: 1rem 0;
  border-bottom: 1px solid transparent;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
}
.nav-tabs .nav-link:not(.active) {
  color: #95aac9;
}
.nav-tabs .nav-link:not(.active):hover {
  color: #6e84a3;
}
.nav-tabs .nav-item:first-child {
  margin-left: 0;
}
.nav-tabs .nav-item:last-child {
  margin-right: 0;
}
.nav-tabs .nav-item.show .nav-link {
  border-color: transparent;
}
.nav-overflow {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 1px;
}
.nav-overflow::-webkit-scrollbar {
  display: none;
}
.nav-tabs-sm {
  font-size: 0.8125rem;
}
.nav-tabs-sm .nav-item {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.nav-tabs-sm .nav-link {
  padding-top: 1.15385rem;
  padding-bottom: 1.15385rem;
}
.nav-sm .nav-link {
  font-size: 0.8125rem;
}
.nav.btn-group .btn-white.active {
  background-color: #2c7be5;
  border-color: #2c7be5;
  color: #fff;
}
.navbar {
  border-width: 0 0 1px 0;
  border-style: solid;
}
.navbar-dark {
  background-color: #152e4d;
  border-color: #152e4d;
}
.navbar-dark .navbar-heading {
  color: #6e84a3;
}
.navbar-dark .navbar-divider {
  border-color: #1e3a5c;
}
.navbar-dark .navbar-user {
  border-top-color: #1e3a5c;
}
.navbar-dark .navbar-user-link {
  color: #6e84a3;
}
.navbar-dark .navbar-user-link:focus,
.navbar-dark .navbar-user-link:hover {
  color: #fff;
}
.navbar-dark .navbar-brand {
  -webkit-filter: none;
  filter: none;
}
.navbar-dark .navbar-collapse::before {
  border-top-color: #1e3a5c;
}
.navbar-dark.navbar-expand-xs .navbar-nav .dropdown-item {
  color: #6e84a3;
}
.navbar-dark.navbar-expand-xs .navbar-nav .dropdown-item:focus,
.navbar-dark.navbar-expand-xs .navbar-nav .dropdown-item:hover {
  color: #fff;
}
.navbar-dark.navbar-expand-xs .navbar-nav .dropdown-item.active,
.navbar-dark.navbar-expand-xs .navbar-nav .dropdown-item:active,
.navbar-dark.navbar-expand-xs .navbar-nav .show > .nav-link {
  color: #fff;
}
@media (max-width: 575.98px) {
  .navbar-dark.navbar-expand-sm .navbar-nav .dropdown-item {
    color: #6e84a3;
  }
  .navbar-dark.navbar-expand-sm .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-expand-sm .navbar-nav .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-expand-sm .navbar-nav .dropdown-item.active,
  .navbar-dark.navbar-expand-sm .navbar-nav .dropdown-item:active,
  .navbar-dark.navbar-expand-sm .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
@media (max-width: 767.98px) {
  .navbar-dark.navbar-expand-md .navbar-nav .dropdown-item {
    color: #6e84a3;
  }
  .navbar-dark.navbar-expand-md .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-expand-md .navbar-nav .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-expand-md .navbar-nav .dropdown-item.active,
  .navbar-dark.navbar-expand-md .navbar-nav .dropdown-item:active,
  .navbar-dark.navbar-expand-md .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
@media (max-width: 991.98px) {
  .navbar-dark.navbar-expand-lg .navbar-nav .dropdown-item {
    color: #6e84a3;
  }
  .navbar-dark.navbar-expand-lg .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-expand-lg .navbar-nav .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-expand-lg .navbar-nav .dropdown-item.active,
  .navbar-dark.navbar-expand-lg .navbar-nav .dropdown-item:active,
  .navbar-dark.navbar-expand-lg .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
@media (max-width: 1199.98px) {
  .navbar-dark.navbar-expand-xl .navbar-nav .dropdown-item {
    color: #6e84a3;
  }
  .navbar-dark.navbar-expand-xl .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-expand-xl .navbar-nav .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-expand-xl .navbar-nav .dropdown-item.active,
  .navbar-dark.navbar-expand-xl .navbar-nav .dropdown-item:active,
  .navbar-dark.navbar-expand-xl .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
.navbar-dark.navbar-vibrant {
  background-image: linear-gradient(
      to bottom right,
      rgba(18, 111, 235, 0.9),
      rgba(114, 3, 225, 0.9)
    ),
    url(../img/covers/sidebar-cover.jpg);
  background-repeat: no-repeat, no-repeat;
  background-position: center center, center center;
  background-size: cover, cover;
  background-origin: border-box;
  border-color: transparent;
}
@media (max-width: 767.98px) {
  .navbar-dark.navbar-vibrant {
    background-attachment: fixed, fixed;
  }
}
.navbar-dark.navbar-vibrant .nav-link {
  color: rgba(255, 255, 255, 0.7);
}
.navbar-dark.navbar-vibrant .nav-link:focus,
.navbar-dark.navbar-vibrant .nav-link:hover {
  color: #fff;
}
.navbar-dark.navbar-vibrant .nav-item .nav-link.active,
.navbar-dark.navbar-vibrant .nav-item.active .nav-link {
  color: #fff;
}
.navbar-dark.navbar-vibrant .navbar-heading {
  color: rgba(255, 255, 255, 0.4);
}
.navbar-dark.navbar-vibrant .navbar-divider {
  border-color: rgba(255, 255, 255, 0.2);
}
.navbar-dark.navbar-vibrant .navbar-user {
  border-top-color: rgba(255, 255, 255, 0.2);
}
.navbar-dark.navbar-vibrant .navbar-user-link {
  color: rgba(255, 255, 255, 0.7);
}
.navbar-dark.navbar-vibrant .navbar-user-link:focus,
.navbar-dark.navbar-vibrant .navbar-user-link:hover {
  color: #fff;
}
.navbar-dark.navbar-vibrant .navbar-brand {
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
}
.navbar-dark.navbar-vibrant .navbar-collapse::before {
  border-top-color: rgba(255, 255, 255, 0.2);
}
.navbar-dark.navbar-vibrant .navbar-nav .nav-link.active::before {
  border-color: #fff;
}
.navbar-dark.navbar-vibrant.navbar-expand-xs .navbar-nav .dropdown-item {
  color: rgba(255, 255, 255, 0.7);
}
.navbar-dark.navbar-vibrant.navbar-expand-xs .navbar-nav .dropdown-item:focus,
.navbar-dark.navbar-vibrant.navbar-expand-xs .navbar-nav .dropdown-item:hover {
  color: #fff;
}
.navbar-dark.navbar-vibrant.navbar-expand-xs .navbar-nav .dropdown-item.active,
.navbar-dark.navbar-vibrant.navbar-expand-xs .navbar-nav .dropdown-item:active,
.navbar-dark.navbar-vibrant.navbar-expand-xs .navbar-nav .show > .nav-link {
  color: #fff;
}
@media (max-width: 575.98px) {
  .navbar-dark.navbar-vibrant.navbar-expand-sm .navbar-nav .dropdown-item {
    color: rgba(255, 255, 255, 0.7);
  }
  .navbar-dark.navbar-vibrant.navbar-expand-sm .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-vibrant.navbar-expand-sm
    .navbar-nav
    .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-vibrant.navbar-expand-sm
    .navbar-nav
    .dropdown-item.active,
  .navbar-dark.navbar-vibrant.navbar-expand-sm
    .navbar-nav
    .dropdown-item:active,
  .navbar-dark.navbar-vibrant.navbar-expand-sm .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
@media (max-width: 767.98px) {
  .navbar-dark.navbar-vibrant.navbar-expand-md .navbar-nav .dropdown-item {
    color: rgba(255, 255, 255, 0.7);
  }
  .navbar-dark.navbar-vibrant.navbar-expand-md .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-vibrant.navbar-expand-md
    .navbar-nav
    .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-vibrant.navbar-expand-md
    .navbar-nav
    .dropdown-item.active,
  .navbar-dark.navbar-vibrant.navbar-expand-md
    .navbar-nav
    .dropdown-item:active,
  .navbar-dark.navbar-vibrant.navbar-expand-md .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
@media (max-width: 991.98px) {
  .navbar-dark.navbar-vibrant.navbar-expand-lg .navbar-nav .dropdown-item {
    color: rgba(255, 255, 255, 0.7);
  }
  .navbar-dark.navbar-vibrant.navbar-expand-lg .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-vibrant.navbar-expand-lg
    .navbar-nav
    .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-vibrant.navbar-expand-lg
    .navbar-nav
    .dropdown-item.active,
  .navbar-dark.navbar-vibrant.navbar-expand-lg
    .navbar-nav
    .dropdown-item:active,
  .navbar-dark.navbar-vibrant.navbar-expand-lg .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
@media (max-width: 1199.98px) {
  .navbar-dark.navbar-vibrant.navbar-expand-xl .navbar-nav .dropdown-item {
    color: rgba(255, 255, 255, 0.7);
  }
  .navbar-dark.navbar-vibrant.navbar-expand-xl .navbar-nav .dropdown-item:focus,
  .navbar-dark.navbar-vibrant.navbar-expand-xl
    .navbar-nav
    .dropdown-item:hover {
    color: #fff;
  }
  .navbar-dark.navbar-vibrant.navbar-expand-xl
    .navbar-nav
    .dropdown-item.active,
  .navbar-dark.navbar-vibrant.navbar-expand-xl
    .navbar-nav
    .dropdown-item:active,
  .navbar-dark.navbar-vibrant.navbar-expand-xl .navbar-nav .show > .nav-link {
    color: #fff;
  }
}
.navbar-dark.navbar-vibrant .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light {
  background-color: #fff;
  border-color: #e3ebf6;
}
.navbar-light .navbar-heading {
  color: #95aac9;
}
.navbar-light .navbar-divider {
  border-color: #e3ebf6;
}
.navbar-light .navbar-user {
  border-top-color: #e3ebf6;
}
.navbar-light .navbar-user-link {
  color: #6e84a3;
}
.navbar-light .navbar-user-link:focus,
.navbar-light .navbar-user-link:hover {
  color: #12263f;
}
.navbar-light .navbar-brand {
  -webkit-filter: none;
  filter: none;
}
.navbar-light .navbar-collapse::before {
  border-top-color: #e3ebf6;
}
.navbar-brand {
  margin-right: 0;
}
.navbar-brand-img,
.navbar-brand > img {
  max-width: 100%;
  max-height: 1.5rem;
}
.navbar-collapse {
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.navbar-collapse:before {
  content: "";
  display: block;
  border-top-width: 1px;
  border-top-style: solid;
  margin: 0.75rem -1rem;
}
.navbar-nav {
  margin-left: -1rem;
  margin-right: -1rem;
}
.navbar-nav .nav-link {
  padding-left: 1rem;
  padding-right: 1rem;
}
.navbar-nav .nav-link.active {
  position: relative;
}
.navbar-nav .nav-link.active:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  border-left: 2px solid #2c7be5;
}
.navbar-nav .nav-link > .fe {
  min-width: 1.75rem;
  padding-bottom: 0.125em;
  font-size: 1.0625rem;
  line-height: 1.40625rem;
}
.navbar-nav .dropdown-menu {
  border: none;
}
.navbar-nav .dropdown-menu .dropdown-menu {
  margin-left: 0.75rem;
}
.navbar-expand-xs .navbar-nav .dropdown-menu {
  background-color: transparent;
}
@media (max-width: 575.98px) {
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    background-color: transparent;
  }
}
@media (max-width: 767.98px) {
  .navbar-expand-md .navbar-nav .dropdown-menu {
    background-color: transparent;
  }
}
@media (max-width: 991.98px) {
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    background-color: transparent;
  }
}
@media (max-width: 1199.98px) {
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    background-color: transparent;
  }
}
.navbar-expand-xs {
  padding-left: 0;
  padding-right: 0;
}
.navbar-expand-xs > [class*="container"] {
  padding-left: 0;
  padding-right: 0;
}
.navbar-expand-xs .navbar-collapse {
  flex-grow: inherit;
}
.navbar-expand-xs .navbar-collapse:before {
  display: none;
}
.navbar-expand-xs .navbar-nav {
  margin-left: 0;
  margin-right: 0;
}
.navbar-expand-xs .navbar-nav .nav-link {
  padding: 0.625rem 0.5rem;
}
.navbar-expand-xs .navbar-nav .nav-link.active {
  position: relative;
}
.navbar-expand-xs .navbar-nav .nav-link.active:before {
  top: auto;
  bottom: calc(-0.75rem - 1px);
  right: 0.5rem;
  left: 0.5rem;
  border-left: 0;
  border-bottom: 1px solid #2c7be5;
}
.navbar-expand-xs .dropdown:hover > .dropdown-menu,
.navbar-expand-xs .dropleft:hover > .dropdown-menu,
.navbar-expand-xs .dropright:hover > .dropdown-menu,
.navbar-expand-xs .dropup:hover > .dropdown-menu {
  display: block;
}
.navbar-expand-xs .navbar-nav .dropdown-menu {
  border: 1px solid rgba(18, 38, 63, 0.1);
}
.navbar-expand-xs .navbar-nav .dropdown-menu .dropdown-menu {
  margin-left: 0;
}
@media (min-width: 576px) {
  .navbar-expand-sm {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-sm > [class*="container"] {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-sm .navbar-collapse {
    flex-grow: inherit;
  }
  .navbar-expand-sm .navbar-collapse:before {
    display: none;
  }
  .navbar-expand-sm .navbar-nav {
    margin-left: 0;
    margin-right: 0;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding: 0.625rem 0.5rem;
  }
  .navbar-expand-sm .navbar-nav .nav-link.active {
    position: relative;
  }
  .navbar-expand-sm .navbar-nav .nav-link.active:before {
    top: auto;
    bottom: calc(-0.75rem - 1px);
    right: 0.5rem;
    left: 0.5rem;
    border-left: 0;
    border-bottom: 1px solid #2c7be5;
  }
  .navbar-expand-sm .dropdown:hover > .dropdown-menu,
  .navbar-expand-sm .dropleft:hover > .dropdown-menu,
  .navbar-expand-sm .dropright:hover > .dropdown-menu,
  .navbar-expand-sm .dropup:hover > .dropdown-menu {
    display: block;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    border: 1px solid rgba(18, 38, 63, 0.1);
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu .dropdown-menu {
    margin-left: 0;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-md > [class*="container"] {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-md .navbar-collapse {
    flex-grow: inherit;
  }
  .navbar-expand-md .navbar-collapse:before {
    display: none;
  }
  .navbar-expand-md .navbar-nav {
    margin-left: 0;
    margin-right: 0;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding: 0.625rem 0.5rem;
  }
  .navbar-expand-md .navbar-nav .nav-link.active {
    position: relative;
  }
  .navbar-expand-md .navbar-nav .nav-link.active:before {
    top: auto;
    bottom: calc(-0.75rem - 1px);
    right: 0.5rem;
    left: 0.5rem;
    border-left: 0;
    border-bottom: 1px solid #2c7be5;
  }
  .navbar-expand-md .dropdown:hover > .dropdown-menu,
  .navbar-expand-md .dropleft:hover > .dropdown-menu,
  .navbar-expand-md .dropright:hover > .dropdown-menu,
  .navbar-expand-md .dropup:hover > .dropdown-menu {
    display: block;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    border: 1px solid rgba(18, 38, 63, 0.1);
  }
  .navbar-expand-md .navbar-nav .dropdown-menu .dropdown-menu {
    margin-left: 0;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-lg > [class*="container"] {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-lg .navbar-collapse {
    flex-grow: inherit;
  }
  .navbar-expand-lg .navbar-collapse:before {
    display: none;
  }
  .navbar-expand-lg .navbar-nav {
    margin-left: 0;
    margin-right: 0;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding: 0.625rem 0.5rem;
  }
  .navbar-expand-lg .navbar-nav .nav-link.active {
    position: relative;
  }
  .navbar-expand-lg .navbar-nav .nav-link.active:before {
    top: auto;
    bottom: calc(-0.75rem - 1px);
    right: 0.5rem;
    left: 0.5rem;
    border-left: 0;
    border-bottom: 1px solid #2c7be5;
  }
  .navbar-expand-lg .dropdown:hover > .dropdown-menu,
  .navbar-expand-lg .dropleft:hover > .dropdown-menu,
  .navbar-expand-lg .dropright:hover > .dropdown-menu,
  .navbar-expand-lg .dropup:hover > .dropdown-menu {
    display: block;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    border: 1px solid rgba(18, 38, 63, 0.1);
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu .dropdown-menu {
    margin-left: 0;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-xl > [class*="container"] {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-expand-xl .navbar-collapse {
    flex-grow: inherit;
  }
  .navbar-expand-xl .navbar-collapse:before {
    display: none;
  }
  .navbar-expand-xl .navbar-nav {
    margin-left: 0;
    margin-right: 0;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding: 0.625rem 0.5rem;
  }
  .navbar-expand-xl .navbar-nav .nav-link.active {
    position: relative;
  }
  .navbar-expand-xl .navbar-nav .nav-link.active:before {
    top: auto;
    bottom: calc(-0.75rem - 1px);
    right: 0.5rem;
    left: 0.5rem;
    border-left: 0;
    border-bottom: 1px solid #2c7be5;
  }
  .navbar-expand-xl .dropdown:hover > .dropdown-menu,
  .navbar-expand-xl .dropleft:hover > .dropdown-menu,
  .navbar-expand-xl .dropright:hover > .dropdown-menu,
  .navbar-expand-xl .dropup:hover > .dropdown-menu {
    display: block;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    border: 1px solid rgba(18, 38, 63, 0.1);
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu .dropdown-menu {
    margin-left: 0;
  }
}
.navbar[class*="fixed-"] {
  z-index: 1030;
}
.navbar-overflow {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: -0.75rem;
  overflow-x: auto;
}
.navbar-overflow::-webkit-scrollbar {
  display: none;
}
.navbar-overflow .navbar-nav {
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
.navbar-overflow .navbar-nav .nav-link {
  padding-bottom: 1.25rem;
}
.navbar-overflow .navbar-nav .nav-link.active:before {
  bottom: 0;
}
.navbar-breadcrumb {
  padding: 0.5rem 0;
}
.navbar-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.navbar-user .dropdown-toggle:after {
  display: none;
}
.navbar-nav .nav-link > .fe {
  display: inline-block;
  min-width: 1.75rem;
}
.navbar-vertical .navbar-nav .nav-link {
  display: flex;
  align-items: center;
}
.navbar-vertical .navbar-nav .nav-link[data-toggle="collapse"]:after {
  display: block;
  content: "\\e92e";
  font-family: Feather;
  margin-left: auto;
  transition: transform 0.2s;
}
.navbar-vertical
  .navbar-nav
  .nav-link[data-toggle="collapse"][aria-expanded="true"]:after {
  transform: rotate(-180deg);
}
.navbar-vertical .navbar-nav .nav .nav-link {
  padding-left: 2.75rem;
}
.navbar-vertical .navbar-nav .nav .nav .nav-link {
  padding-left: 3.25rem;
}
.navbar-vertical .navbar-nav .nav .nav .nav .nav-link {
  padding-left: 3.75rem;
}
.navbar-vertical .navbar-heading {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.navbar-vertical.navbar-expand-xs {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 250px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  overflow-y: auto;
}
.navbar-vertical.navbar-expand-xs > [class*="container"] {
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;
  padding-left: 0;
  padding-right: 0;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-xs > [class*="container"] {
    min-height: none;
    height: 100%;
  }
}
.navbar-vertical.navbar-expand-xs.fixed-left {
  left: 0;
  border-width: 0 1px 0 0;
}
.navbar-vertical.navbar-expand-xs.fixed-right {
  right: 0;
  border-width: 0 0 0 1px;
}
.navbar-vertical.navbar-expand-xs .navbar-collapse {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.navbar-vertical.navbar-expand-xs .navbar-collapse > * {
  min-width: 100%;
}
.navbar-vertical.navbar-expand-xs .navbar-nav {
  flex-direction: column;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}
.navbar-vertical.navbar-expand-xs .navbar-nav .nav-link {
  padding: 0.5rem 1.5rem;
}
.navbar-vertical.navbar-expand-xs .navbar-nav .nav-link.active:before {
  top: 0.5rem;
  bottom: 0.5rem;
  left: 0;
  right: auto;
  border-left: 2px solid #2c7be5;
  border-bottom: 0;
}
.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link {
  padding-left: 3.25rem;
}
.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav .nav-link {
  padding-left: 4rem;
}
.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav .nav .nav-link {
  padding-left: 4.75rem;
}
.navbar-vertical.navbar-expand-xs .navbar-brand {
  display: block;
  text-align: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.navbar-vertical.navbar-expand-xs .navbar-brand-img {
  max-height: 3rem;
}
.navbar-vertical.navbar-expand-xs .navbar-user {
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-top-width: 1px;
  border-top-style: solid;
}
.navbar-vertical.navbar-expand-xs .navbar-user .dropup .dropdown-menu {
  left: 50%;
  transform: translateX(-50%);
}
@media (min-width: 576px) {
  .navbar-vertical.navbar-expand-sm {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 250px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    overflow-y: auto;
  }
  .navbar-vertical.navbar-expand-sm > [class*="container"] {
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
@media all and (min-width: 576px) and (-ms-high-contrast: none),
  (min-width: 576px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-sm > [class*="container"] {
    min-height: none;
    height: 100%;
  }
}
@media (min-width: 576px) {
  .navbar-vertical.navbar-expand-sm.fixed-left {
    left: 0;
    border-width: 0 1px 0 0;
  }
  .navbar-vertical.navbar-expand-sm.fixed-right {
    right: 0;
    border-width: 0 0 0 1px;
  }
  .navbar-vertical.navbar-expand-sm .navbar-collapse {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-collapse > * {
    min-width: 100%;
  }
  .navbar-vertical.navbar-expand-sm .navbar-nav {
    flex-direction: column;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link {
    padding: 0.5rem 1.5rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav-link.active:before {
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0;
    right: auto;
    border-left: 2px solid #2c7be5;
    border-bottom: 0;
  }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link {
    padding-left: 3.25rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav .nav-link {
    padding-left: 4rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav .nav .nav-link {
    padding-left: 4.75rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-brand {
    display: block;
    text-align: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-brand-img {
    max-height: 3rem;
  }
  .navbar-vertical.navbar-expand-sm .navbar-user {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-top-width: 1px;
    border-top-style: solid;
  }
  .navbar-vertical.navbar-expand-sm .navbar-user .dropup .dropdown-menu {
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (min-width: 768px) {
  .navbar-vertical.navbar-expand-md {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 250px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    overflow-y: auto;
  }
  .navbar-vertical.navbar-expand-md > [class*="container"] {
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
@media all and (min-width: 768px) and (-ms-high-contrast: none),
  (min-width: 768px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-md > [class*="container"] {
    min-height: none;
    height: 100%;
  }
}
@media (min-width: 768px) {
  .navbar-vertical.navbar-expand-md.fixed-left {
    left: 0;
    border-width: 0 1px 0 0;
  }
  .navbar-vertical.navbar-expand-md.fixed-right {
    right: 0;
    border-width: 0 0 0 1px;
  }
  .navbar-vertical.navbar-expand-md .navbar-collapse {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-collapse > * {
    min-width: 100%;
  }
  .navbar-vertical.navbar-expand-md .navbar-nav {
    flex-direction: column;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav-link {
    padding: 0.5rem 1.5rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav-link.active:before {
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0;
    right: auto;
    border-left: 2px solid #2c7be5;
    border-bottom: 0;
  }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link {
    padding-left: 3.25rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav .nav-link {
    padding-left: 4rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-nav .nav .nav .nav .nav-link {
    padding-left: 4.75rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-brand {
    display: block;
    text-align: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-brand-img {
    max-height: 3rem;
  }
  .navbar-vertical.navbar-expand-md .navbar-user {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-top-width: 1px;
    border-top-style: solid;
  }
  .navbar-vertical.navbar-expand-md .navbar-user .dropup .dropdown-menu {
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (min-width: 992px) {
  .navbar-vertical.navbar-expand-lg {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 250px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    overflow-y: auto;
  }
  .navbar-vertical.navbar-expand-lg > [class*="container"] {
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
@media all and (min-width: 992px) and (-ms-high-contrast: none),
  (min-width: 992px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-lg > [class*="container"] {
    min-height: none;
    height: 100%;
  }
}
@media (min-width: 992px) {
  .navbar-vertical.navbar-expand-lg.fixed-left {
    left: 0;
    border-width: 0 1px 0 0;
  }
  .navbar-vertical.navbar-expand-lg.fixed-right {
    right: 0;
    border-width: 0 0 0 1px;
  }
  .navbar-vertical.navbar-expand-lg .navbar-collapse {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-collapse > * {
    min-width: 100%;
  }
  .navbar-vertical.navbar-expand-lg .navbar-nav {
    flex-direction: column;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link {
    padding: 0.5rem 1.5rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav-link.active:before {
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0;
    right: auto;
    border-left: 2px solid #2c7be5;
    border-bottom: 0;
  }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link {
    padding-left: 3.25rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav .nav-link {
    padding-left: 4rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav .nav .nav-link {
    padding-left: 4.75rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-brand {
    display: block;
    text-align: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-brand-img {
    max-height: 3rem;
  }
  .navbar-vertical.navbar-expand-lg .navbar-user {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-top-width: 1px;
    border-top-style: solid;
  }
  .navbar-vertical.navbar-expand-lg .navbar-user .dropup .dropdown-menu {
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (min-width: 1200px) {
  .navbar-vertical.navbar-expand-xl {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 250px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    overflow-y: auto;
  }
  .navbar-vertical.navbar-expand-xl > [class*="container"] {
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
@media all and (min-width: 1200px) and (-ms-high-contrast: none),
  (min-width: 1200px) and (-ms-high-contrast: active) {
  .navbar-vertical.navbar-expand-xl > [class*="container"] {
    min-height: none;
    height: 100%;
  }
}
@media (min-width: 1200px) {
  .navbar-vertical.navbar-expand-xl.fixed-left {
    left: 0;
    border-width: 0 1px 0 0;
  }
  .navbar-vertical.navbar-expand-xl.fixed-right {
    right: 0;
    border-width: 0 0 0 1px;
  }
  .navbar-vertical.navbar-expand-xl .navbar-collapse {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-collapse > * {
    min-width: 100%;
  }
  .navbar-vertical.navbar-expand-xl .navbar-nav {
    flex-direction: column;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link {
    padding: 0.5rem 1.5rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav-link.active:before {
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0;
    right: auto;
    border-left: 2px solid #2c7be5;
    border-bottom: 0;
  }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link {
    padding-left: 3.25rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav .nav-link {
    padding-left: 4rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav .nav .nav-link {
    padding-left: 4.75rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-brand {
    display: block;
    text-align: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-brand-img {
    max-height: 3rem;
  }
  .navbar-vertical.navbar-expand-xl .navbar-user {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-top-width: 1px;
    border-top-style: solid;
  }
  .navbar-vertical.navbar-expand-xl .navbar-user .dropup .dropdown-menu {
    left: 50%;
    transform: translateX(-50%);
  }
}
.navbar-vertical-sm.navbar-expand-xs {
  max-width: 66px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  overflow: visible;
}
.navbar-vertical-sm.navbar-expand-xs .navbar-brand {
  padding-top: 0.45313rem;
  padding-bottom: 1.20313rem;
}
.navbar-vertical-sm.navbar-expand-xs .navbar-brand-img {
  width: auto;
  max-height: 1.5rem;
}
.navbar-vertical-sm.navbar-expand-xs .navbar-collapse {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.navbar-vertical-sm.navbar-expand-xs .navbar-nav {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}
.navbar-vertical-sm.navbar-expand-xs .navbar-nav > .nav-item > .nav-link {
  justify-content: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: center;
}
.navbar-vertical-sm.navbar-expand-xs
  .navbar-nav
  > .nav-item
  > .dropdown-toggle::after {
  display: none;
}
.navbar-vertical-sm.navbar-expand-xs .navbar-user {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.navbar-vertical-sm.navbar-expand-xs .navbar-user .dropright .dropdown-menu {
  top: auto;
  bottom: 0;
}
@media (min-width: 576px) {
  .navbar-vertical-sm.navbar-expand-sm {
    max-width: 66px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    overflow: visible;
  }
  .navbar-vertical-sm.navbar-expand-sm .navbar-brand {
    padding-top: 0.45313rem;
    padding-bottom: 1.20313rem;
  }
  .navbar-vertical-sm.navbar-expand-sm .navbar-brand-img {
    width: auto;
    max-height: 1.5rem;
  }
  .navbar-vertical-sm.navbar-expand-sm .navbar-collapse {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-sm .navbar-nav {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-sm .navbar-nav > .nav-item > .nav-link {
    justify-content: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    text-align: center;
  }
  .navbar-vertical-sm.navbar-expand-sm
    .navbar-nav
    > .nav-item
    > .dropdown-toggle::after {
    display: none;
  }
  .navbar-vertical-sm.navbar-expand-sm .navbar-user {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-sm .navbar-user .dropright .dropdown-menu {
    top: auto;
    bottom: 0;
  }
}
@media (min-width: 768px) {
  .navbar-vertical-sm.navbar-expand-md {
    max-width: 66px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    overflow: visible;
  }
  .navbar-vertical-sm.navbar-expand-md .navbar-brand {
    padding-top: 0.45313rem;
    padding-bottom: 1.20313rem;
  }
  .navbar-vertical-sm.navbar-expand-md .navbar-brand-img {
    width: auto;
    max-height: 1.5rem;
  }
  .navbar-vertical-sm.navbar-expand-md .navbar-collapse {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-md .navbar-nav {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-md .navbar-nav > .nav-item > .nav-link {
    justify-content: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    text-align: center;
  }
  .navbar-vertical-sm.navbar-expand-md
    .navbar-nav
    > .nav-item
    > .dropdown-toggle::after {
    display: none;
  }
  .navbar-vertical-sm.navbar-expand-md .navbar-user {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-md .navbar-user .dropright .dropdown-menu {
    top: auto;
    bottom: 0;
  }
}
@media (min-width: 992px) {
  .navbar-vertical-sm.navbar-expand-lg {
    max-width: 66px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    overflow: visible;
  }
  .navbar-vertical-sm.navbar-expand-lg .navbar-brand {
    padding-top: 0.45313rem;
    padding-bottom: 1.20313rem;
  }
  .navbar-vertical-sm.navbar-expand-lg .navbar-brand-img {
    width: auto;
    max-height: 1.5rem;
  }
  .navbar-vertical-sm.navbar-expand-lg .navbar-collapse {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-lg .navbar-nav {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-lg .navbar-nav > .nav-item > .nav-link {
    justify-content: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    text-align: center;
  }
  .navbar-vertical-sm.navbar-expand-lg
    .navbar-nav
    > .nav-item
    > .dropdown-toggle::after {
    display: none;
  }
  .navbar-vertical-sm.navbar-expand-lg .navbar-user {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-lg .navbar-user .dropright .dropdown-menu {
    top: auto;
    bottom: 0;
  }
}
@media (min-width: 1200px) {
  .navbar-vertical-sm.navbar-expand-xl {
    max-width: 66px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    overflow: visible;
  }
  .navbar-vertical-sm.navbar-expand-xl .navbar-brand {
    padding-top: 0.45313rem;
    padding-bottom: 1.20313rem;
  }
  .navbar-vertical-sm.navbar-expand-xl .navbar-brand-img {
    width: auto;
    max-height: 1.5rem;
  }
  .navbar-vertical-sm.navbar-expand-xl .navbar-collapse {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-xl .navbar-nav {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-xl .navbar-nav > .nav-item > .nav-link {
    justify-content: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    text-align: center;
  }
  .navbar-vertical-sm.navbar-expand-xl
    .navbar-nav
    > .nav-item
    > .dropdown-toggle::after {
    display: none;
  }
  .navbar-vertical-sm.navbar-expand-xl .navbar-user {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .navbar-vertical-sm.navbar-expand-xl .navbar-user .dropright .dropdown-menu {
    top: auto;
    bottom: 0;
  }
}
.pagination-lg .page,
.pagination-lg .page-link {
  font-size: 0.9375rem;
}
.pagination-tabs {
  border-radius: 0;
  border-top: 1px solid #e3ebf6;
}
.pagination-tabs .page,
.pagination-tabs .page-link {
  margin-top: -1px;
  padding: 1.25rem 0.75rem;
  background-color: transparent;
  border-width: 1px 0 0 0;
  border-radius: 0 !important;
  color: #95aac9;
}
.pagination-tabs .page-link:hover,
.pagination-tabs .page:hover {
  color: #12263f;
}
.pagination-tabs .active .page,
.pagination-tabs .active .page-link {
  background-color: transparent;
  border-color: #2c7be5;
  color: #12263f;
}
.pagination-overflow {
  flex-wrap: nowrap;
  overflow-x: auto;
}
.pagination-overflow::-webkit-scrollbar {
  display: none;
}
.pagination-overflow .page,
.pagination-overflow .page-link {
  white-space: nowrap;
}
.popover {
  padding: 0.8rem 0.95rem;
}
.popover:hover {
  visibility: visible !important;
}
.popover-header {
  margin-bottom: 0.25rem;
  border-bottom: 0;
}
.popover-body-label {
  margin-left: 0.25rem;
}
.popover-body-value {
  margin-left: 0.25rem;
}
.popover-body-indicator {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.popover-lg {
  max-width: 300px;
}
.popover-dark {
  background-color: #12263f;
  border-color: #12263f;
}
.popover-dark .popover-header {
  font-weight: 400;
  background-color: #12263f;
  color: #fff;
}
.popover-dark.bs-popover-auto[x-placement^="top"] .arrow::before,
.popover-dark.bs-popover-top .arrow::before {
  border-top-color: #12263f;
}
.popover-dark.bs-popover-auto[x-placement^="top"] .arrow::after,
.popover-dark.bs-popover-top .arrow::after {
  border-top-color: #12263f;
}
.popover-dark.bs-popover-auto[x-placement^="right"] .arrow::before,
.popover-dark.bs-popover-right .arrow::before {
  border-right-color: #12263f;
}
.popover-dark.bs-popover-auto[x-placement^="right"] .arrow::after,
.popover-dark.bs-popover-right .arrow::after {
  border-right-color: #12263f;
}
.popover-dark.bs-popover-auto[x-placement^="bottom"] .arrow::before,
.popover-dark.bs-popover-bottom .arrow::before {
  border-bottom-color: #12263f;
}
.popover-dark.bs-popover-auto[x-placement^="bottom"] .arrow::after,
.popover-dark.bs-popover-bottom .arrow::after {
  border-bottom-color: #12263f;
}
.popover-dark.bs-popover-auto[x-placement^="left"] .arrow::before,
.popover-dark.bs-popover-left .arrow::before {
  border-left-color: #12263f;
}
.popover-dark.bs-popover-auto[x-placement^="left"] .arrow::after,
.popover-dark.bs-popover-left .arrow::after {
  border-left-color: #12263f;
}
.progress-bar:first-child {
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
}
.progress-bar:last-child {
  border-top-right-radius: 200px;
  border-bottom-right-radius: 200px;
}
.progress-sm {
  height: 0.25rem;
}
[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
}
.table thead th {
  background-color: #f9fbfd;
  text-transform: uppercase;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #95aac9;
  border-bottom-width: 1px;
}
.table tbody td,
.table tbody th,
.table thead th {
  vertical-align: middle;
}
.table-sm {
  font-size: 0.8125rem;
}
.table-sm thead th {
  font-size: 0.625rem;
}
.table-nowrap td,
.table-nowrap th {
  white-space: nowrap;
}
.table [data-sort] {
  white-space: nowrap;
}
.table [data-sort]::after {
  content: url("data:image/svg+xml;utf8,<svg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M3 0L6 4H0L3 0ZM3 10L0 6H6L3 10Z' fill='%2395AAC9'/></svg>");
  margin-left: 0.25rem;
}
.table-checkbox {
  min-height: 0;
}
.table-checkbox .custom-control-label::after,
.table-checkbox .custom-control-label::before {
  top: 50%;
  transform: translateY(-50%);
}
.table a[class*="text-reset"]:hover {
  color: #2c7be5 !important;
}
.h1,
h1 {
  margin-bottom: 1.125rem;
  font-size: 1.5rem;
}
@media (min-width: 768px) {
  .h1,
  h1 {
    font-size: 1.625rem;
  }
}
.h2,
h2 {
  margin-bottom: 1.125rem;
}
.h3,
h3 {
  margin-bottom: 0.84375rem;
}
.h4,
h4 {
  margin-bottom: 0.5625rem;
}
.h5,
h5 {
  margin-bottom: 0.5625rem;
}
.h6,
h6 {
  margin-bottom: 0.5625rem;
}
.h1 > a,
.h2 > a,
.h3 > a,
.h4 > a,
.h5 > a,
.h6 > a,
h1 > a,
h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a {
  color: inherit;
}
.display-1,
.display-2,
.display-3,
.display-4 {
  letter-spacing: -0.02em;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.02em;
}
h6.text-uppercase {
  letter-spacing: 0.08em;
}
b,
strong {
  font-weight: 600;
}
a:focus,
button:focus {
  outline: 0 !important;
}
@font-face {
  font-family: "Cerebri Sans";
  src: url(__VITE_ASSET__2b590207__);
  src: url(__VITE_ASSET__2b590207__$_?#iefix__)
      format("embedded-opentype"),
    url(__VITE_ASSET__1dfe61a1__) format("woff"),
    url(__VITE_ASSET__e4ecad79__) format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Cerebri Sans";
  src: url(__VITE_ASSET__01926de3__);
  src: url(__VITE_ASSET__01926de3__$_?#iefix__)
      format("embedded-opentype"),
    url(__VITE_ASSET__01ae6777__) format("woff"),
    url(__VITE_ASSET__a4c7c18f__) format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Cerebri Sans";
  src: url(__VITE_ASSET__3023135a__);
  src: url(__VITE_ASSET__3023135a__$_?#iefix__)
      format("embedded-opentype"),
    url(__VITE_ASSET__2baa0396__) format("woff"),
    url(__VITE_ASSET__5bd86834__) format("truetype");
  font-weight: 600;
  font-style: normal;
}
.bg-fixed-bottom {
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 100% auto;
  background-attachment: fixed;
}
.navbar-vertical ~ .main-content.bg-fixed-bottom {
  background-size: 100%;
}
@media (min-width: 768px) {
  .navbar-vertical ~ .main-content.bg-fixed-bottom {
    background-size: calc(100% - 250px);
  }
}
.bg-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.bg-auth {
  background-color: #fff;
}
.bg-ellipses.bg-primary {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#2c7be5, #2c7be5 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-secondary {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#6e84a3, #6e84a3 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-success {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#00d97e, #00d97e 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-info {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#39afd1, #39afd1 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-warning {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#f6c343, #f6c343 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-danger {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#e63757, #e63757 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-light {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#edf2f9, #edf2f9 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-dark {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#12263f, #12263f 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-ellipses.bg-white {
  background-color: transparent !important;
  background-repeat: no-repeat;
  background-image: radial-gradient(#fff, #fff 70%, transparent 70.1%);
  background-size: 200% 150%;
  background-position: center bottom;
}
.bg-hero {
  background-image: linear-gradient(
      to bottom,
      rgba(18, 38, 63, 0.85),
      rgba(18, 38, 63, 0.85)
    ),
    url(../img/covers/header-cover.jpg);
  background-repeat: no-repeat, no-repeat;
  background-position: center center, center center;
  background-size: cover, cover;
}
.bg-lighter {
  background-color: #f9fbfd !important;
}
.bg-primary-soft {
  background-color: #e6effc !important;
}
.bg-secondary-soft {
  background-color: #eef0f4 !important;
}
.bg-success-soft {
  background-color: #e0faf0 !important;
}
.bg-info-soft {
  background-color: #e7f5f9 !important;
}
.bg-warning-soft {
  background-color: #fef8e8 !important;
}
.bg-danger-soft {
  background-color: #fce7eb !important;
}
.bg-light-soft {
  background-color: #fdfdfe !important;
}
.bg-dark-soft {
  background-color: #e3e5e8 !important;
}
.bg-white-soft {
  background-color: #fff !important;
}
.border-2 {
  border-width: 2px !important;
}
.border-top-2 {
  border-top-width: 2px !important;
}
.border-right-2 {
  border-right-width: 2px !important;
}
.border-bottom-2 {
  border-bottom-width: 2px !important;
}
.border-left-2 {
  border-left-width: 2px !important;
}
.border-3 {
  border-width: 3px !important;
}
.border-top-3 {
  border-top-width: 3px !important;
}
.border-right-3 {
  border-right-width: 3px !important;
}
.border-bottom-3 {
  border-bottom-width: 3px !important;
}
.border-left-3 {
  border-left-width: 3px !important;
}
.border-4 {
  border-width: 4px !important;
}
.border-top-4 {
  border-top-width: 4px !important;
}
.border-right-4 {
  border-right-width: 4px !important;
}
.border-bottom-4 {
  border-bottom-width: 4px !important;
}
.border-left-4 {
  border-left-width: 4px !important;
}
.border-5 {
  border-width: 5px !important;
}
.border-top-5 {
  border-top-width: 5px !important;
}
.border-right-5 {
  border-right-width: 5px !important;
}
.border-bottom-5 {
  border-bottom-width: 5px !important;
}
.border-left-5 {
  border-left-width: 5px !important;
}
.border-body {
  border-color: #f9fbfd !important;
}
.border-card {
  border-color: #fff !important;
}
.lift {
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.lift:focus,
.lift:hover {
  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1),
    0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;
  transform: translate3d(0, -3px, 0);
}
.lift-lg:focus,
.lift-lg:hover {
  box-shadow: 0 2rem 5rem rgba(18, 38, 63, 0.1),
    0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.05) !important;
  transform: translate3d(0, -5px, 0);
}
.vw-100 {
  width: 100vw !important;
}
.vh-100 {
  height: 100vh !important;
}
.font-size-base {
  font-size: 0.9375rem !important;
}
.font-size-sm {
  font-size: 0.8125rem !important;
}
.font-size-lg {
  font-size: 1.0625rem !important;
}
.text-decoration-underline {
  text-decoration: underline !important;
}
.text-gray-100 {
  color: #f9fbfd !important;
}
.text-gray-200 {
  color: #edf2f9 !important;
}
.text-gray-300 {
  color: #e3ebf6 !important;
}
.text-gray-400 {
  color: #d2ddec !important;
}
.text-gray-500 {
  color: #b1c2d9 !important;
}
.text-gray-600 {
  color: #95aac9 !important;
}
.text-gray-700 {
  color: #6e84a3 !important;
}
.text-gray-800 {
  color: #3b506c !important;
}
.text-gray-900 {
  color: #283e59 !important;
}
.avatar {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  font-size: 1rem;
}
.avatar:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
}
.avatar-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.avatar-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 0;
  background-color: #b1c2d9;
  color: #fff;
}
.avatar-offline::before,
.avatar-online::before {
  content: "";
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 20%;
  height: 20%;
  border-radius: 50%;
}
.avatar-offline .avatar-img,
.avatar-online .avatar-img {
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
.avatar-online::before {
  background-color: #00d97e;
}
.avatar-offline::before {
  background-color: #b1c2d9;
}
.avatar-xs {
  width: 1.625rem;
  height: 1.625rem;
  font-size: 0.54167rem;
}
.avatar-sm {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.83333rem;
}
.avatar-lg {
  width: 4rem;
  height: 4rem;
  font-size: 1.33333rem;
}
.avatar-xl {
  width: 5.125rem;
  height: 5.125rem;
  font-size: 1.70833rem;
}
.avatar-xxl {
  width: 5.125rem;
  height: 5.125rem;
  font-size: 1.70833rem;
}
@media (min-width: 768px) {
  .avatar-xxl {
    width: 8rem;
    height: 8rem;
    font-size: 2.66667rem;
  }
}
.avatar.avatar-4by3 {
  width: 4rem;
}
.avatar-xs.avatar-4by3 {
  width: 2.16667rem;
}
.avatar-sm.avatar-4by3 {
  width: 3.33333rem;
}
.avatar-lg.avatar-4by3 {
  width: 5.33333rem;
}
.avatar-xl.avatar-4by3 {
  width: 6.83333rem;
}
.avatar-xxl.avatar-4by3 {
  width: 10.66667rem;
}
.avatar-group {
  display: inline-flex;
}
.avatar-group .avatar + .avatar {
  margin-left: -0.75rem;
}
.avatar-group .avatar-xs + .avatar-xs {
  margin-left: -0.40625rem;
}
.avatar-group .avatar-sm + .avatar-sm {
  margin-left: -0.625rem;
}
.avatar-group .avatar-lg + .avatar-lg {
  margin-left: -1rem;
}
.avatar-group .avatar-xl + .avatar-xl {
  margin-left: -1.28125rem;
}
.avatar-group .avatar-xxl + .avatar-xxl {
  margin-left: -2rem;
}
.avatar-group .avatar:not(:last-child) {
  -webkit-mask-image: url(../img/masks/avatar-group.svg);
  mask-image: url(../img/masks/avatar-group.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
.avatar-group .avatar:hover {
  -webkit-mask-image: none;
  mask-image: none;
  z-index: 1;
}
.avatar-group .avatar:hover + .avatar {
  -webkit-mask-image: url(../img/masks/avatar-group-hover.svg);
  mask-image: url(../img/masks/avatar-group-hover.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
.avatar-group .avatar:hover + .avatar:last-child {
  -webkit-mask-image: url(../img/masks/avatar-group-hover-last.svg);
  mask-image: url(../img/masks/avatar-group-hover-last.svg);
}
.chart {
  position: relative;
  height: 300px;
}
.chart.chart-appended {
  height: calc(300px - 3.71875rem);
}
.chart-sm {
  height: 225px;
}
.chart-sm.chart-appended {
  height: calc(225px - 3.71875rem);
}
.chart-sparkline {
  width: 75px;
  height: 35px;
}
.chart-legend {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  font-size: 0.8125rem;
  text-align: center;
  color: #95aac9;
}
.chart-legend-item {
  display: inline-flex;
  align-items: center;
}
.chart-legend-item + .chart-legend-item {
  margin-left: 1rem;
}
.chart-legend-indicator {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.375rem;
  border-radius: 50%;
}
#chart-tooltip {
  z-index: 0;
}
#chart-tooltip .arrow {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateX(-0.5rem);
}
.comment {
  margin-bottom: 1rem;
}
.comment-body {
  display: inline-block;
  padding: 1rem 1.25rem;
  background-color: #f9fbfd;
  border-radius: 0.5rem;
}
.comment-time {
  display: block;
  margin-bottom: 0.5625rem;
  font-size: 0.625rem;
  color: #95aac9;
}
.comment-text {
  font-size: 0.8125rem;
}
.comment-text:last-child {
  margin-bottom: 0;
}
.checklist {
  outline: 0;
}
.checklist-control {
  display: flex;
  flex-wrap: nowrap;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checklist-control .custom-control-input:checked ~ .custom-control-caption {
  text-decoration: line-through;
  color: #6e84a3;
}
.checklist-control + .checklist-control {
  margin-top: 0.75rem;
}
.checklist-control:first-child[style*="display: none"] + .checklist-control {
  margin-top: 0;
}
.checklist-control.draggable-mirror {
  z-index: 1030;
}
.checklist-control.draggable-source--is-dragging {
  opacity: 0.2;
}
.header {
  margin-bottom: 2rem;
}
.header-img-top {
  width: 100%;
  height: auto;
}
.header-body {
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid #e3ebf6;
}
.header.bg-dark .header-body,
.header.bg-hero .header-body {
  border-bottom-color: rgba(227, 235, 246, 0.1);
}
.header-footer {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.header-pretitle {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #95aac9;
}
.header-title {
  margin-bottom: 0;
}
.header-subtitle {
  margin-top: 0.375rem;
  margin-bottom: 0;
  color: #95aac9;
}
.header-tabs {
  margin-bottom: -1.5rem;
  border-bottom-width: 0;
}
.header-tabs .nav-link {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.icon {
  display: inline-block;
}
.icon > .fe {
  display: block;
  min-width: 1.5em;
  min-height: 1.5em;
  text-align: center;
  font-size: 1.0625rem;
}
.icon.active {
  position: relative;
}
.icon.active > .fe {
  -webkit-mask-image: url(../img/masks/icon-status.svg);
  mask-image: url(../img/masks/icon-status.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
.icon.active::after {
  content: "";
  position: absolute;
  top: 10%;
  right: 20%;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background-color: #2c7be5;
}
.fe {
  line-height: inherit;
}
.container-fluid.kanban-container,
.kanban-container.container-lg,
.kanban-container.container-md,
.kanban-container.container-sm,
.kanban-container.container-xl {
  min-height: calc(100vh - 129px);
}
.container.kanban-container {
  min-height: calc(100vh - 129px - 69px);
}
.kanban-container {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
.kanban-container > .row {
  flex-wrap: nowrap;
}
.kanban-container > .row > [class*="col"] {
  max-width: 375px;
}
.kanban-category {
  min-height: 1rem;
}
.kanban-item {
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.kanban-item.draggable-source--is-dragging {
  opacity: 0.2;
}
.kanban-item.draggable-mirror {
  z-index: 1030;
}
.card-body .kanban-item.draggable-mirror > .card {
  transform: rotateZ(-3deg);
}
.kanban-item > .card[data-toggle="modal"] {
  cursor: pointer;
}
.kanban-add-form .form-control[data-toggle="flatpickr"] {
  width: 12ch;
}
@media (min-width: 768px) {
  .navbar-vertical-sm:not([style*="display: none"]) ~ .main-content .container,
  .navbar-vertical-sm:not([style*="display: none"])
    ~ .main-content
    .container-fluid,
  .navbar-vertical-sm:not([style*="display: none"])
    ~ .main-content
    .container-lg,
  .navbar-vertical-sm:not([style*="display: none"])
    ~ .main-content
    .container-md,
  .navbar-vertical-sm:not([style*="display: none"])
    ~ .main-content
    .container-sm,
  .navbar-vertical-sm:not([style*="display: none"])
    ~ .main-content
    .container-xl,
  .navbar-vertical:not([style*="display: none"]) ~ .main-content .container,
  .navbar-vertical:not([style*="display: none"])
    ~ .main-content
    .container-fluid,
  .navbar-vertical:not([style*="display: none"]) ~ .main-content .container-lg,
  .navbar-vertical:not([style*="display: none"]) ~ .main-content .container-md,
  .navbar-vertical:not([style*="display: none"]) ~ .main-content .container-sm,
  .navbar-vertical:not([style*="display: none"]) ~ .main-content .container-xl {
    padding-left: 36px !important;
    padding-right: 36px !important;
  }
}
.navbar-vertical.navbar-expand-xs.fixed-left:not([style*="display: none"])
  ~ .main-content {
  margin-left: 250px;
}
.navbar-vertical.navbar-expand-xs.fixed-right:not([style*="display: none"])
  ~ .main-content {
  margin-right: 250px;
}
@media (min-width: 576px) {
  .navbar-vertical.navbar-expand-sm.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 250px;
  }
  .navbar-vertical.navbar-expand-sm.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 250px;
  }
}
@media (min-width: 768px) {
  .navbar-vertical.navbar-expand-md.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 250px;
  }
  .navbar-vertical.navbar-expand-md.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 250px;
  }
}
@media (min-width: 992px) {
  .navbar-vertical.navbar-expand-lg.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 250px;
  }
  .navbar-vertical.navbar-expand-lg.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 250px;
  }
}
@media (min-width: 1200px) {
  .navbar-vertical.navbar-expand-xl.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 250px;
  }
  .navbar-vertical.navbar-expand-xl.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 250px;
  }
}
.navbar-vertical-sm.navbar-expand-xs.fixed-left:not([style*="display: none"])
  ~ .main-content {
  margin-left: 66px;
}
.navbar-vertical-sm.navbar-expand-xs.fixed-right:not([style*="display: none"])
  ~ .main-content {
  margin-right: 66px;
}
@media (min-width: 576px) {
  .navbar-vertical-sm.navbar-expand-sm.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 66px;
  }
  .navbar-vertical-sm.navbar-expand-sm.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 66px;
  }
}
@media (min-width: 768px) {
  .navbar-vertical-sm.navbar-expand-md.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 66px;
  }
  .navbar-vertical-sm.navbar-expand-md.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 66px;
  }
}
@media (min-width: 992px) {
  .navbar-vertical-sm.navbar-expand-lg.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 66px;
  }
  .navbar-vertical-sm.navbar-expand-lg.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 66px;
  }
}
@media (min-width: 1200px) {
  .navbar-vertical-sm.navbar-expand-xl.fixed-left:not([style*="display: none"])
    ~ .main-content {
    margin-left: 66px;
  }
  .navbar-vertical-sm.navbar-expand-xl.fixed-right:not([style*="display: none"])
    ~ .main-content {
    margin-right: 66px;
  }
}
.dropzone {
  position: relative;
  display: flex;
  flex-direction: column;
}
.dz-message {
  padding: 5rem 1rem;
  background-color: #fff;
  border: 1px dashed #d2ddec;
  border-radius: 0.375rem;
  text-align: center;
  color: #95aac9;
  transition: all 0.2s ease-in-out;
  order: -1;
  cursor: pointer;
  z-index: 999;
}
.dz-message:hover {
  border-color: #95aac9;
  color: #12263f;
}
.dz-button {
  background: 0 0;
  border: 0;
  font-size: inherit;
  color: inherit;
}
.dz-drag-hover .dz-message {
  border-color: #2c7be5;
  color: #2c7be5;
}
.dropzone-multiple .dz-message {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.dropzone-single.dz-max-files-reached .dz-message {
  background-color: rgba(18, 38, 63, 0.9);
  color: #fff;
  opacity: 0;
}
.dropzone-single.dz-max-files-reached .dz-message:hover {
  opacity: 1;
}
.dz-preview-single {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.375rem;
}
.dz-preview-cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.375rem;
}
.dz-preview-img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
}
.dz-preview-multiple .list-group-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
[data-dz-size] strong {
  font-weight: 400;
}
.flatpickr-calendar {
  background-color: #fff;
  border: 1px solid #d2ddec;
  color: #12263f;
  box-shadow: none;
}
.flatpickr-calendar * {
  color: inherit !important;
  fill: currentColor !important;
}
.flatpickr-calendar.arrowTop:before {
  border-bottom-color: #d2ddec;
}
.flatpickr-calendar.arrowTop:after {
  border-bottom-color: #fff;
}
.flatpickr-calendar .flatpickr-months {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.flatpickr-calendar .flatpickr-next-month,
.flatpickr-calendar .flatpickr-prev-month {
  top: 0.625rem;
}
.flatpickr-calendar .flatpickr-current-month {
  font-size: 115%;
}
.flatpickr-calendar .flatpickr-day {
  border-radius: 0.375rem;
}
.flatpickr-calendar .flatpickr-day:hover {
  background-color: #edf2f9;
  border-color: #d2ddec;
}
.flatpickr-calendar .flatpickr-day.prevMonthDay {
  color: #95aac9 !important;
}
.flatpickr-calendar .flatpickr-day.today {
  border-color: #e3ebf6;
}
.flatpickr-calendar .flatpickr-day.selected {
  background-color: #2c7be5;
  border-color: #2c7be5;
  color: #fff !important;
}
.flatpickr-calendar .flatpickr-day.inRange {
  background-color: #edf2f9;
  border: none;
  border-radius: 0;
  box-shadow: -5px 0 0 #edf2f9, 5px 0 0 #edf2f9;
}
.ql-container {
  font-family: "Cerebri Sans", sans-serif;
}
.ql-toolbar {
  position: relative;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: 1px solid #d2ddec;
  border-radius: 0.375rem 0.375rem 0 0;
  color: #12263f;
}
.ql-toolbar + .ql-container {
  margin-top: -1px;
}
.ql-toolbar + .ql-container .ql-editor {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.ql-editor {
  min-height: 5.625rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #12263f;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d2ddec;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ql-editor {
    transition: none;
  }
}
.ql-editor::-ms-expand {
  background-color: transparent;
  border: 0;
}
.ql-editor:focus {
  color: #12263f;
  background-color: #fff;
  border-color: #2c7be5;
  outline: 0;
  box-shadow: transparent;
}
.ql-hidden {
  position: absolute;
  transform: scale(0);
}
.ql-editor.ql-blank::before {
  top: 0.5rem;
  left: 0.75rem;
  font-style: normal;
  color: #b1c2d9;
}
.ql-editor:focus::before {
  display: none;
}
.ql-formats {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.ql-formats:first-child {
  padding-left: 0;
}
.ql-formats:last-child {
  padding-right: 0;
}
.ql-toolbar button {
  padding: 0 0.25rem;
  background: 0 0;
  border: none;
  color: #12263f;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.ql-toolbar button:hover {
  color: #2c7be5;
}
.ql-toolbar button:first-child {
  margin-left: -0.25rem;
}
.ql-toolbar .ql-active {
  color: #2c7be5;
}
.ql-toolbar button svg {
  height: 1.0625rem;
  width: 1.0625rem;
}
.ql-toolbar .ql-stroke {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
.ql-toolbar .ql-thin {
  stroke-width: 1;
}
.ql-toolbar .ql-fill {
  fill: currentColor;
}
.ql-toolbar input.ql-image {
  position: absolute;
  transform: scale(0);
}
.ql-tooltip {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  width: 18.5rem;
  background-color: #fff;
  border: 1px solid rgba(18, 38, 63, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  margin-top: 0.6rem;
  box-shadow: 0 0 1rem rgba(18, 38, 63, 0.03);
}
.ql-tooltip:after,
.ql-tooltip:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
}
.ql-tooltip:before {
  border-bottom: 0.6rem solid rgba(18, 38, 63, 0.2);
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
}
.ql-tooltip:after {
  border-bottom: 0.5rem solid #fff;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
}
.ql-container .ql-tooltip:hover {
  display: flex !important;
}
.ql-tooltip .ql-preview {
  width: 100%;
  padding: 0.125rem 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ql-tooltip .ql-preview {
    transition: none;
  }
}
.ql-tooltip.ql-editing .ql-preview {
  display: none;
}
.ql-tooltip input {
  display: none;
  width: 100%;
  padding-top: calc(0.125rem + 1px);
  padding-bottom: calc(0.125rem + 1px);
  background-color: transparent;
  font-size: 0.8125rem;
  line-height: 1.75;
  border: none;
  color: #12263f;
}
.ql-tooltip input:focus {
  outline: 0;
}
.ql-tooltip.ql-editing input {
  display: block;
}
.ql-tooltip .ql-action,
.ql-tooltip .ql-remove {
  margin-left: 0.25rem;
}
.ql-tooltip .ql-action::before,
.ql-tooltip .ql-remove::before {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.125rem 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.75;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .ql-tooltip .ql-action::before,
  .ql-tooltip .ql-remove::before {
    transition: none;
  }
}
.ql-tooltip .ql-action::before:focus,
.ql-tooltip .ql-action::before:hover,
.ql-tooltip .ql-remove::before:focus,
.ql-tooltip .ql-remove::before:hover {
  text-decoration: none;
}
.ql-tooltip .ql-action::before.focus,
.ql-tooltip .ql-action::before:focus,
.ql-tooltip .ql-remove::before.focus,
.ql-tooltip .ql-remove::before:focus {
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgba(44, 123, 229, 0.25);
}
.ql-tooltip .ql-action::before,
.ql-tooltip.ql-editing .ql-action::before {
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.ql-tooltip .ql-action::before:hover,
.ql-tooltip.ql-editing .ql-action::before:hover {
  color: #fff;
  background-color: #1a68d1;
  border-color: #1862c6;
}
.ql-tooltip .ql-action::before.focus,
.ql-tooltip .ql-action::before:focus,
.ql-tooltip.ql-editing .ql-action::before.focus,
.ql-tooltip.ql-editing .ql-action::before:focus {
  color: #fff;
  background-color: #1a68d1;
  border-color: #1862c6;
  box-shadow: 0 0 0 0.15rem rgba(76, 143, 233, 0.5);
}
.ql-tooltip .ql-action::before.disabled,
.ql-tooltip .ql-action::before:disabled,
.ql-tooltip.ql-editing .ql-action::before.disabled,
.ql-tooltip.ql-editing .ql-action::before:disabled {
  color: #fff;
  background-color: #2c7be5;
  border-color: #2c7be5;
}
.ql-tooltip .ql-action::before:not(:disabled):not(.disabled).active,
.ql-tooltip .ql-action::before:not(:disabled):not(.disabled):active,
.ql-tooltip.ql-editing .ql-action::before:not(:disabled):not(.disabled).active,
.ql-tooltip.ql-editing .ql-action::before:not(:disabled):not(.disabled):active,
.show > .ql-tooltip .ql-action::before.dropdown-toggle,
.show > .ql-tooltip.ql-editing .ql-action::before.dropdown-toggle {
  color: #fff;
  background-color: #1862c6;
  border-color: #175dba;
}
.ql-tooltip .ql-action::before:not(:disabled):not(.disabled).active:focus,
.ql-tooltip .ql-action::before:not(:disabled):not(.disabled):active:focus,
.ql-tooltip.ql-editing
  .ql-action::before:not(:disabled):not(.disabled).active:focus,
.ql-tooltip.ql-editing
  .ql-action::before:not(:disabled):not(.disabled):active:focus,
.show > .ql-tooltip .ql-action::before.dropdown-toggle:focus,
.show > .ql-tooltip.ql-editing .ql-action::before.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(76, 143, 233, 0.5);
}
.ql-tooltip .ql-action::before {
  content: "Edit";
}
.ql-tooltip.ql-editing .ql-action::before {
  content: "Save";
}
.ql-tooltip .ql-remove::before {
  color: #283e59;
  background-color: #fff;
  border-color: #fff;
  content: "Remove";
  border-color: #e3ebf6;
}
.ql-tooltip .ql-remove::before:hover {
  color: #283e59;
  background-color: #ececec;
  border-color: #e6e6e6;
}
.ql-tooltip .ql-remove::before.focus,
.ql-tooltip .ql-remove::before:focus {
  color: #283e59;
  background-color: #ececec;
  border-color: #e6e6e6;
  box-shadow: 0 0 0 0.15rem rgba(223, 226, 230, 0.5);
}
.ql-tooltip .ql-remove::before.disabled,
.ql-tooltip .ql-remove::before:disabled {
  color: #283e59;
  background-color: #fff;
  border-color: #fff;
}
.ql-tooltip .ql-remove::before:not(:disabled):not(.disabled).active,
.ql-tooltip .ql-remove::before:not(:disabled):not(.disabled):active,
.show > .ql-tooltip .ql-remove::before.dropdown-toggle {
  color: #283e59;
  background-color: #e6e6e6;
  border-color: #dfdfdf;
}
.ql-tooltip .ql-remove::before:not(:disabled):not(.disabled).active:focus,
.ql-tooltip .ql-remove::before:not(:disabled):not(.disabled):active:focus,
.show > .ql-tooltip .ql-remove::before.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.15rem rgba(223, 226, 230, 0.5);
}
.ql-tooltip.ql-editing .ql-remove::before {
  display: none;
}
.ql-editor blockquote {
  margin-bottom: 1.5rem;
  font-size: 1.17188rem;
}
.ql-editor img {
  max-width: 100%;
  height: auto;
}
.list-alert {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  z-index: 1030;
  min-width: 350px;
  margin-bottom: 0;
  transform: translateX(-50%);
}
.list-alert:not(.show) {
  pointer-events: none;
}
@media (min-width: 768px) {
  .navbar-vertical:not(.navbar-vertical-sm):not([style*="display: none"])
    ~ .main-content
    .list-alert {
    left: calc(50% + 125px);
  }
}
.list-alert .close {
  top: 50%;
  transform: translateY(-50%);
}
[class*="select2"] {
  display: block;
}
.select2 {
  width: 100% !important;
}
.select2-hidden-accessible {
  display: none;
}
.select2-selection {
  cursor: pointer;
}
.select2-selection[aria-expanded="true"] {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container {
  display: block;
}
.select2-dropdown {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-search--dropdown {
  padding: 0.375rem 0.75rem;
}
.select2-search--dropdown.select2-search--hide {
  display: none;
}
.select2-search--dropdown .select2-search__field {
  width: 100%;
  height: calc(1.75em + 0.25rem + 2px);
  padding: 0.125rem 0.5rem;
  background-color: #fff;
  border: 1px solid #d2ddec;
  border-radius: 0.25rem;
  line-height: 1.75;
  font-size: 0.8125rem;
  color: #12263f;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.select2-search--dropdown .select2-search__field:focus {
  border-color: #2c7be5;
  box-shadow: transparent;
  outline: 0;
}
.select2-container--default .select2-results > .select2-results__options {
  max-height: 200px;
  overflow: auto;
}
.select2-results__options {
  padding-left: 0;
  margin-bottom: 0;
}
.select2-results__option {
  padding: 0.375rem 0.75rem;
  color: #6e84a3;
}
.select2-results__option:not(.select2-results__message) {
  cursor: pointer;
}
.select2-results__option:not(.select2-results__message):focus,
.select2-results__option:not(.select2-results__message):hover {
  color: #12263f;
}
.select2-results__option--highlighted,
.select2-results__option[aria-selected="true"] {
  color: #12263f;
}
.select2-selection--multiple {
  height: auto;
}
.select2-selection__rendered {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin: 0 -0.25rem -0.25rem 0;
}
.select2-selection__choice {
  display: inline-flex;
  align-items: center;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  margin: 0 0.25rem 0.25rem 0;
  font-size: 0.8125rem;
  background-color: #edf2f9;
  border-radius: 0.1875rem;
}
.select2-selection__choice__remove {
  order: 2;
  margin-left: 0.5rem;
  color: #95aac9;
  cursor: pointer;
}
.select2-selection__choice__remove:hover {
  color: #12263f;
}
.select2-search--inline .select2-search__field {
  height: calc(1em * 1.5);
  padding-bottom: 0.25rem;
  background-color: transparent;
  border: 0;
  box-shadow: none;
  outline: 0;
  color: #12263f;
}
.select2-search--inline .select2-search__field::-webkit-input-placeholder {
  color: #b1c2d9;
}
.select2-search--inline .select2-search__field::-moz-placeholder {
  color: #b1c2d9;
}
.select2-search--inline .select2-search__field:-ms-input-placeholder {
  color: #b1c2d9;
}
.select2-search--inline .select2-search__field::-ms-input-placeholder {
  color: #b1c2d9;
}
.select2-search--inline .select2-search__field::placeholder {
  color: #b1c2d9;
}
.select2-selection__placeholder {
  color: #b1c2d9;
}
`;