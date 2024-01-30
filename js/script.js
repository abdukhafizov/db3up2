import { movies } from "./db.js";
import { reload } from "./ui.js";
import { genresReload } from "./ui.js";

const ul = document.querySelector('.promo__interactive-list');
let promo_ul = document.querySelector(".promo_ul");
let genres = ['All', ...new Set(movies.map(item => item.Genre))];

reload(movies, ul);
genresReload(genres, promo_ul);
