{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],

    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    "strict": true,
    "skipLibCheck": true,

    "jsx": "react-jsx",
    "jsxImportSource": "react",

    "types": ["node"],

    "baseUrl": "src",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src", "vite.config.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
