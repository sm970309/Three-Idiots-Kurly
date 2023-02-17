from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from tqdm import tqdm
import time
import requests
import json

chrome_service = ChromeService(executable_path=ChromeDriverManager().install())
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
options = webdriver.ChromeOptions()
# options.add_argument('headless')
options.add_argument('user-agent='+user_agent)
driver = webdriver.Chrome(service=chrome_service,chrome_options=options)
links = []

# 로컬 파일로 json 만들기
# all_items = {}
# all_items['data'] = []

def get_links():    
    driver.get('https://www.kurly.com/collections/market-best')
    time.sleep(1)
    for i in range(17):
    # 카테고리 클릭
        driver.find_element(by=By.XPATH,value='//*[@id="container"]/div/div[1]/div[2]/div[1]/ul/button').click()
        cats = driver.find_element(by=By.XPATH,value='/html/body/div[2]/div[3]/div/ul')
        cat = cats.find_elements(by=By.TAG_NAME,value='li')
        # 초기화
        cats.find_element(by=By.XPATH,value='/html/body/div[2]/div[3]/div/div[2]/button[1]').click()
        cat[i].click()
        cat_no=str(i+1).zfill(3)
        cat_name=cat[i].text.split('\n')[0]
        # 확인
        cats.find_element(by=By.XPATH,value='/html/body/div[2]/div[3]/div/div[2]/button[2]').click()
        time.sleep(0.5)
        div = driver.find_element(by=By.XPATH,value="/html/body/div/div[3]/div[1]/div/div[2]/div[3]")
        goods = div.find_elements(by=By.TAG_NAME,value='a')
        for no,good in enumerate(goods,start=1):
            no=str(no).zfill(3)
            img = good.find_element(by=By.TAG_NAME,value='img')
            links.append([cat_no+no,cat_name,good.get_attribute('href'),img.get_attribute('src')])

def get_items(data):
    no,cat_name,url,img = data
    driver.get(url)
    time.sleep(0.1)
    main = driver.find_element(by=By.TAG_NAME,value="main")
    name = main.find_element(by=By.TAG_NAME,value="h1").text
    price = main.find_element(by=By.XPATH,value="/html/body/div/div/div[3]/div[2]/main/section/h2").text.split('\n')[-2]
    items = {
        "no":no,
        "cat_name":cat_name,
        "name":name,
        "price":int(price.replace(',','')),
        "img":img
    }

    res = requests.post('http://localhost:8000/uploaditem',json = items)
    print(res)

    # 로컬 파일로 json 만들기
    # all_items['data'].append(items)
    
get_links()
print(f'{len(links)}개 상품')
for data in tqdm(links):
    get_items(data)

# 로컬 파일로 json 만들기
# file_path = "./items.json"
# with open(file_path,'w') as f:
#     json.dump(all_items,f)
