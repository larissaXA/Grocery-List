var newProduct = document.getElementById('newProduct')
var addBtn = document.getElementById('add')
var newProductName = document.getElementById('newProductName')
var produtoBox = document.getElementsByClassName('produtoBox')[0]
var arrayProdutoBox = document.getElementsByClassName('produtoBox')
var doneBtn = document.getElementById('done')
var lista = document.getElementById('lista')
var oneMoreBtn = document.getElementById('oneMore')

var newProductQntt = document.getElementById('newProductQntt')
var newProductUnity = document.getElementById('newProductMeasure')

var deleteBtn = document.getElementById('deleteBtn')

var filterList = document.getElementById('filter')
var productType = document.getElementsByClassName('type')

addBtn.addEventListener('click',addNewProduct)
doneBtn.addEventListener('click',submitNewProductName)
deleteBtn.addEventListener('click',appearDeleteBtn)
oneMoreBtn.addEventListener('click',anotherProduct)

function addNewProduct(){
    newProduct.style.display = 'flex'
    document.getElementsByTagName('menu')[0].style.opacity = 0.3
    document.getElementsByTagName('aside')[0].style.opacity = 0.3
    document.getElementById('lista').style.opacity
     = 0.3
    addBtn.classList.add('onActivity')
}

var newLi
function submitNewProductName(){
    newProduct.style.display = 'none'
    if(newProductName.value !== ""){
        newLi = document.createElement('li')
        newLi.classList.add('produtoBox')
        var newDivName = document.createElement('div')
        newDivName.className = 'produto'
        newDivName.textContent = newProductName.value
        var newDivDelete = document.createElement('div')
        newDivDelete.className = 'delete'
        submitNewProductType()
        newLi.appendChild(newDivName)
        newLi.appendChild(newDivDelete)
        lista.appendChild(newLi)
        submitNewProductQntt()
        newProductName.value = ''
        addBtn.classList.remove('onActivity')
        Array.from(arrayProdutoBox).forEach((value) => {
            value.addEventListener('dblclick',productCheck)
        })
    }
    addBtn.classList.remove('onActivity')
    document.getElementsByTagName('menu')[0].style.opacity = 1
    document.getElementsByTagName('aside')[0].style.opacity = 1
    document.getElementById('lista').style.opacity
     = 1
}

function submitNewProductType(){
    var newProductType = document.createElement('option')
    newProductType.className = 'type'
    newProductType.value = document.getElementById('newProductType').options[document.getElementById('newProductType').selectedIndex].value
    newLi.appendChild(newProductType)
}

function submitNewProductQntt(){
    var aux = document.createElement('div')
    aux.className = 'qntt'
    var newNumberDiv = document.createElement('div')
    newNumberDiv.className = 'number'
    aux.appendChild(newNumberDiv)
    newLi.appendChild(aux)
    newNumberDiv.textContent = newProductQntt.value

    var newUnityDiv = document.createElement('div')
    newUnityDiv.className = 'unity'
    aux.appendChild(newUnityDiv)
    newUnityDiv.textContent = newProductUnity.options[newProductUnity.selectedIndex].text
    newProductQntt.value = ""  
}

var appearDisappear = true
var test = document.getElementsByClassName('delete')
function appearDeleteBtn(){
    var deleteImg = document.createElement('img')
    deleteImg.src = 'https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png'
    deleteImg.className = 'delete'
    if(appearDisappear === true){
        Array.from(arrayProdutoBox).forEach((value) => {
            value.style.cursor = 'auto'
            deleteImg.style.cursor = 'pointer'
            value.appendChild(deleteImg.cloneNode())
            value.getElementsByClassName('qntt')[0].style.marginRight = '8%'
        })
        Array.from(test).forEach((value) => {
            value.addEventListener('click', () => {
                lista.removeChild(value.parentNode)
            })
        })
        deleteBtn.classList.add('onActivity')
        appearDisappear = false
    }else{
        Array.from(arrayProdutoBox).forEach((value) => {
            value.style.cursor = 'pointer'
            value.removeChild(value.lastChild)
            value.getElementsByClassName('qntt')[0].style.marginRight = '0'
            deleteBtn.classList.remove('onActivity')
        })
        appearDisappear = true
    }
}

function productCheck(){
    lista.removeChild(this)
    lista.appendChild(this)
    this.style.backgroundColor = 'lightgray'
    this.style.borderColor = 'darkgray'
    this.style.textDecoration = 'line-through'
}

function anotherProduct(){
    submitNewProductName()
    addBtn.classList.add('onActivity')
    document.getElementsByTagName('menu')[0].style.opacity = 0.3
    document.getElementsByTagName('aside')[0].style.opacity = 0.3
    document.getElementById('lista').style.opacity
     = 0.3
    newProduct.style.display = 'flex'
}

Array.from(filterList.children).forEach((value) => {
    value.addEventListener('click',filterFunction)
})
var aux2 = true
function filterFunction(){
    var optionId = this.id
    if(aux2 === true){
        Array.from(productType).forEach((value) => {
            if(optionId === value.value){
                value.parentElement.style.display = 'flex'
            }else{
                value.parentElement.style.display = 'none'
            }
        })
        aux2 = false
    }else{
        Array.from(arrayProdutoBox).forEach((value) => {
            value.style.display = 'flex'
        })
        aux2 = true
    }
}