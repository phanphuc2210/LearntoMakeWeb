// item: 0, 1, 2, 3, 4, 5, 6, 7, ... ,13

// 1: 0 1 2
// 2: 3 4 5
// 3: 6 7 8
// 4: 9 10 11
// 5: 12 13

//itemPerPage: 3, currentPage = 1

// start = 0; end = itemPerPage

// start = (currentPage - 1) * itemPerPage
// end = currentPage * itemPerPage


const items = [
    {id: 1, src: 'https://picsum.photos/id/1002/300/300',title: "Item 1 🎈"},
    {id: 2, src: 'https://picsum.photos/id/1003/300/300',title: "Item 2 🎆"},
    {id: 3, src: 'https://picsum.photos/id/1004/300/300',title: "Item 3 🎇"},
    {id: 4, src: 'https://picsum.photos/id/1005/300/300',title: "Item 4 🧨"},
    {id: 5, src: 'https://picsum.photos/id/1006/300/300',title: "Item 5 ✨"},
    {id: 6, src: 'https://picsum.photos/id/1032/300/300',title: "Item 6 🎉"},
    {id: 7, src: 'https://picsum.photos/id/1008/300/300',title: "Item 7 🎊"},
    {id: 8, src: 'https://picsum.photos/id/1009/300/300',title: "Item 8 🎃"},
    {id: 9, src: 'https://picsum.photos/id/1010/300/300',title: "Item 9 🎄"},
    {id: 10, src: 'https://picsum.photos/id/1011/300/300',title: "Item 10 🎋"},
    {id: 11, src: 'https://picsum.photos/id/1012/300/300',title: "Item 11 🎍"},
    {id: 12, src: 'https://picsum.photos/id/1013/300/300',title: "Item 12 🎎"},
    {id: 13, src: 'https://picsum.photos/id/1014/300/300',title: "Item 13 🎏"},
    {id: 14, src: 'https://picsum.photos/id/1015/300/300',title: "Item 14 🎐"},
    {id: 15, src: 'https://picsum.photos/id/1016/300/300',title: "Item 15 🎑"},
    {id: 16, src: 'https://picsum.photos/id/1035/300/300',title: "Item 16 🧧"},
    {id: 17, src: 'https://picsum.photos/id/1018/300/300',title: "Item 17 🎀"},
    {id: 18, src: 'https://picsum.photos/id/1019/300/300',title: "Item 18 🎁"},
    {id: 19, src: 'https://picsum.photos/id/1020/300/300',title: "Item 19 🎫"},
    {id: 20, src: 'https://picsum.photos/id/1021/300/300',title: "Item 20 🎠"},
    {id: 21, src: 'https://picsum.photos/id/1022/300/300',title: "Item 21 🎡"},
    {id: 22, src: 'https://picsum.photos/id/1023/300/300',title: "Item 22 🎢"},
    {id: 23, src: 'https://picsum.photos/id/1024/300/300',title: "Item 23 🎪"},
    {id: 24, src: 'https://picsum.photos/id/1025/300/300',title: "Item 24 🎭"},
    {id: 25, src: 'https://picsum.photos/id/1026/300/300',title: "Item 25 🎨"},
    {id: 26, src: 'https://picsum.photos/id/1027/300/300',title: "Item 26 🧵"},
    {id: 27, src: 'https://picsum.photos/id/1028/300/300',title: "Item 27 🧶"},
    {id: 28, src: 'https://picsum.photos/id/1029/300/300',title: "Item 28 🛒"}
]

const itemPerPage = 6
let currentPage = 1
let start
let end
getCurrentPage()
let pageQuantity = Math.ceil(items.length / itemPerPage)


//-------------------------------------------------------------------------------------
let rowElement = $('.row')
let btnPrev = $('.page-item .btn-prev')
let btnNext = $('.page-item .btn-next')

renderItems()
renderPageNumber()
let pageNumber = $('.page-item .page-number')
btnNext.click(() => handleBtnNext())
btnPrev.click(() => handleBtnPrev())
pageNumber.click((e) => handleChangePage(e))


//-------------------------------------------------------------------------------------
function getCurrentPage() {
    start = (currentPage - 1) * itemPerPage
    end = currentPage * itemPerPage
}

function renderItems() {
    let html = items.map((item, index) => {
        if(index >= start && index < end)
            return `<div class="col-6 col-lg-4 mb-4">
                        <div class="card w-100" >
                            <img class="card-img-top w-100" src=${item.src} alt=${item.title}>
                            <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            </div>
                        </div>
                    </div>`
    }).join('')

    rowElement.html(html)
}

function renderPageNumber() {
    let html = ''
    for(let i = 0; i < pageQuantity; i++){
        html += `<li class="page-item"><a class="page-number">${i + 1}</a></li>`
    }

    $(".page li:eq(0)").after(html)
    $(`.page .page-number:eq(0)`).addClass('active')
}


function handleBtnNext() {
    currentPage++

    if(currentPage >= pageQuantity) {
        currentPage = pageQuantity
    }

    handleActivePage()

    getCurrentPage()

    renderItems()

    console.log('currentPage: ', currentPage);
    console.log('start: ',start);
    console.log('end: ', end);
}

function handleBtnPrev() {
    currentPage--

    if(currentPage < 1) {
        currentPage = 1
    }

    handleActivePage()

    getCurrentPage()

    renderItems()

    console.log('currentPage: ', currentPage);
    console.log('start: ',start);
    console.log('end: ', end);
}

function handleActivePage() {
    pageNumber.removeClass('active')
    let currentPageNumber = $(`.page .page-number:eq(${currentPage - 1})`)
    currentPageNumber.addClass('active')
}

function handleChangePage(e) {
    currentPage = e.target.innerText
    handleActivePage()
    getCurrentPage()
    renderItems()
}