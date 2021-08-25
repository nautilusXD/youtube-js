export function PostCard(props) {
    let { date, slug, title, _embedded } = props;
    let dateFormat = new Date(date).toLocaleString(),
        urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "https://jonmircha.com/img/kEnAi.svg";
    return `
<article class="post-card">
<img src="${urlPoster}" alt="${title.rendered}">
<h2>${title.rendered}</h2>
<p>
<time datetime="${date}">${dateFormat}</time>
<a href="#/${slug}">Ver Publicacion</a>
</p>
</article>
`;
}
