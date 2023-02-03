<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<h1>Notif</h1>

<body>
    <script>
        console.log("hello");
        // On vérifie si le navigateur supporte les notifications
        if (!("Notification" in window)) {
            alert("Ce navigateur ne supporte pas les notifications desktop");
        }
        // sse source
        const url = new URL("http://localhost:9000/.well-known/mercure");
        url.searchParams.append("topic", "https://example.com/users/dunglas");
        const eventSource = new EventSource(url, { credentials: "include" });
        // On demande la permission
        eventSource.onmessage = (e) => console.log(e);
    </script>
</body>

</html>
