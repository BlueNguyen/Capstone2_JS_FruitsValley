var idEdit = null;

function turnOnLoading() {
  document.getElementById("loading").style.display = "block";
}

function turnOffloading() {
  document.getElementById("loading").style.display = "none";
}

function renderListProduct(productArr) {
  let contentHTML = "";
  let reverseProductArr = productArr.reverse();
  reverseProductArr.forEach(function (item, index) {
    let trString = `<tr>
                       <td>${index + 1}</td>
                       <td>${item.name}</td>
                       <td><img style="width:80px" src="${item.img
      }" alt="lỗi Hình "/></td>
                       <td>${item.price}</td>
                       <td>${item.type}</td>
                       <td>${item.desc}</td>
                       <td> <button class="btn btn-danger mr-2 deleteBtn" onclick="deleteProduct(${item.id
      })"><i class="fa fa-trash"></i></button>
                       <button class="btn btn-warning editBtn" onclick="editProduct(${item.id
      })"> <i class="fa fa-pen"></i></button></td>
                    </tr>`;

    contentHTML += trString;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}

function fetchListProduct() {
  turnOnLoading();
  axios({
    url: "https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product",
    method: "GET",
  })
    .then(function (res) {
      turnOffloading();
      // console.log("res", res.data);
      renderListProduct(res.data);
    })
    .catch(function (err) {
      turnOffloading();
      console.log("err", err);
    });
}
fetchListProduct();

function createProduct() {
  let ten = document.getElementById("TenSP").value;
  let img = document.getElementById("HinhSP").value;
  let price = document.getElementById("GiaSP").value;
  let type = document.getElementById("loaiSP").value;
  let desc = document.getElementById("MoTaSP").value;

  // console.log("type", type);

  let product = {
    name: ten,
    img: img,
    price: price,
    type: type,
    desc: desc,
  };
  console.log(product);

  axios({
    url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/`,
    method: "POST",
    data: product,
  })
    .then(function (res) {
      // console.log("res", res);
      // console.log("res.data", res.data);
      fetchListProduct();
      $("#myModal").modal("hide");
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function deleteProduct(id) {
  if (confirm("Bạn có chắc muốn xoá trái cây này không?")) {
    turnOnLoading();

    axios({
      url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/${id}`,
      method: "DELETE",
    })
      .then(function (res) {
        // console.log("res", res.data);
        // gọi lại api lấy danh sách product sau khi xoá
        fetchListProduct();
        renderListProduct(res.data);
      })
      .catch(function (err) {
        turnOffloading();
        console.log("err", err);
      });
  }
}

function editProduct(id) {
  // console.log("id",id)
  idEdit = id;

  axios({
    url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/${id}`,
    method: "GET",
  })
    .then(function (res) {
      $("#myModal").modal("show");
      // console.log("res", res.data);
      let productEdit = res.data;

      document.getElementById("TenSP").value = productEdit.name;
      document.getElementById("HinhSP").value = productEdit.img;
      document.getElementById("GiaSP").value = productEdit.price;
      document.getElementById("loaiSP").value = productEdit.type;
      document.getElementById("MoTaSP").value = productEdit.desc;
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function updateProduct() {
  let ten = document.getElementById("TenSP").value;
  let img = document.getElementById("HinhSP").value;
  let price = document.getElementById("GiaSP").value;
  let type = document.getElementById("loaiSP").value;
  let desc = document.getElementById("MoTaSP").value;

  let product = {
    name: ten,
    img: img,
    price: price,
    type: type,
    desc: desc,
  };
  // console.log(product)
  axios({
    url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/${idEdit}`,
    method: "PUT",
    data: product,
  })
    .then(function (res) {
      // console.log("res",res)
      // render lại list products
      fetchListProduct();
      $("#myModal").modal("hide");
    })
    .catch(function (err) {
      console.log("err", err);
    });
}



function renderArea(rate) {
  axios({
    url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/`,
    method: "GET",
  })
    .then(function (res) {
      turnOffloading();
      // console.log("res", res.data);
      let productArr = res.data;
      let areaArr = [];
      productArr.forEach(function (item) {
        if (item.type == rate) {
          areaArr.push(item);
        }
      });
      // console.log("areaArr", areaArr);
      // gọi lại api lấy danh sách product
      renderListProduct(areaArr);
    })
    .catch(function (err) {
      turnOffloading();
      console.log("err", err);
    });
}

function renderAreaAll() {
  axios({
    url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/`,
    method: "GET",
  })
    .then(function (res) {
      turnOffloading();
      // console.log("res.data", res.data);
      // gọi lại api lấy danh sách product
      renderListProduct(res.data);
    })
    .catch(function (err) {
      turnOffloading();
      console.log("err", err);
    });
}


// sắp xếp sản phẩm 
function sort() {
  let value = document.getElementById("sort").value;
  if (value == "Hãy Chọn Loại Sắp Xếp") {
    fetchListProduct();
  }

  if (value == "Giá Tăng") {
    turnOnLoading();
    axios({
      url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/`,
      method: "GET",
    })
      .then(function (res) {

        let arr = res.data;
        //chuyển chữ thành số
        for (let i = 0; i < arr.length; i++) {
          let stringPrice = arr[i].price;
          stringPrice = stringPrice.slice(0, stringPrice.length - 4);
          let numberPrice = stringPrice * 1000;
          arr[i].price = numberPrice;

        }
        // sắp xếp tăng
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            let tamObject = arr[i];
            if (arr[j].price < arr[i].price) {
              arr[i] = arr[j];
              arr[j] = tamObject;
            }
          }

        }
        for (let i = 0; i < arr.length; i++) {
          let numberPrice = arr[i].price / 1000;
          let stringPrice = `${numberPrice}K/kg`
          arr[i].price = stringPrice;

        }

        renderListProduct(arr);
        turnOffloading();

      })
      .catch(function (err) {
        turnOffloading();
        console.log(err);
      });

  };


  if (value == "Giá Giảm") {
    turnOnLoading();
    axios({
      url: `https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/`,
      method: "GET",
    })
      .then(function (res) {

        let arr = res.data;
        //chuyển chữ thành số
        for (let i = 0; i < arr.length; i++) {
          let stringPrice = arr[i].price;
          stringPrice = stringPrice.slice(0, stringPrice.length - 4);
          let numberPrice = stringPrice * 1000;
          arr[i].price = numberPrice;

        }
        // sắp xếp giảm
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            let tamObject = arr[i];
            if (arr[j].price > arr[i].price) {
              arr[i] = arr[j];
              arr[j] = tamObject;
            }
          }

        }
        for (let i = 0; i < arr.length; i++) {
          let numberPrice = arr[i].price / 1000;
          let stringPrice = `${numberPrice}K/kg`
          arr[i].price = stringPrice;

        }
        renderListProduct(arr);
        turnOffloading();
      })
      .catch(function (err) {
        turnOffloading();
        console.log(err);
      });

  }











}

// tìm sản phẩm theo tên
function searchProducts() {
  console.log(1)

  axios({
    url: "https://65a5f6bc74cf4207b4ef0f02.mockapi.io/product/",
    method: "GET",
  })
    .then(function (res) {
      console.log(2)
      let searchName = document.getElementById("inputSearch").value;

      let searchRate = [];
      let arr = res.data;
      for (let i = 0; i < arr.length; i++) {
        if (searchName === arr[i].name) {
          searchRate.push(arr[i])
          renderListProduct(searchRate)
          break
        } else {

          document.getElementById(
            "tblDanhSachSP"
          ).innerHTML = `<p class="text-center font-weight-bold">Không có loại trái cây này trong danh sách. Vui lòng tìm trái cây khác.</p>`;
        }

      }


    })
    .catch(function (err) {
      console.log(err);
    });


}


