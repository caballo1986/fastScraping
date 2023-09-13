import puppeteer from "puppeteer";
import  fs from "fs/promises";

async function openWebPage(){
    const browser = await puppeteer.launch({ headless: false, slowMo: 400 });
    const page =  await browser.newPage();
    await page.goto('https://www.mercadolibre.com.ar');
    await browser.close();
}

async function captureScreenshot(){
    const browser = await puppeteer.launch({ headless: false, slowMo: 400 });
    const page = await browser.newPage();
    await page.goto('https://www.mercadolibre.com.ar');
    await page.screenshot({path: 'example.png'})
    await page.close();
}

async function nagivateWebPage() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 400 });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com');
    await page.click('a[href="/login"]');
    await page.screenshot({ path: 'example.png' })
    await new Promise(r => setTimeout(r, 5000));
    await page.close();
}
async function getDataFromWebPage() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 400 });
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    const result = await page.evaluate(() => {
        const title = document.querySelector('h1')?.innerText;
        const desription = document.querySelector('p')?.innerText;
        const more = document.querySelector('a')?.innerText;
        return {
                title,
                desription,
                more
        }
    });
    console.log("🚀 ~ file: index.js:27 ~ result ~ result:", result)
    await page.close();
}

async function handleDynamicWebPage() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 400 });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com');
    const result = await page.evaluate(() => {
        const quotes = document.querySelectorAll('.quote');
        const data = [... quotes].map(quote => {
            const quoteText = quote.querySelector('.text')?.innerText;    
            const author = quote.querySelector('.author')?.innerText;
            const tags = [... quote.querySelectorAll('.tag')]?.map(tag => tag.innerText);
            return {
                quoteText,
                author,
                tags
            }
        })
        return data
    });
    console.log("🚀 ~ file: index.js:27 ~ result ~ result:", result)
    fs.writeFile('quotes.json', JSON.stringify(result,null,2));
    await page.close();
}

handleDynamicWebPage();
//getDataFromWebPage();
//nagivateWebPage();
//captureScreenshot();
//openWebPage();
