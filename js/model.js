function fruit(id,stt, name, type, price, quantity) {
  this.id=id;
  this.stt = stt;
  this.name = name;
  this.type = type;
  this.price = new Intl.NumberFormat('vn-VN').format(price) +" đ" ;
  this.priceNumber=price;
  this.quantity = quantity;
  this.money = function () {
    let moneyVN=this.priceNumber * this.quantity;
    moneyVN=new Intl.NumberFormat('vn-VN').format(moneyVN)
    return (moneyVN +" đ");
  };
}

