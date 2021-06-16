import './App.css';
// import TodoList from './components/TodoList';
import { useState, useEffect } from "react";
// import TodoAdd from './components/TodoAdd';
import Routers from './routers';
import ProductApi from './api/ProductApi';
import CategoryAPI from './api/CategoryAPI';
import NewApi from './api/NewApi';
import { useLocation } from 'react-router-dom';



function App() {

  // product 
  const [products, setProducts] = useState([])
  const onHandleAdd = async (todo) => {
    try {
      let response = await fetch(`http://localhost:3001/todos/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      let data = await response.json();
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log(error);
    }
  }
  const onAddProduct = async (data) => {
    try {
      const { data: newProduct } = await ProductApi.add(data);
      console.log(newProduct);
      setProducts([
        ...products,
        (newProduct.data)
      ])
    } catch (error) {
      console.log(error);
    }
  }
  const onHandleRemove = async (id) => {
    try {
      // fetch(`http://localhost:4000/api/product/${id}`, {
      //   method: "DELETE"
      // });
      await ProductApi.remove(id)
      const newProductss = products.filter(item => item._id !== id);
      setProducts(newProductss)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const listProduct = async () => {
      try {
        const { data: products } = await ProductApi.getAll();
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    }
    listProduct();
  }, [])
  const onEditProduct = async (x) => {
    try {
      const { data } = await ProductApi.update(x._id, x);
      //reRender
      const newProduct = products.map(product => (product._id === data._id ? data : product));
      setProducts(newProduct)

    } catch (error) {
      console.log(error);
    }
  }
  // end product

  // category 
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const listCategory = async () => {
      try {
        const { data: categories } = await CategoryAPI.getAll();
        setCategories(categories.data);
      } catch (error) {
        console.log(error);
      }
    }
    listCategory();
  }, []);
  const onAddCategory = async (data) => {

    console.log(data);

    try {
      const { data: category } = await CategoryAPI.add(data);
      const newCategory = category.data;
      setCategories([
        ...categories,
        newCategory
      ])
    } catch (error) {
      console.log(error);
    }
  }
  const onRemoveCate = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newCate = categories.filter(x => x._id !== id);
      setCategories(newCate);

    } catch (error) {
      console.log(error);
    }
  }
  const onEditCate = async (category) => {
    try {
      const { data } = await CategoryAPI.update(category._id, category);
      //reRender
      const newCategory = categories.map(category => (category._id === data._id ? data : category));
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    }
  }
  // end cate 

  // homepage 
  const [cateMens, setCateMens] = useState([]);
  useEffect(() => {
    const listCateMens = async () => {
      const { data: cateMen } = await ProductApi.getMan();
      setCateMens(cateMen.data);
    }
    listCateMens()
  }, []);

  const [cateWomans, setCateWomans] = useState([]);
  useEffect(() => {
    const listCateWomans = async () => {
      const { data: cateWoman } = await ProductApi.getWoman();
      setCateWomans(cateWoman.data);
    }
    listCateWomans()
  }, []);
  // end homepage 

  // news 
  const [listNews, setListNews] = useState();
  useEffect(() => {
    const listNews = async () => {
      const { data } = await NewApi.getAll();
      setListNews(data.data)
    }
    listNews();
  }, [])
  // end news 

  //cart
  const [countCart, setCountCart] = useState(0);
  const onUpdateCart = (data) => {
    setCountCart(data)
  }

  const onCountCart = (data) => {
    setCountCart(data)
  }
  // end cart 

  return (
    <div >
      <Routers
        products={products}
        onRemove={onHandleRemove}
        onAddProduct={onAddProduct}
        onEditProduct={onEditProduct}

        categories={categories}
        onAddCategory={onAddCategory}
        onRemoveCate={onRemoveCate}
        onEditCate={onEditCate}


        cateWomans={cateWomans}
        cateMens={cateMens}

        listNews={listNews}

        onUpdateCart={onUpdateCart}
        countCart={countCart}

        onCountCart={onCountCart}

      ></Routers>
    </div>
  );
}

export default App;
