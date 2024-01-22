// render vào home 
function renderListProduct(productArr) {
  let content = "";

  productArr.forEach(function (item) {
    let string = `
        <div class="item">
        <div class="img">
          <img class="img-fluid" src="${item.img}" alt="" />
        </div>
        <div class="desc">
          <div class="id__Product">${item.id}</div>
          <div class="content">
            <div>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            
          </div>
          <div class="price">
            <p>${item.price}</p>
            
          </div>
        </div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <br>
        <br>
          
          
          <div class="footerCard">
          
          <button  class="buy" onclick="addCart(${item.id})">
            <i class="fa fa-shopping-cart"></i> Thêm vào giỏ
          </button>
          </div>
          
        </div>
        `;
    content = content + string;
  }
  )
  document.getElementById("list").innerHTML = content;
}
function fetchListProduct() {
  axios({
    url: "https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product",
    method: "GET",
  }).then(function (res) {

    renderListProduct(res.data);
  })
    .catch(function (err) {
      console.log(err);
    });

}
fetchListProduct();


// ẩn hiện
function showModal() {
  document.querySelector(".background__modal").style.display = "block";
  document.querySelector(".cart").style.display = "block";
}
function hideModal() {
  document.querySelector(".background__modal").style.display = "none";
  document.querySelector(".cart").style.display = "none";
}


// filter 
function filter(productArr) {
  let type = document.getElementById("loai-trai-cay").value;
  if (type == "Tất Cả Sản Phẩm---Chọn Loại") {
    fetchListProduct();
  };

  if (type == "Miền Bắc") {
    let content = "";
    productArr.forEach(function (item) {
      if (item.type == "Miền Bắc") {
        let string = `
        <div class="item">
        <div class="img">
          <img class="img-fluid" src="${item.img}" alt="" />
        </div>
        <div class="desc">
          <div class="id__Product">${item.id}</div>
          <div class="content">
            <div>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            
          </div>
          <div class="price">
            <p>${item.price}</p>
            
          </div>
        </div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <br>
        <br>
          
          
          <div class="footerCard">
          
          <button class="buy" onclick="addCart(${item.id})">
            <i class="fa fa-shopping-cart"></i> Thêm vào giỏ
          </button>
          </div>
          
        </div>
        `;
        content = content + string;
      };

    });
    document.getElementById("list").innerHTML = content;

  };

  if (type == "Miền Trung") {
    let content = "";
    productArr.forEach(function (item) {
      if (item.type == "Miền Trung") {
        let string = `
        <div class="item">
        <div class="img">
          <img class="img-fluid" src="${item.img}" alt="" />
        </div>
        <div class="desc">
          <div class="id__Product">${item.id}</div>
          <div class="content">
            <div>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            
          </div>
          <div class="price">
            <p>${item.price}</p>
            
          </div>
        </div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <br>
        <br>
          
          
          <div class="footerCard">
          
          <button class="buy" onclick="addCart(${item.id})">
            <i class="fa fa-shopping-cart"></i> Thêm vào giỏ
          </button>
          </div>
          
        </div>
        `;
        content = content + string;
      };

    });
    document.getElementById("list").innerHTML = content;

  };
  if (type == "Miền Nam") {
    let content = "";
    productArr.forEach(function (item) {
      if (item.type == "Miền Nam") {
        let string = `
        <div class="item">
        <div class="img">
          <img class="img-fluid" src="${item.img}" alt="" />
        </div>
        <div class="desc">
          <div class="id__Product">${item.id}</div>
          <div class="content">
            <div>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            
          </div>
          <div class="price">
            <p>${item.price}</p>
            
          </div>
        </div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <br>
        <br>
          
          
          <div class="footerCard">
          
          <button class="buy" onclick="addCart(${item.id})">
            <i class="fa fa-shopping-cart"></i> Thêm vào giỏ
          </button>
          </div>
          
        </div>
        `;
        content = content + string;
      };

    });
    document.getElementById("list").innerHTML = content;

  };
  if (type == "Nhập khẩu") {
    let content = "";
    productArr.forEach(function (item) {
      if (item.type == "Nhập khẩu") {
        let string = `
        <div class="item">
        <div class="img">
          <img class="img-fluid" src="${item.img}" alt="" />
        </div>
        <div class="desc">
          <div class="id__Product">${item.id}</div>
          <div class="content">
            <div>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            
          </div>
          <div class="price">
            <p>${item.price}</p>
            
          </div>
        </div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <br>
        <br>
          
          
          <div class="footerCard">
          
          <button class="buy" onclick="addCart(${item.id})">
            <i class="fa fa-shopping-cart"></i> Thêm vào giỏ
          </button>
          </div>
          
        </div>
        `;
        content = content + string;
      };

    });
    document.getElementById("list").innerHTML = content;

  };

}
function fetchListFilter() {

  axios({
    url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product`,
    method: "GET",
  })
    .then(function (res) {
      filter(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });

}



// thêm mới hoặc cộng dồn
function addCart(id) {

  // api giỏ hàng
  axios({
    url: "https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit",
    method: "GET",
  })
    .then(function (res) {
      let dsCart = res.data;

      //api admin
      axios({
        url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/${id}`,
        method: "GET",
      })
        .then(function (res) {

          let productCart = res.data;
          // chuyển 33k/kg chữ thành số
          let stringPrice = productCart.price;
          stringPrice = stringPrice.slice(0, stringPrice.length - 4);
          let numberPrice = stringPrice * 1000;
          // update productCart
          productCart.price = numberPrice;
          productCart.quantity = 1;
          // push hoặc cộng dồn
          let found = false;

          for (let i = 0; i < dsCart.length; i++) {
            if (id == dsCart[i].id) {
              dsCart[i].quantity += 1;

              let productFruit = dsCart[i];
              // cộng dồn
              axios({
                url: `https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit/${id}`,
                method: "PUT",
                data: productFruit,
              })
                .then(function (res) {
                  renderListCart();
                })
                .catch(function (err) {
                  console.log(err);
                });

            };

            if (id == dsCart[i].id) {
              found = true;
              break
            }
          };
          if (!found) {
            dsCart.push(productCart);

            // push vào
            axios({
              url: "https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit",
              method: "POST",
              data: productCart,
            })
              .then(function (res) {
                renderListCart();
              })
              .catch(function (err) {
                console.log(err);
              });

          }

        })
        .catch(function (err) {
          console.log(err);
        });
    })
    .catch(function (err) {
      console.log(err);
    });

};



