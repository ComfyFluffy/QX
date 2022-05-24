if ($request.headers['Referer']?.match(/pixiv/)) {
  $done({})
} else {
  $done({
    headers: {
      ...$request.headers,
      Referer: 'https://www.pixiv.net'
    }
  })
}
