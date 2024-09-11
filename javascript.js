function searchbar(){
    // window.location.href = "./search.html";
 const show=document.getElementById(`transparent-div`);
 show.style.display="flex";
//  show.style.backdropFilter="blur(0px)";
}
function cancel(){
    const show=document.getElementById(`transparent-div`);
    show.style.display="none";
}
function user(){

}
function cart(){
    const x=document.getElementById(`container22`);
    x.style.display="flex";
}
function cancelcart(){
    const show=document.getElementById(`container22`);
    show.style.display="none";
}
// code for slider no 1
let currentindex=0;
const image=["slider-pic1","slider-pic2","slider-pic3"];
function rightclick(){ 
    const hide1=document.getElementById(image[currentindex]);
    hide1.style.display="none";
    currentindex=(currentindex+1)%image.length;
        const hide=document.getElementById(image[currentindex]);
        hide.style.display="block";
}
function leftclick(){
const h=document.getElementById(image[currentindex]);
h.style.display="none";
currentindex=(currentindex-1+image.length)%image.length;
const dis=document.getElementById(image[currentindex]);
dis.style.display="block";
}
// code =for slider ends here
// code for 2 seconds starts from here 
// function leftclick2(){
//     const x=document.getElementById(`left-container2`);
//     x.style.display="none";
//     const y=document.getElementById(`right-container2`);
//     y.style.display="flex";

//      // Display specific buttons for the slider functionality
//    // Display previously hidden buttons
//    document.getElementById('back-btn').style.display = 'none';
//    document.getElementById('starters-btn').style.display = 'none';
//    document.getElementById('local-btn').style.display = 'none';
//    document.getElementById('first-part').style.display = 'none';
//    document.getElementById('second-part').style.display = 'none';
//    document.getElementById('pizza-deals-btn').style.display = 'block';
//    document.getElementById('sandwiches-btn').style.display = 'block';
   
//    // Display the remaining div elements
//    document.getElementById('special-pizza-btn').style.display = 'block';
//    document.getElementById('amazing-btn').style.display = 'block';
//    document.getElementById('pastas-btn').style.display = 'block';
//    document.getElementById('burgerz-btn').style.display = 'block';
//    document.getElementById('side-orders-btn').style.display = 'block';
//    document.getElementById('addons-btn').style.display = 'block';


// }
// function rightclick2() {
//     // Hide the right container and show the left container for slider functionality
//     const x = document.getElementById('right-container2');
//     x.style.display = 'none';
//     const y = document.getElementById('left-container2');
//     y.style.display = 'flex';
  
//     //   y.style.padding-left="28px";

//              // Display the first 7 div elements
// document.getElementById('back-btn').style.display = 'block';
// document.getElementById('starters-btn').style.display = 'block';
// document.getElementById('local-btn').style.display = 'block';
// document.getElementById('first-part').style.display = 'block';
// document.getElementById('second-part').style.display = 'block';
// document.getElementById('pizza-deals-btn').style.display = 'block';
// document.getElementById('sandwiches-btn').style.display = 'block';

// // Hide the remaining div elements
// document.getElementById('special-pizza-btn').style.display = 'block';
// document.getElementById('amazing-btn').style.display = 'none';
// document.getElementById('pastas-btn').style.display = 'none';
// document.getElementById('burgerz-btn').style.display = 'none';
// document.getElementById('side-orders-btn').style.display = 'none';
// document.getElementById('addons-btn').style.display = 'none';
// }
// code slider second ends here


let baseprice;

function trash() {
    let valueElement = document.getElementsByClassName('cart-count')[0];
    let valuelessElement = document.getElementById('valueless');
    let value = parseInt(valuelessElement.textContent);

    console.log("Initial value:", value);  // For debugging

    if (value === 1) {
        value = 0;
        valueElement.textContent = value;
        valuelessElement.textContent = value;
        console.log("Value set to 0");

        // Hide summary elements
        let h = document.getElementById('shadow-lines-shop');
        let h2 = document.getElementsByClassName('summary-container')[0];
        h.style.display = "none";
        h2.style.display = "none";

        // Show center content and 'empty' message
        const s = document.getElementById('center');
        s.style.display = "flex";
        let h4 = document.getElementById('empty');
        h4.style.display = "block";

        // Reset all cart buttons and hide back buttons
        let carts = document.querySelectorAll('#addtocart');
        carts.forEach(cart => {
            cart.style.display = "block";
        });

        let carthides = document.querySelectorAll('#back-btn');
        carthides.forEach(carthide => {
            carthide.style.display = "none";
        });
    } else if (value > 1) {
        value--;
        valueElement.textContent = value;
        valuelessElement.textContent = value;
        console.log("Value decremented to:", value);
    } else {
        console.log("Unexpected value:", value);  // For debugging
    }
}

