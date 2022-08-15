function getInformation() {
    alert("getInformation")
    var num = document.querySelectorAll('.a-profile-name').length
    var num1 = document.getElementsByClassName('a-size-base review-text review-text-content').length
    // alert(num)
    var itemCollection = []
    var item = {}
    for (let i = (num - num1); i < num; i++) {
        // alert(i)


        item.name  = document.querySelectorAll('.a-profile-name').item(i).innerHTML.
                     replace(/<span\b[^<]*(?:(?!<\/span>)<[^<]*)*<\/span>/ig,"").
                     replace(/<\/span>/gi,"")
        item.datetime = document.getElementsByClassName('a-size-base a-color-secondary review-date').item(i).innerHTML

        const year = item.datetime.substr(0,item.datetime.indexOf("年"))
        const month = item.datetime.substr(item.datetime.indexOf("年")+1,item.datetime.indexOf("月")-item.datetime.indexOf("年")-1)
        const day = item.datetime.substr(item.datetime.indexOf("月")+1,item.datetime.indexOf("日")-item.datetime.indexOf("月")-1)
        item.datetime = year+"年"+month+"月"+day+"日"
        item.information = document.getElementsByClassName('a-size-base review-text review-text-content').item(i-2).children.item(0).innerHTML

        itemCollection.push(item)
        item = {}
        // alert(itemCollection[i-2].name)
        // alert(item.name+item.information)
    }
    // alert(itemCollection)
    chrome.storage.sync.set({ data: itemCollection}, function() {
        alert("缓存成功")
    });
    // createExcel(itemCollection)
    // const name = document.querySelectorAll('.a-profile-name').item(0).innerHTML
    // const datetime = document.getElementsByClassName('a-size-base a-color-secondary review-date').item(0).innerHTML
    // const information = document.getElementsByClassName('a-size-base review-text review-text-content').item(0).children.item(0).innerHTML
    // alert("评论人："+name +"；评论日期：" +datetime +"；评论内容：" +information)
    // chrome.storage.sync.set({ data: [name,datetime,information] }, function() {
    //     alert("缓存成功")
    // });
    // chrome.runtime.sendMessage({ data: { name, datetime }, close: true })
}
getInformation()

