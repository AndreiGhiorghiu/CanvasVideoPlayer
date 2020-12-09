import loadable from "@loadable/component";

const Editor = loadable(() => import("./Editor"));
const Sidebar = loadable(() => import("./Sidebar"));

export default { Sidebar, Editor };
