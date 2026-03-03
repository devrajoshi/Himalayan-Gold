#!/bin/bash

# Screen IDs that failed
screens=(
    "dae8d1d9a6844f3288c988fb070aaa49"
    "5e0b6298e0ca42ca8a4eca486ed55cce"
    "46e5170781bd4285bedef2621e1ff21c"
    "100fb04eba984589910cf12ffa160ee8"
    "ee51a3935bdd453188caf6cafb87438a"
    "afba39ba6b08498bb5c2800cd7b35bac"
    "57e88590e9804d0b9b5af2c3d0fd7833"
    "d7d2a8474a764fe2b1758be132112781"
    "920e2ea64edf43138a9be3ded9363d3f"
    "83c6e56e26e74e67a58fc771047f0d7a"
)

# Corresponding URLs (I'll just fetch a few important ones first)
declare -A urls
urls["100fb04eba984589910cf12ffa160ee8"]="https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2NmYjc4MzA0ZDUzZjQyOGZiNGE5Y2Y1YjczNTQwM2NmEgsSBxCjo4WVnQkYAZIBIwoKcHJvamVjdF9pZBIVQhM4OTIwMDcyMDcyODcwOTYyMjU0&filename=&opi=89354086"
urls["dae8d1d9a6844f3288c988fb070aaa49"]="https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ZhZTQ1NmE3ZDI0YjQ5MDJhNDBhZmJmNjRiYjJkZjU2EgsSBxCjo4WVnQkYAZIBIwoKcHJvamVjdF9pZBIVQhM4OTIwMDcyMDcyODcwOTYyMjU0&filename=&opi=89354086"

for id in "${!urls[@]}"; do
    echo "Downloading HTML for screen: $id"
    curl -L "${urls[$id]}" -o "stitch_resources/$id/index.html"
    sleep 5
done
