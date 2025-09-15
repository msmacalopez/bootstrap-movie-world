# Bootstrap Movie World

A responsive React movie explorer built with **Vite**, **Bootstrap**, and a public movie API. Search titles, browse results, and view key details with a clean, mobile-first UI.

## ✨ Features

- 🔎 Search for movies by title
- 🎬 Result cards with poster, year, and quick details
- 🧭 Category filtering (e.g., “Drama”, etc.)
- 📱 Fully responsive (Bootstrap grid & utilities)
- ⚡ Fast dev/build via Vite

## 🧰 Tech Stack

- **React** + **Vite**
- **Bootstrap** (and optionally Bootstrap Icons)
- **Fetch/Axios** for API calls
- **ESLint** (Vite default rules)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm / Yarn / pnpm

### 1) Clone & install

```bash
git clone https://github.com/msmacalopez/bootstrap-movie-world.git
cd bootstrap-movie-world
# pick one:
npm install
# or
yarn
# or
pnpm install
```

### 2) API key (TMDB or OMDb)

Create a `.env` file in the project root and set **one** of the following (depending on which API you use in `src/utils`):

```bash
# If using TMDB:
VITE_TMDB_API_KEY=your_tmdb_api_key

# If using OMDb:
VITE_OMDB_API_KEY=your_omdb_api_key
```

> Make sure your request code reads the key via `import.meta.env.VITE_TMDB_API_KEY` or `import.meta.env.VITE_OMDB_API_KEY`.

### 3) Run the app

```bash
# start dev server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Vite will print a local URL (usually `http://localhost:5173`).

### 4) Build & preview

```bash
npm run build
npm run preview
```

## 📁 Project Structure (overview)

```
bootstrap-movie-world/
├─ src/
│  ├─ components/
│  │  ├─ Hero.jsx
│  │  └─ MovieCard.jsx
│  ├─ utils/
│  │  ├─ axios.js         # API helper(s)
│  │  └─ randomChar.js    # helper for initial fetch
│  ├─ assets/             # images, etc.
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

> File names above reflect the current code style used in the repo (React + Vite) and common component names you’re already using.

## 🧪 Useful Scripts

```bash
# dev
npm run dev

# production build
npm run build

# local preview of the build
npm run preview

# (optional) lint if configured
npm run lint
```

## 🖼️ Screenshots

Add screenshots to `./public/` or `./assets/` and reference them here:

```
![Home](./public/screenshot-home.png)
![Search](./public/screenshot-search.png)
```

## 🔍 Category Filtering (example)

If you filter by a custom field like `mycategory`, ensure your filter callback **returns** a boolean:

```js
const filteredList = movieList.filter(
  (movie) => movie.mycategory === filterCateg
);
```

Without a `return`, the array will be empty.

## 🌐 Deployment

- **Vercel** / **Netlify**: direct Git integration works great with Vite.
- **GitHub Pages**: set `base` in `vite.config.js` if deploying to a subpath.

## 🧩 Environment & API Notes

- Keep your API key in `.env` (prefixed with `VITE_` for Vite).
- Consider a small proxy if your API requires secrets you don’t want exposed to the browser.

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

## 📄 License

MIT — feel free to use and modify.
