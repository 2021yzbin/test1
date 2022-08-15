const btn = document.querySelector('#show')
var itemValue = ["评论人","评论日期","评论内容"]
var num = 0
function log(txt) {
    document.querySelector('.log')
        .appendChild(document.createElement('div'))
        .innerText = itemValue[num] + txt;
    num++;
    if(num === 3){
        num = 0;
    }
}


function createExcel(data) {
    // '\n' 表示一行的结束
    // ','表示数据依次放在新的单元格
    var header = ["评论人,评论日期,评论内容"]
    var key = ["name","datetime","information"]
    var tableData = "";
    data.forEach((item) => {
        let result = "";
        for (let i = 0; i < key.length; i++)  {
            // alert(key)
            if(key[i] ==="information"){
                item.information = item.information.replace(/,/g,".")
            }
            result += `${item[key[i]] + "\t"},`; //增加\t为了不让表格显示科学计数法或者其他格式
            // alert(result)
        }
        tableData += result +"\n"
    });
    const table = header+("\n") + tableData;
    alert(table)
    // encodeURIComponent解决中文乱码
    let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(table);
    //通过创建a标签实现
    var link = document.createElement("a");
    link.href = uri;
    //对下载的文件命名
    link.download = "数据表.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

btn.addEventListener('click', () => {
    // document.querySelector('.log').innerHTML = ''
    // chrome.storage.sync.get(['data'], function(result) {
    //     alert(result.data)
    //         if(result.data !== undefined){
    //             result.data.forEach( name  => {
    //                 log(name)
    //             })
    //         }else{
    //             log("undefined")
    //         }
    // })

    chrome.storage.sync.get(['data'], function(result) {
        alert(result.data)
        if(result.data !== undefined){
          createExcel(result.data)
        }else{
            alert("数据错误")
        }
    })

})