// render len gio hang
function renderListCart() {
  axios({
    url: "https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit",
    method: "GET",
  })
    .then(function (res) {
      let arrListFruit = res.data;
      //tổng tiền
      let todalMoney = 0;
      for (i = 0; i < arrListFruit.length; i++) {
        let money = arrListFruit[i].price * arrListFruit[i].quantity;
        todalMoney += money;

      }
      todalMoney = new Intl.NumberFormat('vn-VN').format(todalMoney);


      //dom

      let arrListCart = [];
      let stt = 0;
      for (i = 0; i < arrListFruit.length; i++) {
        stt += 1;
        let newProductCart = new fruit(
          arrListFruit[i].id,
          stt,
          arrListFruit[i].name,
          arrListFruit[i].type,
          arrListFruit[i].price,
          arrListFruit[i].quantity
        )
        arrListCart.push(newProductCart);
      };

      let content = "";
      for (let i = 0; i < arrListCart.length; i++) {

        let string = `
            <tr>
                <td>${arrListCart[i].stt}</td>
                <td>${arrListCart[i].name}</td>
                <td>${arrListCart[i].price}</td>
                <td>${arrListCart[i].quantity}</td>
                <td>${arrListCart[i].type}</td>
                <td>${arrListCart[i].money()}</td>
                <td>
                    
                    <button onclick="tang(${arrListCart[i].id})" class="btn btn-primary">Tăng số lượng</button>
                    <button onclick="giam(${arrListCart[i].id})" class="btn btn-primary">Giảm số lượng</button>
                    <button onclick="xoa(${arrListCart[i].id})" class="btn btn-danger">Xóa</button>
                </td>
            </tr>
            
        `
        content += string;
      }
      let stringTotalMoney = `<tr>
                                <td colspan="5">TỔNG TIỀN</td>
                                <td>${todalMoney} đ</td>
                            </tr>`;
      content += stringTotalMoney;

      document.getElementById("tableDanhSach").innerHTML = content;
    })
    .catch(function (err) {
      console.log(err);
    });
}
renderListCart()


// delete
function xoa(id) {
  axios({
    url: `https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      console.log("xoa")
      renderListCart();
    })
    .catch(function (err) {
      console.log(err);
    });

}

//Tăng
function tang(id) {
  axios({
    url: `https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit/${id}`,
    method: "GET",
  })
    .then(function (res) {
      let productCart=res.data;
      productCart.quantity+=1
      axios({
        url: `https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit/${id}`,
        method: "PUT",
        data: productCart,
      })
        .then(function (res) {
          
          
          renderListCart();
        })
        .catch(function (err) {
          console.log(err);
        });
      
    })
    .catch(function (err) {
      console.log(err);
    });



  

}
//Giảm
function giam(id) {
  axios({
    url: `https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit/${id}`,
    method: "GET",
  })
    .then(function (res) {
      let productCart=res.data;
      productCart.quantity-=1
      if(productCart.quantity<=0){
        
        xoa(id);
        renderListCart()
        alert(`Bạn đã giảm hết số lượng của "${productCart.name}"`)
      }else{
        axios({
          url: `https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit/${id}`,
          method: "PUT",
          data: productCart,
        })
          .then(function (res) {
            
            
            renderListCart();
          })
          .catch(function (err) {
            console.log(err);
          });
      }

      
      
    })
    .catch(function (err) {
      console.log(err);
    });



  

}


























