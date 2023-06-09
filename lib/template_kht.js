module.exports = {
  HTML: function (title, script, body, authStatusUI) {
    return `
    <!doctype html>
    <html>
    <head>    
      <meta name="viewport" content="width=500px, initial-scale=0.8" />
      <title>남도레미 예약시스템 - ${title}</title>
      <meta charset="utf-8">  
      <link href="/static/css/style_kht.css" type="text/css" rel="stylesheet">
      ${script}
    </head>
    <body>
      <div class="background">
        ${authStatusUI}
        ${body}
      </div>
    </body>
    </html>
    `;
  }
}
