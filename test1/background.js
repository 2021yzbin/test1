
chrome.runtime.onMessage.addListener(async (msg, sender) => {
    alert("数据变化了")
    // if (msg.close) {
    //     chrome.tabs.remove(sender.tab.id)
    // }
    // if (msg.data) {
    //     chrome.storage.sync.get(['data'], function(result) {
    //         chrome.storage.sync.set({ data: [...result.data, msg.data] }, function() {
    //             console.log('设置数据成功')
    //         });
    //     });
    // }
})
