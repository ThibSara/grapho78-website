import axios from 'axios';
import cache from 'memory-cache';
import { NextResponse } from 'next/server';

export async function GET() {
  const cachedPosts = cache.get('blogPosts');
  if (cachedPosts) {
    return NextResponse.json(cachedPosts);
  }

  try {
    const response = await axios.get(`${process.env.WORDPRESS_API_URL}posts?_fields=id,slug,title,date,content`);
    const blogPosts = response.data;

    // Store in cache 1h
    cache.put('blogPosts', blogPosts, 3600 * 1000);

    return NextResponse.json(blogPosts);
  } catch (error) {
    return NextResponse.error(new Error('Failed to fetch blog posts'));
  }
}