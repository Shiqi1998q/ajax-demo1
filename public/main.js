getCSS.onclick = () => {
    //1.创建XMLHttpRequest对象
    const request = new XMLHttpRequest()
    //2.调用对象的open方法
    request.open('GEt', "/style.css ")
    //3.监听对象的onload&onerror事件
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功（2xx）还是失败（4XX，5XX）
        if (request.readyState === 4) {
            console.log('下载完成')
            if (request.status >= 200 && request.status <= 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到头里面
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }



        }
    }
    //4.发送
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/2.js')
    request.onreadystatechange = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
        console.log('2.js yes')
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/3.html')
    request.onreadystatechange = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
        console.log(request.response)
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)//json.parse会把符合JSON语法的字符串转换为对象或者其他东西
            myName.textContent = object.name
            console.log(request.response)
            console.log(object)
        }
    }
    request.send()
}
let n = 1;

getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)//json.parse会把
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                XXX.appendChild(li)
            })
            n += 1;
        }

    }
    request.send()
}