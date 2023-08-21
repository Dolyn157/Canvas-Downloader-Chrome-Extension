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
  