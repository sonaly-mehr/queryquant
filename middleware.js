export default function middleware(req) {
  const url = req.nextUrl.clone()
  
  if (url.protocol === 'http:') {
    url.protocol = 'https:'
    return Response.redirect(url)
  }
}