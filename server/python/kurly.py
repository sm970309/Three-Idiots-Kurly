from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from tqdm import tqdm
import time

chrome_service = ChromeService(executable_path=ChromeDriverManager().install())
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
options = webdriver.ChromeOptions()
options.add_argument('user-agent='+user_agent)
driver = webdriver.Chrome(service=chrome_service,chrome_options=options)
links,items = [],[]
def get_links(page):    
    url = f'https://www.kurly.com/collections/market-best?page={page}'
    driver.get(url)
    time.sleep(0.5)
    div = driver.find_element(by=By.XPATH,value="/html/body/div/div[3]/div[1]/div/div[2]/div[2]")
    goods = div.find_elements(by=By.TAG_NAME,value='a')
    for good in goods:
        img = good.find_element(by=By.TAG_NAME,value='img')
        links.append([good.get_attribute('href'),img.get_attribute('src')])

def get_items(link):
    url,img = link
    driver.get(url)
    time.sleep(0.5)
    main = driver.find_element(by=By.TAG_NAME,value="main")
    name = main.find_element(by=By.TAG_NAME,value="h1").text
    price = main.find_element(by=By.XPATH,value="/html/body/div/div/div[3]/div[2]/main/section/h2").text.split('\n')[-2]
    items.append({
        "name":name,
        "price":price,
        "img":img
    })

for page in tqdm(range(1,4)):
    get_links(page)
print(f'{len(links)}개 상품')
for link in tqdm(links[:20]):
    get_items(link)
print(items)
