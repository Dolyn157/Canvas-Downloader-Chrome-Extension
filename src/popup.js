btn1.addEventListener("click", async (event) => {
    let [tab] = await chrome.tabs.query({ 
      active: true, 
      currentWindow: true 
    });
    chrome.tabs.sendMessage(tab.id, {
      action:'DOWNLOADALL' , 
      payload:'Download all canvases in the page.'
    })
  })


  btn2.addEventListener("click", async (event) => {
    let [tab] = await chrome.tabs.query({ 
      active: true, 
      currentWindow: true 
    });
    let canvasText = document.getElementById('canvasText')
    let canvasCLASS = canvasText.value
    

    chrome.tabs.sendMessage(tab.id, {
      action:'DOWNLOADCANVASBYCLASS' , 
      payload: canvasCLASS
    })
  })
  