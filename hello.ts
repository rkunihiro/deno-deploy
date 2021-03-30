function handleRequest(request: Request): Response {
    console.log(request);
    const headers = new Headers();
    headers.append("Content-Type", "application/json;charset=UTF-8");
    const body = JSON.stringify({
        message: "Hello, World!",
    });
    return new Response(body, { headers });
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});
