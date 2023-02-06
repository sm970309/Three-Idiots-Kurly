import requests
import json


items = {
    "id": 'wbd',
    "pw": '1234',
    "name":"원방",
    "email":"wb@gmail.com",
    "phone": "010-1234-5678",
    "address":"양천구"
}

res = requests.post('http://localhost:8000/confirmId',json = items)
print(res.content)