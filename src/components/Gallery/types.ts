export interface GalleryItemType {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  description: string;
}