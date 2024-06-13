# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Dependencies :

```txt
npm install -D tailwindcss
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
npm install --legacy-peer-deps -D postcss autoprefixer
```

**Then if you want to run locally use :**

```txt
npm run dev
```

Don't forget that if you deploy it as i did on github.io
rename in your *package-lock.json* and *package.json* in *names* field the thing by your repo last name for example *portfolio* in my case.

```txt
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
```

**Then use :**
```txt
npm install gh-pages --save-dev
```

**And to deploy :**

```txt
npm run deploy
```

Finally go in your repository *settings, page*, to change the *branch main* by *gh branch* and in root folder, then save.