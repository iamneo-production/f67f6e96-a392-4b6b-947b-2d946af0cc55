const resemble = require('resemblejs');
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dacfbffbdacabfcdaaacbfdfebffaabfa.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#nav-bar',{timeout:1500});
      console.log('TESTCASE:test_case6:success');
    }
     catch(e){
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dacfbffbdacabfcdaaacbfdfebffaabfa.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.select('#input-field', '0');
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#dogUrl',{timeout:1500});
      console.log('TESTCASE:test_case7:success');
    }
     catch(e){
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dacfbffbdacabfcdaaacbfdfebffaabfa.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.select('#input-field', '2');
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#lionUrl',{timeout:1500});
      console.log('TESTCASE:test_case8:success');
    }
     catch(e){
      console.log('TESTCASE:test_case8:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
     (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dacfbffbdacabfcdaaacbfdfebffaabfa.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.select('#input-field', '3');
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#tigerUrl',{timeout:1500});
      console.log('TESTCASE:test_case9:success');
    }
     catch(e){
      console.log('TESTCASE:test_case9:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
       (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dacfbffbdacabfcdaaacbfdfebffaabfa.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.select('#input-field', '4');
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#elephantUrl',{timeout:1500});
      console.log('TESTCASE:test_case10:success');
    }
     catch(e){
      console.log('TESTCASE:test_case10:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();