function incre() {
    let v = parseInt(document.getElementById('valueless').textContent);
    v++;
     document.querySelector('#quantity').textContent=v;
    document.getElementById('valueless').textContent = v;
    // let q = quantitychange(document.getElementById('back-container'));
    // if (q) {
    //     console.log('Updating quantity:', v);
    //     q.textContent = v;
    //     console.log(q.textContent);
    
    // } else {
    //     console.error('quantitychange did not return a valid element');
    // }

    document.getElementsByClassName('cart-count')[0].textContent = v;
    let priceElement = document.getElementById('cart-price');
    let sub_total = document.getElementById('subtotal-amount');
    let grand_price = document.getElementById('grand-total-amount');
    let delivery = document.getElementById('delivery-charges-amount');
    let grandtotal = parseFloat(delivery.textContent.replace('Rs. ', '').replace(',', '').replace('From ',''));

    if (!baseprice) {
        baseprice = parseFloat(priceElement.textContent.replace('Rs. ', '').replace(',', '').replace('From ',''));
    }

    let newPrice = baseprice * v;
    priceElement.textContent = 'Rs. ' + newPrice.toFixed(2);
    sub_total.textContent = 'Rs.' + newPrice.toFixed(2);
    grand_price.textContent = 'Rs.' + (newPrice + grandtotal).toFixed(2);
}

function decre() {
    // Get the element with class 'cart-count'
    let valueElement = document.getElementsByClassName('cart-count')[0];
    // Get the element with ID 'valueless' and parse its text content as an integer
    let valuelessElement = document.getElementById('valueless');
    let value = parseInt(valuelessElement.textContent);

    if (value === 1) {
        value = 0;
        valueElement.textContent = value;
        valuelessElement.textContent = value;
        console.log("Value set to 0");

        // Hide summary elements
        let h = document.getElementById('shadow-lines-shop');
        let h2 = document.getElementsByClassName('summary-container')[0];
        h.style.display = "none";
        h2.style.display = "none";

        // Show center content and 'empty' message
        const s = document.getElementById('center');
        s.style.display = "flex";
        let h4 = document.getElementById('empty');
        h4.style.display = "block";

        // Reset all cart buttons and hide back buttons
        let carts = document.querySelectorAll('#addtocart');
        carts.forEach(cart => {
            cart.style.display = "block";
        });

        let carthides = document.querySelectorAll('#back-btn');
        carthides.forEach(carthide => {
            carthide.style.display = "none";
        });
    } else if (value > 1) {
        value--;
        valueElement.textContent = value;
        valuelessElement.textContent = value;
        document.querySelector('#quantity').textContent=value;
        console.log("Value decremented to:", value);

        let priceElement2 = document.getElementById('cart-price');
        let subtotal = document.getElementById('subtotal-amount');
        let grand = document.getElementById('grand-total-amount');
        let delivery = document.getElementById('delivery-charges-amount');
        let grandtotal = parseFloat(delivery.textContent.replace('Rs. ', '').replace(',', '').replace('from ', ''));
        let pricefordecre = parseFloat(priceElement2.textContent.replace('Rs. ', '').replace(',', '').replace('from ', ''));

        let newPrice = pricefordecre - baseprice;
        priceElement2.textContent = 'Rs. ' + newPrice.toFixed(2);
        subtotal.textContent = 'Rs. ' + newPrice.toFixed(2);
        grand.textContent = 'Rs. ' + (newPrice + grandtotal).toFixed(2);
    } else {
        console.log("Unexpected value:", value);  // For debugging
    }
}
function datatransfer(anchor) {
    const container = anchor.closest('#back-container'); // Find the parent container

    const itemName = container.querySelector('#back-name').textContent.trim();
    const itemDescription = container.querySelector('#back-para').innerHTML.trim();
    const itemPrice = container.querySelector('#back-price').textContent.trim();
    const itemImage = container.querySelector('img'); // Correctly select the image element
    const target_image = document.getElementById('target-img');

    // Update cart section with clicked item data
    document.querySelector('#cart-name').textContent = itemName;
    document.querySelector('#cart-text').innerHTML = itemDescription;
    document.querySelector('#cart-price').textContent = itemPrice;
    target_image.src = itemImage.src;

    // Show the cart section if hidden
    document.querySelector('#shadow-lines-shop').style.display = 'flex';
    document.querySelector('.summary-container').style.display = 'flex';

    // Reset quantity to 1 and update base price
    document.getElementById('valueless').textContent = 1;
    document.querySelector('.cart-count').textContent = 1;
    baseprice = parseFloat(itemPrice.replace('Rs. ', '').replace(',', '').replace('from ',''));
    updateTotals();
}

