import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Rootlayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductdetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route
//       path="/"
//       element={<HomePage />}
//     />
//     <Route
//       path="/products"
//       element={<ProductsPage />}
//     />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage />, errorElement: <ProductsPage /> },
      {path: 'products/:productId', element: <ProductdetailPage/>}
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//npm install react-router-dom



//memo1
//absolute pass
//他のファイルを import してくる際に、指定されたデレクトリを起点にしてパスを書く

//relative pass
//自分がいるディレクトリを起点にしてパスを書く
