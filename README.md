## AMazingCode – Vue 3 Learning Project

AMazingCode is a **practice project built while following a YouTube course to learn Vue 3**.  
It uses **Vue 3, Vite, Vue Router and Pinia** to explore core concepts such as components, props, events, routing, state management and basic testing.

If you’re checking this repo on GitHub, keep in mind that it is mainly a **learning playground**, not a production app.

---

### Tech Stack

- **Framework**: Vue 3 (Composition API / `<script setup>`)
- **Bundler / Dev server**: Vite
- **Routing**: Vue Router 4
- **State management**: Pinia (+ `pinia-plugin-persistedstate`)
- **Testing**: Vitest + Vue Test Utils

---

### Getting Started

- **Requirements**:
  - Node.js (recommended LTS version)
  - npm (comes with Node)

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

The app will usually be available at `http://localhost:5173` (or whatever URL Vite prints in the terminal).

---

### Available Scripts

- **`npm run dev`**: Start development server with hot reloading.
- **`npm run build`**: Create optimized production build.
- **`npm run preview`**: Preview the production build locally.
- **`npm run test`**: Run Vitest test suite.

---

### Project Structure (main app)

Some of the most important folders in `src/`:

- **`src/components`**: Reusable UI components used to practice Vue features (props, events, slots, etc.).
- **`src/views`**: Page-level components used by the router (e.g. `Home`, `Movies`, `MoviesDetail`).
- **`src/stores`**: Pinia stores (e.g. `movieStore`, `userStore`).
- **`src/router`**: Vue Router configuration.
- **`src/assets`**: Static assets such as images.

There is also a small example notes app under `mini-proyecto/my-notes-app`, created as another practice mini-project.

---

### About the Course

This project was created by following a **YouTube course on Vue 3**.  
All code here is for **educational purposes**. The structure, ideas and some components are based on the instructor’s material, with personal experiments and modifications.

If you are the instructor and want a credit line added (channel name or link), feel free to open an issue or contact me.

---

### License

This repository is shared for learning. If you reuse parts of it, please **include proper credit** to the original YouTube course author and to this repo.

