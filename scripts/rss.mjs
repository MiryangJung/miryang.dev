import {writeFileSync} from 'fs';
import RSS from 'rss';
import {allBlogs} from '.contentlayer/data';

async function generate() {
    const feed = new RSS({
        title: 'MiryangJung',
        site_url: 'https://miryang.dev',
        feed_url: 'https://miryang.dev/feed.xml'
    });

    allBlogs.map((post) => {
        feed.item({
            title: post.title,
            url: `https://miryang.dev/blog/${post.slug}`,
            date: post.date,
            description: post.description
        });
    });

    writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();