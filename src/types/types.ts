export const enum MimeTypes {
  Text = 'text/plain',
  Json = 'application/json'
}

export const enum HeaderNames {
  ContentType = 'Content-Type'
}

export type JsonResponse = {
  message?: string,
  result?: string | number
}