function updateTotals() {
    const price = baseprice;
    const quantity = parseInt(document.getElementById('valueless').textContent);
    const subtotal = price * quantity;
    document.getElementById('subtotal-amount').textContent = `Rs. ${subtotal.toFixed(2)}`;

    const deliveryCharges = 10.00; // Assuming a fixed delivery charge
    const grandTotal = subtotal + deliveryCharges;
    document.getElementById('grand-total-amount').textContent = `Rs. ${grandTotal.toFixed(2)}`;
}


function additem(button) {
    const container = button.closest('#back-container');
    
    const backButtonContainer1 = document.querySelectorAll('#back-btn');
    backButtonContainer1.forEach(obj=>{

        obj.style.display="none";

    });

    const addToCartButton1 = document.querySelectorAll('#addtocart');
    addToCartButton1.forEach(user=>{
        user.style.display="block";
    });
    // Hide the 'Add to Cart' button and show the quantity controls
    const addToCartButton = container.querySelector('#addtocart');
    const backButtonContainer = container.querySelector('#back-btn');

    backButtonContainer.style.display = 'flex';
    addToCartButton.style.display = 'none';

    // Perform data transfer to update the cart section
    datatransfer(container);
    // quantitychange(container);
}

// function quantitychange(container) {
//     console.log("Container passed to quantitychange:", container);
//     let s = container.querySelector('#quantity');
//     console.log("Element found by quantitychange:", s);
//     return s;
// }
function datatransfer(container) {
    const itemName = container.querySelector('#back-name').textContent.trim();
    const itemDescription = container.querySelector('#back-para').innerHTML.trim();
    const itemPrice = container.querySelector('#back-price').textContent.trim();
    const itemImage = container.querySelector('#back-image img').getAttribute('src');
    const targetImage = document.getElementById('target-img');

    // Update cart section with clicked item data
    document.querySelector('#cart-name').textContent = itemName;
    document.querySelector('#cart-text').innerHTML = itemDescription;
    document.querySelector('#cart-price').textContent = itemPrice;
    targetImage.src = itemImage;

    // Show the cart section if hidden
    document.querySelector('#shadow-lines-shop').style.display = 'flex';
    document.querySelector('.summary-container').style.display = 'flex';

    // Reset quantity to 1 and update base price
    document.getElementById('valueless').textContent = 1;
    document.querySelector('.cart-count').textContent = 1;
    baseprice = parseFloat(itemPrice.replace('Rs. ', '').replace(',', '').replace('from ',''));
    updateTotals();
}

// function updateTotals() {
//     const price = baseprice;
//     const quantity = parseInt(document.getElementById('valueless').textContent);
//     const subtotal = price * quantity;
//     document.getElementById('subtotal-amount').textContent = `Rs. ${subtotal.toFixed(2)}`;

//     const deliveryCharges = 10.00; // Assuming a fixed delivery charge
//     const grandTotal = subtotal + deliveryCharges;
//     document.getElementById('grand-total-amount').textContent = `Rs. ${grandTotal.toFixed(2)}`;
// }



