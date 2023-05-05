import { Link, useParams } from "react-router-dom";

function ProductdetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link
          to=".."
          relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductdetailPage;

//memo1
//The component then renders a simple UI with the product details and a back button.
//The Link component from "react-router-dom" is used to create a link to the previous page,
//which is specified by the to prop with the value of ".." (indicating the parent URL).
//The relative prop is set to "path" to specify that the link should be relative to the current URL's path.
