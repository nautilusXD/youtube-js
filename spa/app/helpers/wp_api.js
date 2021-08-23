const NAME = "css-tricks",
    DOMAIN = `https://${NAME}.com/`,
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    POST = `${API_WP}/posts`,
    SEARCH = `${API_WP}/search?_embed&search=`,
    //PAGES = `${API_WP}/pages`,
    CATEGORIES = `${API_WP}/categories`;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH
}
