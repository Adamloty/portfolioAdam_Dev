import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Blog.module.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Make Your Website',
    excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's…`,
    imageUrl: '/images/91.png',
    slug: 'make-your-website',
  },
  {
    id: '2',
    title: 'Green Cup Filled With Coffee',
    excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's…`,
    imageUrl: '/images/werw.png',
    slug: 'green-cup-filled-with-coffee',
  },
  {
    id: '3',
    title: 'Opened Book Near Custard',
    excerpt: `It is a long established fact that a reader will be distracted by the readable content of…`,
    imageUrl: '/images/1.jpg',
    slug: 'opened-book-near-custard',
  },
];

const Blog: React.FC = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Blogs</h2>
          <h1 className={styles.title}>Latest News</h1>
        </div>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.blogPost}>
              <div className={styles.imageWrapper}>
                <Link href={`/blog/${post.slug}`}>
                  <Image src={post.imageUrl} alt={post.title} width={400} height={300} layout="responsive" />
                </Link>
              </div>
              <div className={styles.content}>
                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
