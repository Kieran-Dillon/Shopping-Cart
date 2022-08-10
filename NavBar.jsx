
//MITxPRO Fruit & Vegitable Shopping Cart
//Kieran Dillon
//NavBar.jsx
//08.09.2022

"use strict";


const menuItems = [
    {name: "apple", instock: 2},
    {name: "pineapple", instock: 3},
    {name: "pear", instock: 0},
    {name: "peach", instock: 3},
    {name: "orange", instock: 1},
];

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  M E T H O D S – P U B L I C

/**
 * NavBar() - writes out all items with their stock number
 * providing a button and the onClick event to move 1 item into the Shopping Cart
 * using React.useState to keep track of items in the Cart.
 *
 * @api public
 *
 * @param {type} menuitems the items .
 * @returns JSX code to render the Cart list.
 *
 * @example
 *
 *      NavBar('menuitems');
 *
 */
function NavBar({menuitems})
{
    const {Button} = ReactBootstrap;
    const [stock, setStock] = React.useState(menuitems);
    const [cart, setCart] = React.useState([]);

    const moveToCart = (e) =>
    {
        let [name, num] = e.target.innerHTML.split(":");
        if (num <= 0) return; // zero items in stock

        // get item with name from stock and update stock
        let item = stock.filter((item) => item.name == name);

        // check if its in stock ie item.instock > 0
        let newStock = stock.map((item) =>
        {
            if (item.name == name)
            {
                item.instock--;
            }
            return item;
        });

        // now filter out stock items == 0;
        setStock([...newStock]);
        setCart([...cart, ...item]); // for now don't worry about repeat items in Cart
        console.log(`Cart: ${JSON.stringify(cart)}`);
    };

    const updatedList = menuitems.map((item, index) =>
    {
        return (
            <Button key={index} onClick={moveToCart}>
                {item.name}:{item.instock}
            </Button>
        );
    });

    // note that React needs to have a single Parent
    return (
        <>
            <ul key="stock" style={{listStyleType: "none"}}>
                {updatedList}
            </ul>
            <h1>Shopping Cart</h1>
            <Cart cartitems={cart}> Cart Items</Cart>
        </>
    );
}

/**
 * Cart() – description of public method.
 *
 * @api public
 *
 * @param {object} cartitems items currently in the cart
 * @returns JSC code to render the Cart list.
 *
 * @example
 *
 *      Cart('cartitems');
 */
function Cart({cartitems})
{
    const {Card, Button} = ReactBootstrap;
    console.log("rendering Cart");
    const updatedList = cartitems.map((item, index) =>
    {
        return <Button key={index}>{item.name}</Button>;
    });
    return (
        <ul style={{listStyleType: "none"}} key="cart">
            {updatedList}
        </ul>
    );
}

// #endregion

// #region  M E T H O D S – P R I V A T E

// #endregion

// #region  M E T H O D - E X P O R T S

// #endregion

// #region  R E A C T

ReactDOM.render(
    <NavBar menuitems={menuItems} />,
    document.getElementById("root")
);

// #endregion

// #endregion
// #endregion