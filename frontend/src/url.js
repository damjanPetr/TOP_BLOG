export let url = "";

if (import.meta.env.NODE_ENV === "production") {
  url = `top1blog.fly.dev`;
} else if (import.meta.env.NODE_ENV === "development") {
  url = `http://localhost:3000`;
}

console.log(import.meta.env.MODE);

export const date = new Date().toISOString().slice(0, 19).replace("T", " ");
