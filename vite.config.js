import reactRefresh from "@vitejs/plugin-react-refresh";

const cwd = process.cwd();

export default ({ mode }) => {
  const PUBLICPATH = ("development" !== mode && "") || "";

  return {
    root: `${cwd}`,
    publicDir: `${cwd}/static`,
    resolve: {
      alias: {
        $comp: `${cwd}/source/components`,
        $controllers: `${cwd}/source/controllers`,
        $config: `${cwd}/config`,
        $s: `${cwd}/source`,
      },
    },
    define: {
      PUBLICPATH: JSON.stringify(PUBLICPATH),
      "process.env.NODE_ENV": JSON.stringify(mode),
      "process.browser": "true",
    },

    build: {
      outDir: "docs",
    },

    plugins: [reactRefresh()],
  };
};
