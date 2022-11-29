const url = process.env.URL ?? "https://example.com";
const title = "Carajo.org";



module.exports = {
    en: {
        url,
        title,
        description: "Bienvenido a Carajo.org! ",
        feed: {
            subtitle: "Carajo.org",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "TODO",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: 'github',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSevk4vknyey22ck8Pr7DwB2l5JkUkq9ixuLJUbkthLDl4mIVw/viewform'
        },
        author: {
            url,
            name: "Carajo.org",
            email: "example@mail.com",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Blog posts list",
        },
        about: {
            title: `About | ${title}`,
        },
    },
};
