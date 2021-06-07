import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import HomePage from "./page/home";
import AboutPage from "./page/about";
import AddTodoPage from "./page/admin/add";
import LayoutWebsite from "./layouts/website";
import LayoutAdmin from "./layouts/admin";
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ProductsAdmin from './page/admin/products/products';
import Dashboard from "./page/admin/dashboard";
import CategoryAdmin from "./page/admin/categorys";
import AddCategoryAdmin from "./page/admin/categorys/AddCategoryAdmin";
import UpdateCateAdmin from "./page/admin/categorys/UpdateCateAdmin";
import News from "./components/News";
import Contact from "./components/Contact";
import AddProductAdmin from "./page/admin/products/AddProductAdmin";
import UpdateProductAdmin from "./page/admin/products/UpdateProductAdmin";
import SignUp from "./page/user/SignUp";
import SignIn from "./page/user/SignIn";
import CatePage from "./components/CatePage";
import Profile from "./page/user/Profile";

const Routers = (props) => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/admin/:path" >
                        <LayoutAdmin>
                            <Switch>
                                <Route path="/admin/dashboard" >
                                    <Dashboard />
                                </Route>
                                <Route path="/admin/user" >
                                    User Manager
                                </Route>
                                <Route path='/admin/add'  >
                                    <AddTodoPage  {...props} />
                                </Route>
                                <Route path='/admin/products'>
                                    <ProductsAdmin {...props} />
                                </Route>
                                <Route path='/admin/addproduct'>
                                    <AddProductAdmin {...props} />
                                </Route>
                                <Route path="/admin/updateproduct/:id">
                                    <UpdateProductAdmin {...props} />
                                </Route>

                                <Route path='/admin/categorys' >
                                    <CategoryAdmin {...props} />
                                </Route>
                                <Route path='/admin/addcategory'>
                                    <AddCategoryAdmin {...props} />
                                </Route>
                                <Route path='/admin/updatecategory/:id'>
                                    {/* {Object.keys(props.detailCate).length > 0 ? <UpdateCateAdmin {...props} /> : ''} */}
                                    <UpdateCateAdmin {...props} />
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite>
                            <Switch>
                                <Route exact path="/" >
                                    <HomePage {...props} />
                                </Route>
                                <Route path='/about' >
                                    <AboutPage />
                                </Route>
                                <Route exact path='/product' >
                                    <ProductPage {...props} />
                                </Route>
                                <Route exact path='/product/:id' >
                                    <ProductDetailPage {...props} />
                                </Route>
                                <Route path="/category/:id" >
                                    <CatePage {...props} />
                                </Route>
                                <Route path='/news'>
                                    <News {...props} />
                                </Route>
                                <Route path="/contact" >
                                    <Contact />
                                </Route>
                                <Route path="/signup" >
                                    <SignUp />
                                </Route>
                                <Route path="/signin" >
                                    <SignIn />
                                </Route>
                                <Route to="/profile">
                                    <Profile />
                                </Route>

                                <Route path="*" >
                                    Not Found Page
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routers