function minus(click) {
    // Find the closest 'back-container' to the clicked anchor

    let backContainer = click.closest('#back-container');
    if (!backContainer) {
        console.error('Parent back-container not found');
        return;
    }

    // Get the quantity element and parse its text content as an integer
    let quantityElement = backContainer.querySelector('#quantity');
    let quantity = parseInt(quantityElement.textContent);

    // Get the cart count elements
    let valueElement =document.getElementsByClassName('cart-count')[0];
    let valuelessElement = document.getElementById('valueless');
    let value = parseInt(valuelessElement.textContent);

    if (quantity === 1) {
        // Handle when quantity is decremented to 0 or less
        quantity = 0;
        // quantityElement.textContent = quantity;
        valueElement.textContent = quantity;
        valuelessElement.textContent = quantity;
        console.log("Quantity set to 0");

        // Hide summary elements and show empty message
        document.getElementById('shadow-lines-shop').style.display = "none";
        document.querySelector('.summary-container').style.display = "none";
        document.getElementById('center').style.display = "flex";
        document.getElementById('empty').style.display = "block";

        // Reset all cart buttons and hide back buttons
        document.querySelectorAll('#addtocart').forEach(cart => {
            cart.style.display = "block";
        });
        document.querySelectorAll('#back-btn').forEach(carthide => {
            carthide.style.display = "none";
        });
    } else if (quantity > 1) {
        // Decrease quantity by 1
        quantity--;
        quantityElement.textContent = quantity;
        valueElement.textContent = quantity;
        valuelessElement.textContent = quantity;
      
        console.log("Quantity decremented to:", quantity);

        // Update price calculations
        // let priceElement2 = document.getElementById('cart-price');
        // let subtotal = document.getElementById('subtotal-amount');
        // let grand = document.getElementById('grand-total-amount');
        // let delivery = document.getElementById('delivery-charges-amount');
        // let grandtotal = parseFloat(delivery.textContent.replace('Rs. ', '').replace(',', '').replace('from ', ''));
        // let pricefordecre = parseFloat(priceElement2.textContent.replace('Rs. ', '').replace(',', '').replace('from ', ''));

        // let newPrice = pricefordecre - baseprice; // Assuming baseprice is defined elsewhere
        // priceElement2.textContent = 'Rs. ' + newPrice.toFixed(2);
        // subtotal.textContent = 'Rs. ' + newPrice.toFixed(2);
        // grand.textContent = 'Rs. ' + (newPrice + grandtotal).toFixed(2);

        let priceElement2 = document.getElementById('cart-price');
        let subtotal = document.getElementById('subtotal-amount');
        let grand = document.getElementById('grand-total-amount');
        let delivery = document.getElementById('delivery-charges-amount');
        let grandtotal = parseFloat(delivery.textContent.replace('Rs. ', '').replace(',', '').replace('from ', ''));
        let pricefordecre = parseFloat(priceElement2.textContent.replace('Rs. ', '').replace(',', '').replace('from ', ''));

        let newPrice = pricefordecre - baseprice;
        priceElement2.textContent = 'Rs. ' + newPrice.toFixed(2);
        subtotal.textContent = 'Rs. ' + newPrice.toFixed(2);
        grand.textContent = 'Rs. ' + (newPrice + grandtotal).toFixed(2);
    } else {
        console.log("Unexpected value:", quantity);  // For debugging unexpected cases
    }
}

function updatePriceAndTotals() {
    // Example function for updating prices and totals in the cart
    // Implement this function based on your specific requirements
    console.log("Updating prices and totals...");
    // Fetch elements and update as needed
}




function plus(click) {
    // Find the closest 'back-container' to the clicked anchor
    let backContainer = click.closest('#back-container');
    if (!backContainer) {
        console.error('Parent back-container not found');
        return;
    }
    let valueElement =document.getElementsByClassName('cart-count')[0];
    let valuelessElement = document.getElementById('valueless');
    // Get the quantity element and parse its text content as an integer
    let quantityElement = backContainer.querySelector('#quantity');
    let quantity = parseInt(quantityElement.textContent);

    // Increment the quantity
    quantity++;
    quantityElement.textContent = quantity;
    valueElement.textContent = quantity;
        valuelessElement.textContent = quantity;
    console.log("Quantity incremented to:", quantity);

 



        // let v = parseInt(document.getElementById('valueless').textContent);
       
        // document.getElementById('valueless').textContent = quantity;
    
        // document.getElementsByClassName('cart-count')[0].textContent = quantity;
        let priceElement = document.getElementById('cart-price');
        let sub_total = document.getElementById('subtotal-amount');
        let grand_price = document.getElementById('grand-total-amount');
        let delivery = document.getElementById('delivery-charges-amount');
        let grandtotal = parseFloat(delivery.textContent.replace('Rs. ', '').replace(',', '').replace('From ',''));
    
        if (!baseprice) {
            baseprice = parseFloat(priceElement.textContent.replace('Rs. ', '').replace(',', '').replace('From ',''));
        }
    
        let newPrice = baseprice * quantity;
        priceElement.textContent = 'Rs. ' + newPrice.toFixed(2);
        sub_total.textContent = 'Rs.' + newPrice.toFixed(2);
        grand_price.textContent = 'Rs.' + (newPrice + grandtotal).toFixed(2);
    }
    


