export function GET(req: Request) {
  const url = new URL(req.url);
  const slot = url.searchParams.get("slot") || "";

  const imgUrl = "https://cdn.dxin.cc/fcm_icon.png";

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>iframe</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div class="flex h-full w-full items-center bg-pink-300 p-4">
          <a href="https://dxin.cc" target="_blank">
            <img
              src="https://cdn.dxin.cc/fcm_icon.png"
              width="128"
              height="128"
              alt=""
            />
          </a>
          <div class="ml-2 flex-1">
            <a href="https://dxin.cc" target="_blank">
              <h1 class="text-2xl font-black">${slot}</h1>
            </a>

            <a href="https://baidu.com" target="_top">
              <p>描述描述描述描述描述描述描述描述描述描述</p>
            </a>

            <div class="flex flex-row justify-end">
              <a href="https://dxin.cc" target="_blank">
                <button class="rounded bg-white px-4 py-2">立即打开</button>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}
