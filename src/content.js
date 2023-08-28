chrome.runtime.onMessage.addListener((request , sender , sendResponse) => {
    const { action, payload } = request;
    if(request.action == "DOWNLOADALL") {
        let canvases = getAllCanvas()
        downLoadCanvas(canvases);
    }else if (request.action == "DOWNLOADCANVASBYCLASS"){
        console.log(request.payload + ' from popup')
        let canvases = getCanvasByClass(request.payload)
        downLoadCanvas(canvases);
    }else{
        console.log("这不是点击！");
    }
    
    sendResponse("content got!")
   })
   
function getAllCanvas(){
    var canvases = document.getElementsByTagName("canvas")
    if (canvases == null){
        alert("在该页面找不到Canvas元素");
        return null;
    }
    if (canvases.length == 0){
        alert("在该页面找不到Canvas元素");
        return null;
    }
    console.log(canvases)
    return canvases;
}

function getCanvasByClass(payload){
    var canvases = document.querySelectorAll(`canvas[class~="${payload}" ]`)
    if (canvases == null){
        alert("在该页面找不到Canvas元素");
        return null;
    }
    if (canvases.length == 0){
        alert("在该页面找不到Canvas元素");
        return null;
    }
    console.log(canvases)
    return canvases
}

function downLoadCanvas(canvases){

    for (i = 0; i <= canvases.length; i++) {
        const pageCanvas = canvases[i];
        if (pageCanvas === null) { break; }
        
        const pageNo = parseInt(String(i));
        setTimeout(() => {
            console.log("==pageNo==>>", pageNo);
            ((num) => {
                console.log("开始打印第" + num + "页");
                pageCanvas.scrollIntoView()
                pageCanvas.toBlob(
                    blob => {
                        const anchor = document.createElement('a');
                        anchor.download = 'page_' + num + '.png';
                        anchor.href = URL.createObjectURL(blob);
                        anchor.click();
                        URL.revokeObjectURL(anchor.href);
                    }
                );
            })(pageNo);
        }, 500 * pageNo);
    }
}