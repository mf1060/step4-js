import Card from './Card'

function Carousel(props){
  //The following references this source for implementing a carousel
  //https://getbootstrap.com/docs/4.0/components/carousel/

    const firstItem = {
      "id": "11",
      "title": "Lego Robot",
      "description": "A neat lego robot for your table setting!",
      "inCart": false,
      "img": "/lego_robot.jpeg",
      "altImg": "Lego Robot",
      "price": 12.99,
      "quantity": 0
    }

return(
    <>
    {/*Uses centering with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ */}
    <div class = "container col-6 col-md-4">
    <div id="product-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Card item={firstItem} class="d-block w-100"/>
    </div>
    {//Creating a carousel item for each product.
      props.allItems.map((item) => {
        return(
          <div key={item.title} class="carousel-item">
            <Card item={item} class="d-block w-100"/>
          </div>
        )

      })
    }
  </div>
</div>
    </div>
    </>
);

}

export default Carousel;