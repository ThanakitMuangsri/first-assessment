const all_product = [
    {
        id : 1,
        name : 'iphone 5',
        price : 280
    },
    {
        id : 2,
        name : 'iphone 6',
        price : 280
    },
    {
        id : 3,
        name : 'iphone 7',
        price : 280
    },
    {
        id : 4,
        name : 'iphone 8',
        price : 280
    },
    {
        id : 5,
        name : 'iphone X',
        price : 280
    },
    {
        id : 6,
        name : 'iphone 11',
        price : 280
    },
    {
        id : 7,
        name : 'iphone 12',
        price : 280
    },
    {
        id : 8,
        name : 'iphone 13',
        price : 280
    },
]
function display_product() {
    var cards = ''

    for (let item of all_product) {

        cards = cards + `
        <div class="item_box">
            <div>
                <img src="img/item.png" class="img_item">
            </div>
            <hr/>
            <p class="name_text">   ${item.name}   </h2>
            <div style="display:flex;justify-content:space-between;align-items:center">
                <p> $ ${item.price}   </p>
                <button class="btn_order" onclick= "addcart( ${item.id} ) ">order</button>
            </div>
            
        </div> 
        `
    }
    document.getElementById("show_item").innerHTML = cards
}
display_product()

var cart_items = {}
var total_price = 0
function addcart(item_id){
    alert("add "+ all_product[item_id-1].name + " to my cart!")

    if(cart_items[item_id]){
        cart_items[item_id].quantity += 1;
        cart_items[item_id].cart_price +=  cart_items[item_id].price
        console.log(cart_items[item_id].quantity + " " +item_id)
        total_price += cart_items[item_id].price
        console.log(total_price)
        return
    }
    for(item of all_product){
        if(item_id == item.id){
            cart_items[item_id] = item
            cart_items[item_id].quantity = 1
            cart_items[item_id].cart_price = cart_items[item_id].price
            total_price += cart_items[item_id].price
            return
        }
    }
}
function display_cart() {
    var all_cart = ''
    if (Object.keys(cart_items).length > 0) {
        for (k in cart_items) {
            all_cart = all_cart + `
                <div class="cart_item">
                    <h2 >${cart_items[k].name}</h2>
                    <div style="width:80px">
                        <img src="img/item.png" alt="No Image" style="width:100%;height:auto">
                    </div>    
                    <h2 >${cart_items[k].quantity}</h2>
                    <h2 >${cart_items[k].cart_price}</h2>
                </div>
            `
        }
        all_cart += `<center> <h1> Total Price ${ total_price } </h1> </center>`
        all_cart += `<center> <button onClick="show_products()"> Go Back  </button> </center>`
        document.getElementById('cart').innerHTML = all_cart
    }
}
function show_cart() {
    document.getElementById('cart').style.display = 'block'
    document.getElementById('show_item').style.display = 'none'
    document.getElementById('img_slide').style.display = 'none'
    display_cart();
}
function show_products() {
    document.getElementById('cart').style.display = 'none'
    document.getElementById('show_item').style.display = 'flex'
    document.getElementById('img_slide').style.display = 'block'
    display_product()
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}
