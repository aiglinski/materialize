
// Change everything below to log as one array


  function submit(){
    var Price = document.forms["Data"]["Price"].value;
    var Barcode = document.forms["Data"]["Barcode"].value
    var Name = document.forms["Data"]["Name"].value
    var Price = document.forms["Data"]["Price"].value
    var Description = document.forms["Data"]["Description"].value
    var Keywords = document.forms["Data"]["Keywords"].value
    var Quantity = document.forms["Data"]["Quantity"].value
    var InventorySale = document.getElementById("Sale");
    var InventoryReceived = document.getElementById("Received");
    var InventoryCurrent = 10


    // var test = document.getElementById('testButton');
    console.log("ISBN = " + Barcode);
    console.log("Name = " + Name);
    console.log("Price = " + Price);
    console.log("Description = " + Description);
    console.log("Keywords = " + Keywords);
    console.log("Quantity = " + Quantity);
    // console.log("InventoryCurrent = " + Inventory);
    if (InventorySale.checked){
      console.log("Inventory Sale")
    }
    else if (InventoryReceived.checked){
      console.log("Inventory Received")
    }
    else {
      console.log("Please select Sales or Receiving")
    };
    console.log("Total Inventory = " + InventoryCurrent);
};

  // document.getElementById("Receiving").onclick = function Receiving(){
  //
  // };
