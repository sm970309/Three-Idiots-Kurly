import requests 

items = {
    "id":"admin",
    "pw":"124"
}

res= requests.post('http://localhost:8000/signin',json=items)
print(res.json())