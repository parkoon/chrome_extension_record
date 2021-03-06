let captureStatus = {
    enabled: false
}

chrome.browserAction.onClicked.addListener(function() {

    let common = new Common()
    
    if ( !captureStatus.enabled ) {
        captureStatus.enabled = true;
    }
    //captureStatus.enabled = captureStatus.enabled ? false : true
    
    common.getCurrentTabId(function (tabId) {
        common.changeIcon( captureStatus.enabled, tabId )
    })

    common.notifyToContentScripts({
        cmd: 'status:change',
        data: captureStatus.enabled
    })
})

chrome.tabs.onUpdated.addListener(function() {
    console.log( 'Chrome Tab Update' )
    // let common = new Common()
    // captureStatus.enabled = false
    
    // common.getCurrentTabId(function (tabId) {
    //     common.changeIcon( captureStatus.enabled, tabId )
    // })
})


