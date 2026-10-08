// Free-to-use Unsplash photos. Swap IDs or replace with your own photography in /public/images.
export const PHOTOS={rack:'wGk29doZtpQ',glass:'8em0b1ziHd0',moody:'CsHI7C7zg6Q',hero:'photo-1510812431401-41d2bd2722f3'};
export const unsplash=(id,w=1600)=>id.startsWith('photo-')
 ?`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`
 :`https://unsplash.com/photos/${id}/download?force=true&w=${w}`;
