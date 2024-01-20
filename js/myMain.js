function renderListProduct(productArr) {
    let content = "";
    productArr.forEach(function (item) {
        let string = `
        <div class="item">
        <div class="img">
          <img class="img-fluid" src="${item.img}" alt="" />
        </div>
        <div class="desc">
          <div class="content">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
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
            <button class="buy">
              <i class="fa fa-shopping-cart"></i> Buy Now
            </button>
          </div>
        </div>
        </div>
        `;
        content=content+string;
    }
    )
    document.getElementById("list").innerHTML=content;
}
function fetchLishProduct(){
    axios({
      url: "https://65a7ee3e94c2c5762da7f7ce.mockapi.io/fruit",
      method: "GET",
    }).then(function (res) {
        console.log(res);
        renderListProduct(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    
}
fetchLishProduct();

